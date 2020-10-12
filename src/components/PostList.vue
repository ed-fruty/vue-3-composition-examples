<template>
   <div>
       <div v-if="posts.length > 0">
           <ul>
               <li v-for="post in posts" :key="post.title">
                   {{ post.title }}
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
        }
    }
</script>

<style scoped>

</style>
