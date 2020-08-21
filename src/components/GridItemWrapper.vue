<template>
     <q-card
     :style="[layout?{ height:  layout.height + 'px' }:{}]"
    >
        <component ref="child" :is="layout.component" v-resize="onResize"/>
    </q-card>
</template>

<script>
import TabContainer from 'components/TabContainer'

export default {
  components: {
    TabContainer: TabContainer
  },
  name: 'GridItemWrapper',
  data: function () {
    return {
    }
  },
  props: {
    layout: {
      type: Object,
      default: null
    },
    recalc: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    recalc () {
      const height = this.$refs.child.$el.clientHeight
      this.onResize({ height: height })
    }
  },
  methods: {
    onResize (size) {
      this.layout.calcSize(size)
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
