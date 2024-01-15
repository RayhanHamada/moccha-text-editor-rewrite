<script lang="ts" setup>
const count = ref(1)
</script>

<template>
	<div>
		Current Count = {{ count }}
		<br />
		<button
			class="outline outline-2 outline-black rounded-md"
			@click="count++"
		>
			Increment
		</button>
	</div>
</template>
