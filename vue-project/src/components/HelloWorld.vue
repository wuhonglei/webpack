<template>
	<div class="hello">
		<button @click="getData">获取数据</button>
		<!-- <div class="container">
			<div class="child">
				<p>第一个</p>
				<p>第二个</p>
				<p>第三个</p>
			</div>
		</div> -->
		<input type="text" v-model="name">
		{{name}}
		<avatar username="Jane Doe"></avatar>
		<avatar username="吴洪磊" :src="imgSrc"></avatar>
		<avatar username="林健"></avatar>
	</div>
</template>

<script>
import axios from "axios";
import Avatar from 'vue-avatar'
import imgSrc from './person.jpeg';

export default {
	name: "HelloWorld",
	components: {
		Avatar
	},
	props: {
		msg: String
	},
	data () {
		return {
			name: '',
			imgSrc: imgSrc
		};
	},
	watch: {
		name(newValue) {
			if (newValue.includes('wuhonglei')) {
				import(/* webpackChunkName: "lodash" */'./math.js')
					.then((module) => {
						debugger;
						// console.info(cube(3));
					})
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
			debugger
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.container {
  box-sizing: border-box;
  width: 400px;
  height: 200px;
  background-color: lightblue;
  --test: red;

  & .child {
    width: 200px;
    height: 100px;
    filter: opacity(0.5);
  }

  & .child p:matches(:first-child, :last-child) {
    color: var(--test);
  }

  &:hover {
       box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
}
</style>
