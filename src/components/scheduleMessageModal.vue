<template> 
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container mb-3" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                        <header class="modal-header" id="modalTitle">
                        <slot name="header">
                            Schedule message
                        </slot>
                        </header>
                        <section class="modal-body" id="modalDescription">
                            <slot name="body">
                                <p>Later today at 9:00 AM</p>
                                <p>Monday at 9:00 AM</p>
                                <hr>
                                <p>Custom time</p>
                        </slot>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<script>


export default {
    name: 'ScheduleMessageModal',
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>