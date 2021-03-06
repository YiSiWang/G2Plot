import { deepMix } from '@antv/util';
import { WordCloud } from '../../../../src';
import { CountryEconomy } from '../../../data/country-economy';
import { createDiv } from '../../../utils/dom';

describe('word-cloud', () => {
  const options = {
    width: 400,
    height: 300,
    data: CountryEconomy,
    wordField: 'Country',
    weightField: 'GDP',
  };

  it('x*y', () => {
    const cloud = new WordCloud(createDiv('x*y'), options);
    cloud.render();

    const geometry = cloud.chart.geometries[0];
    const positionFields = geometry.getAttribute('position').getFields();

    // 类型
    expect(geometry.type).toBe('point');
    // x & y
    expect(positionFields).toHaveLength(2);
    // 数据经过 DataSet 处理过，这里是处理之后的数据中的 x 和 y 字段
    expect(positionFields[0]).toBe('x');
    expect(positionFields[1]).toBe('y');
  });

  it('imageMask', () => {
    const options1 = deepMix({}, options, {
      imageMask: new Image(),
    });
    const options2 = deepMix({}, options, {
      imageMask: 'ssss', // 无效值
    });
    const cloud1 = new WordCloud(createDiv('x*y'), options1);
    const cloud2 = new WordCloud(createDiv('x*y'), options2);
    expect(() => {
      cloud1.render();
      cloud2.render();
    }).not.toThrow();
  });
});
