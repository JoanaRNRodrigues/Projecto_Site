<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user') || null)
    }
  },
  watch: {
    user: {
      deep: true
    }
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
       localStorage.removeItem('user');
      }).catch((error) => {
        console.error(error.message);
      });
    },
    goToError() {
      this.$router.push({ name: 'error', params: {error: 'test error' }})
    }
  },
  mounted() {
  }
}

</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link v-if="user" to="/bugsentry">Data Entry  |</router-link>
    <router-link to="/" @click.prevent="goToError" >Test error</router-link>
    <div style="float:right">
      <router-link v-if="!user" to="/signin">Sign In |</router-link>
      <router-link v-if="user" to="/" @click.prevent="logout" >Sign Out |</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </nav>
  <div class="page">
    <router-view/>
  </div>
  <footer/>
</template>



<style>
.page {
  padding: 20px;
  height: calc(100vh - 180px);
  position: relative;
}

.gridrow {
  width:100%;
  display: flex;
  padding: 10px 0;

}

label {
  font-weight: bold;
  padding: 5px 10px;
  float:right;
}

input {
  float: left;
}

.gridcolumn {
  min-width:25%;
}

body {
  margin: 0px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

nav {
  padding: 30px;
  box-shadow: 0px 0px 5px 0px grey;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  position: fixed;
  left: 0; 
  bottom: 0;
  width: 100%;
  padding: 30px;
  box-shadow: 0px 0px 5px 0px grey;
  background-color:white;
}

.styled-button {
    min-width: 100px;
    min-height: 40px;
    border-radius: 20px;
    background-color: white;
    font-weight: bold;
    margin:20px;
}
.styled-button:hover {
    box-shadow: 0px 0px 5px 0px grey;
}
.styled-button:focus {
    background-color: 	#DCDCDC;
}
</style>
