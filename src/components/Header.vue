<template lang="html">
  <header>
    <p>Welcome to the application</p>
    <router-link :to="{ name: 'Home', params: {} }">Home</router-link><br>
    <router-link :to="{ name: 'Search', params: {} }">Search</router-link><br>
    <router-link :to="{ name: 'Users', params: {} }">Users</router-link><br>
    <router-link :to="{ name: 'About', params: {} }">About</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>

</style>