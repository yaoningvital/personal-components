<template>
  <div class="count">
    <span @click="subtract">-</span>
    <span>{{value}}</span>
    <span @click="add">+</span>
  </div>
</template>

<script>
  export default {
    name: "Count",
    props: ['value'],
    methods: {
      subtract () {
        this.$emit('subtract')
      },
      add () {
        this.$emit('add')
      }
    }
  }
</script>

<style scoped>
  .count {

  }

  .count span {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: darkgrey;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
  }
</style>
