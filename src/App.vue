<template>
  <post-form @new="addPost" />
  <post-list @current="changeCurrent" :posts="posts" class="col" />
  <post-details @delete="deletePost" :current="current" class="col" />
</template>

<script>
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import PostForm from "./components/PostForm";

export default {
  name: 'App',
  components: {
    PostList,
    PostDetails,
    PostForm
  },

  data() {
    return {
      posts: [],
      current: null,
    }
  },

  methods: {
    addPost({title, description}) {
      this.posts.push({title, description});
    },

    changeCurrent(post) {
      this.current = post;
    },

    deletePost(title) {
      this.posts = this.posts.filter(post => post.title !== title);
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
