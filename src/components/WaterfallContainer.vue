<template>
      <grid-layout
            :layout.sync="data.children"
            :col-num="5"
            :row-height="itemHeight"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :auto-size="true"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >
        <grid-item v-for="item in data.children"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i"
                    @resized="onGridItemResized"
                   >
                   <component
                    :style="{ height:item.height?item.height+ 'px':'' }"
                    :is="item.component"
                    :data="item"
                    @resize="(size)=>{resizeNode(item,size)}"
                    >
                     <!-- <q-resize-observer @resize="(size)=>{resizeNode(item,size)}" /> -->
                  </component>
        </grid-item>
    </grid-layout>
</template>

<script>
import Container from 'components/Container'
import VueGridLayout from 'vue-grid-layout'
import ScreenerContainer from 'components/ScreenerContainer'

export default {
  name: 'WaterfallContainer',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Container: Container,
    ScreenerContainer: ScreenerContainer
  },
  data () {
    return {
      itemHeight: 50
    }
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    resizeNode (node, size) {
      if (size.height === 0) {
        return
      }

      this.data.children.forEach((element, idx) => {
        if (element.i === node.i) {
          const height = size.height - size.height % this.itemHeight
          this.$set(this.data.children[idx], 'height', height)
          this.$set(this.data.children[idx], 'h', height / this.itemHeight)
        }
      })
    },
    onGridItemResized (i, newX, newY, newHPx, newWPx) {
      this.data.children.forEach(child => {
        if (child.i === i) {
          this.$set(child, 'height', newHPx)
        }
      })
    }
  }
}
</script>
