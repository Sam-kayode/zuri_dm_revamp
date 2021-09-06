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
        <ScheduleMessageModal />
    </div>
</template>

<script>
// @ is an alias to /src
import ThreadCalender from '@/components/threadCalender.vue';
import ScheduleMessageModal from '@/components/scheduleMessageModal.vue';
import ThreadReplySidebar from '@/components/threadReplySidebar.vue';
import MessageInput from '@/components/messageInput.vue';

export default {
    name: 'Home',
    components: {
        ThreadCalender,
        ScheduleMessageModal,
        ThreadReplySidebar,
        MessageInput,
    },
};
</script>

<style></style>
