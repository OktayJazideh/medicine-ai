<template>
  <BaseLayout>
    <div class="register-page">
      <div class="content-container">
        <div class="register-container">
          <div class="register-card">
            <div class="register-header">
              <h1>Create Account</h1>
              <p>Join Dr. AI and start your pain diagnosis journey</p>
            </div>
            
            <button class="google-btn" @click="signUpWithGoogle">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style="width:20px; margin-right:8px;" />
              Sign up with Google
            </button>
            
            <form @submit.prevent="register" class="register-form">
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
                  placeholder="Create a password"
                  required
                />
              </div>
              
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input 
                  id="confirmPassword"
                  v-model="confirmPassword" 
                  type="password" 
                  placeholder="Confirm your password"
                  required
                />
              </div>
              
              <button type="submit" class="register-btn" :disabled="loading">
                <span v-if="loading">Creating Account...</span>
                <span v-else>Create Account</span>
              </button>
            </form>
            
            <div v-if="error" class="error-message">
              {{ error }}
            </div>
            
            <div v-if="success" class="success-message">
              {{ success }}
            </div>
            
            <div class="login-link">
              Already have an account? 
              <router-link to="/login">Sign In</router-link>
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
import { auth, provider, signInWithPopup } from '../firebase'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)

const register = async () => {
  // Reset messages
  error.value = ''
  success.value = ''
  
  // Validation
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }
  
  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters long'
    return
  }
  
  loading.value = true
  
  try {
    const { error: signupError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })

    if (signupError) {
      error.value = signupError.message
    } else {
      success.value = "Account created successfully! Please check your email to verify your account."
      // Clear form
      email.value = ''
      password.value = ''
      confirmPassword.value = ''
    }
  } catch (err) {
    error.value = 'An unexpected error occurred. Please try again.'
  } finally {
    loading.value = false
  }
}

const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    // User info: result.user
    router.push('/dashboard')
  } catch (error) {
    alert('Google sign-up failed: ' + error.message)
  }
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  position: relative;
  overflow: hidden;
}

.register-page::before {
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

.register-container {
  width: 100%;
  max-width: 500px;
  position: relative;
  z-index: 1;
}

.register-card {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.register-card:hover {
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

.register-header {
  text-align: center;
  margin-bottom: 2rem;
}

.register-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ffffff, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.register-header p {
  color: #cbd5e1;
  font-size: 1.1rem;
}

.register-form {
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

.register-btn {
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

.register-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.register-btn:hover::before {
  left: 100%;
}

.register-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.3);
}

.register-btn:disabled {
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

.success-message {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #86efac;
  padding: 12px 16px;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
}

.login-link {
  text-align: center;
  margin-top: 2rem;
  color: #cbd5e1;
}

.login-link a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.login-link a:hover {
  color: #a855f7;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #222;
  border: 1px solid #e2e8f0;
  border-radius: 25px;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.google-btn:hover {
  box-shadow: 0 0 10px #38bdf8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .register-card {
    padding: 2rem;
    margin: 0 1rem;
  }
  
  .register-header h1 {
    font-size: 2rem;
  }
  
  .register-page {
    padding: 20px 0;
  }
}

@media (max-width: 480px) {
  .register-card {
    padding: 1.5rem;
  }
  
  .register-header h1 {
    font-size: 1.8rem;
  }
  
  .form-group input {
    padding: 10px 14px;
  }
  
  .register-btn {
    padding: 12px 20px;
    font-size: 1rem;
  }
}
</style>


