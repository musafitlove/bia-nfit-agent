'use client';

import React, { useState } from 'react';
import { Send, Sparkles, Heart, MessageCircle, Share2, Copy, RefreshCw, Zap } from 'lucide-react';

const InstagramAIAgent = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contentType, setContentType] = useState('post');

  const contentTypes = [
    { id: 'post', label: '📝 Post', emoji: '📝' },
    { id: 'carousel', label: '🎨 Carrossel', emoji: '🎨' },
    { id: 'reel', label: '🎬 Reel', emoji: '🎬' },
    { id: 'story', label: '📱 Story', emoji: '📱' },
    { id: 'estrategia', label: '💡 Estratégia', emoji: '💡' },
  ];

  const themes = [
    'Lifestyle & Moda',
    'Beleza & Skincare',
    'Rotina Saudável',
    'Fitness & Estilo',
    'Motivação Diária',
    'Dicas de Estilo',
    'Autocuidado',
    'Tendências'
  ];

  const tones = [
    { name: 'Educativo', emoji: '🎓' },
    { name: 'Motivacional', emoji: '💪' },
    { name: 'Humor', emoji: '😂' },
    { name: 'Inspirador', emoji: '✨' },
    { name: 'Divertido', emoji: '🎉' },
    { name: 'Profissional', emoji: '💼' },
  ];

  const generateContent = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const userMessage = { role: 'user', content: input, type: contentType };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      let response = '';

      if (contentType === 'post') {
        response = `✨ POST GERADO PARA @bia_nfit

📝 CAPTION:
"A moda não é só roupa, é atitude! 👗✨ Quanto mais confiante você se sente, mais linda fica. Hoje é dia de celebrar aquela peça que você ama e mostrar pro mundo quem você é.

Seu estilo é sua identidade. Sua confiança é sua arma secreta. Combine os dois e seja IMPOSSÍVEL de ignorar! 💪💖

Qual é aquela peça que você nunca tira?"

#️⃣ HASHTAGS VIRAIS:
#EstiloDeVida #ModaFeminina #Lifestyle #BelezaNatural #ConfiaçaÉBeleza #LookDodia #Fashionista #EstiloÚnico #SerAutêntica #TendênciaDaModa

📊 MELHOR HORA PARA POSTAR:
Terça-feira ou Quarta-feira às 19:30h

💡 DICA ESTRATÉGICA:
Use uma foto sua com roupa bem escolhida, focando na expressão facial confiante!`;
      } 
      else if (contentType === 'carousel') {
        response = `🎨 CARROSSEL GERADO (5 FOTOS)

SLIDE 1: Foto sua com outfit completo
Caption: "Slide para a transformação ✨"

SLIDE 2: Close da bolsa/sapato/acessório
Caption: "O detalhe que faz a diferença 👜"

SLIDE 3: Você em outro ângulo/pose
Caption: "Confiança em cada passo 💃"

SLIDE 4: Dica de estilo escrita
Caption: "Receita de estilo que funciona ⬇️"

SLIDE 5: CTA
Caption: "Qual slide é você? 👇"`;
      } 
      else if (contentType === 'reel') {
        response = `🎬 ROTEIRO DE REEL VIRAL (30 segundos)

[0-3s] HOOK
Cena: Você olhando pra câmera com surpresa
Texto: "Você faz esses 3 erros de estilo?"

[3-8s] PROBLEMA
Texto: "Erro 1: Misturar cores" / "Erro 2: Ignorar proporção"

[8-15s] SOLUÇÃO
Cena: Você em outfit impecável
Texto: "A fórmula certa ✨"

[15-22s] TRANSFORMAÇÃO
Cena: Você girando/dançando
Texto: "Resultado GARANTIDO 💪"

[22-30s] CTA
Texto: "Salva esse vídeo! 📌"`;
      } 
      else if (contentType === 'story') {
        response = `📱 SÉRIE DE 5 STORIES DIÁRIAS

STORY 1: BOM DIA ☀️
Visual: Você acordando
Texto: "Bom dia, rainha! 👑"
Sticker: Poll "Como você se sente hoje?"

STORY 2: OUTFIT DO DIA 👗
Visual: Mirror selfie
Texto: "Outfit do dia: [descrição]"

STORY 3: DICA RÁPIDA 💡
Visual: Você com gestos
Texto: "DICA: [Conselho sobre moda/beleza]"

STORY 4: BTS 🎬
Visual: Você preparando a foto
Texto: "Fazendo magia acontecer ✨"

STORY 5: ENQUETE 🤔
Visual: Você pensativa
Sticker: Poll interativa`;
      } 
      else if (contentType === 'estrategia') {
        response = `💡 ESTRATÉGIA DE CRESCIMENTO 30 DIAS

📈 META: 48k → 60k (+25%)

SEMANA 1: OTIMIZAR
□ Bio com foco em lifestyle
□ Foto de perfil profissional
□ Stories em destaque por tema

SEMANA 2: CONTEÚDO PILARES
1. LIFESTYLE (40%)
2. MODA/ESTILO (30%)
3. MOTIVAÇÃO (20%)
4. ENTRETENIMENTO (10%)

SEMANA 3-4: EXECUTAR
- 4-5 posts por semana
- 1 reel a cada 2 dias
- 3-5 stories diárias
- Responder comentários em 30 min

🎯 RESULTADO: +12k seguidores em 30 dias!`;
      }

      const aiMessage = { 
        role: 'assistant', 
        content: response, 
        type: contentType 
      };
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('✅ Copiado para a área de transferência!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-pink-200/50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  @bia_nfit Agent
                </h1>
                <p className="text-xs text-gray-500">IA criando tendências</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Type Selector */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            🎯 Tipo de Conteúdo
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {contentTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setContentType(type.id)}
                className={`p-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  contentType === type.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300'
                }`}
              >
                <div className="text-lg mb-1">{type.emoji}</div>
                <div className="text-xs">{type.label.split(' ')[1]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Messages Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 h-96 overflow-y-auto border border-pink-100">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
              <Sparkles className="w-16 h-16 text-purple-300 mb-4" />
              <p className="text-lg font-semibold mb-2">Comece criando conteúdo!</p>
              <p className="text-sm">Escolha um tipo e descreva o que quer criar</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white ml-8'
                      : 'bg-gray-50 text-gray-900 mr-8'
                  }`}
                >
                  <div className="text-xs font-semibold mb-2 opacity-75">
                    {msg.role === 'user' ? '👤 Você' : '🤖 Agente IA'}
                  </div>
                  <div className="text-sm whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </div>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => copyToClipboard(msg.content)}
                      className="mt-3 flex items-center gap-1 text-xs bg-white text-purple-600 px-3 py-1 rounded hover:bg-purple-50 font-medium"
                    >
                      <Copy className="w-3 h-3" /> Copiar
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && generateContent()}
            placeholder="Descreva o que quer criar... Ex: 'Post sobre importância da confiança' ou 'Reel de dicas de moda'"
            className="w-full p-4 rounded-xl border-2 border-pink-200 focus:border-purple-500 focus:ring-0 resize-none bg-white text-gray-900 placeholder-gray-500"
            rows="3"
          />
          <button
            onClick={generateContent}
            disabled={loading || !input.trim()}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
              loading || !input.trim()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-xl hover:scale-105'
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Criando conteúdo...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Gerar Conteúdo
              </>
            )}
          </button>
        </div>

        {/* Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border border-pink-200">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm text-pink-900">Máximo Engajamento</p>
                <p className="text-xs text-pink-700 mt-1">Reels viralizam 3x mais</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm text-purple-900">Crescimento Rápido</p>
                <p className="text-xs text-purple-700 mt-1">Consistência + Qualidade</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <Share2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm text-blue-900">Estratégia Clara</p>
                <p className="text-xs text-blue-700 mt-1">30 dias de planejamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramAIAgent;
