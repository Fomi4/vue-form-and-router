<template lang="html">
  <div>
    <p>User: #{{ id }}</p>
    <p>{{ username }} ({{ name }})</p>
    <p>{{ phone }}</p>

  </div>

</template>

<script>

export default {
  name: 'User',
  props: {
    id: Number,
    username: String,
    name: String,
    email: String,
    phone: String,
  }
}
</script>

<style lang="css" scoped>

</style>