<!--HTML e CSS Retirado do site: https://codepen.io/joanarnrodrigues/pen/vYpxGJM-->
<!--Conteudo Retirado do site: https://www.birdsandblooms.com/  e  https://www.gardendesign.com/-->
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

  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,300");

  /* Base Styles */
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.5em;
    line-height: 1.6;
    font-weight: 400;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    color: #222;
  }


  /* Grid */  
  .container {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .column, .columns {
    width: 100%;
    float: left;
    box-sizing: border-box;
  }


  /* For devices larger than 400px */
  @media (min-width: 400px) {
    .container {
      width: 85%;
      padding: 0;
    }
  }


  /* For devices larger than 550px */
  @media (min-width: 550px) {
    .container {
      width: 80%;
    }
  }
</style>
