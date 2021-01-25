<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col size="4">
              <ion-title style="margin-top: 7px" class="title">Kayıt</ion-title>
            </ion-col>
            <ion-col size="2" offset="6">
              <routerLink to="/start"
                ><ion-button style="float: right" color="danger"
                  >Geri Git</ion-button
                ></routerLink
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Kayıt</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col size="8" offset="2">
              <ion-item>
                <ion-label>Kullanıcı Adı:</ion-label>
                <ion-input @ionInput="username = $event.target.value"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="8" offset="2">
              <ion-item>
                <ion-label>Şifre:</ion-label>
                <ion-input @keydown.enter="register" type="password" @ionInput="password = $event.target.value"></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="8" offset="2">
              <ion-button @click="register" size="large" expand="block" color="warning"
                >Kayıt Ol</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  toastController 
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
    IonButton,
    IonCol,
    IonGrid,
    IonRow 
  },
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      vuexRegister: "register"
    }),
    register() {
      const user = {username: this.username, password: this.password};
      this.vuexRegister(user)
      .then(data => {
        this.$router.push("/signin");
        this.openToast();
      })
      .catch(error => {
        this.errorToast(error.response.data.message)
      })
    },
    async openToast() {
      const toast = await toastController
        .create({
          message: 'Giriş ekranına yönlendiriliyorsunuz.',
          duration: 3000,
          header: 'KAYIT BAŞARILI'
        })
      return toast.present();
    },
    async errorToast(error: string) {
      const toast = await toastController
        .create({
          message: error,
          duration: 5000,
          header: 'UYARI'
        })
      return toast.present();
    }
  }
});
</script>


<style scoped>
.title {
  font-size: 25px;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>