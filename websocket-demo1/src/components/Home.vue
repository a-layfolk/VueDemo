<template>
  <div class="home">
    <ul>
      <li v-for="item in msgList" :key="item.id">
        <p>
          发信人: {{item.user}}  | 时间: {{item.dateTime}}
        </p>
        <p>
          信息: {{item.msg}}
        </p>
      </li>
    </ul>
    <p><input type="text" v-model="msg" placeholder="请输入你要发送的内容"></p>
    <p><input type="text" v-model="username" placeholder="请输入你的用户名"></p>
    <p><button @click="handleSendBtnClick">发送</button></p>
  </div>
</template>

<script>

const ws = new WebSocket('ws://localhost:8000');


export default {
  name: 'Home',
  data() {
    return {
      msg: '',
      username: '',
      msgList: []
    }
  },
  mounted() {
    ws.addEventListener('open', this.handleWsOpen.bind(this), false);
    ws.addEventListener('close', this.handleWsClose.bind(this), false);
    ws.addEventListener('error', this.handleWsError.bind(this), false);
    ws.addEventListener('message', this.handleWsMessage.bind(this), false);
  },
  methods: {
    handleSendBtnClick() {
      const msg = this.msg;

      if(!msg.trim().length) {
        return;
      }

      ws.send(JSON.stringify({
        id: new Date().getTime(),
        user: this.username,
        dateTime: new Date().getTime(),
        msg: this.msg
      }));
    },
    handleWsOpen(e) {
      console.log('WebSocket Open', e);
    },
    handleWsClose(e) {
      console.log('WebSocket Close', e);
    },
    handleWsError(e) {
      console.log('WebSocket Error', e);
    },
    handleWsMessage(e) {
      const msg = e.data;
      this.msgList.push(JSON.parse(msg));
    }
  }
}
</script>

<style scoped>
</style>
