import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types para o banco de dados
export type ChildProfile = {
  id: string;
  created_at: string;
  name: string;
  birth_date: string;
  gender?: 'masculino' | 'feminino' | 'outro';
  photo_url?: string;
  parent_email: string;
  uses_diapers: boolean;
  speaks_full_sentences: boolean;
  eats_alone: boolean;
  has_allergies: boolean;
  allergies_description?: string;
  sleep_hours: number;
  screen_time_minutes: number;
  devices_used: string[];
  favorite_activities?: string[];
  food_preferences?: string[];
};

export type DevelopmentMilestone = {
  id: string;
  child_id: string;
  created_at: string;
  milestone_type: 'motor' | 'language' | 'social' | 'cognitive' | 'other';
  title: string;
  description?: string;
  achieved_date: string;
  age_in_months: number;
  photo_url?: string;
};

export type DailyEntry = {
  id: string;
  child_id: string;
  created_at: string;
  entry_date: string;
  mood: 'happy' | 'sad' | 'neutral' | 'irritated' | 'sleepy';
  sleep_hours: number;
  meals_count: number;
  activities: string[];
  notes?: string;
  photos?: string[];
};

export type RecommendedActivity = {
  id: string;
  child_id: string;
  created_at: string;
  title: string;
  description: string;
  category: 'physical' | 'cognitive' | 'social' | 'creative' | 'sensory';
  age_range_min: number;
  age_range_max: number;
  duration_minutes: number;
  completed: boolean;
  completed_date?: string;
};

export type HealthRecord = {
  id: string;
  child_id: string;
  created_at: string;
  record_type: 'vaccine' | 'appointment' | 'medication' | 'measurement';
  title: string;
  description?: string;
  date: string;
  next_date?: string;
  reminder_enabled: boolean;
};
