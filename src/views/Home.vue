<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Team Orpheus"/>
    <b-button class="button" variant="success">
        <img alt="button-send" src="../assets/Shape-send.png" />
        <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
    </b-button>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import ScheduleMessage from '@/components/ScheduleMessage.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>
