const { install } = require('components/index.js')
console.log(install)
export default async ({ Vue }) => {
  Vue.use(install)
}
