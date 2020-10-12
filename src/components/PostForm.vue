<template>
    <div>
        <div v-if="visible">
            <input  v-model="form.title" /><br>
            <input v-model="form.description"><br>
        </div>
        <button v-if="isValid" @click="addPost">Save</button>
        <button @click="toggle">{{ visible ? 'Hide': 'Show'}}</button>
    </div>
</template>

<script>
    import {useToggle} from "../composition/toggle";
    import {usePostForm} from "../composition/postForm";

    export default {
        name: "PostForm",

        setup(props, {emit}) {

            return {
                ...useToggle(),
                ...usePostForm(emit)
            };
        },

        // data() {
        //     return {
        //         title: '',
        //         description: '',
        //        // visible: true,
        //     }
        // },
        //
        // methods: {
        //     // toggle() {
        //     //     this.visible = !this.visible;
        //     // },
        //
        //     addPost() {
        //         this.$emit('new', {
        //             title: this.title,
        //             description: this.description
        //         });
        //
        //         this.title = '';
        //         this.description = '';
        //     }
        // }
    }
</script>

<style scoped>

</style>
