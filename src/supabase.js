import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qybdgrrnbqaternixurk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5YmRncnJuYnFhdGVybml4dXJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTQyMDQsImV4cCI6MjA2Nzg5MDIwNH0.PVCN5RusUjMz8HOWd_2vKrXy83kB9xLDMNscuBMGmEA'

export const supabase = createClient(supabaseUrl, supabaseKey)
        