<template>
  <post-form @new="addPost" />
  <post-list @current="changeCurrent" :posts="posts" class="col" />
  <post-details @delete="deletePost" :current="current" class="col" />
</template>

<script>
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import PostForm from "./components/PostForm";
import {usePosts} from "./composition/posts";

export default {
  name: 'App',
  components: {
    PostList,
    PostDetails,
    PostForm
  },

  setup() {
    return {
      ...usePosts()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 .col {
   width: 50%;
   float: left;
 }
</style>
