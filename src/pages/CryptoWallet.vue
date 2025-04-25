<template>
    <header class="wallet-header">
        <div class="wallet-header-infos">
            <h2 class="infos-subtitle">Hello user</h2>
            <h1 class="infos-title"><span class="fw-300">Total in USDT:</span> 1200</h1>
        </div>
    </header>
    <main class="wallet-main-content">

    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
    .wallet-header {
        display: flex;
        width: 100%;
        padding: 15px 25px;
        height: 20vh;
    }

    .wallet-header-infos {
        color: white;
        background-color: var(--main-dark);
        width: 33%;
        display: flex;
        padding: 0px 15px;
        border-radius: 8px;
        flex-direction: column;
        justify-content: center;
    }

    .wallet-main-content {
        min-height: 80vh;
    }

    .infos-title {
        font-size: 22px;
        font-weight: 500;
    }

    .infos-subtitle {
        font-size: 16px;
        font-weight: 300;
    }

    @media screen and (max-width: 992px) {
        .wallet-header-infos {
            width: 100%;
        }
    }

    .fw-100 {
        font-weight: 100;
    }

    .fw-300 {
        font-weight: 300;
    }

    .fw-500 {
        font-weight: 500;
    }
</style>