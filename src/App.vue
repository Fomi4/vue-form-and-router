<template lang="html">
  <div id="app">
    <Header />
    <!-- <DefinitionList /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

// import DefinitionList from './pages/DefinitionList'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    // DefinitionList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
