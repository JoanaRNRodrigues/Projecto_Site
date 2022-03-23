<script>
    export default{
        props: {
            error: String,
        },
    }
</script>

<template>
  <div class="error">
    <h1>An error has occured!</h1>
    <h2>{{ error }}</h2>
  </div>
</template>
