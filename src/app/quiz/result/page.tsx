'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home } from 'lucide-react';
import { createChildProfile, generatePersonalizedActivities, getChildAgeInMonths } from '@/lib/db-actions';

export default function QuizResult() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [childName, setChildName] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('quiz-answers');
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed);
      setChildName(parsed[1] || 'Criança');
      
      // Salvar no banco de dados
      saveToDatabase(parsed);
    }
  }, []);

  const saveToDatabase = async (parsed: Record<number, any>) => {
    try {
      setSaving(true);

      // Criar perfil no Supabase
      const profile = await createChildProfile({
        name: parsed[1] || '',
        birth_date: parsed[2] || '',
        gender: parsed[3]?.toLowerCase() || undefined,
        parent_email: 'user@example.com', // Temporário - implementar auth depois
        uses_diapers: parsed[4] === 'Sim',
        speaks_full_sentences: parsed[5] === 'Sim',
        eats_alone: parsed[6] === 'Sim',
        has_allergies: parsed[7] !== 'Não',
        allergies_description: parsed[7] !== 'Não' ? parsed[7] : undefined,
        sleep_hours: parseFloat(parsed[8]) || 12,
        screen_time_minutes: parseInt(parsed[9]) || 0,
        devices_used: Array.isArray(parsed[10]) ? parsed[10] : [parsed[10]],
        favorite_activities: [],
        food_preferences: [],
      });

      // Calcular idade em meses
      const ageInMonths = await getChildAgeInMonths(parsed[2]);

      // Gerar atividades personalizadas
      await generatePersonalizedActivities(profile.id, ageInMonths);

      // Salvar ID do Supabase no localStorage para uso futuro
      const localProfile = {
        supabaseId: profile.id,
        name: parsed[1] || '',
        birthDate: parsed[2] || '',
        gender: parsed[3] || '',
        diapers: parsed[4] === 'Sim',
        speech: parsed[5] === 'Sim',
        eatsAlone: parsed[6] === 'Sim',
        allergies: parsed[7] || '',
        sleepHours: parseInt(parsed[8]) || 0,
        screenTime: parseInt(parsed[9]) || 0,
        devices: parsed[10] || [],
        development: {
          playsWithOthers: parsed[11] === 'Sim',
          respondsToName: parsed[12] === 'Sim',
          eyeContact: parsed[13] === 'Sim',
          repetitiveMovements: parsed[14] === 'Sim',
          sensitiveSounds: parsed[15] === 'Sim',
          pointsToObjects: parsed[16] === 'Sim',
          imitates: parsed[17] === 'Sim'
        },
        notes: parsed[18] || ''
      };
      
      localStorage.setItem('crescer-bem-profile', JSON.stringify(localProfile));
      
    } catch (error) {
      console.error('Erro ao salvar no banco:', error);
      // Salvar apenas localmente se falhar
      const localProfile = {
        name: parsed[1] || '',
        birthDate: parsed[2] || '',
        gender: parsed[3] || '',
        diapers: parsed[4] === 'Sim',
        speech: parsed[5] === 'Sim',
        eatsAlone: parsed[6] === 'Sim',
        allergies: parsed[7] || '',
        sleepHours: parseInt(parsed[8]) || 0,
        screenTime: parseInt(parsed[9]) || 0,
        devices: parsed[10] || [],
        development: {
          playsWithOthers: parsed[11] === 'Sim',
          respondsToName: parsed[12] === 'Sim',
          eyeContact: parsed[13] === 'Sim',
          repetitiveMovements: parsed[14] === 'Sim',
          sensitiveSounds: parsed[15] === 'Sim',
          pointsToObjects: parsed[16] === 'Sim',
          imitates: parsed[17] === 'Sim'
        },
        notes: parsed[18] || ''
      };
      localStorage.setItem('crescer-bem-profile', JSON.stringify(localProfile));
    } finally {
      setSaving(false);
    }
  };

  const handleGoHome = () => {
    router.push('/home');
  };

  const handleViewProfile = () => {
    router.push('/profile');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {saving ? 'Salvando...' : 'Perfil Completo!'}
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          O perfil de <span className="font-semibold text-purple-600">{childName}</span> foi salvo com sucesso. 
          Agora você pode acompanhar o desenvolvimento e receber orientações personalizadas.
        </p>

        <div className="bg-purple-50 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Próximos Passos
          </h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              Explore os marcos de desenvolvimento por idade
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              Registre momentos especiais no diário
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              Confira atividades personalizadas para a idade
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">✓</span>
              Acompanhe o crescimento com gráficos
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleGoHome}
            disabled={saving}
            className="flex-1 py-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Ir para Início
          </Button>
          <Button
            onClick={handleViewProfile}
            disabled={saving}
            variant="outline"
            className="flex-1 py-6 rounded-xl text-lg"
          >
            Ver Perfil Completo
          </Button>
        </div>
      </div>
    </div>
  );
}
