<template>
  <div class="loading-component">
    <div class="loading-spinner"></div>
    <span>Loading...</span>
  </div>
</template>

<style scoped>
.loading-component {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.loading-spinner {
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--main-yellow);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
}
</style>