
<!--Após Sign Up é necessário fazer refresh à pagina -->

<script setup>
    import InputComponent from './components/InputComponent';
</script>

<script>
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    const auth = getAuth();

    export default {
    data() {
        return {
        email: '',
        password: '',
        error: ''
        }
    },
    methods: {
        signUp () {     //TODO O CODIGO QUE TÁ AQUI DENTRO FAZ O BINDING
            if (!this.email){
                this.error = "please type your email";
                return;
            }
            if (!this.password || this.password.length < 8){
                this.error = "please enter a password containing at least 8 characters"; 
                return;
            }
            createUserWithEmailAndPassword(auth, this.email, this.password)         
                // eslint-disable-next-line no-unused-vars
            .then((userCredential) => {
                localStorage.setItem('user', JSON.stringify( userCredential.user));
                this.$router.push('/');
            })
            .catch((error) => {
                this.error = error.message;
            });
        }
    }
}
</script>


<template>
    <form action="action_page.php" style="border:1px solid #ccc">
        <section>
            <br>
            <br>
            <h1><center>Sign Up</center></h1>
            <p><center>Please fill in this form to create an account.</center></p>
        </section>
        <section class="sign-up-card">
            <InputComponent name="Email" id="email" type="email" v-model:value="email" />
            <InputComponent name="Password" id="password" type="password" v-model:value="password" />
            <h2 v-if="error">{{error}}</h2>
            <InputComponent name="Repeat Password" id="password" type="password" v-model:value="password" />
            <h2 v-if="error">{{error}}</h2>
            <div class="checkbox">
                <label>
                <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
                </label>
            </div>
            <br>
            <br>
            <p style="margin-right: 350px">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms and Privacy</a>.</p>
        </section>
        <div>
            <button type="button" class="cancelbtn" @click="cancel">Cancel</button>
            <button type="button" class="signupbtn" @click="signUp">Sign Up</button>        
        </div>
    </form>
</template>


<style scoped>
    .sign-up-card {
        margin-left: 400px;
    }
    .checkbox {
        margin-right: 680px;
    }
    
    /* Set a style for all buttons */
    button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
    }

    button:hover {
    opacity:1;
    }

    /* Extra styles for the cancel button */
    .cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
    }

    /* Float cancel and signup buttons and add an equal width */
    .cancelbtn, .signupbtn {
    float: left;
    width: 50%;
    }
</style>
