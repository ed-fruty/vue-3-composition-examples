<template>
    <div>
        <div v-if="post">
            {{ post.title }} <br>
            <button>{{ visible ? 'Hide' : 'Show' }}</button>

            <div v-if="visible">{{ post.title }}</div>
            <button>Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostDetails",
        props: {
            post: Object
        }
    }
</script>

<style scoped>

</style>
