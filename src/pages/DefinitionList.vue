<template lang="html">
  <div>
    <form>
      Definition:
      <input v-model="definition" type="text" name="definition">
      <button @click="searchDefinition" type="button" name="button">Search</button>

      <!-- <p>{{ definition }}</p> -->
    </form>
    <div v-for="def in definitions" :key="def.definition">
      <Definition
        :title="def.title"
        :description="def.description"
        :author="def.author"
        :thumbsUp="def.thumbsUp"
        :thumbsDown="def.thumbsDown"
      />

    </div>
  </div>
  
</template>

<script>
import Definition from './DefinitionList/Definition';
// http://api.urbandictionary.com/v0/define?term=test
export default {
  name: 'DefinitionList',
  components: {
    Definition
  },
  data: () => ({
    definition: '',
    definitions: []

  }),
  methods: {
    searchDefinition() {
      // console.log(this.definition);
      fetch(`http://api.urbandictionary.com/v0/define?term=${this.definition}`)
        .then(response => response.json())
        // .then(response => console.log(response));
        .then(response => response.list.forEach(def => {
          this.definitions.push({
            title: def.word,
            description: def.definition,
            author: def.author,
            thumbsUp: def.thumbs_up,
            thumbsDown: def.thumbs_down
          })
        }));
    }
  }
}
</script>

<style lang="css" scoped>

</style>