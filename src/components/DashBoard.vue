<template>
<div style="height:100%">
  <component
    :id="layoutNode.id"
    :is="layoutNode.name"
    v-if="layoutNode"
    :layout="layoutNode"
  />
</div>
</template>
<script>
import { factory } from './layout/index.js'
export default {
  name: 'index',
  components: {
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
      layoutNode: null
    }
  },
  created () {
  },
  mounted () {
    this.layoutNode = factory.create(this.layout)
    factory.root = this.layoutNode
  }
}
</script>
