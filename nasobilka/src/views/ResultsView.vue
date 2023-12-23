<template>
    <div class="flex flex-col flex-1 items-center p-8">
        <h2 class="text-white font-bold text-3xl">{{ summaryText }}</h2>

        <div class="flex mt-8">
            <p class="text-xl text-white">
                Celkem: <span class="text-2xl">{{ totalCount }}</span>
            </p>
        </div>

        <div class="flex gap-8 mt-6">
            <p class="text-xl text-white">
                <span class="text-green-500">Správně</span>: {{ correct }}
            </p>
            <p class="text-xl text-white">
                <span class="text-red-500">Špatně</span>: {{ wrong }}
            </p>
        </div>

        <p class="text-white mt-10 text-2xl">
            Úspěšnost:
            <span
                class="font-bold text-3xl"
                :class="percentage > 75 ? 'text-green-500' : 'text-red-500'"
                >{{ percentage }} %</span
            >
        </p>

        <img
            :src="iconPath"
            class="sm:mb-8 mb-0 sm:w-32 w-28 sm:mt-12 mt-6"
            alt="result_icon"
        />

        <button
            class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md mt-auto mb-auto text-lg"
            @click="$emit('close')"
        >
            Zpět na menu
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
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
    duration: {
        type: Number,
        required: true,
    },
});

const iconPath = ref("");

const iconPathPrefix = "/img/";
const icons = {
    TOP: `${iconPathPrefix}top.svg`,
    MIDDLE: `${iconPathPrefix}middle.svg`,
    BAD: `${iconPathPrefix}bad.svg`,
};

const summaryText = computed(() => {
    const correct = props.correct;
    const duration = props.duration;

    if (
        (correct >= 10 && duration == 30) ||
        (correct >= 18 && duration == 60)
    ) {
        iconPath.value = icons.TOP;
        return "Výborně!";
    } else if (
        (correct >= 7 && duration == 30) ||
        (correct >= 14 && duration == 60)
    ) {
        iconPath.value = icons.MIDDLE;
        return "Docela dobré";
    } else {
        iconPath.value = icons.BAD;
        return "Nic moc...";
    }
});

const totalCount = computed(() => props.correct + props.wrong);

const percentage = computed(() =>
    Math.floor((props.correct / (props.correct + props.wrong)) * 100)
);
</script>
