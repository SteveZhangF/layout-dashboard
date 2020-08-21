<template>
  <q-page class="">
    <button @click="save"/>
    <dash-board :layout="layoutNode"></dash-board>
  </q-page>
</template>

<script>
import DashBoard from 'components/DashBoard'
import { factory } from 'src/components/layout'

export default {
  name: 'PageIndex',
  components: {
    DashBoard
  },
  data () {
    return {
      layout: {
        component: 'WaterfallContainer',
        x: 0,
        y: 0,
        rowHeight: 90,
        children: [
          {
            component: 'TabContainer',
            i: '1',
            w: 2,
            x: 0,
            y: 0,
            h: 0
          },
          {
            component: 'NormalContainer',
            i: '2',
            w: 1,
            x: 0,
            y: 0,
            h: 0
          },
          {
            component: 'NormalContainer',
            i: '3',
            w: 3,
            x: 0,
            y: 0,
            h: 0
          }
        ]
      },
      layoutNode: factory.create({ component: 'WaterfallContainer' })
    }
  },
  mounted () {
    console.log(this.layoutNode)
    this.layoutNode.setLayout(this.layout)
  },
  methods: {
    save () {
      console.log(this.layoutNode.toJson())
    }
  }

}
</script>
