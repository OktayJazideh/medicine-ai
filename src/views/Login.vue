<template>
  <BaseLayout>
    <div class="login-page">
      <div class="content-container">
        <div class="login-container">
          <div class="login-card">
            <div class="login-header">
              <h1>Welcome Back</h1>
              <p>Sign in to continue your pain diagnosis journey</p>
            </div>
            
            <form @submit.prevent="login" class="login-form">
              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  id="email"
                  v-model="email" 
                  type="email" 
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="password">Password</label>
                <input 
                  id="password"
                  v-model="password" 
                  type="password" 
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div class="form-options">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="rememberMe" />
                  <span class="checkmark"></span>
                  Remember me
                </label>
                <a href="#forgot-password" class="forgot-link">Forgot Password?</a>
              </div>
              
              <button type="submit" class="login-btn" :disabled="loading">
                <span v-if="loading">Signing In...</span>
                <span v-else>Sign In</span>
              </button>
            </form>
            
            <div v-if="error" class="error-message">
              {{ error }}
            </div>
            
            <div class="divider">
              <span>or</span>
            </div>
            
            <button class="google-btn">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            
            <div class="register-link">
              Don't have an account? 
              <router-link to="/register">Sign Up</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import BaseLayout from '../layouts/BaseLayout.vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const error = ref('')
const loading = ref(false)

const login = async () => {
  error.value = ''
  loading.value = true
  
  try {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })

    if (signInError) {
      error.value = signInError.message
    } else {
      // Redirect to dashboard or home page
      window.location.href = '/'
    }
  } catch (err) {
    error.value = 'An unexpected error occurred. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  position: relative;
  overflow: hidden;
}

.login-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.login-container {
  width: 100%;
  max-width: 500px;
  position: relative;
  z-index: 1;
}

.login-card {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.login-card:hover {
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ffffff, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-header p {
  color: #cbd5e1;
  font-size: 1.1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #e2e8f0;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input {
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid rgba(56, 189, 248, 0.3);
  background: rgba(15, 23, 42, 0.6);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input::placeholder {
  color: #64748b;
}

.form-group input:focus {
  outline: none;
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
  background: rgba(15, 23, 42, 0.8);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cbd5e1;
  font-size: 0.9rem;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #38bdf8;
}

.forgot-link {
  color: #38bdf8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.forgot-link:hover {
  color: #a855f7;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

.login-btn {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: white;
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.login-btn:hover::before {
  left: 100%;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.3);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  padding: 12px 16px;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
}

.divider {
  text-align: center;
  margin: 2rem 0;
  position: relative;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(56, 189, 248, 0.3);
}

.divider span {
  background: rgba(30, 41, 59, 0.8);
  padding: 0 1rem;
  color: #64748b;
  font-size: 0.9rem;
}

.google-btn {
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.google-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.register-link {
  text-align: center;
  margin-top: 2rem;
  color: #cbd5e1;
}

.register-link a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.register-link a:hover {
  color: #a855f7;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
  .login-card {
    padding: 2rem;
    margin: 0 1rem;
  }
  
  .login-header h1 {
    font-size: 2rem;
  }
  
  .login-page {
    padding: 20px 0;
  }
  
  .form-options {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 1.5rem;
  }
  
  .login-header h1 {
    font-size: 1.8rem;
  }
  
  .form-group input {
    padding: 10px 14px;
  }
  
  .login-btn {
    padding: 12px 20px;
    font-size: 1rem;
  }
}
</style> 