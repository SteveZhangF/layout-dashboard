const Models = require('./layout/index.js')
import NormalContainer from './NormalContainer.vue'
import Screener from './Screener.vue'
import Article from './Article.vue'
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';
const components = {
  NormalContainer: NormalContainer,
  Screener: Screener,
  Article: Article
}
function install (Vue) {
  if (install.installed) return
  install.installed = true
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })
}

export { Models, install }
