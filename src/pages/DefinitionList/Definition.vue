<template lang="html">
  <div class="container">
    <h3>{{ title }}</h3>
    <div>
      <p>{{ description }}</p>
      <p>by {{ author }}</p>
      <p>{{ votes }}</p>
      <button @click="thumbsUp += 1" type="button" name="like">Like</button>
      <button @click="thumbsDown += 1" type="button" name="dislike">Dislike</button>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Definition',
  props: {
    title: String,
    description: String,
    author: String,
    thumbsUp: Number,
    thumbsDown: Number
  },
  computed: {
    votes() {
      return `UP: ${this.thumbsUp} | DOWN: ${this.thumbsDown}`
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  border: 2px solid green;
}
</style>