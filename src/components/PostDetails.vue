<template>
    <div>
        <div v-if="current">
            {{ current.title }} <br>
            <button @click="toggle">{{ visible ? 'Hide' : 'Show' }}</button>

            <div v-if="visible">{{ current.description }}</div>
            <button @click="$emit('delete', current.title)">Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostDetails",
        props: {
            current: Object
        },
        data() {
            return {
                visible: false,
            }
        },

        methods: {
            toggle() {
                this.visible = !this.visible;
            }
        },

        watch: {
            current() {
                this.visible = false;
            }
        }
    }
</script>

<style scoped>

</style>
