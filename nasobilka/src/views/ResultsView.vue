<template>
    <div class="flex flex-col flex-1 items-center p-8">
        <h2 class="text-white font-bold text-3xl">Výsledky:</h2>

        <div class="flex gap-8 mt-8">
            <p class="text-xl text-white">
                <span class="text-green-500">Správně</span>: {{ correct }}
            </p>
            <p class="text-xl text-white">
                <span class="text-red-500">Špatně</span>: {{ wrong }}
            </p>
        </div>

        <p class="text-white mt-8 text-2xl">
            Úspěšnost:
            <span
                class="font-bold text-3xl"
                :class="percentage > 75 ? 'text-green-500' : 'text-red-500'"
                >{{ percentage }} %</span
            >
        </p>

        <button
            class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md mt-20 text-lg"
            @click="$emit('close')"
        >
            Zpět na menu
        </button>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const emit = defineEmits(["close"]);
const props = defineProps({
    correct: {
        type: Number,
        required: true,
    },
    wrong: {
        type: Number,
        required: true,
    },
});

const percentage = computed(() =>
    Math.floor((props.correct / (props.correct + props.wrong)) * 100)
);
</script>
