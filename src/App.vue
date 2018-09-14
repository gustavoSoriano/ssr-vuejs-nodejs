<template>
	<div id="app">
		<vHeader/>
		<main class="d-flex"> 
			<Cards />
			<Cards />
			<Cards />
		</main>
	</div>
</template>

<script>
import vHeader from './components/Header.vue'
import Cards from './components/Cards.vue'

export default {
	components:{
		vHeader, Cards
	}
}
</script>

<style lang="stylus">
	main
		width 70%
		margin auto
</style>
