<template>
  <ion-menu
    side="start"
    menu-id="custom"
    class="my-custom-menu"
    content-id="main"
    toggle="true"
    :disabled="statusMenu"
  >
    <ion-header>
      <ion-toolbar color="white">
        <ion-title>Merhaba: {{ getUser.username }}</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button color="red"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <div v-if="getUser.role == 'member' || getUser.role == 'author' || getUser.role == 'admin'">
          <ion-item @click="goPosts">Makaleler</ion-item>
          <ion-item @click="goProfile">Profil Ayarları</ion-item>
        </div>
        <div v-if="getUser.role == 'author' || getUser.role == 'admin'"  style="border-top: grey solid 1px">
          <ion-item @click="goNewPost">Yeni Makale Ekle</ion-item>
          <div v-if="getUser.role == 'admin'">
            <ion-item @click="goPostsEdit">Makaleleri Düzenle</ion-item>
            <ion-item @click="goUsersEdit">Kullanıcıları Düzenle</ion-item>
          </div>
        </div>
        <div v-if="getUser.role == 'member' || getUser.role == 'author' || getUser.role == 'admin'" style="border-top: grey solid 1px">
          <ion-item @click="closed" style="border-top: grey solid 1px"
            >Çıkış</ion-item
          >
        </div>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet v-on:upup="doSomething" id="main"></ion-router-outlet>
</template>
<style>
.my-custom-menu {
  --width: 500px;
}
</style>


<script>
import { mapGetters, mapMutations } from "vuex";

import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  menuController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
  },
  computed: {
    ...mapGetters(["statusMenu", "getUser"]),
  },
  methods: {
    ...mapMutations(["closedAccount"]),
    closed() {
      menuController.close("custom");
      setTimeout(() => {
        this.closedAccount();
        this.$router.push("/start");
      }, 1000);
    },
    goPosts(){
      menuController.close("custom");
      this.$router.push("/posts");
    },
    goProfile(){
      menuController.close("custom");
      this.$router.push("/profile");
    },
    goNewPost(){
      menuController.close("custom");
      this.$router.push("/new-post");
    },
    goPostsEdit(){
      menuController.close("custom");
      this.$router.push("/posts-edit");
    },
    goUsersEdit(){
      menuController.close("custom");
      this.$router.push("/users-edit");
    }
  }
});
</script>

<style scoped>

a {
  text-decoration: none;
}

</style>