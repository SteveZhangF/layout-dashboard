<template>
<div :id="layout.id" style=" touch-action: none; user-select: none;backgroup-color:blue">
  <button @click="edit">Edit</button>
    <div class="row justify-center">
  <component
    :id="c.id"
    v-for="c in layout.children"
    :is="c.name"
    :key="c.id"
    :class="c.class"
    :layout="c"
    :style="c.style"
    />
    </div>
</div>
</template>
<script>

export default {
  name: 'NormalContainer',
  components: {
  },
  data () {
    return {
      dragingover: false
    }
  },
  props: {
    layout: {
      type: Object,
      default: () => { return {} }
    }
  },
  methods: {
    edit () {
      this.layout.edit()
    }
  },
  mounted () {
    this.layout.element = this.$el
  }
}

</script>
<style scoped>
</style>
