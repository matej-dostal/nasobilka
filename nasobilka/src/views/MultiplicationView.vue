<template>
    <div class="flex flex-col flex-1 items-center p-8 gap-8">
        <h2 class="text-white font-bold text-3xl mt-6">
            {{ firstNum }} {{ operator == "*" ? "&times;" : "&divide;" }}
            {{ secondNum }}
        </h2>

        <input
            v-model="studentResult"
            class="bg-gray-50 p-2 border border-gray-300 text-gray-900 text-lg rounded-lg mt-3"
            type="number"
        />

        <div class="grid grid-cols-2 items-center gap-4">
            <button
                class="bg-green-600 text-xl text-white py-2 px-4 rounded-md"
                :class="btnDisabled ? '' : 'hover:bg-green-800'"
                @click="validateStudentResult"
                :disabled="btnDisabled"
            >
                Potvrdit
            </button>

            <h3
                class="font-bold text-xl py-2 px-3 rounded-md text-center"
                :class="
                    resultCorrect
                        ? 'text-green-600 bg-green-100'
                        : 'text-red-600 bg-red-100'
                "
                v-if="resultVisible"
            >
                {{ resultCorrect ? "Správně" : "Špatně" }}
            </h3>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { IExample } from "../shared/interfaces";

const emit = defineEmits(["statistics"]);

const firstNum = ref(0);
const secondNum = ref(0);
const operator = ref("*");
const studentResult = ref();

const examples = [] as IExample[];
const resultVisible = ref(false);
const resultCorrect = ref(false);
const btnDisabled = ref(false);
let correct = 0;
let wrong = 0;

onMounted(() => {
    generateNextExample();
});

const generateNextExample = () => {
    let okay = false;
    let op: string,
        first: number,
        second: number,
        res: number,
        example: IExample;

    studentResult.value = null;

    while (!okay) {
        op = getRandomOperator();
        first = getRandomNumber(1, 10);
        second = getRandomNumber(1, 10);

        res = op == "*" ? first * second : first / second;
        example = {
            first,
            second,
            result: res,
            operator: "*",
        } as IExample;

        const contains = examples.find((ex) => ex == example);

        okay = !!!contains;
    }

    examples.push(example);
    firstNum.value = first;
    secondNum.value = second;
    operator.value = op;
    btnDisabled.value = false;
};

const validateStudentResult = () => {
    if (studentResult.value === undefined) {
        return;
    }

    btnDisabled.value = true;

    const expectedResult = firstNum.value * secondNum.value;

    resultVisible.value = true;

    if (expectedResult == studentResult.value) {
        correct++;
        resultCorrect.value = true;
    } else {
        wrong++;
        resultCorrect.value = false;
    }

    emit("statistics", correct, wrong);

    setTimeout(() => {
        resultVisible.value = false;
        generateNextExample();
    }, 1000);
};

const getRandomOperator = () => {
    //return getRandomNumber(0, 1) == 0 ? "*" : "/";
    return "*";
};

const getRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
