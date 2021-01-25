<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="white"></ion-menu-button>
        </ion-buttons>
        <ion-title>Kullanıcıları Düzenle</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Kullanıcıları Düzenle</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

        <ion-item-group v-for="user in users" :key="user.id">
          <ion-item-divider>
            <ion-label>ID: {{ user.id }}</ion-label>
          </ion-item-divider>

          <ion-item>
            <ion-label>Kullanıcı adı: {{ user.username }}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Rol: {{ user.role }}</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Kayıt Tarihi: {{ Date(user.createdDate) }}</ion-label>
          </ion-item>
        </ion-item-group>
        
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { mapMutations, mapActions } from "vuex";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    ...mapMutations(["openSidemenu"]),
    ...mapActions(["getUsers"]),
  },
  created() {
    this.openSidemenu();
    this.getUsers()
      .then((result) => (this.users = result.data))
      .then((result) => console.log(result))
      .catch((error) => console.log(error.response.data.message));
  },
});
</script>

<style scoped>
ion-card-subtitle {
  margin-top: 5px;
  text-align: right;
}
</style>