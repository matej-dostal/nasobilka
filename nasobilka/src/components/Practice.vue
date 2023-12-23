<template>
    <div>
        <Header
            v-if="!!!startCounter"
            :duration="duration"
            :mode="mode"
            @terminate-practice="$emit('terminatePractice')"
            @practice-finished="practiceFinish"
        />

        <div class="relative" v-if="startCounterVisible">
            <div
                class="absolute w-full text-center h-30 bg-primary p-20 text-white text-9xl top-0 left-1/2 transform -translate-x-1/2"
            >
                {{ startCounter }}
            </div>
        </div>

        <div class="flex flex-col" v-if="!!!startCounter">
            <PracticeExamplesView :mode="mode.value" @statistics="getStats" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { PropType } from "vue";
import type { ILabelValue } from "@/shared/interfaces";

import Header from "./Header.vue";
import PracticeExamplesView from "@/views/PracticeExamplesView.vue";

const emit = defineEmits(["terminatePractice", "practiceDone"]);
const props = defineProps({
    mode: {
        type: Object as PropType<ILabelValue>,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
});

const startCounter = ref(3);
const startCounterVisible = ref(true);

let correctCount = 0;
let wrongCount = 0;

onMounted(() => {
    startCounterTick();
});

const startCounterTick = () => {
    if (!!startCounter.value) {
        setTimeout(() => {
            startCounter.value--;
            startCounterTick();
        }, 1000);
    } else {
        startCounterVisible.value = false;
    }
};

const getStats = (correct: number, wrong: number) => {
    correctCount = correct;
    wrongCount = wrong;
};

const practiceFinish = () => {
    emit("practiceDone", correctCount, wrongCount);
};
</script>
