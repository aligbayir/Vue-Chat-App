<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import ChatWindow from '../components/ChatWindow.vue'
import getUser from "../composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import NewChatForm from "../components/NewChatForm.vue";

export default {
  components: { Navbar, NewChatForm ,ChatWindow},
  setup() {
    const {user} = getUser();
    const router = useRouter();

    watch(user, ()=> {
        if(!user.value){
            router.push({name:"welcome"});
        }
    })
  },
};
</script>
<style lang=""></style>
