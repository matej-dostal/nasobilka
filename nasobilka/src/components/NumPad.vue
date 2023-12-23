<template>
    <div class="flex flex-col gap-4">
        <div
            v-for="(btns, index) in numBtns"
            :key="index"
            class="grid grid-cols-3 gap-4"
        >
            <button
                v-for="(btn, btnIndex) in btns"
                :key="btnIndex"
                class="bg-gray-200 hover:bg-gray-400 text-xl p-4 px-6 rounded-md font-bold"
                @click="$emit('numBtnClick', btn)"
            >
                {{ btn }}
            </button>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <button
                class="bg-gray-200 hover:bg-gray-400 text-xl p-4 px-6 rounded-md font-bold"
                @click="$emit('numBtnClick', 0)"
            >
                0
            </button>
            <button
                class="col-start-2 col-span-2 bg-green-600 hover:bg-green-800 text-xl text-white py-2 px-4 rounded-md"
                @click="$emit('validate')"
            >
                Potvrdit
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["numBtnClick", "validate"]);

const numBtns = ref([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
</script>
