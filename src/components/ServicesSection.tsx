import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import pilatesImg from '../assets/images/service_pilates_1792356860774.jpg';
import fisioImg from '../assets/images/service_fisioterapia_1792356861990.jpg';
import manualImg from '../assets/images/service_terapias_manuais_1792356861872.jpg';
import aromaImg from '../assets/images/service_aromaterapia_1792356862107.jpg';
import { ServiceData } from './ServiceModal';

interface ServicesSectionProps {
  onSelectService: (service: ServiceData) => void;
}

export const servicesData: ServiceData[] = [
  {
    id: 'pilates',
    title: 'Pilates',
    subtitle: 'Studio & Aparelhos Completos',
    image: pilatesImg,
    description: 'Aulas personalizadas com equipamentos completos de Pilates (Reformer, Cadillac, Chair e Barrel). Com foco em alinhamento postural, fortalecimento do core, respiração e flexibilidade, respeitando os limites e objetivos individuais de cada praticante.',
    benefits: [
      'Fortalecimento muscular profundo e seguro',
      'Correção postural e descompressão da coluna',
      'Aumento da flexibilidade e mobilidade articular',
      'Redução de dores crônicas e estresse'
    ],
    forWho: ['Todas as idades', 'Gestantes', 'Idosos', 'Praticantes de esportes', 'Pessoas com dores na coluna'],
    sessionTime: '55 minutos'
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    subtitle: 'Ortopédica & Reabilitação',
    image: fisioImg,
    description: 'Atendimento clínico focado em restaurar a funcionalidade, reabilitar lesões musculoesqueléticas e acelerar a recuperação pós-operatória com técnicas baseadas em evidências científicas e conduta humanizada.',
    benefits: [
      'Tratamento eficaz de bursites, tendinites e hérnias',
      'Reabilitação articular de joelho, quadril e ombro',
      'Treinamento proprioceptivo e retorno seguro às atividades',
      'Prevenção de recidivas e novos traumas'
    ],
    forWho: ['Pós-operatório', 'Atletas amadores', 'Dores crônicas', 'Recuperação de traumas'],
    sessionTime: '60 minutos'
  },
  {
    id: 'terapias-manuais',
    title: 'Terapias Manuais',
    subtitle: 'Liberação Miofascial & Mobilizações',
    image: manualImg,
    description: 'Conjunto de técnicas manuais especializadas que atuam diretamente nos tecidos musculares e articulares. Promove alívio imediato de nós de tensão muscular, melhora da circulação sanguínea e amplitude de movimento.',
    benefits: [
      'Alívio instantâneo de pontos de gatilho e contraturas',
      'Melhora da flexibilidade e redução de rigidez muscular',
      'Estímulo da circulação local e oxigenação tecidual',
      'Sensação de leveza e relaxamento profundo'
    ],
    forWho: ['Cansaço muscular', 'Tensão cervical e lombar', 'Bruxismo e estresse', 'Sobrecarga física'],
    sessionTime: '50 a 60 minutos'
  },
  {
    id: 'aromaterapia',
    title: 'Aromaterapia Clínica',
    subtitle: 'Cuidado Integrativo e Natural',
    image: aromaImg,
    description: 'Uso terapêutico de óleos essenciais 100% puros e certificados para auxiliar na regulação do sistema nervoso, redução da ansiedade, modulação da dor crônica e indução de relaxamento durante as sessões.',
    benefits: [
      'Diminuição significativa dos níveis de estresse e ansiedade',
      'Apoio no controle de dores de cabeça e cefaleias tensionais',
      'Melhora do padrão respiratório e qualidade do sono',
      'Sinergia perfeita com as práticas corporais da clínica'
    ],
    forWho: ['Ansiedade e insônia', 'Dores tensionais', 'Equilíbrio emocional', 'Busca por bem-estar natural'],
    sessionTime: 'Integrada ou sessão avulsa de 45 min'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif-custom text-3xl sm:text-4xl text-[#242724] tracking-tight">
              Nossos Serviços
            </h2>
            <p className="text-sm text-[#5D645A] mt-2 max-w-lg">
              Tratamentos integrados e sob medida conduzidos por fisioterapeutas com dedicação exclusiva.
            </p>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#8C9884] font-semibold hidden md:block">
            Excelência Clínica • MINAC
          </span>
        </div>

        {/* 4 Cards Grid matching image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E2DBD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE7DC]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[#3D4739] shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-custom text-xl font-medium text-[#242724] group-hover:text-[#B85B38] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#555C52] mt-2 leading-relaxed">
                    {service.description.split('.')[0] + '.'}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#F0EBE0] flex items-center justify-between text-xs font-semibold text-[#B85B38]">
                  <span>Saiba mais e detalhes</span>
                  <span className="text-[#3D4739] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
