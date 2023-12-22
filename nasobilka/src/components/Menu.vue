<template>
    <div class="flex flex-col flex-1 justify-center items-center gap-8">
        <TimePicker @time-selected="setTime" />

        <nav class="flex flex-col text-white py-6 gap-8">
            <button
                class="w-40 bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold py-8 px-4 rounded"
                @click="selectMode(Modes.MULTIPLICATION)"
            >
                {{ Modes.MULTIPLICATION.label }}
            </button>
            <button
                class="w-40 bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold py-8 px-4 rounded"
                @click="selectMode(Modes.POWER)"
            >
                {{ Modes.POWER.label }}
            </button>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Modes } from "../shared/enums/Modes";

import type { ILabelValue } from "../shared/interfaces";
import TimePicker from "./TimePicker.vue";

const emit = defineEmits(["modeSelected"]);
const selectedTime = ref(0);

const setTime = (newTime: number) => {
    selectedTime.value = newTime;
};

const selectMode = (mode: ILabelValue) => {
    emit("modeSelected", mode, selectedTime.value);
};
</script>
