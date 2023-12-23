<template>
    <div class="flex flex-col flex-1 items-center p-2 px-4 gap-4">
        <h2 class="text-white font-bold text-3xl mt-2">
            {{ operator == "sqrt" ? "&Sqrt;" : "" }}
            {{ firstNum }}
            {{ operator == "*" ? "&times;" : operator == "power" ? "^" : "" }}
            {{ operator !== "sqrt" ? secondNum : "" }}
        </h2>

        <div class="grid grid-cols-3 md:w-1/6 w-9/12 gap-4 mt-2 mt-3">
            <input
                v-model="studentResult"
                class="col-span-2 bg-gray-50 p-2 border border-gray-300 text-gray-900 text-lg rounded-lg"
                type="text"
            />

            <button
                class="bg-gray-200 hover:bg-gray-400 text-xl rounded-md font-bold"
                @click="deleteClick"
            >
                &LeftArrow;
            </button>
        </div>

        <div class="flex my-1">
            <h3
                class="font-bold text-xl py-2 px-3 rounded-md text-center"
                :class="[
                    resultCorrect
                        ? 'text-green-600 bg-green-100'
                        : 'text-red-600 bg-red-100',
                    !resultVisible ? 'text-transparent bg-transparent' : '',
                ]"
            >
                {{ resultCorrect ? "Správně" : "Špatně" }}
            </h3>
        </div>

        <NumPad
            @num-btn-click="numBtnClick"
            @validate="validateStudentResult"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { IExample } from "../shared/interfaces";

import NumPad from "@/components/NumPad.vue";

const emit = defineEmits(["statistics"]);
const props = defineProps({
    mode: {
        type: String,
        required: true,
    },
});

const MultiplicationInfo = {
    min: 1,
    max: 10,
    operators: ["*"],
};

const PowerInfo = {
    min: 1,
    max: 20,
    operators: ["power", "sqrt"],
};

const firstNum = ref(0);
const secondNum = ref(0);
const operator = ref("*");
const studentResult = ref("");

const examples = [] as IExample[];
const resultVisible = ref(false);
const resultCorrect = ref(true);
const btnDisabled = ref(false);
let correct = 0;
let wrong = 0;

onMounted(() => {
    generateNextExample();
});

const numBtnClick = (number: Number) => {
    const currInput = studentResult.value;
    const len = currInput?.length || 0;

    if (len > 0) studentResult.value += number.toString();
    else studentResult.value = number.toString();
};

const deleteClick = () => {
    const currInput = studentResult.value;

    if (currInput.length > 0)
        studentResult.value = currInput.substring(0, currInput.length - 1);
};

const generateNextExample = () => {
    let okay = false;
    let op: string = "*",
        first: number = -1,
        second: number = -1,
        res: number = -1,
        example: IExample = { first: -1, second: -1, operator: "", result: -1 };

    studentResult.value = "";
    const { min, max } = getMinMaxValue();

    while (!okay) {
        op = getRandomOperator();
        first = getRandomNumber(min, max);
        second = props.mode == "power" ? 2 : getRandomNumber(min, max);

        if (op == "sqrt") {
            first = Math.pow(first, 2);
        }

        res = op == "*" ? first * second : first / second;
        res = op == "power" ? Math.pow(first, 2) : Math.sqrt(first);

        example = {
            first: first,
            second,
            result: res,
            operator: op,
        } as IExample;

        const contains = examples.find(
            (ex) =>
                ex.first == example.first &&
                ex.second == example.second &&
                ex.operator == example.operator
        );

        okay = !!!contains;
    }

    examples.push(example);
    firstNum.value = first;
    secondNum.value = second;
    operator.value = op;
    btnDisabled.value = false;
};

const validateStudentResult = () => {
    if (studentResult.value === null || resultVisible.value) {
        return;
    }

    btnDisabled.value = true;

    const expectedResult =
        operator.value == "*"
            ? firstNum.value * secondNum.value
            : operator.value == "power"
            ? Math.pow(firstNum.value, 2)
            : Math.sqrt(firstNum.value);

    resultVisible.value = true;

    if (expectedResult == parseInt(studentResult.value)) {
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
    let isMul = false;
    if (props.mode == "multiplication") {
        isMul = true;

        if (MultiplicationInfo.operators.length == 1) {
            return MultiplicationInfo.operators[0];
        }
    }

    if (props.mode == "power") {
        if (PowerInfo.operators.length == 1) {
            return PowerInfo.operators[0];
        }
    }

    const idx = getRandomNumber(
        0,
        isMul ? MultiplicationInfo.operators.length : PowerInfo.operators.length
    );

    const nextOp = isMul
        ? MultiplicationInfo.operators[idx]
        : PowerInfo.operators[idx];

    if (!!examples.length) {
        const lastOp = examples[examples.length - 1].operator;

        if (props.mode == "power" && lastOp === nextOp) {
            return lastOp == "power" ? "sqrt" : "power";
        }
    }

    return nextOp;
};

const getMinMaxValue = () => {
    if (props.mode == "multiplication") {
        return { min: MultiplicationInfo.min, max: MultiplicationInfo.max };
    } else {
        return { min: PowerInfo.min, max: PowerInfo.max };
    }
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
