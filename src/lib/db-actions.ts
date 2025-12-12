'use server';

import { supabase } from './supabase';
import type { ChildProfile, DevelopmentMilestone, DailyEntry, RecommendedActivity, HealthRecord } from './supabase';

// ============================================
// CHILD PROFILES
// ============================================

export async function createChildProfile(data: Omit<ChildProfile, 'id' | 'created_at'>) {
  const { data: profile, error } = await supabase
    .from('child_profiles')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return profile;
}

export async function getChildProfilesByEmail(email: string) {
  const { data, error } = await supabase
    .from('child_profiles')
    .select('*')
    .eq('parent_email', email)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getChildProfile(id: string) {
  const { data, error } = await supabase
    .from('child_profiles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function updateChildProfile(id: string, updates: Partial<ChildProfile>) {
  const { data, error } = await supabase
    .from('child_profiles')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ============================================
// DEVELOPMENT MILESTONES
// ============================================

export async function createMilestone(data: Omit<DevelopmentMilestone, 'id' | 'created_at'>) {
  const { data: milestone, error } = await supabase
    .from('development_milestones')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return milestone;
}

export async function getMilestonesByChild(childId: string) {
  const { data, error } = await supabase
    .from('development_milestones')
    .select('*')
    .eq('child_id', childId)
    .order('achieved_date', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getMilestonesByType(childId: string, type: string) {
  const { data, error } = await supabase
    .from('development_milestones')
    .select('*')
    .eq('child_id', childId)
    .eq('milestone_type', type)
    .order('achieved_date', { ascending: false });

  if (error) throw error;
  return data;
}

// ============================================
// DAILY ENTRIES
// ============================================

export async function createDailyEntry(data: Omit<DailyEntry, 'id' | 'created_at'>) {
  const { data: entry, error } = await supabase
    .from('daily_entries')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return entry;
}

export async function getDailyEntriesByChild(childId: string, limit = 30) {
  const { data, error } = await supabase
    .from('daily_entries')
    .select('*')
    .eq('child_id', childId)
    .order('entry_date', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
}

export async function getDailyEntryByDate(childId: string, date: string) {
  const { data, error } = await supabase
    .from('daily_entries')
    .select('*')
    .eq('child_id', childId)
    .eq('entry_date', date)
    .single();

  if (error && error.code !== 'PGRST116') throw error; // PGRST116 = not found
  return data;
}

export async function updateDailyEntry(id: string, updates: Partial<DailyEntry>) {
  const { data, error } = await supabase
    .from('daily_entries')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ============================================
// RECOMMENDED ACTIVITIES
// ============================================

export async function createActivity(data: Omit<RecommendedActivity, 'id' | 'created_at'>) {
  const { data: activity, error } = await supabase
    .from('recommended_activities')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return activity;
}

export async function getActivitiesByChild(childId: string, completed?: boolean) {
  let query = supabase
    .from('recommended_activities')
    .select('*')
    .eq('child_id', childId);

  if (completed !== undefined) {
    query = query.eq('completed', completed);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function markActivityCompleted(id: string, completedDate: string) {
  const { data, error } = await supabase
    .from('recommended_activities')
    .update({ completed: true, completed_date: completedDate })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ============================================
// HEALTH RECORDS
// ============================================

export async function createHealthRecord(data: Omit<HealthRecord, 'id' | 'created_at'>) {
  const { data: record, error } = await supabase
    .from('health_records')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return record;
}

export async function getHealthRecordsByChild(childId: string, type?: string) {
  let query = supabase
    .from('health_records')
    .select('*')
    .eq('child_id', childId);

  if (type) {
    query = query.eq('record_type', type);
  }

  const { data, error } = await query.order('date', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getUpcomingHealthRecords(childId: string) {
  const today = new Date().toISOString().split('T')[0];
  
  const { data, error } = await supabase
    .from('health_records')
    .select('*')
    .eq('child_id', childId)
    .gte('next_date', today)
    .eq('reminder_enabled', true)
    .order('next_date', { ascending: true });

  if (error) throw error;
  return data;
}

// ============================================
// MEASUREMENTS
// ============================================

export async function createMeasurement(data: {
  child_id: string;
  measurement_date: string;
  weight_kg?: number;
  height_cm?: number;
  head_circumference_cm?: number;
  notes?: string;
}) {
  const { data: measurement, error } = await supabase
    .from('measurements')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return measurement;
}

export async function getMeasurementsByChild(childId: string) {
  const { data, error } = await supabase
    .from('measurements')
    .select('*')
    .eq('child_id', childId)
    .order('measurement_date', { ascending: false });

  if (error) throw error;
  return data;
}

// ============================================
// ANALYTICS & INSIGHTS
// ============================================

export async function getChildAgeInMonths(birthDate: string): Promise<number> {
  const birth = new Date(birthDate);
  const today = new Date();
  const months = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
  return months;
}

export async function generatePersonalizedActivities(childId: string, ageInMonths: number) {
  // Atividades personalizadas baseadas na idade
  const activities = [
    // 0-6 meses
    ...(ageInMonths <= 6 ? [
      { title: 'Tempo de Barriga', description: 'Coloque o bebê de bruços por 5-10 minutos para fortalecer pescoço e costas', category: 'physical', duration_minutes: 10 },
      { title: 'Conversar e Cantar', description: 'Fale e cante para o bebê, estimulando a linguagem', category: 'language', duration_minutes: 15 },
      { title: 'Brinquedos Coloridos', description: 'Mostre brinquedos coloridos para estimular a visão', category: 'sensory', duration_minutes: 10 },
    ] : []),
    
    // 6-12 meses
    ...(ageInMonths > 6 && ageInMonths <= 12 ? [
      { title: 'Engatinhar', description: 'Incentive o bebê a engatinhar com brinquedos à distância', category: 'physical', duration_minutes: 20 },
      { title: 'Esconde-Esconde', description: 'Brinque de esconder objetos para desenvolver permanência de objeto', category: 'cognitive', duration_minutes: 15 },
      { title: 'Música e Ritmo', description: 'Toque músicas e bata palmas no ritmo', category: 'sensory', duration_minutes: 15 },
    ] : []),
    
    // 1-2 anos
    ...(ageInMonths > 12 && ageInMonths <= 24 ? [
      { title: 'Andar e Explorar', description: 'Deixe a criança andar e explorar ambientes seguros', category: 'physical', duration_minutes: 30 },
      { title: 'Livros com Figuras', description: 'Leia livros com figuras grandes e coloridas', category: 'language', duration_minutes: 20 },
      { title: 'Empilhar Blocos', description: 'Brinque de empilhar blocos e derrubar', category: 'cognitive', duration_minutes: 20 },
    ] : []),
    
    // 2-3 anos
    ...(ageInMonths > 24 && ageInMonths <= 36 ? [
      { title: 'Correr e Pular', description: 'Atividades de correr, pular e dançar', category: 'physical', duration_minutes: 30 },
      { title: 'Contar Histórias', description: 'Conte histórias simples e peça para a criança recontar', category: 'language', duration_minutes: 20 },
      { title: 'Desenhar e Pintar', description: 'Ofereça giz de cera e papel para desenhar', category: 'creative', duration_minutes: 25 },
      { title: 'Brincar com Outras Crianças', description: 'Organize encontros com outras crianças', category: 'social', duration_minutes: 60 },
    ] : []),
    
    // 3-5 anos
    ...(ageInMonths > 36 ? [
      { title: 'Jogos de Regras Simples', description: 'Jogue jogos com regras simples como "Simon Says"', category: 'social', duration_minutes: 30 },
      { title: 'Quebra-Cabeças', description: 'Monte quebra-cabeças de 10-20 peças', category: 'cognitive', duration_minutes: 25 },
      { title: 'Teatro e Fantasia', description: 'Brinque de faz de conta com fantasias', category: 'creative', duration_minutes: 40 },
      { title: 'Andar de Bicicleta', description: 'Pratique andar de bicicleta com rodinhas', category: 'physical', duration_minutes: 30 },
      { title: 'Aprender Letras e Números', description: 'Atividades lúdicas com letras e números', category: 'cognitive', duration_minutes: 20 },
    ] : []),
  ];

  // Inserir atividades no banco
  const activitiesToInsert = activities.map(act => ({
    child_id: childId,
    title: act.title,
    description: act.description,
    category: act.category as 'physical' | 'cognitive' | 'social' | 'creative' | 'sensory',
    age_range_min: Math.floor(ageInMonths),
    age_range_max: Math.ceil(ageInMonths) + 6,
    duration_minutes: act.duration_minutes,
    completed: false,
  }));

  const { data, error } = await supabase
    .from('recommended_activities')
    .insert(activitiesToInsert)
    .select();

  if (error) throw error;
  return data;
}
