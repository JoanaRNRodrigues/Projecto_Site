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
    <router-link to="/about">Pollinator Garden</router-link> |    
    <router-link v-if="user" to="/bugslist">Plant List  |</router-link>
    <router-link v-if="user" to="/bugsentry">Data Entry  |</router-link>
    <router-link to="/contact">Contact Us</router-link> | 
    <div style="float:right">
      <router-link v-if="!user" to="/signin">Sign In |</router-link>
      <router-link v-if="user" to="/" @click.prevent="logout" >Sign Out |</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </nav>
  <header>
   <section>
   <br>
    <h1>Birds, Bugs and Blooms </h1>
  </section>
  </header>
  <div class="page">
    <router-view/>
  </div>
  <footer>     
    <div class="container">
      <div class="nine columns">
        <p>Created by Birds, Bugs and Blooms.</p>
      </div>
      <div class="three columns"> <span class="typcn typcn-social-facebook-circular socialIcons"></span> <span class="typcn typcn-social-instagram-circular socialIcons"></span> <span class="typcn typcn-social-google-plus-circular socialIcons"></span> <span class="typcn typcn-social-linkedin-circular socialIcons"></span> </div>
    </div>
  </footer>
</template>



<style>
header {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
 width: 100%%;
	height: 20vh;
	background: #e55d87;
	background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
	background: -webkit-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
	background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e55d87', endColorstr='#5fc3e4', GradientType=1 );
}
.title {
	-webkit-align-self: center;
	-ms-flex-item-align: center;
	align-self: center;
	padding: 2rem;
	max-width: 960px;
	text-align: center;
}
.title .smallsep {
	background: #fff;
	height: 2px;
	width: 70px;
	margin: auto;
	margin-top: 30px;
	margin-bottom: 30px;
}
.title h1 {
	font-size: 80px;
	font-weight: 300;
	text-transform: uppercase;
	line-height: 0.85;
	margin-bottom: 28px;
	margin: 0;
	padding: 0;
	color: #FFFFFF;
}
.title h2 {
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 5px;
	margin-top: 50px;
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
    color: rgb(235, 124, 166);
  }


  /* Footer Section */
  footer {
    min-height: 120px;
    padding: 40px 0 40px 0;
    background: #e55d87;
    background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);       
    background: -webkit-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);
    background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e55d87', endColorstr='#5fc3e4', GradientType=1 );
    box-sizing: border-box;
  }
  footer p {
    color: #FFFFFF;
    margin: 20px 0 0 0;
  }
  .socialIcons {
    font-size: 34px;
    color: rgba(255, 255, 255, 0.7);
  }
  /* Lists */
  ul {
    list-style: circle inside;
  }
  ol {
    list-style: decimal inside;
  }
  ol, ul {
    padding-left: 0;
    margin-top: 0;
  }
  ul ul, ul ol, ol ol, ol ul {
    margin: 1.5rem 0 1.5rem 3rem;
    font-size: 90%;
  }
  li {
    margin-bottom: 1rem;
  }
  /* Spacing */
  button, .button {
    margin-bottom: 1rem;
  }
  input, textarea, select, fieldset {
    margin-bottom: 1.5rem;
  }
  pre, blockquote, dl, figure, table, p, ul, ol, form {
    margin-bottom: 2.5rem;
  }
</style>
