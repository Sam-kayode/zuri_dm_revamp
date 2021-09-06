<template>
  <div class="home d-flex justify-content-center">
    <img alt="Vue logo" src="../assets/logo.png">
   
    <thread_calender/>
    <thread-actions></thread-actions>

  </div>
</template>

<script>
// @ is an alias to /src
import thread_calender from '@/components/threadCalender.vue'
import threadActions from '../components/dmThreadActions.vue' 

export default {
  name: 'Home',
  components: {
    thread_calender,
    threadActions
  }
}
</script>

<style>

</style>
