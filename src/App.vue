<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
	<q-card :dark="true" class="q-pa-lg">
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
		<a href="https://pinia.vuejs.org/" target="_blank">
			<img src="./assets/pinia.png" class="logo pinia" alt="Pinia logo" />
		</a>
		<a href="https://quasar.dev/" target="_blank">
			<img src="./assets/quasar.png" class="logo quasar" alt="Qusar logo" />
		</a>
		<HelloWorld msg="Vite + Vue + Pinia + Quasar" />
	</q-card>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 0 2.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.pinia:hover {
	filter: drop-shadow(0 0 2em #c6d317aa);
}
.logo.quasar:hover {
	filter: drop-shadow(0 0 2em #2080b8aa);
}
</style>
