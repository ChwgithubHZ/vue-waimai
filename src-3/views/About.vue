<template>
    <div>
      <ul>
        <li><router-link to="/about/about-1">About-1</router-link></li>
        <li><router-link to="/about/about-2">About-2</router-link></li>
      </ul>
      <ul>
        <li><router-view></router-view></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

</style>
