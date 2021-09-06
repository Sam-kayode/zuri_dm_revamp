<template>
  <div class="home d-flex justify-content-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Team Orpheus"/>
    <b-container>
      <thread_calender/>
      <b-button v-b-toggle.sidebar>Show sidebar</b-button>
    </b-container>
    <thread-reply></thread-reply>
  </div>
</template>

<script>
// @ is an alias to /src
import thread_calender from '@/components/threadCalender.vue'
import ThreadReply from '@/components/threadReply.vue'

export default {
  name: 'Home',
  components: {
    thread_calender,
    ThreadReply
  }
}
</script>

<style>

</style>
