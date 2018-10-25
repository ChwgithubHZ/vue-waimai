<template>
  <div>
    <p>点{{$store.state.count}}次，次数为{{even}}.</p>
    <button @click="a">+</button>
    <button @click="b">-</button>
    <button @click="c">奇数+</button>
    <button @click="d">1s +</button>
  </div>
</template>

<script>
export default {
  computed: {
    even () {
      return this.$store.getters.even
    }
  },
  methods: {
    a () {
      this.$store.dispatch('a')
    },
    b () {
      this.$store.dispatch('b')// 传到store 的action
    },
    c () {
      this.$store.dispatch('c')
    },
    d () {
      this.$store.dispatch('d')
    }
  }
}
</script>

<style>

</style>
