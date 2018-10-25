<template>
    <div>
    <ul>
      <li v-for="(a,index) in about2" :key="index">{{a}}</li>
    </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      about2: [
        'about2-1',
        'about2-2'
      ]
    }
  }
}
</script>

<style scoped>

</style>
