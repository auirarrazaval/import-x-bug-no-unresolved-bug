import importXPlugin from './configs/plugins/importX.js';
import vuePlugin from './configs/plugins/vue.js';
import tailwindPlugin from './configs/plugins/tailwind.js';
import baseTsConfig from './configs/base.js';
import tsConfig from './configs/vanillaTs.js';
import vueConfig from './configs/vue.js';

const configs = {
  plugins: {
    importX: importXPlugin,
    vue: vuePlugin,
    tailwind: tailwindPlugin,
  },
  base: baseTsConfig,
  ts: tsConfig,
  vue: vueConfig,
};

export default {
  configs,
};
