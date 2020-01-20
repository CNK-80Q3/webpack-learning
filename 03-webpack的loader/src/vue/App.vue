<template>
  <div>
    <h1>{{name}}</h1>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>....</h2>
    <Cpn @sendName="getName"/>
  </div>
</template>

<script>
import Cpn from './Cpn';

export default {
  name: "App",
  data() {
    return {
      name: 'App',
      message: "Hello Webpack!!!"
    };
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    },
    getName(name) {
      console.log(name);
    }
  },
  components: {
    Cpn
  }
};
</script>

<style>
</style>