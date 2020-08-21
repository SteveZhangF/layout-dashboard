const Models = require('./layout/index.js')
import GridItemWrapper from './GridItemWrapper.vue'
import NormalContainer from './NormalContainer.vue'
import TabContainer from './TabContainer.vue'
import WaterfallContainer from './WaterfallContainer.vue'
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const components = {
  GridItemWrapper: GridItemWrapper,
  NormalContainer: NormalContainer,
  TabContainer: TabContainer,
  WaterfallContainer: WaterfallContainer
}

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })
}

export { Models, install }
