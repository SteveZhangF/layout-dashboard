<template>
<div>
  <component :is="layout.component" :layout="layout"/>
</div>
</template>
<script>
import { factory } from './layout/index.js'
import WaterfallContainer from 'components/WaterfallContainer'
export default {
  name: 'index',
  components: {
    WaterfallContainer: WaterfallContainer
  },

  props: {
    layout: {
      type: Object
    },
    root: {
      type: String,
      default: 'WaterfallContainer'
    }
  },

  data () {
    return {
      layoutNode: factory.create({ component: this.root })
    }
  },
  created () {
  },
  mounted () {
    this.layoutNode.setLayout(this.layout)
  }
}
</script>
