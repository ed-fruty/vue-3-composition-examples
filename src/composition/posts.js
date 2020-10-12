import {ref} from "@vue/reactivity";

export function usePosts() {
    const posts = ref([]);
    const current = ref(null);

    const addPost = ({title, description}) => {
        posts.value.push({title, description});
    };

    const changeCurrent = (post) => {
        current.value = post;
    };

    const deletePost = (title) => {
        posts.value = posts.value.filter(post => post.title !== title);
        current.value = null;
    };

    return {addPost, posts, deletePost, changeCurrent, current}
}
