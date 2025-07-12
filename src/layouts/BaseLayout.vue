<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import BackToTop from '../components/BackToTop.vue'

// Define props for customizing the layout
defineProps({
  showNavbar: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  pageClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="base-layout" :class="pageClass">
    <!-- Navbar -->
    <Navbar v-if="showNavbar" />

    <!-- Main Content -->
    <main class="main-content" :class="{ 'no-navbar': !showNavbar }">
      <slot />
    </main>

    <!-- Footer -->
    <Footer v-if="showFooter" />

    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<style scoped>
/* Base Layout Styles */
.base-layout {
  font-family: var(--font-primary);
  direction: ltr;
  line-height: var(--leading-relaxed);
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  width: 100%;
}

/* Main Content */
.main-content {
  min-height: calc(100vh - 70px);
  padding-top: 70px;
}

.main-content.no-navbar {
  padding-top: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    min-height: calc(100vh - 70px);
  }
}
</style> 