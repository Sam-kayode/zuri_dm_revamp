<template>
  <div class="home d-flex flex-column">
    
    <ThreadCalender />

    <b-button class="button" variant="success" size="sm" pb="2">
        <img alt="button-send" src="../assets/Shape-send.png" />
        <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
    </b-button>
    <ScheduleMessageModal />
  </div>
</template>

<script>
// @ is an alias to /src
import ThreadCalender from '@/components/threadCalender.vue'
import ScheduleMessageModal from '@/components/scheduleMessageModal.vue'

export default {
  name: 'Home',
  components: {
    ThreadCalender,
    ScheduleMessageModal
  }
}
</script>

<style>

</style>
