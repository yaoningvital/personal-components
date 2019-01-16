<template>
  <div class="home">
    <Count :value="value" @subtract="subtract" @add="add"></Count>
  </div>
</template>

<script>
  import Count from '@/components/Count'

  export default {
    name: "home",
    components: {
      Count
    },
    data () {
      return {
        value: 1
      }
    },
    methods: {
      subtract () {
        this.value = this.value - 1
      },
      add () {
        this.value = this.value + 1
      }
    }
  }
</script>

<style scoped>

</style>
