<script setup>
import { ref } from 'vue'
import { smoothScrollWithOffset } from '../utils/smoothScroll.js'
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
const logout = () => signOut(auth)

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Smooth scroll function with navbar offset
const smoothScrollTo = (targetId) => {
  smoothScrollWithOffset(targetId, 70) // 70px offset for navbar height
  // Close mobile menu if open
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/" class="logo-link">
          <h2 class="font-display font-bold">Dr. AI</h2>
        </router-link>
      </div>
      
      <div class="nav-menu" :class="{ 'active': isMenuOpen }">
        <router-link to="/" class="nav-link font-medium" @click.prevent="smoothScrollTo('#home')">Home</router-link>
        <a href="#features" class="nav-link font-medium" @click.prevent="smoothScrollTo('#features')">Features</a>
        <a href="#about" class="nav-link font-medium" @click.prevent="smoothScrollTo('#about')">About</a>
        <a href="#contact" class="nav-link font-medium" @click.prevent="smoothScrollTo('#contact')">Contact</a>
        <router-link v-if="!userStore.user" to="/register" class="nav-link register-btn font-semibold">Sign Up</router-link>
        <router-link v-if="!userStore.user" to="/login" class="nav-link font-semibold">Login</router-link>
        <router-link v-if="userStore.user" to="/dashboard" class="nav-link font-semibold">Dashboard</router-link>
        <button v-if="userStore.user" @click="logout" class="nav-link font-semibold" style="background:none;border:none;cursor:pointer;">Logout</button>
      </div>
      
      <div class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar Styles */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
  z-index: 1000;
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo h2 {
  color: #38bdf8;
  font-size: 1.5rem;
  font-weight: var(--font-bold);
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
  letter-spacing: -0.02em;
}

.logo-link {
  text-decoration: none;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #e2e8f0;
  font-weight: var(--font-medium);
  transition: all 0.3s ease;
  position: relative;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
}

.nav-link:hover {
  color: #38bdf8;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: linear-gradient(90deg, #38bdf8, #a855f7);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.register-btn {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: white !important;
  padding: 10px 24px;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.register-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #38bdf8;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: rgba(10, 10, 10, 0.95);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    backdrop-filter: blur(20px);
    padding: 2rem 0;
    border-bottom: 1px solid rgba(56, 189, 248, 0.2);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }
}
</style> 