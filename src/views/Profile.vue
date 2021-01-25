<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar >
        <ion-buttons slot="start">
          <ion-menu-button color="white"></ion-menu-button>
        </ion-buttons>
        <ion-title>Profil Ayarları</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Profil Ayarları</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

          <h1 style="text-align:center;">Yapım Aşamasında</h1>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { mapMutations } from "vuex";

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
  methods: {
    ...mapMutations(["openSidemenu"])
  },
  created(){
    this.openSidemenu();
  }
});
</script>

<style scoped>
ion-card-subtitle {
  margin-top: 5px;
  text-align: right;
}
</style>