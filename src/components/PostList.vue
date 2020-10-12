<template>
   <div>
       <div v-if="posts.length > 0">
           <ul>
               <li  v-for="post in posts" :key="post.title">
                   <a href="#"
                      @click.prevent="$emit('current', post)">
                       {{ post.title }}
                   </a>
               </li>
           </ul>
       </div>
       <div v-else>
           No posts yet.
       </div>
   </div>
</template>

<script>
    export default {
        name: "PostList",
        props: {
            posts: {
                default: []
            }
        },

    }
</script>

<style scoped>

</style>
