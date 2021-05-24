import { Plot } from '../../core/plot';
import { deepAssign } from '../../utils';
import { ViolinOptions } from './types';

export const X_FIELD = 'x';
export const SERIES_FIELD = 'series';
export const VIOLIN_Y_FIELD = 'violinY';
export const VIOLIN_SIZE_FIELD = 'violinSize';
export const MIN_MAX_FIELD = 'minMax';
export const QUANTILE_FIELD = 'quantile';
export const MEDIAN_FIELD = 'median';

export const VIOLIN_VIEW_ID = 'violin_view';
export const MIN_MAX_VIEW_ID = 'min_max_view';
export const QUANTILE_VIEW_ID = 'quantile_view';
export const MEDIAN_VIEW_ID = 'median_view';

export const DEFAULT_OPTIONS = deepAssign({}, Plot.getDefaultOptions(), {
  // 默认核函数
  kde: {
    type: 'triangular',
    sampleSize: 32,
    width: 3,
  },

  // 默认平滑
  smooth: true,

  // 默认显示箱线图
  box: {
    textMap: {
      max: 'Max',
      min: 'Min',
      q1: 'Q1',
      q3: 'Q3',
      median: 'Median',
    },
  },

  // 默认小提琴轮廓样式
  violinStyle: {
    lineWidth: 1,
    fillOpacity: 0.3,
    strokeOpacity: 0.75,
  },

  // 默认区域交互
  // interactions: [{ type: 'active-region' }],
} as Partial<ViolinOptions>);
