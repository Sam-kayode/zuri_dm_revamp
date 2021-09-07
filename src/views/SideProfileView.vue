<template>
  <div class="home">
    <div class="message-thread">
      <DmMessageThread1 />
    </div>
    <div class="profile">
      <ProfileContainer />
    </div>
    <div class="input">
        <MessageInput/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ThreadCalender from "@/components/threadCalender.vue";
import ScheduleMessageModal from "@/components/scheduleMessageModal.vue";
import ThreadReplySidebar from "@/components/threadReplySidebar.vue";
import MessageInput from "../components/Messageinput.vue";
import SearchBar from "@/components/searchBar.vue";
import InputBox from "@/components/inputBox.vue";
import DmThreadActions from "@/components/dmThreadActions.vue";
import ThreeDots from "@/components/ThreeDots.vue";
import DmMessageThread1 from "@/components/MessageThread1.vue";
import ProfileContainer from "../components/profileContainer.vue";

export default {
  name: "Home",
  components: {
    ThreadCalender,
    ScheduleMessageModal,
    ThreadReplySidebar,
    MessageInput,
    SearchBar,
    InputBox,
    DmThreadActions,
    ThreeDots,
    DmMessageThread1,
    ProfileContainer,
  },
};
</script>
<style scoped>
.home {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 100px);
}
.message-thread {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
}
.profile {
  grid-column-start: 5;
  grid-row-start: 2;
  grid-row-end: auto;
}
.input {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 4;
}
</style>