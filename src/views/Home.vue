<template>
  <div class="home d-flex justify-content-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Team Orpheus"/>
    <thread_calender/>
  </div>
</template>

<script>
// @ is an alias to /src
import thread_calender from '@/components/threadCalender.vue'

export default {
  name: 'Home',
  components: {
    thread_calender
  }
}
</script>

<style>

</style>
