const { install } = require('components/index.js')
import { VueMasonryPlugin } from 'vue-masonry'

// or using CJS
// const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin

export default async ({ Vue }) => {
  Vue.use(install)
  Vue.use(VueMasonryPlugin)
}
