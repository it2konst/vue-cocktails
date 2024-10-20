<script setup>
const props = defineProps({
    cocktail: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="root">
        <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
            <div class="pic" :style="{ backgroundImage: `url(${cocktail.strDrinkThumb})` }"></div>
        </RouterLink>
        <div class="name">{{ cocktail.strDrink }}</div>
    </div>
</template>

<style lang="sass" scoped>
@import './../assets/styles/main.sass'

.root
    width: calc((100% - 76px) / 3)
    padding-right: 38px
    padding-bottom: 20px

    &:nth-child(3n + 3)
        padding-right: 0

.pic
    width: 120px
    height: 120px
    margin: 0 auto
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 100%
    border-radius: 8px

.name
    padding-top: 15px
    letter-spacing: 0.1rem
</style>
