<template>
    <Head title="Local Skeleton" />
    <div
        class="min-h-screen bg-gray-100 flex flex-col items-center justify-center"
    >
        <h1 class="text-4xl font-bold text-blue-600">
            ¡Hola desde Vue con Inertia!
        </h1>
        <p class="mt-4 text-lg">Versión de Laravel: {{ version }}</p>
        <button
            @click="handleClick"
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            Clic me
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
    version: {
        type: String,
        default: "11.x",
    },
});

const handleClick = () => {
    alert("¡Tailwind funciona!");
};
</script>
