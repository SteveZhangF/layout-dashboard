<template>
<div>
  <component :is="layout.component" :data="layout"/>
</div>
</template>
<script>
import { factory } from './layout.js'

import WaterfallContainer from './WaterfallContainer'
import Vue from 'vue'

export default {
  name: 'index',
  components: {
    WaterfallContainer: WaterfallContainer
  },
  data: function () {
    return {
      rawData: {
        name: 'dashboard',
        component: 'WaterfallContainer',
        x: 0,
        y: 0,
        children: [
          {
            name: 'container',
            component: 'ScreenerContainer',
            x: 0,
            y: 0,
            w: 2,
            h: 0,
            i: '1'
          },
          {
            name: 'container',
            component: 'ScreenerContainer',
            x: 2,
            y: 0,
            w: 2,
            h: 0,
            i: '2'
          },
          {
            name: 'container',
            component: 'ScreenerContainer',
            x: 4,
            y: 0,
            w: 1,
            h: 0,
            i: '3'
          }
        ]
      },
      layout: null
    }
  },
  created () {
    this.layout = Vue.observable(factory.create(this.rawData))
    this.layout.init()
  }
}
</script>
