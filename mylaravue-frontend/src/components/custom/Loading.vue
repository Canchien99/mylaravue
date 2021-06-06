<template>
    <div id="loading">
        <div class="okr-bg-beforesend">
            <img class="w-100" src="../../assets/unnamed.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #loading {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        overflow-x: hidden;
        overflow-y: auto;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999;
        overflow: hidden;
        outline: 0;
    }
    #loading .okr-bg-beforesend{
        width: 150px;
        height: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>