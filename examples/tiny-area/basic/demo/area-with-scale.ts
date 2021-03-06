import { TinyArea } from '@antv/g2plot';

const tinyArea = new TinyArea('container', {
  height: 60,
  width: 300,
  autoFit: false,
  data: new Array(100).fill(0).map(() => Math.random() * 100),
  smooth: true,
  tooltip: {
    showCrosshairs: true,
    showMarkers: true,
  },
  meta: {
    y: {
      max: 150,
      min: -50,
    },
  },
});

tinyArea.render();
