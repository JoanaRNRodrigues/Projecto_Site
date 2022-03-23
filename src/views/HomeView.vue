
<script>

export default {
  name: 'HomeView',
  data: () => ({
    bugs: JSON.parse(localStorage.getItem('bugs_registry') || '[]')
  }),
  watch: {
    bugs: {
      deep: true
    }
  },
}
</script>

<template>
    <section>
        <h1>Bugs Registry Home Page </h1>
    </section>
    <h2 v-if="error">{{error}}</h2>
    <section v-if="bugs && bugs.length" style="display:flex; flex-wrap: wrap;">
        <div class="mini-card" v-for="bug of bugs" :key="bug.name">
            <p><b>Scientific Name: </b>{{ bug.latinName }}</p>
            <p><b>Name: </b>{{ bug.name }}</p>
            <p><b>Taste: </b> {{ bug.taste }}% Awful</p>
            <p v-if="bug.flight">It flies!</p>
            <p v-if="bug.swim">It swims!</p>
        </div>
    </section>
</template>


<style>
  .mini-card {
        box-shadow: 0px 0px 5px 0px grey;
        margin: 10px;
        border-radius: 20px;
        padding: 10px;
        font-size: small;
    }
</style>
