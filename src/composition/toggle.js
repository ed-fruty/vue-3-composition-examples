import {ref} from "@vue/reactivity";

export function useToggle() {

    let visible = ref(true);

    const toggle = () => visible.value = !visible.value;

    return {visible, toggle};
}
