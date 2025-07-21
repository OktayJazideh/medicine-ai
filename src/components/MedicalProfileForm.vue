<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Complete Your Medical Profile</h2>
      <p class="info-msg">
        Completing this form is optional, but it will help Dr. AI provide more accurate diagnoses for you.
      </p>
      <form @submit.prevent="submitForm">
        <input v-model="form.name" placeholder="Full Name (Optional)" />
        <select v-model="form.gender">
          <option value="">Gender (Optional)</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input v-model="form.age" type="number" min="0" placeholder="Age (Optional)" />
        <input v-model="form.city" placeholder="City/Location (Optional)" />
        <input v-model="form.height" type="number" min="0" placeholder="Height (cm) (Optional)" />
        <input v-model="form.weight" type="number" min="0" placeholder="Weight (kg) (Optional)" />
        <input v-model="form.currentInjury" placeholder="Current Injury (Optional)" />
        <input v-model="form.pastInjury" placeholder="Past Injuries (Optional)" />
        <input v-model="form.currentDiseases" placeholder="Current Diseases (Optional)" />
        <input v-model="form.pastDiseases" placeholder="Past Diseases (Optional)" />
        <textarea v-model="form.other" placeholder="Other medical info (Optional)"></textarea>
        <button type="submit" :disabled="loading">Save & Continue</button>
        <div v-if="error" class="error-message">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { auth } from '../firebase'

const emit = defineEmits(['completed'])
const db = getFirestore()
const form = ref({
  name: '',
  gender: '',
  age: '',
  city: '',
  height: '',
  weight: '',
  currentInjury: '',
  pastInjury: '',
  currentDiseases: '',
  pastDiseases: '',
  other: ''
})
const loading = ref(false)
const error = ref('')

const submitForm = async () => {
  loading.value = true
  error.value = ''
  try {
    const user = auth.currentUser
    if (!user) {
      error.value = 'User not logged in.'
      loading.value = false
      return
    }
    await setDoc(doc(db, 'medicalProfiles', user.uid), {
      ...form.value,
      completed: true,
      updatedAt: new Date()
    })
    emit('completed')
  } catch (e) {
    error.value = 'Failed to save. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(10, 10, 10, 0.85);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: #1e293b;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(56, 189, 248, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-content h2 {
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.info-msg {
  color: #38bdf8;
  font-size: 1rem;
  margin-bottom: 1rem;
}
input, select, textarea {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #334155;
  background: #0f172a;
  color: #fff;
  margin-bottom: 0.7rem;
  font-size: 1rem;
}
button[type="submit"] {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
button[type="submit"]:hover {
  box-shadow: 0 0 10px #38bdf8;
}
.error-message {
  color: #f87171;
  margin-top: 0.5rem;
  font-size: 0.95rem;
}
</style> 