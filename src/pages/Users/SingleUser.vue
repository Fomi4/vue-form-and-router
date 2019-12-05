<template lang="html">
  <div>
    <User 
      :id="id"
      :name="name"
      :username="username"
      :email="email"
      :phone="phone"
      v-if="id"
    />
    <NotFound msg="User Not Found" v-else />

  </div>

</template>

<script>
import User from './User';
import NotFound from '../NotFound'

export default {
  name: 'SingleUser',
  components: {
    User,
    NotFound
  },
  data: () => ({
    id: null,
    name: '',
    username: '',
    email: '',
    phone: ''
  }),
  mounted() {
    console.log(this.$route.params.id);

    fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
      .then(response => response.json())
      .then(response => {
        this.id = response.id;
        this.name = response.name;
        this.username = response.username;
        this.email = response.email;
        this.phone = response.phone;
      })

  }
}
</script>

<style lang="css" scoped>

</style>