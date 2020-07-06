<template>
	<div id="app">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { pick } from "lodash-es";

export default {
	name: "App",
	components: {
		HelloWorld
	},
	mounted() {
		console.info(
			pick(
				{
					name: "wuhonglei",
					age: 27,
					test: "xxx",
					person: { address: "hubei", now: "hunan" }
				},
				["name", 'person.address']
			)
		);
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
