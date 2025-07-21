<template>
  <BaseLayout>
    <div class="dashboard-page">
      <div class="content-container">
        <h1 class="dashboard-title">Dashboard</h1>
        <p class="dashboard-welcome">Welcome to your Dr. AI dashboard! Here you can manage your account, view your diagnosis history, and more features coming soon.</p>
      </div>
    </div>
    <MedicalProfileForm v-if="!loadingProfile && showMedicalForm" @completed="handleMedicalFormCompleted" />
  </BaseLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseLayout from '../layouts/BaseLayout.vue'
import MedicalProfileForm from '../components/MedicalProfileForm.vue'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const showMedicalForm = ref(false)
const db = getFirestore()
const loadingProfile = ref(true)

const checkMedicalProfile = async (user) => {
  if (user) {
    const docRef = doc(db, 'medicalProfiles', user.uid)
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists() || !docSnap.data().completed) {
      showMedicalForm.value = true
    } else {
      showMedicalForm.value = false
    }
  } else {
    showMedicalForm.value = false
  }
  loadingProfile.value = false
}

onMounted(() => {
  loadingProfile.value = true
  onAuthStateChanged(auth, (user) => {
    checkMedicalProfile(user)
  })
})

const handleMedicalFormCompleted = () => {
  showMedicalForm.value = false
}
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}

.dashboard-title {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.dashboard-welcome {
  color: #cbd5e1;
  font-size: 1.2rem;
}
</style> 