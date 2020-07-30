<template>
	<div class="container h-screen bg-gray-300 p-10">
		<div class="p-10 bg-white rounded">
			<!-- toolbar -->
			<div class="flex items-center bg-orange-200 p-2">
				<img src="https://svgsilh.com/svg/151889.svg" class="w-10 pr-2" alt="">
				<div class="text-yellow-900 text-sm">
					Congrats you're eligible for a
					<b>Coupon Code</b> in this order
				</div>
			</div>
			<!-- order list -->
			<div class="text-xl font-bold py-4">
				Order Summary
			</div>
			<!-- item -->
			<div class="border rounded p-2">xssdfasf</div>
		</div>
	</div>
</template>

<script>

// 参考：https://codepen.io/justaashir/pen/ExVPpPR?editors=1000

import axios from "axios";
import Avatar from "vue-avatar";
import imgSrc from "./person.jpeg";

export default {
	name: "HelloWorld",
	components: {
		Avatar
	},
	props: {
		msg: String
	},
	data() {
		return {
			name: "",
			imgSrc: imgSrc
		};
	},
	watch: {
		name(newValue) {
			if (newValue.includes("wuhonglei")) {
				import(/* webpackChunkName: "lodash" */ "./math.js").then(
					module => {
						debugger;
						// console.info(cube(3));
					}
				);
			}
		}
	},
	methods: {
		getData() {
			axios.get("/list").then(({ data }) => {
				console.info(data);
			});
		},
		watchInput(event) {
			debugger;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
</style>
