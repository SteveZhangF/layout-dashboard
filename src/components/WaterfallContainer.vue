<template>
      <grid-layout
            :layout.sync="layout.children"
            :col-num="5"
            :row-height="layout.rowHeight"
            :is-draggable="true"
            :is-resizable="false"
            :is-mirrored="false"
            :auto-size="true"
            :vertical-compact="true"
            :margin="[10, 10]"
            @layout-ready="()=>{layout.calcSize({width:0,height:0})}"
    >
        <grid-item v-for="child in layout.children"
                   :x="child.x"
                   :y="child.y"
                   :w="child.w"
                   :h="child.h"
                   :i="child.i"
                   :key="child.i"
                   >
            <grid-item-wrapper :recalc="recalc" :layout="child"/>
        </grid-item>
    </grid-layout>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import GridItemWrapper from 'components/GridItemWrapper'
export default {
  name: 'WaterfallContainer',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    GridItemWrapper: GridItemWrapper
  },
  data () {
    return {
      recalc: false
    }
  },
  props: {
    layout: {
      type: Object,
      default: null
    }
  },
  methods: {
  }
}
</script>
