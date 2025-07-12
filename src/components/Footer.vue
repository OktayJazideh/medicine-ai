<script setup>
import { smoothScrollWithOffset } from '../utils/smoothScroll.js'

// Smooth scroll function with navbar offset
const smoothScrollTo = (targetId) => {
  smoothScrollWithOffset(targetId, 70) // 70px offset for navbar height
}
</script>

<template>
  <footer class="footer">
    <div class="content-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="font-display font-bold">Dr. AI</h3>
          <p class="font-secondary">Pioneering pain diagnosis with artificial intelligence</p>
        </div>
        <div class="footer-section">
          <h4 class="font-display font-semibold">Useful Links</h4>
          <router-link to="/" class="font-secondary">Home</router-link>
          <a href="#features" @click.prevent="smoothScrollTo('#features')" class="font-secondary">Features</a>
          <a href="#about" @click.prevent="smoothScrollTo('#about')" class="font-secondary">About Us</a>
          <a href="#contact" @click.prevent="smoothScrollTo('#contact')" class="font-secondary">Contact</a>
        </div>
        <div class="footer-section">
          <h4 class="font-display font-semibold">Support</h4>
          <a href="#help" class="font-secondary">Help</a>
          <a href="#faq" class="font-secondary">FAQ</a>
          <a href="#privacy" class="font-secondary">Privacy</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="font-secondary">&copy; 2024 Dr. AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer */
.footer {
  background: #0a0a0a;
  color: white;
  padding: 40px 0 20px;
  border-top: 1px solid rgba(56, 189, 248, 0.2);
  width: 100%;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #38bdf8;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
  letter-spacing: -0.01em;
}

.footer-section a {
  display: block;
  color: #cbd5e1;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.footer-section a:hover {
  color: #38bdf8;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(56, 189, 248, 0.2);
  color: #64748b;
  font-size: 0.85rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-section {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 480px) {
  .content-container {
    padding: 0 15px;
  }
  
  .footer {
    padding: 30px 0 15px;
  }
}
</style> 