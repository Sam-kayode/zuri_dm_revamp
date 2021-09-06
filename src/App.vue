<template>
  <div id="app">
    <input-box/>
    <searchbar></searchbar>
    <messageThread></messageThread>
    
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
        <router-view />
    </div>
</template>

<script>
import searchbar from './components/searchbar.vue'
import messageThread from './components/messageThread.vue'
export default {
  name: 'app',
  components: {
    searchbar,
    messageThread
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
*,
*:before,
*:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}
</style>
