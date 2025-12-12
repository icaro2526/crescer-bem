'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Baby, Calendar, Heart, Activity, BookOpen, Bell, TrendingUp, Plus } from 'lucide-react';
import { getChildProfile, getMilestonesByChild, getDailyEntriesByChild, getActivitiesByChild, getUpcomingHealthRecords } from '@/lib/db-actions';

export default function HomePage() {
  const router = useRouter();
  const [childProfile, setChildProfile] = useState<any>(null);
  const [milestones, setMilestones] = useState<any[]>([]);
  const [recentEntries, setRecentEntries] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [upcomingReminders, setUpcomingReminders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Buscar perfil do localStorage (temporário até implementar auth)
      const storedProfile = localStorage.getItem('crescer-bem-profile');
      if (!storedProfile) {
        router.push('/');
        return;
      }

      const profile = JSON.parse(storedProfile);
      
      // Se tiver ID do Supabase, buscar dados do banco
      if (profile.supabaseId) {
        const [dbProfile, dbMilestones, dbEntries, dbActivities, dbReminders] = await Promise.all([
          getChildProfile(profile.supabaseId),
          getMilestonesByChild(profile.supabaseId),
          getDailyEntriesByChild(profile.supabaseId, 7),
          getActivitiesByChild(profile.supabaseId, false),
          getUpcomingHealthRecords(profile.supabaseId),
        ]);

        setChildProfile(dbProfile);
        setMilestones(dbMilestones || []);
        setRecentEntries(dbEntries || []);
        setActivities(dbActivities || []);
        setUpcomingReminders(dbReminders || []);
      } else {
        setChildProfile(profile);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate);
    const today = new Date();
    const months = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) return `${months} meses`;
    if (remainingMonths === 0) return `${years} ${years === 1 ? 'ano' : 'anos'}`;
    return `${years} ${years === 1 ? 'ano' : 'anos'} e ${remainingMonths} ${remainingMonths === 1 ? 'mês' : 'meses'}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="animate-pulse">
          <Baby className="w-16 h-16 text-purple-400" />
        </div>
      </div>
    );
  }

  if (!childProfile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{childProfile.name}</h1>
                <p className="text-gray-600">{calculateAge(childProfile.birthDate || childProfile.birth_date)}</p>
              </div>
            </div>
            <Button
              onClick={() => router.push('/profile')}
              variant="outline"
              className="rounded-full"
            >
              Ver Perfil
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Marcos</p>
                <p className="text-xl font-bold text-gray-800">{milestones.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Registros</p>
                <p className="text-xl font-bold text-gray-800">{recentEntries.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Atividades</p>
                <p className="text-xl font-bold text-gray-800">{activities.length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Bell className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Lembretes</p>
                <p className="text-xl font-bold text-gray-800">{upcomingReminders.length}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Diário */}
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                Diário
              </h2>
              <Button
                onClick={() => router.push('/diary')}
                size="sm"
                variant="ghost"
                className="text-purple-600"
              >
                <Plus className="w-4 h-4 mr-1" />
                Adicionar
              </Button>
            </div>
            {recentEntries.length > 0 ? (
              <div className="space-y-3">
                {recentEntries.slice(0, 3).map((entry) => (
                  <div key={entry.id} className="border-l-4 border-purple-400 pl-3 py-2">
                    <p className="text-sm font-medium text-gray-800">
                      {new Date(entry.entry_date).toLocaleDateString('pt-BR')}
                    </p>
                    <p className="text-sm text-gray-600">{entry.notes || 'Sem anotações'}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Nenhum registro ainda</p>
            )}
          </Card>

          {/* Marcos de Desenvolvimento */}
          <Card className="p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-600" />
                Marcos
              </h2>
              <Button
                onClick={() => router.push('/milestones')}
                size="sm"
                variant="ghost"
                className="text-pink-600"
              >
                <Plus className="w-4 h-4 mr-1" />
                Adicionar
              </Button>
            </div>
            {milestones.length > 0 ? (
              <div className="space-y-3">
                {milestones.slice(0, 3).map((milestone) => (
                  <div key={milestone.id} className="border-l-4 border-pink-400 pl-3 py-2">
                    <p className="text-sm font-medium text-gray-800">{milestone.title}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(milestone.achieved_date).toLocaleDateString('pt-BR')} • {milestone.age_in_months} meses
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Nenhum marco registrado</p>
            )}
          </Card>

          {/* Atividades Recomendadas */}
          <Card className="p-6 bg-white md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                Atividades Recomendadas
              </h2>
              <Button
                onClick={() => router.push('/activities')}
                size="sm"
                variant="ghost"
                className="text-blue-600"
              >
                Ver Todas
              </Button>
            </div>
            {activities.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {activities.slice(0, 4).map((activity) => (
                  <div key={activity.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-medium text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {activity.duration_minutes} min
                      </span>
                      <Button size="sm" variant="outline">
                        Marcar como feita
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Nenhuma atividade disponível</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
