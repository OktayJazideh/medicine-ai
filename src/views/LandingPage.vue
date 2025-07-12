<script setup>
import { ref } from 'vue'
import BaseLayout from '../layouts/BaseLayout.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <BaseLayout>
    <div class="landing-page">
      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="content-container">
          <div class="hero-container">
            <div class="hero-content">
              <h1 class="hero-title">
                Pain Diagnosis with 
                <span class="highlight">Artificial Intelligence</span>
              </h1>
              <p class="hero-description">
                Diagnose your pain using the most advanced artificial intelligence technology. 
                Simply select the location and type of pain, and AI will find the cause.
              </p>
              <div class="hero-buttons">
                <router-link to="/register" class="btn btn-primary">
                  Start Free
                </router-link>
                <button class="btn btn-secondary">
                  Watch Demo
                </button>
              </div>
            </div>
            <div class="hero-image">
              <div class="ai-doctor-illustration">
                <div class="doctor-icon">👨‍⚕️</div>
                <div class="ai-brain">🧠</div>
                <div class="pulse-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="features">
        <div class="content-container">
          <h2 class="section-title">Why Choose Dr. AI?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🤖</div>
              <h3>Advanced AI</h3>
              <p>Using the latest AI technologies for accurate pain diagnosis</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Instant pain diagnosis in less than 30 seconds</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔒</div>
              <h3>Complete Security</h3>
              <p>Your information remains completely private and secure</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📱</div>
              <h3>Easy Access</h3>
              <p>Access from anywhere, anytime via mobile or computer</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How it Works Section -->
      <section class="how-it-works">
        <div class="content-container">
          <h2 class="section-title">How It Works</h2>
          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <h3>Select Pain Location</h3>
              <p>Choose the exact location of your pain on the body map</p>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <h3>Describe Pain</h3>
              <p>Describe the type and intensity of your pain</p>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <h3>AI Diagnosis</h3>
              <p>AI identifies the likely cause of your pain</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="content-container">
          <h2>Ready to Get Started?</h2>
          <p>Sign up now and use our free services</p>
          <router-link to="/register" class="btn btn-primary btn-large">
            Sign Up Free
          </router-link>
        </div>
  </section>
    </div>
  </BaseLayout>
</template>

<style scoped>
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  font-family: var(--font-primary);
  direction: ltr;
  line-height: var(--leading-relaxed);
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}

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
  font-family: var(--font-display);
  letter-spacing: -0.02em;
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
  font-family: var(--font-secondary);
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
  font-weight: var(--font-semibold);
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

/* Hero Section */
.hero {
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--font-extrabold);
  margin-bottom: 1.5rem;
  line-height: var(--leading-tight);
  font-family: var(--font-display);
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 2rem;
  opacity: 0.9;
  color: #cbd5e1;
  font-family: var(--font-secondary);
  line-height: var(--leading-relaxed);
  font-weight: var(--font-normal);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: var(--font-semibold);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  font-family: var(--font-secondary);
  letter-spacing: 0.02em;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: white;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid #38bdf8;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
}

.btn-secondary:hover {
  background: #38bdf8;
  color: #0f172a;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
}

.btn-large {
  padding: 15px 40px;
  font-size: 1.1rem;
}

/* Hero Image */
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ai-doctor-illustration {
  position: relative;
  width: 300px;
  height: 300px;
  background: rgba(56, 189, 248, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(56, 189, 248, 0.3);
  box-shadow: 
    0 0 50px rgba(56, 189, 248, 0.2),
    inset 0 0 50px rgba(56, 189, 248, 0.1);
}

.doctor-icon {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.5));
}

.ai-brain {
  position: absolute;
  top: 20%;
  right: 20%;
  font-size: 2rem;
  animation: pulse 2s ease-in-out infinite;
  filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.5));
}

.pulse-lines {
  position: absolute;
  width: 100%;
  height: 100%;
}

.pulse-lines span {
  position: absolute;
  border: 2px solid rgba(56, 189, 248, 0.3);
  border-radius: 50%;
  animation: pulse-ring 2s ease-out infinite;
}

.pulse-lines span:nth-child(1) {
  width: 100%;
  height: 100%;
  animation-delay: 0s;
}

.pulse-lines span:nth-child(2) {
  width: 80%;
  height: 80%;
  animation-delay: 0.5s;
}

.pulse-lines span:nth-child(3) {
  width: 60%;
  height: 60%;
  animation-delay: 1s;
}

/* Features Section */
.features {
  padding: 80px 0;
  background: #0f172a;
  position: relative;
  width: 100%;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 3rem;
  color: #ffffff;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  letter-spacing: -0.02em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.feature-card {
  background: rgba(30, 41, 59, 0.8);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 10px 40px rgba(56, 189, 248, 0.2);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.5));
}

.feature-card h3 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  position: relative;
  z-index: 1;
  font-family: var(--font-display);
  font-weight: var(--font-semibold);
  letter-spacing: -0.01em;
}

.feature-card p {
  color: #cbd5e1;
  line-height: var(--leading-relaxed);
  position: relative;
  z-index: 1;
  font-family: var(--font-secondary);
  font-weight: var(--font-normal);
}

/* How it Works Section */
.how-it-works {
  padding: 80px 0;
  background: #1e293b;
  position: relative;
  width: 100%;
}

.how-it-works::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
}

.step {
  text-align: center;
  padding: 2rem;
  background: rgba(15, 23, 42, 0.8);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  transition: all 0.3s ease;
}

.step:hover {
  border-color: rgba(56, 189, 248, 0.5);
  box-shadow: 0 10px 40px rgba(56, 189, 248, 0.2);
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: var(--font-bold);
  margin: 0 auto 1rem;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  font-family: var(--font-display);
}

.step h3 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-family: var(--font-display);
  font-weight: var(--font-semibold);
  letter-spacing: -0.01em;
}

.step p {
  color: #cbd5e1;
  font-family: var(--font-secondary);
  line-height: var(--leading-relaxed);
}

/* CTA Section */
.cta {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 70%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.cta h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  letter-spacing: -0.02em;
}

.cta p {
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 2rem;
  opacity: 0.9;
  color: #cbd5e1;
  position: relative;
  z-index: 1;
  font-family: var(--font-secondary);
  line-height: var(--leading-relaxed);
}

/* Footer */
.footer {
  background: #0a0a0a;
  color: white;
  padding: 40px 0 20px;
  border-top: 1px solid rgba(56, 189, 248, 0.2);
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
  font-family: var(--font-display);
  font-weight: var(--font-semibold);
  letter-spacing: -0.01em;
}

.footer-section a {
  display: block;
  color: #cbd5e1;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  font-family: var(--font-secondary);
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
  font-family: var(--font-secondary);
  font-size: 0.85rem;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
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

  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
  }

  .hero-buttons {
    justify-content: center;
  }

  .ai-doctor-illustration {
    width: 250px;
    height: 250px;
  }

  .section-title {
    font-size: clamp(1.8rem, 3vw, 2rem);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(1.8rem, 3vw, 2rem);
  }

  .hero-description {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }

  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>

