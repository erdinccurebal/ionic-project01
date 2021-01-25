<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar >
        <ion-buttons slot="start">
          <ion-menu-button color="white"></ion-menu-button>
        </ion-buttons>
        <ion-title>Makaleler</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Makaleler</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

        <ion-card v-for="post in posts" :key="post.id">
          <ion-card-header>
            <ion-card-title>{{ post.title}}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            {{ post.content }}
            <ion-card-subtitle>Yazar: {{ post.username }}</ion-card-subtitle>
          </ion-card-content>
        </ion-card>
        
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
  data(){
    return {
      posts: []
    }
  },
  methods: {
    ...mapMutations(["openSidemenu"]),
    ...mapActions(["getPosts"]),
  },
  created(){
    this.openSidemenu();
    this.getPosts()
    .then(result => this.posts = result.data)
    .catch(error => console.log(error.response.data.message));
  }
});
</script>

<style scoped>
ion-card-subtitle {
  margin-top: 5px;
  text-align: right;
}

</style>