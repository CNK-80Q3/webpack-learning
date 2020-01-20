<template>
  <div>
    <h1>Cpn组件</h1>
    <div>{{name}}</div>
    <button @click="btnClick">SendName</button>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data() {
    return {
      name: '这是Cpn.name...'
    }
  },
  methods: {
    btnClick(name) {
      this.$emit('sendName', this.name);
    }
  }
}
</script>
