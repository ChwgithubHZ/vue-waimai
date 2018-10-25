<template>
    <div>
         <ul>
           <li v-for="(a,index) in about" :key="index">{{a}}</li>
         </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      about: [
        'about-1',
        'about-2',
        'about-3'
      ]
    }
  }
}
</script>

<style scoped>

</style>
