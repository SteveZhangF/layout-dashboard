<template>
  <q-page  class="page-width-1440 bg-white">
    <dash-board :layout="layout"></dash-board>
  </q-page>
</template>

<script>
import DashBoard from 'components/DashBoard'

export default {
  name: 'PageIndex',
  components: {
    DashBoard
  },
  data () {
    return {
      layout: {
        id: '0',
        size: {
          sm: 12,
          md: 12,
          lg: 12,
          xm: 12
        },
        name: 'NormalContainer',
        children: [
          {
            id: '1',
            name: 'NormalContainer',
            size: {
              xs: 12,
              sm: 4,
              md: 6,
              lg: 6
            },
            children: [
              {
                id: '11',
                name: 'Screener',
                size: {
                  xs: 12,
                  sm: 4,
                  md: 3,
                  lg: 3
                }
              },
              {
                id: '12',
                name: 'Article',
                size: {
                  xs: 12,
                  sm: 4,
                  md: 3,
                  lg: 3
                }
              },
              {
                id: '13',
                name: 'Screener',
                size: {
                  xs: 12,
                  sm: 4,
                  md: 3,
                  lg: 3
                }
              },
              {
                id: '14',
                name: 'Screener',
                size: {
                  xs: 12,
                  sm: 4,
                  md: 3,
                  lg: 3
                }
              }
            ]
          },
          {
            id: '2',
            name: 'NormalContainer',
            size: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3
            },
            children: [
              {
                id: '21',
                name: 'Article',
                size: {
                  xs: 12,
                  sm: 4,
                  md: 3,
                  lg: 3
                }
              },
              {
                id: '22',
                name: 'Article',
                size: {
                  xs: 12,
                  sm: 4,
                  md: 3,
                  lg: 3
                }
              }
            ]
          },
          {
            id: '3',
            name: 'NormalContainer',
            size: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3
            },
            children: [
              {
                id: '31',
                name: 'Screener',
                size: {
                  xs: 12,
                  sm: 4,
                  md: 3,
                  lg: 3
                }
              },
              {
                id: '32',
                name: 'Screener',
                size: {
                  xs: 12,
                  sm: 4,
                  md: 3,
                  lg: 3
                }
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
.page-width-1200{
  width: 1200px;
  max-width: 100%;
  margin:0 auto;
}
.page-width-1600{
  width: 1600px;
  max-width: 100%;
  margin:0 auto;
}
.page-width-1440{
  width: 1440px;
  max-width: 100%;
  margin:0 auto;
  height:875px;
}
</style>
