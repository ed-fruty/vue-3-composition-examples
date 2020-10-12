<template>
    <div>
        <div v-if="visible">
            <input  v-model="title" /><br>
            <input v-model="description"><br>
        </div>
        <button @click="addPost">Save</button>
        <button @click="toggle">{{ visible ? 'Hide': 'Show'}}</button>
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
        },

        methods: {
            toggle() {
                this.visible = !this.visible;
            },

            addPost() {
                this.$emit('new', {
                    title: this.title,
                    description: this.description
                });

                this.title = '';
                this.description = '';
            }
        }
    }
</script>

<style scoped>

</style>
