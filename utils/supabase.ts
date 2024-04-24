import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ianjgstnzhmzcrbrnfbk.supabase.co';
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlhbmpnc3RuemhtemNyYnJuZmJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MjgzMzEsImV4cCI6MjAyOTQwNDMzMX0.EIcq-WUuaAlkyzG5wOjpKgC8f_U-b0C0Ad9frtcqtwM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
