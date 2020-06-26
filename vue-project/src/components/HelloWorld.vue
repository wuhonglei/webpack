<template>
	<div class="hello">
		<button @click="getData">获取数据</button>
		<div class="container">
			<div class="child">
				<p>第一个</p>
				<p>第二个</p>
				<p>第三个</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	methods: {
		getData() {
			axios.get("/list").then(({ data }) => {
				console.info(data);
			});
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

  & .child {
    width: 200px;
    height: 100px;
    filter: opacity(0.5);
  }

  & .child p:matches(:first-child, :last-child) {
    color: red;
  }

  &:hover {
       box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
}
</style>
