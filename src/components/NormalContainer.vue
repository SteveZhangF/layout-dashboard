<template>
<div :id="layout.id" style=" touch-action: none; user-select: none;backgroup-color:blue;    ">
  <button @click="edit">Edit</button>
    <div class="row  ">
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
<style >
.moving{
    /* background:rgba(0,150,200,1);
    color:#fff;
    box-shadow:0 0 5px 1px rgb(200, 180, 0);
    -webkit-transform:scale(.85);
    transform:scale(.85); */
}
.in {
  background:rgba(0,150,200,1);
  color:#fff;
  box-shadow:0 0 3px 3px rgba(0,150,200,1);
   -webkit-transform:scale(.95);
  transform:scale(.95);
}
</style>
