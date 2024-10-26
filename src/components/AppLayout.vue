<script setup>
import { Back } from "@element-plus/icons-vue";

const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    },
    backFunc: {
        type: Function,
        required: true,
    },
    isBackButtonVisible: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <div class="root">
        <div :style="{ backgroundImage: `url(${props.imgUrl})` }" class="img"></div>
        <div class="main">
            <div class="buttons">
                <el-button class="back" v-if="props.isBackButtonVisible" type="primary" :icon="Back" circle @click="props.backFunc()" />
                <el-button class="btn">Get random cocktail</el-button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import './../assets/styles/main.sass'

.root
    display: flex
    min-height: 100vh
    background-color: $background

.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    position: relative
    width: 50%
    padding: 32px 40px

.btn
    position: absolute
    top: 32px
    right: 40px
    font-size: 16px
    font-family: 'Raleway', 'Arial', sans-serif
    background-color: $accent
    background-color: $accent
    color: $text

    &:hover, &:active
        background-color: darken($accent, 10%)

.buttons
    display: flex
    justify-content: space-between
    align-items: center

.back
    background-color: transparent
    border-color: #fff

    &:hover
        background-color: $accent
</style>
