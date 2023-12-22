<template>
    <div class="flex p-4 items-center shadow-lg">
        <button
            class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
            @click="$emit('terminatePractice')"
        >
            Ukončit
        </button>

        <p class="text-2xl ml-auto mr-auto text-white">
            Zbývá <span class="font-bold">{{ durationLeft }}</span> s
        </p>

        <p class="text-xl text-white">
            {{ mode.label }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { PropType, onMounted, ref } from "vue";
import { ILabelValue } from "@/shared/interfaces";

const emit = defineEmits(["terminatePractice", "practiceFinished"]);
const props = defineProps({
    duration: {
        type: Number,
        required: true,
    },
    mode: {
        type: Object as PropType<ILabelValue>,
        required: true,
    },
});

const durationLeft = ref(props.duration);

onMounted(() => {
    durationLeftTick();
});

const durationLeftTick = () => {
    if (!!durationLeft.value) {
        setTimeout(() => {
            durationLeft.value--;
            durationLeftTick();
        }, 1000);
    } else {
        emit("practiceFinished");
    }
};
</script>
