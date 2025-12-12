'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useChildProfile } from '@/hooks/useChildProfile';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Calendar, 
  Cake, 
  Baby,
  ArrowLeft,
  Edit,
  Trash2
} from 'lucide-react';

export default function PerfilPage() {
  const router = useRouter();
  const { profile, clearProfile, calculateAge } = useChildProfile();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Verifica se não tem perfil e marca para redirecionar
    if (!profile) {
      setShouldRedirect(true);
    }
  }, [profile]);

  useEffect(() => {
    // Redireciona em um efeito separado
    if (shouldRedirect) {
      router.push('/');
    }
  }, [shouldRedirect, router]);

  // Não renderiza nada se não tem perfil
  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="animate-pulse text-center">
          <Baby className="w-16 h-16 mx-auto text-purple-400 mb-4" />
          <p className="text-gray-600">Redirecionando...</p>
        </div>
      </div>
    );
  }

  const age = calculateAge(profile.birthDate);

  const handleDeleteProfile = () => {
    if (confirm('Tem certeza que deseja excluir o perfil? Esta ação não pode ser desfeita.')) {
      clearProfile();
      router.push('/');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getLabel = (value: string) => {
    const labels: Record<string, string> = {
      // Speech
      'nao-fala': 'Ainda não fala',
      'balbucia': 'Balbucia',
      'palavras-soltas': 'Palavras soltas',
      'frases-simples': 'Frases simples',
      'frases-completas': 'Frases completas',
      // Social
      'pouca': 'Pouca',
      'moderada': 'Moderada',
      'boa': 'Boa',
      'excelente': 'Excelente',
      // Routine
      'nenhuma': 'Sem rotina',
      'flexivel': 'Flexível',
      'estruturada': 'Estruturada',
      // Diapers
      'usa-sempre': 'Usa fraldas',
      'treinamento': 'Em treinamento',
      'nao-usa': 'Não usa',
      // Feeding
      'amamentacao': 'Amamentação',
      'mamadeira': 'Mamadeira',
      'solidos': 'Sólidos com ajuda',
      'autonomo': 'Come sozinho',
      // Tantrums
      'raras': 'Raramente',
      'ocasionais': 'Ocasionalmente',
      'frequentes': 'Frequentemente',
      'muito-frequentes': 'Muito frequentemente',
      // Interest
      'pouco': 'Pouco',
      'moderado': 'Moderado',
      'muito': 'Muito'
    };
    return labels[value] || value;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto p-6">
          <button
            onClick={() => router.push('/home')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <h1 className="text-3xl font-bold text-gray-800">
            Perfil da Criança
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-4">
              <Baby className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
              <p className="text-gray-600">
                {age.years > 0 ? `${age.years} ano${age.years > 1 ? 's' : ''}` : ''} 
                {age.years > 0 && age.months > 0 ? ' e ' : ''}
                {age.months > 0 ? `${age.months} ${age.months === 1 ? 'mês' : 'meses'}` : ''}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <Calendar className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Data de Nascimento</p>
                <p className="font-semibold text-gray-800">{formatDate(profile.birthDate)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
              <Cake className="w-6 h-6 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Idade</p>
                <p className="font-semibold text-gray-800">{age.totalMonths} meses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desenvolvimento */}
        {profile.development && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Desenvolvimento</h3>
            <div className="space-y-3">
              {profile.development.speech && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Fala</span>
                  <span className="font-semibold text-gray-800">{getLabel(profile.development.speech)}</span>
                </div>
              )}
              {profile.development.socialInteraction && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Interação Social</span>
                  <span className="font-semibold text-gray-800">{getLabel(profile.development.socialInteraction)}</span>
                </div>
              )}
              {profile.development.routine && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Rotina</span>
                  <span className="font-semibold text-gray-800">{getLabel(profile.development.routine)}</span>
                </div>
              )}
              {profile.development.diapers && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Fraldas</span>
                  <span className="font-semibold text-gray-800">{getLabel(profile.development.diapers)}</span>
                </div>
              )}
              {profile.development.feeding && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Alimentação</span>
                  <span className="font-semibold text-gray-800">{getLabel(profile.development.feeding)}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Comportamento */}
        {profile.behavior && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Comportamento</h3>
            <div className="space-y-3">
              {profile.behavior.tantrums && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Birras</span>
                  <span className="font-semibold text-gray-800">{getLabel(profile.behavior.tantrums)}</span>
                </div>
              )}
              {profile.behavior.interestInOthers && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Interesse em outras crianças</span>
                  <span className="font-semibold text-gray-800">{getLabel(profile.behavior.interestInOthers)}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sono */}
        {profile.sleep && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sono</h3>
            <div className="space-y-3">
              {profile.sleep.bedtime && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Horário de dormir</span>
                  <span className="font-semibold text-gray-800">{profile.sleep.bedtime}</span>
                </div>
              )}
              {profile.sleep.hoursPerNight && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Horas por noite</span>
                  <span className="font-semibold text-gray-800">{profile.sleep.hoursPerNight}h</span>
                </div>
              )}
              {profile.sleep.naps !== undefined && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Sonecas diárias</span>
                  <span className="font-semibold text-gray-800">{profile.sleep.naps}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Telas */}
        {profile.screenTime && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Uso de Telas</h3>
            <div className="space-y-3">
              {profile.screenTime.dailyMinutes !== undefined && (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Tempo diário</span>
                  <span className="font-semibold text-gray-800">{profile.screenTime.dailyMinutes} minutos</span>
                </div>
              )}
              {profile.screenTime.devices && profile.screenTime.devices.length > 0 && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 block mb-2">Dispositivos</span>
                  <div className="flex flex-wrap gap-2">
                    {profile.screenTime.devices.map(device => (
                      <span key={device} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {device.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => router.push('/quiz')}
            variant="outline"
            size="lg"
            className="flex-1 rounded-xl"
          >
            <Edit className="w-5 h-5 mr-2" />
            Editar Perfil
          </Button>
          <Button
            onClick={handleDeleteProfile}
            variant="destructive"
            size="lg"
            className="flex-1 rounded-xl"
          >
            <Trash2 className="w-5 h-5 mr-2" />
            Excluir Perfil
          </Button>
        </div>
      </div>
    </div>
  );
}
