<template>
    <div class="home d-flex flex-column">
        <MessageInput />
        <ThreadReplySidebar />
        <ThreadCalender />

        <b-button
            class="button"
            v-b-toggle.sidebar
            variant="success"
            size="sm"
            pb="2"
        >
            <b-icon icon="reply" aria-hidden="true"></b-icon>
        </b-button>
        <b-button class="button" variant="success" size="sm" pb="2">
            <img alt="button-send" src="../assets/Shape-send.png" />
            <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
        </b-button>
        <ScheduleMessageModal />
        <SearchBar />
        <InputBox />
        <DmThreadActions />
        <ThreeDots />
        <DmMessageThread />
        <ProfileContainer />
    </div>
</template>

<script>
// @ is an alias to /src
import ThreadCalender from '@/components/threadCalender.vue';
import ScheduleMessageModal from '@/components/scheduleMessageModal.vue';
import ThreadReplySidebar from '@/components/threadReplySidebar.vue';
import MessageInput from '../components/Messageinput.vue';
import SearchBar from '@/components/searchBar.vue';
import InputBox from '@/components/inputBox.vue';
import DmThreadActions from '@/components/dmThreadActions.vue';
import ThreeDots from '@/components/ThreeDots.vue';
import DmMessageThread from '@/components/messageThread.vue';
import ProfileContainer from '@/components/profileContainer.vue'

export default {
    name: 'Home',
    components: {
        ThreadCalender,
        ScheduleMessageModal,
        ThreadReplySidebar,
        MessageInput,
        SearchBar,
        InputBox,
        DmThreadActions,
        ThreeDots,
        DmMessageThread,
        ProfileContainer
    },
};
</script>
