<template>
    <div class="flex flex-col flex-1 items-center gap-8">
        <img
            src="/img/gymjes_logo.svg"
            class="sm:mb-8 mb-0 w-32 sm:mt-5 mt-2"
            alt="logo"
        />

        <TimePicker @time-selected="setTime" />

        <nav class="flex flex-col text-white py-6 sm:gap-8 gap-5 mb-auto">
            <button
                class="w-40 bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold py-5 sm:py-8 px-4 rounded"
                @click="selectMode(Modes.MULTIPLICATION)"
            >
                {{ Modes.MULTIPLICATION.label }}
            </button>
            <button
                class="w-40 bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold py-5 sm:py-8 px-4 rounded"
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
