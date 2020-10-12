import {reactive, computed} from "@vue/reactivity";

export function usePostForm(emit) {
    const form = reactive({
        title: '',
        description: ''
    });

    const isValid = computed(() => {
        return form.title.length > 0 && form.description.length > 0;
    });

    const addPost = () => {
        emit('new', form);
        form.title = '';
        form.description = '';
    };

    return {form, addPost, isValid}
}
