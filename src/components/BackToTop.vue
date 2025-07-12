<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { scrollToTop } from '../utils/smoothScroll.js'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const goToTop = () => {
  scrollToTop()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="fade-slide">
    <button 
      v-if="showButton" 
      @click="goToTop"
      class="back-to-top"
      title="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(56, 189, 248, 0.4);
}

.back-to-top:active {
  transform: translateY(-1px);
}

/* Transition animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive */
@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}
</style> 