<template>
    <div>
        <input  v-model="title" /><br>
        <input v-model="description"><br>
        <button>Save</button>
        <button>{{ visible ? 'Hide': 'Show'}}</button>
    </div>
</template>

<script>
    export default {
        name: "PostForm",

        data() {
            return {
                title: '',
                description: '',
                visible: true,
            }
        }
    }
</script>

<style scoped>

</style>
