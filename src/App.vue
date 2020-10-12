<template>
  <post-form />
  <post-list class="col" />
  <post-details class="col" />
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
