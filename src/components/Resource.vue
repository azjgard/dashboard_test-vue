<template>
  <div>
    <h2>{{ info.name }}</h2>
    <ul>
      <li v-for="(value, key) in info.info" v-bind:key="key">
        <b>{{ key }}</b>: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'resource',
  props: ['info'],
}
</script>

<style scoped>
div {
	background-color: #ccc;
	box-shadow: 5px 5px 10px #aaa;
	margin: 10px 0;
	padding: 10px;
}
h2 {
	margin: 0;
	color: #1f86c9;
}
</style>
