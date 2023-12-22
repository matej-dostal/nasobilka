<template>
    <div class="flex flex-col min-h-screen font-Roboto bg-primary">
        <Menu v-if="menuVisible" @mode-selected="newModeSelected" />

        <Practice
            v-if="!menuVisible && !resultsVisible"
            :mode="mode"
            :duration="duration"
            @terminate-practice="terminatePractice"
            @practice-done="showResults"
        />

        <ResultsView
            v-if="resultsVisible"
            :correct="correct"
            :wrong="wrong"
            @close="() => ((resultsVisible = false), (menuVisible = true))"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ILabelValue } from "./shared/interfaces";

import Menu from "./components/Menu.vue";
import Practice from "./components/Practice.vue";
import ResultsView from "./views/ResultsView.vue";

const menuVisible = ref(true);

const mode = ref({} as ILabelValue);
const duration = ref(0);

const resultsVisible = ref(false);
const correct = ref(0);
const wrong = ref(0);

const newModeSelected = (newMode: ILabelValue, newDuration: number) => {
    menuVisible.value = false;
    console.log({ newMode, duration });
    mode.value = newMode;
    duration.value = newDuration;
};

const terminatePractice = () => {
    menuVisible.value = true;
};

const showResults = (correctCount: number, wrongCount: number) => {
    correct.value = correctCount;
    wrong.value = wrongCount;
    resultsVisible.value = true;
};
</script>
