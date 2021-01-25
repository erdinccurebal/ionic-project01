import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Start from '../views/Start.vue';
import Signin from '../views/Signin.vue';
import Signup from '../views/Signup.vue';
import Posts from '../views/Posts.vue';
import Profile from '../views/Profile.vue';
import NewPost from '../views/NewPost.vue';
import PostsEdit from '../views/PostsEdit.vue';
import UsersEdit from '../views/UsersEdit.vue';

import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    beforeEnter(to, from ,next){
      const user = store.getters.getUser;
      const control = user.role == "member" || user.role == "author" || user.role == "admin" ;
      next(control)
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter(to, from ,next){
      const user = store.getters.getUser;
      const control = user.role == "member" || user.role == "author" || user.role == "admin" ;
      next(control)
    }
  },
  {
    path: '/new-post',
    name: 'New Post',
    component: NewPost,
    beforeEnter(to, from ,next){
      const user = store.getters.getUser;
      const control = user.role == "author" || user.role == "admin" ;
      next(control)
    }
  },
  {
    path: '/posts-edit',
    name: 'Posts Edit',
    component: PostsEdit,
    beforeEnter(to, from ,next){
      const user = store.getters.getUser;
      const control = user.role == "admin" ;
      next(control)
    }
  },
  {
    path: '/users-edit',
    name: 'Users Edit',
    component: UsersEdit,
    beforeEnter(to, from ,next){
      const user = store.getters.getUser;
      const control = user.role == "admin" ;
      next(control)
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
