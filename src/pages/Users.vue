<template lang="html">
  <div>
    <div class="users" v-for="user in users" :key="user.id">
      <User
        :id="user.id"
        :name="user.name"
        :username="user.username"
        :email="user.email"
        :phone="user.phone"
      />

      <router-link :to="{name: 'SingleUser', params: { id: user.id }}">To User</router-link>

    </div>
  </div>

</template>

<script>
import User from './Users/User'

export default {
  name: 'Users',
  components: {
    User
  },
  data: () => ({
    users: []
  }),
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(response => {
        // console.log(response);
        response.forEach(u => {
          this.users.push({
            id: u.id,
            username: u.username,
            name: u.name,
            email: u.email,
            phone: u.phone
          })
        });
      })
  }
}
</script>

<style lang="css" scoped>

.users {
  border: 2px solid green;
  margin-bottom: -2px
}

</style>