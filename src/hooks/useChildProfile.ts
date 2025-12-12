'use client';

import { useState, useEffect } from 'react';
import { ChildProfile } from '@/lib/types';

const STORAGE_KEY = 'crescer-bem-profile';

export function useChildProfile() {
  const [profile, setProfile] = useState<ChildProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se estamos no cliente antes de acessar localStorage
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    // Carregar perfil do localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProfile(parsed);
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveProfile = (newProfile: ChildProfile) => {
    if (typeof window === 'undefined') return;
    
    const updated = {
      ...newProfile,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setProfile(updated);
  };

  const clearProfile = () => {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem(STORAGE_KEY);
    setProfile(null);
  };

  const calculateAge = (birthDate: string): { years: number; months: number; totalMonths: number } => {
    const birth = new Date(birthDate);
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    const totalMonths = years * 12 + months;
    
    return { years, months, totalMonths };
  };

  return {
    profile,
    loading,
    saveProfile,
    clearProfile,
    calculateAge,
    hasProfile: !!profile
  };
}
