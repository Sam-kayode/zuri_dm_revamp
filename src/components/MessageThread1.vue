<template>
    <div class="thread">
        <div class="msgBody">
            <div class="messages currentMessage">
                <img src="../assets/Ellipse 21.png" alt="User Image" />
                <div class="userText">
                    <p>
                        <span class="userName">MamaGee</span>
                        <span class="msgTime">5.55pm</span>
                    </p>
                    <p class="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eum mollitia aspernatur laboriosam cum officiis
                        commodi deleniti odit rerum ratione consectetur. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Tincidunt adipiscing et, tortor, fusce quis tellus,
                        enim. A, posuere mi auctor odio tincidunt magnis.
                    </p>
                </div>
            </div>

            <div class="messages currentMessage">
                <img src="../assets/Ellipse 24.png" alt="User Image" />
                <div class="userText">
                    <p>
                        <span class="userName">Geegee</span>
                        <span class="msgTime">5.57pm</span>
                    </p>
                    <p class="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eum mollitia aspernatur laboriosam cum officiis
                        commodi deleniti odit rerum ratione consectetur. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Tincidunt adipiscing et, tortor, fusce quis tellus,
                        enim. A, posuere mi auctor odio tincidunt magnis.
                    </p>
                </div>
            </div>

            <div class="messages currentMessage">
                <img src="../assets/Ellipse 21.png" alt="User Image" />
                <div class="userText">
                    <p>
                        <span class="userName">MamaGee</span>
                        <span class="msgTime">6.05pm</span>
                    </p>
                    <p class="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eum mollitia aspernatur laboriosam cum officiis
                        commodi deleniti odit rerum ratione consectetur. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Tincidunt adipiscing et, tortor, fusce quis tellus,
                        enim. A, posuere mi auctor odio tincidunt magnis.
                    </p>
                </div>
            </div>

            <div class="messages newMessage">
                <img src="../assets/Ellipse 21.png" alt="User Image" />
                <div class="userText">
                    <p>
                        <span class="userName">MamaGee</span>
                        <span class="msgTime">5.55pm</span>
                    </p>
                    <p class="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eum mollitia aspernatur laboriosam cum officiis
                        commodi deleniti odit rerum ratione consectetur. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Tincidunt adipiscing et, tortor, fusce quis tellus,
                        enim. A, posuere mi auctor odio tincidunt magnis.
                    </p>
                </div>
            </div>

            <div class="messages newMessages">
                <img src="../assets/Ellipse 24.png" alt="User Image" />
                <div class="userText">
                    <p>
                        <span class="userName">GeeGee</span>
                        <span class="msgTime">5.57pm</span>
                    </p>
                    <p class="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eum mollitia aspernatur laboriosam cum officiis
                        commodi deleniti odit rerum ratione consectetur. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Tincidunt adipiscing et, tortor, fusce quis tellus,
                        enim. A, posuere mi auctor odio tincidunt magnis.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DmMesssageThread1',
    data() {
        return {
            width: window.innerWidth,
        };
    },
};
</script>

<style scoped>
.thread {
    text-align: left;
    border: thin solid none;
    position: relative;
    top: 10px;
    right: 15px;
    margin: 0px;
    font-size: 16px;
    box-sizing: border-box;
    background-color: whitesmoke;
    
}

.msgBody {
    padding-top: 50px;
}
.messages {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 30px;
}
.messages img {
    width: 100px;
    margin-right: 10px;
    margin-top: 10px;
}
.userText {
    margin-left: 10px;
    text-align: left;
    line-height: 1.5;
}
.userText p {
    margin: 10px 0px;
}
.userName {
    font-weight: 900;
    font-size: 18px;
}
.msgTime {
    margin-left: 10px;
    font-weight: 150;
    font-size: 14px;
}

.thread input {
    margin: 0px 15px;
}
.thread > p {
    display: inline-block;
}
</style>
