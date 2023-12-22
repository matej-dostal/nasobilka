<template>
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
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TimeOptions from "../shared/enums/Times";

const emit = defineEmits(["timeSelected"]);
const timeOptions = ref(TimeOptions);
const selectedTime = ref(0);

onMounted(() => {
    const defVal = timeOptions.value.find((opt) => opt?.default);

    setTime(!!defVal ? defVal.value : timeOptions.value[0].value);
});

const setTime = (newValue: number) => {
    selectedTime.value = newValue;
    emit("timeSelected", newValue);
};
</script>
