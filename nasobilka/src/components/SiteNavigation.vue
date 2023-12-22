<template>
    <!-- <header class="sticky top-0 bg-primary shadow-lg"> -->

    <div class="flex flex-col flex-1 justify-center items-center gap-8">
        <div class="flex flex-col items-center">
            <p class="text-xl text-white font-bold">Vyberte čas:</p>
            <div class="flex gap-8 mt-4">
                <button
                    v-for="(timeOption, index) in timeOptions"
                    :key="index"
                    class="text-2xl font-bold py-3 px-3 rounded"
                    :class="
                        selectedTime == timeOption.value
                            ? 'bg-green-500'
                            : 'bg-white'
                    "
                    @click="setTime(timeOption.value)"
                >
                    {{ timeOption.label }}
                </button>
            </div>
        </div>

        <nav class="flex flex-col text-white py-6 gap-8">
            <RouterLink :to="{ name: 'home' }">
                <button
                    class="w-40 bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold py-8 px-4 rounded"
                >
                    Násobilka
                </button>
            </RouterLink>
            <RouterLink :to="{ name: 'home' }">
                <button
                    class="w-40 bg-blue-600 hover:bg-blue-700 text-2xl text-white font-bold py-8 px-4 rounded"
                >
                    Mocniny
                </button>
            </RouterLink>
        </nav>
    </div>
    <!-- </header> -->
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import TimeOptions from "../shared/enums/Times";

const timeOptions = ref(TimeOptions);
const selectedTime = ref(0);

onMounted(() => {
    const defVal = timeOptions.value.find((opt) => opt?.default);

    selectedTime.value = !!defVal ? defVal.value : timeOptions.value[0].value;
});

const setTime = (newValue: number) => {
    selectedTime.value = newValue;
};
</script>
