<script setup>
    import InputComponent from './components/InputComponent';
</script>

<script>

export default {
  // app initial state
  data: () => ({
    bugs: JSON.parse(localStorage.getItem('bugs_registry') || '[]'),
    name: '',
    latinName: '',
    flight: false,
    swim: false,
    taste: 0,
    error: ''
  }),

  // watch todos change for localStorage persistence
  watch: {
    bugs: {
      handler(bugs) {
        localStorage.setItem('bugs_registry', JSON.stringify(bugs))
      },
      deep: true
    }
  },
  methods: {
    addBug() {
        this.error = '';
        if(this.name && this.latinName){
            this.bugs.push({
                name: this.name,
                latinName: this.latinName,
                flight: this.flies,
                swim: this.swim,
                taste: this.taste,
            });
            this.name = '';
            this.latinName = '';
            this.flies = false;
            this.swim = false;
            this.taste = 0;
        }
        else {
            this.error = 'Information missing!';
        }
    },
    removeBug(bug) {
      this.bugs.splice(bug, 1)
    },
  }
}
</script>

<template>
    <section>
        <h1>Bugs Registry Data Entry </h1>
    </section>
    <section style="display:flex" class="card">
    <div style="width:50%">
        <InputComponent name="Scientific Name" id="latinName" type="text" v-model:value="latinName" />
        <InputComponent name="Name" id="name" type="text" v-model:value="name" />
        <InputComponent name="Taste" id="taste" type="range" v-model:value="taste" />
    </div>
    <div style="width:50%">
        <InputComponent name="Does it fly?" id="flight" type="checkbox" v-model:value="flight" />
        <InputComponent name="Does it swim?" id="swim" type="checkbox" v-model:value="swim" />
    </div>
    </section>
    <button class="styled-button" @click="addBug">Register bug</button>
    <h2 v-if="error">{{error}}</h2>
    <section v-if="bugs && bugs.length" style="display:flex; flex-wrap: wrap;">
        <div class="mini-card" v-for="(bug, index) in bugs" :key="bug.name">
            <p><b>Scientific Name: </b>{{ bug.latinName }}</p>
            <p><b>Name: </b>{{ bug.name }}</p>
            <button class="styled-button" @click="removeBug(index)">Remove Bug</button>
        </div>
    </section>
</template>

<style>
    .card {
        box-shadow: 0px 0px 5px 0px grey;
        margin: 0px 10vw;
    }
</style>