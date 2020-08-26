<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-11">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {

  }
}
</script>
