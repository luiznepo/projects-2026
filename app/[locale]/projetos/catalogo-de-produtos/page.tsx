'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

const IBM = 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif'

// ─── Image URLs ──────────────────────────────────────────────────────────────
const imgResearch  = '/images/research.png'
const imgBefore1   = '/images/before.png'
const imgBefore2   = '/images/before.png'
const imgWireAdd   = '/images/Wireframe%20Add.png'
const imgWireList  = '/images/Wireframe-list.png'
const imgMidAdd    = '/images/Mid-fi%20Add.png'
const imgMidList   = '/images/Mid-fi%20list.png'
const imgFinalAdd  = '/images/Final%20Add.png'
const imgFinalList = '/images/Final%20Add%20list.png'
const imgAvatar    = '/images/luiz.png'
const imgAvatar1   = '/images/Gabriel.png'
const imgAvatar2   = '/images/Luiza.png'
const imgAvatar3   = '/images/Soraia.png'

// ─── Content ─────────────────────────────────────────────────────────────────
const content = {
  pt: {
    back: '← Voltar',
    headerLabel: 'MERCADO PAGO - Desktop & mobile',
    headerTitle: 'Catálogo de Produtos',
    caseTitle: 'Case',
    caseLabel: 'Problemática',
    contextoLabel: 'Contexto: ',
    contexto: 'O Mercado Pago tinha uma visão fragmentada dos vendedores, limitada aos métodos de pagamento utilizados. Para as PMEs, ferramentas independentes já não eram suficientes para sustentar a rentabilidade e a retenção. Os concorrentes que oferecem software de gestão apresentam uma menor rotatividade, ajudando os comerciantes a expandir-se. Os comerciantes de maior dimensão também precisam de soluções integradas para lidar com o inventário, a força de trabalho e a complexidade fiscal',
    objetivoLabel: 'Objetivo de negócio: ',
    objetivo: 'A estratégia consiste em subir de gama, adquirindo e mantendo vendedores e contas corporativas de maior dimensão. O objetivo é tornar-se o principal parceiro financeiro, permitindo o crescimento dos negócios através de tecnologia integrada. Isto deverá aumentar a quota de mercado e o envolvimento em todo o ecossistema, reforçando a diferenciação e reduzindo o risco competitivo.',
    solucaoLabel: 'Solução: ',
    solucao: 'Criar um software de gestão (SWE) que oferece uma visão de 360° do negócio, consolidando as transações do Mercado Pago com vendas à vista e vendas de outros adquirentes. A plataforma oferece controlo de ponta a ponta com POS, gestão de catálogo e inventário (incluindo uploads em massa de produtos), faturação e um Hub Financeiro para acompanhamento do fluxo de caixa e desempenho. A adoção é acelerada com o "Selling Coach", uma experiência de integração que orienta a configuração inicial e as primeiras tarefas críticas.',
    papelLabel: 'Meu papel: ',
    papel: 'Trabalhei como Sr. UX Designer com parceria com o gerente de produto, Líderes de técnicos e de projetos na definição de funcionalidades e fui responsável pela experiência do usuário de ponta a ponta, incluindo os fluxos de navegação e o design da interface.',
    processoTitle: 'Processo',
    processoLabel: 'Entendendo os usuários e suas necessidades',
    comoLabel: 'Como as PMEs operam: ',
    como: 'A rotina dos vendedores de pequenas e médias empresas é intensa e geralmente centrada no proprietário, em operações enxutas (até 10 funcionários, geralmente em uma loja), principalmente presencialmente, mas cada vez mais híbrida por meio de redes sociais e vendas online.\n\nQuando se trata de atendimento ao cliente, a prioridade é vender rapidamente (pesquisar por nome/código) e, em muitos casos, negociar preços, exigindo flexibilidade no sistema. Para receber pagamentos, eles usam várias máquinas de cartão para otimizar as taxas e só as consultam para o básico do dia.',
    needsLabel: 'As necessidades diárias de um vendedor no seu negócio',
    needs: [
      { bold: 'Fluxos de cobrança: ', text: 'Facilidade e simplicidade na utilização das ferramentas de cobrança' },
      { bold: 'Gestão financeira: ', text: 'Consolidar todos os pagamentos, gerencie o fluxo de caixa com eficiência, adotar estratégias e ferramentas de poupança e planejamento e ter acesso a cartões de crédito e linhas de crédito.' },
      { bold: 'Gestão empresarial: ', text: 'Uma visão geral abrangente e gestão do seu negócio: vendas, faturação, produtos e inventário, fluxo de caixa, fornecedores, RH, clientes e informações.' },
    ],
    researchLink: 'Resultado das visitas aos PMEs',
    ferramentaTitle: 'Nossa ferramenta de produtos e inventário',
    ferramentaLabel: 'Análise',
    cenarioLabel: 'Cenário inicial: ',
    cenario: 'Identificámos que as ferramentas disponíveis para os clientes do Mercado Pago baseavam-se em experiências desenvolvidas para perfis diferentes da nossa estratégia Marketup. As ferramentas eram voltadas para vendas em mercados online e, portanto, precisávamos analisar minuciosamente novos recursos, arquitetura de informação e fluxos de tarefas que melhor atendessem aos nossos utilizadores.',
    opTitle: 'Oportunidades encontradas',
    ops: [
      'O preenchimento do campo de categoria é opcional para o Mercado Pago, uma vez que nem todos os lojistas utilizam categorias na gestão de seus produtos.',
      '28% dos usuários não conseguiam encontrar a categoria para o seu produto.',
      'Para adicionar um único produto, era necessário seguir três etapas, com pelo menos oito cliques.',
      'Havia muitos cards, títulos e descrições.',
      'O espaço para «alertas» pendentes ocupava muito espaço na tela e desconectada da lista.',
      'De acordo com as métricas analisadas, apenas 27% dos vendedores criaram itens com categoria nos últimos três meses. Portanto, esse espaço poderia ser melhor aproveitado com um recurso que atendesse a um número maior de usuários.',
      'O formato do filtro modal afasta o utilizador do fluxo principal da página, criando uma experiência mais intrusiva e menos fluida.',
      'O produto é apresentado em formato de card e há um grande espaço em branco, que poderia ser melhor aproveitado para organizar itens e informações acionáveis.',
      'Ações massivas poderia ser exibidas somente após uma seleção inicial do usuário para evitar sobrecarga cognitiva.',
    ],
    redesenhoTitle: 'Redesenhando as experiências',
    redesenhoLabel: 'Craft',
    step1: 'Criei wireframes e protótipos de baixa fidelidade para explorar diferentes soluções e recolher feedback inicial das partes interessadas.',
    layer1Add: 'CAMADA 1: Adicionar produto',
    layer2List: 'CAMADA 2: Lista de produtos / ações massivas',
    step2: 'Após alguns feedbacks internos começamos a trabalhar em média fidelidade usando os recursos do nosso design system',
    finalTitle: 'Solução final',
    melhorias: 'Melhorias aplicadas',
    finalImprovementsA: [
      'Autopreenchimento com inteligência artificial a partir de Gtin (código de barras)',
      'Removemos a exigência de preencher a categoria do produto.',
      'Reduzimos o formulário em uma tela única.',
    ],
    finalImprovementsALast: 'Reestruturamos o formulário com informações das quais os usuários PMEs necessitam para gerenciar um loja',
    finalSubItems: ['Unidade de medida: kg, Litro, Metros, Unidade', 'Preço de custo', 'Margem de lucro', 'Estoque e alerta de estoque mínimo'],
    finalImprovementsB: [
      'A área de itens pendentes foi reorganizada em separadores que segmentam os produtos, permitindo uma visualização mais simples e direta, ligada diretamente à lista e sem ocupar tanto espaço nem desviar a atenção do ecrã.',
      'Visualização de itens que se aproximam visualmente de uma tabela, um formato já conhecido e utilizado pela maioria dos vendedores. O formato também ajuda a visualizar mais itens de uma só vez, auxiliando na comparação e gestão.',
      'Como o filtro inclui a opção para o estado dos dados fiscais, estes foram adicionados à tabela, melhorando a funcionalidade de faturação.',
      'Para evitar sobrecarga, as opções de edição e eliminação só são exibidas quando se passa o cursor sobre a linha.',
    ],
    resultsTitle: 'Resultados e métricas',
    metrics: [
      { value: '+15%', title: 'Aumento das taxas de conversão', desc: 'A taxa de abandono caiu de 70% para 55%.' },
      { value: '-61%', title: 'Redução no tempo de fluxo de adicionar produto', desc: 'De 143 segundos para 55 segundos.' },
      { value: '+17%', title: 'Produtos adicionados no catálogo por vendedor', desc: 'Aumento de 2,5 para 3 produtos' },
    ],
    chartImplLabel: 'Implementação',
    highlight: 'Após o lançamento no Brasil e no México, ',
    highlightGreen: 'duplicamos o número de vendedores que utilizam o Catálogo do Mercado Pago',
    designersTitle: 'Designers no projeto',
  },
  en: {
    back: '← Back',
    headerLabel: 'MERCADO PAGO - Desktop & mobile',
    headerTitle: 'Product Catalog',
    caseTitle: 'Case',
    caseLabel: 'Problem',
    contextoLabel: 'Context: ',
    contexto: 'Mercado Pago had a fragmented view of sellers, limited to the payment methods used. For SMEs, independent tools were no longer sufficient to sustain profitability and retention. Competitors offering management software show lower churn, helping merchants expand. Larger merchants also need integrated solutions to manage inventory, workforce and tax complexity.',
    objetivoLabel: 'Business objective: ',
    objetivo: 'The strategy is to move up market, acquiring and retaining larger merchants and corporate accounts. The goal is to become the main financial partner, enabling business growth through integrated technology. This should increase market share and engagement across the ecosystem, reinforcing differentiation and reducing competitive risk.',
    solucaoLabel: 'Solution: ',
    solucao: 'Create a management software (SWE) that offers a 360° view of the business, consolidating Mercado Pago transactions with cash sales and sales from other acquirers. The platform offers end-to-end control with POS, catalog and inventory management (including bulk product uploads), invoicing and a Financial Hub for tracking cash flow and performance. Adoption is accelerated with the "Selling Coach", an onboarding experience that guides initial setup and first critical tasks.',
    papelLabel: 'My role: ',
    papel: 'I worked as Sr. UX Designer partnering with the product manager, technical and project leads in defining features and was responsible for the end-to-end user experience, including navigation flows and interface design.',
    processoTitle: 'Process',
    processoLabel: 'Understanding users and their needs',
    comoLabel: 'How SMEs operate: ',
    como: 'The routine of small and medium enterprise sellers is intense and generally owner-centered, with lean operations (up to 10 employees, usually in one store), mainly in-person but increasingly hybrid through social media and online sales.\n\nWhen it comes to customer service, the priority is to sell quickly (search by name/code) and in many cases negotiate prices, requiring system flexibility. To receive payments, they use multiple card machines to optimize rates and only consult them for the daily basics.',
    needsLabel: 'The daily needs of a seller in their business',
    needs: [
      { bold: 'Billing flows: ', text: 'Ease and simplicity in using billing tools' },
      { bold: 'Financial management: ', text: 'Consolidate all payments, efficiently manage cash flow, adopt savings and planning strategies and tools, and have access to credit cards and lines of credit.' },
      { bold: 'Business management: ', text: 'A comprehensive overview and management of your business: sales, invoicing, products and inventory, cash flow, suppliers, HR, customers and information.' },
    ],
    researchLink: 'SME visit results',
    ferramentaTitle: 'Our products and inventory tool',
    ferramentaLabel: 'Analysis',
    cenarioLabel: 'Initial scenario: ',
    cenario: 'We identified that the tools available to Mercado Pago customers were based on experiences developed for profiles different from our Marketup strategy. The tools were geared towards online marketplace sales and therefore we needed to thoroughly analyze new features, information architecture and task flows that best served our users.',
    opTitle: 'Opportunities found',
    ops: [
      'The category field is optional for Mercado Pago, as not all merchants use categories in managing their products.',
      '28% of users could not find the category for their product.',
      'To add a single product, it was necessary to follow three steps with at least eight clicks.',
      'There were too many cards, titles and descriptions.',
      'The space for pending "alerts" took up too much screen space and was disconnected from the list.',
      'According to the analyzed metrics, only 27% of sellers created items with categories in the last three months. Therefore, this space could be better used with a feature that serves a larger number of users.',
      'The modal filter format takes the user away from the main page flow, creating a more intrusive and less fluid experience.',
      'The product is displayed in card format and there is a large white space, which could be better used to organize items and actionable information.',
      'Mass actions could be displayed only after an initial user selection to avoid cognitive overload.',
    ],
    redesenhoTitle: 'Redesigning the experiences',
    redesenhoLabel: 'Craft',
    step1: 'I created wireframes and low-fidelity prototypes to explore different solutions and gather initial stakeholder feedback.',
    layer1Add: 'LAYER 1: Add product',
    layer2List: 'LAYER 2: Product list / mass actions',
    step2: 'After some internal feedback we started working in medium fidelity using our design system resources',
    finalTitle: 'Final solution',
    melhorias: 'Applied improvements',
    finalImprovementsA: [
      'AI auto-fill from Gtin (barcode)',
      'We removed the requirement to fill in the product category.',
      'We reduced the form to a single screen.',
    ],
    finalImprovementsALast: 'We restructured the form with information SME users need to manage a store',
    finalSubItems: ['Unit of measure: kg, Liter, Meters, Unit', 'Cost price', 'Profit margin', 'Stock and minimum stock alert'],
    finalImprovementsB: [
      'The pending items area was reorganized into tabs that segment products, allowing a simpler and more direct view, linked directly to the list without occupying as much space or diverting screen attention.',
      'Item visualization that visually resembles a table, a format already known and used by most sellers. The format also helps visualize more items at once, aiding comparison and management.',
      'As the filter includes the option for the tax data status, these were added to the table, improving the invoicing functionality.',
      'To avoid overload, edit and delete options are only shown when hovering over the row.',
    ],
    resultsTitle: 'Results and metrics',
    metrics: [
      { value: '+15%', title: 'Increase in conversion rates', desc: 'The abandonment rate dropped from 70% to 55%.' },
      { value: '-61%', title: 'Reduction in add product flow time', desc: 'From 143 seconds to 55 seconds.' },
      { value: '+17%', title: 'Products added to catalog per seller', desc: 'Increase from 2.5 to 3 products' },
    ],
    chartImplLabel: 'Implementation',
    highlight: 'After launch in Brazil and Mexico, ',
    highlightGreen: 'we doubled the number of sellers using the Mercado Pago Catalog',
    designersTitle: 'Designers on the project',
  },
  es: {
    back: '← Volver',
    headerLabel: 'MERCADO PAGO - Desktop & mobile',
    headerTitle: 'Catálogo de Productos',
    caseTitle: 'Case',
    caseLabel: 'Problemática',
    contextoLabel: 'Contexto: ',
    contexto: 'Mercado Pago tenía una visión fragmentada de los vendedores, limitada a los métodos de pago utilizados. Para las PyMEs, las herramientas independientes ya no eran suficientes para sostener la rentabilidad y la retención. Los competidores que ofrecen software de gestión presentan una menor rotatividad, ayudando a los comerciantes a expandirse. Los comerciantes de mayor tamaño también necesitan soluciones integradas para gestionar el inventario, la fuerza laboral y la complejidad fiscal.',
    objetivoLabel: 'Objetivo de negocio: ',
    objetivo: 'La estrategia consiste en subir de segmento, adquiriendo y reteniendo vendedores y cuentas corporativas de mayor tamaño. El objetivo es convertirse en el principal socio financiero, permitiendo el crecimiento del negocio a través de tecnología integrada. Esto debería aumentar la cuota de mercado y el compromiso en todo el ecosistema, reforzando la diferenciación y reduciendo el riesgo competitivo.',
    solucaoLabel: 'Solución: ',
    solucao: 'Crear un software de gestión (SWE) que ofrezca una visión 360° del negocio, consolidando las transacciones de Mercado Pago con ventas en efectivo y ventas de otros adquirentes. La plataforma ofrece control de extremo a extremo con POS, gestión de catálogo e inventario (incluyendo cargas masivas de productos), facturación y un Hub Financiero para el seguimiento del flujo de caja y el rendimiento. La adopción se acelera con el "Selling Coach", una experiencia de incorporación que orienta la configuración inicial y las primeras tareas críticas.',
    papelLabel: 'Mi rol: ',
    papel: 'Trabajé como Sr. UX Designer en asociación con el gerente de producto, líderes técnicos y de proyectos en la definición de funcionalidades y fui responsable de la experiencia de usuario de extremo a extremo, incluyendo los flujos de navegación y el diseño de la interfaz.',
    processoTitle: 'Proceso',
    processoLabel: 'Entendiendo a los usuarios y sus necesidades',
    comoLabel: 'Cómo operan las PyMEs: ',
    como: 'La rutina de los vendedores de pequeñas y medianas empresas es intensa y generalmente centrada en el propietario, con operaciones lean (hasta 10 empleados, generalmente en una tienda), principalmente presencial pero cada vez más híbrida a través de redes sociales y ventas online.\n\nEn cuanto a la atención al cliente, la prioridad es vender rápidamente (buscar por nombre/código) y en muchos casos negociar precios, requiriendo flexibilidad en el sistema. Para recibir pagos, usan varias máquinas de tarjeta para optimizar tasas y solo las consultan para lo básico del día.',
    needsLabel: 'Las necesidades diarias de un vendedor en su negocio',
    needs: [
      { bold: 'Flujos de cobro: ', text: 'Facilidad y simplicidad en el uso de las herramientas de cobro' },
      { bold: 'Gestión financiera: ', text: 'Consolidar todos los pagos, gestionar eficientemente el flujo de caja, adoptar estrategias y herramientas de ahorro y planificación, y tener acceso a tarjetas de crédito y líneas de crédito.' },
      { bold: 'Gestión empresarial: ', text: 'Una visión general integral y gestión de su negocio: ventas, facturación, productos e inventario, flujo de caja, proveedores, RRHH, clientes e información.' },
    ],
    researchLink: 'Resultado de las visitas a PyMEs',
    ferramentaTitle: 'Nuestra herramienta de productos e inventario',
    ferramentaLabel: 'Análisis',
    cenarioLabel: 'Escenario inicial: ',
    cenario: 'Identificamos que las herramientas disponibles para los clientes de Mercado Pago se basaban en experiencias desarrolladas para perfiles diferentes a nuestra estrategia Marketup. Las herramientas estaban orientadas a ventas en mercados online y, por lo tanto, necesitábamos analizar minuciosamente nuevas funciones, arquitectura de información y flujos de tareas que mejor atendieran a nuestros usuarios.',
    opTitle: 'Oportunidades encontradas',
    ops: [
      'El campo de categoría es opcional para Mercado Pago, ya que no todos los comerciantes usan categorías en la gestión de sus productos.',
      'El 28% de los usuarios no podían encontrar la categoría para su producto.',
      'Para agregar un solo producto, era necesario seguir tres pasos con al menos ocho clics.',
      'Había demasiadas tarjetas, títulos y descripciones.',
      'El espacio para "alertas" pendientes ocupaba demasiado espacio en pantalla y estaba desconectado de la lista.',
      'Según las métricas analizadas, solo el 27% de los vendedores crearon artículos con categoría en los últimos tres meses. Por lo tanto, este espacio podría aprovecharse mejor con una función que sirva a un mayor número de usuarios.',
      'El formato del filtro modal aleja al usuario del flujo principal de la página, creando una experiencia más intrusiva y menos fluida.',
      'El producto se presenta en formato de tarjeta y hay un gran espacio en blanco, que podría aprovecharse mejor para organizar artículos e información accionable.',
      'Las acciones masivas podrían mostrarse solo después de una selección inicial del usuario para evitar la sobrecarga cognitiva.',
    ],
    redesenhoTitle: 'Rediseñando las experiencias',
    redesenhoLabel: 'Craft',
    step1: 'Creé wireframes y prototipos de baja fidelidad para explorar diferentes soluciones y recopilar comentarios iniciales de las partes interesadas.',
    layer1Add: 'CAPA 1: Agregar producto',
    layer2List: 'CAPA 2: Lista de productos / acciones masivas',
    step2: 'Después de algunos comentarios internos comenzamos a trabajar en media fidelidad usando los recursos de nuestro design system',
    finalTitle: 'Solución final',
    melhorias: 'Mejoras aplicadas',
    finalImprovementsA: [
      'Autocompletado con inteligencia artificial a partir de Gtin (código de barras)',
      'Eliminamos el requisito de completar la categoría del producto.',
      'Redujimos el formulario a una sola pantalla.',
    ],
    finalImprovementsALast: 'Reestructuramos el formulario con información que los usuarios PyME necesitan para gestionar una tienda',
    finalSubItems: ['Unidad de medida: kg, Litro, Metros, Unidad', 'Precio de costo', 'Margen de ganancia', 'Stock y alerta de stock mínimo'],
    finalImprovementsB: [
      'El área de artículos pendientes fue reorganizada en pestañas que segmentan los productos, permitiendo una visualización más simple y directa, vinculada directamente a la lista sin ocupar tanto espacio ni desviar la atención de la pantalla.',
      'Visualización de artículos que se asemeja visualmente a una tabla, un formato ya conocido y utilizado por la mayoría de los vendedores. El formato también ayuda a visualizar más artículos a la vez, facilitando la comparación y gestión.',
      'Como el filtro incluye la opción para el estado de los datos fiscales, estos fueron agregados a la tabla, mejorando la funcionalidad de facturación.',
      'Para evitar la sobrecarga, las opciones de edición y eliminación solo se muestran al pasar el cursor sobre la fila.',
    ],
    resultsTitle: 'Resultados y métricas',
    metrics: [
      { value: '+15%', title: 'Aumento en las tasas de conversión', desc: 'La tasa de abandono cayó del 70% al 55%.' },
      { value: '-61%', title: 'Reducción en el tiempo del flujo de agregar producto', desc: 'De 143 segundos a 55 segundos.' },
      { value: '+17%', title: 'Productos agregados al catálogo por vendedor', desc: 'Aumento de 2,5 a 3 productos' },
    ],
    chartImplLabel: 'Implementación',
    highlight: 'Tras el lanzamiento en Brasil y México, ',
    highlightGreen: 'duplicamos el número de vendedores que utilizan el Catálogo de Mercado Pago',
    designersTitle: 'Diseñadores en el proyecto',
  },
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function Badge({ n, style }: { n: number; style?: React.CSSProperties }) {
  return (
    <div style={{ position: 'absolute', width: '20px', height: '20px', borderRadius: '999px', backgroundColor: '#00a650', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <span style={{ fontFamily: IBM, fontWeight: 700, fontSize: '11px', color: '#fff', lineHeight: 1 }}>{n}</span>
    </div>
  )
}
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: IBM, fontWeight: 600, fontStyle: 'italic', fontSize: 'clamp(15px, 4vw, 18px)', lineHeight: '1.4', color: '#141313' }}>{children}</p>
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(24px, 6vw, 40px)', lineHeight: '1.2', color: '#141313' }}>{children}</p>
}
function Divider() {
  return <div style={{ width: '100%', height: '1px', backgroundColor: '#141313' }} />
}
function fadeIn(delay = 0) {
  return { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.55, delay } }
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function CatalogoDeProdutosPage() {
  const params = useParams()
  const locale = (params?.locale as string) ?? 'pt'
  const t = content[locale as keyof typeof content] ?? content.pt

  return (
    <div style={{ backgroundColor: '#fff', fontFamily: IBM, overflowX: 'hidden', maxWidth: '100vw' }}>

      {/* BACK */}
      <div className="px-6 lg:px-[120px]" style={{ paddingTop: '32px' }}>
        <button onClick={() => window.history.back()} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: IBM, fontWeight: 500, fontSize: '16px', color: '#141313', padding: '8px 0', opacity: 0.6 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')} onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
          {t.back}
        </button>
      </div>

      {/* 1. HEADER */}
      <motion.div {...fadeIn()} className="px-6 lg:px-[120px]" style={{ paddingTop: '40px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ fontFamily: IBM, fontWeight: 600, fontStyle: 'italic', fontSize: 'clamp(14px, 4vw, 18px)', lineHeight: '1.4', color: '#141313' }}>{t.headerLabel}</p>
        <h1 style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(28px, 6vw, 48px)', lineHeight: '1.2', color: '#141313', textTransform: 'uppercase' }}>{t.headerTitle}</h1>
      </motion.div>

      {/* 2. CASE */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <SectionTitle>{t.caseTitle}</SectionTitle>
        <SectionLabel>{t.caseLabel}</SectionLabel>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[40px]">
          <p style={{ flex: 1, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.contextoLabel}</strong>{t.contexto}</p>
          <p style={{ flex: 1, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.objetivoLabel}</strong>{t.objetivo}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[40px]">
          <p style={{ flex: 1, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.solucaoLabel}</strong>{t.solucao}</p>
          <p style={{ flex: 1, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.papelLabel}</strong>{t.papel}</p>
        </div>
      </motion.div>

      {/* 3. PROCESSO */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SectionTitle>{t.processoTitle}</SectionTitle>
        <SectionLabel>{t.processoLabel}</SectionLabel>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-start">
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'pre-line' }}>
              <strong>{t.comoLabel}</strong>{t.como}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <SectionLabel>{t.needsLabel}</SectionLabel>
              <ul style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word', paddingLeft: 'clamp(16px, 5vw, 24px)', display: 'flex', flexDirection: 'column', gap: '12px', listStyleType: 'disc' }}>
                {t.needs.map((n, i) => <li key={i}><strong>{n.bold}</strong>{n.text}</li>)}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[617px] lg:flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', maxHeight: '376px' }}>
              <img src={imgResearch} alt="Research" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
            </div>
            <a href="https://docs.google.com/presentation/d/1YY21q0LzSY6CtGngjre3puq2m7BH0gZG/edit?usp=sharing&ouid=101971509973607787710&rtpof=true&sd=true" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(196,211,252,0.16)', borderRadius: '5px', padding: '11px 16px 11px 12px', fontFamily: IBM, fontWeight: 600, fontSize: '14px', color: '#294ed6', textDecoration: 'underline', alignSelf: 'flex-start' }}>
              {t.researchLink}
            </a>
          </div>
        </div>
      </motion.div>

      {/* 4. FERRAMENTA */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SectionTitle>{t.ferramentaTitle}</SectionTitle>
        <SectionLabel>{t.ferramentaLabel}</SectionLabel>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-start">
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.cenarioLabel}</strong>{t.cenario}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.opTitle}</p>
              <ol style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word', paddingLeft: 'clamp(18px, 5vw, 28px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {t.ops.map((op, i) => <li key={i}>{op}</li>)}
              </ol>
            </div>
          </div>
          <div className="w-full lg:w-[540px] lg:flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ borderRadius: '11px', overflow: 'hidden' }}>
              <img src={imgBefore1} alt="Before" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 5. REDESENHO */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SectionTitle>{t.redesenhoTitle}</SectionTitle>
        <SectionLabel>{t.redesenhoLabel}</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <ol style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word', paddingLeft: 'clamp(18px, 5vw, 28px)' }}>
            <li>{t.step1}</li>
          </ol>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[217px]">
            <div className="w-full lg:w-[540px]" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <SectionLabel>{t.layer1Add}</SectionLabel>
              <img src={imgWireAdd} alt="Wireframe add" style={{ width: '100%', height: 'auto', maxHeight: '356px', objectFit: 'contain', display: 'block' }} />
            </div>
            <div className="w-full lg:w-[540px]" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <SectionLabel>{t.layer2List}</SectionLabel>
              <img src={imgWireList} alt="Wireframe list" style={{ width: '100%', height: 'auto', maxHeight: '356px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
          <ol start={2} style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word', paddingLeft: 'clamp(18px, 5vw, 28px)' }}>
            <li>{t.step2}</li>
          </ol>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[217px]">
            <div className="w-full lg:w-[540px]" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <SectionLabel>{t.layer1Add}</SectionLabel>
              <div style={{ overflow: 'hidden', maxHeight: '366px' }}>
                <img src={imgMidAdd} alt="Mid-fi add" style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
            </div>
            <div className="w-full lg:w-[540px]" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <SectionLabel>{t.layer2List}</SectionLabel>
              <img src={imgMidList} alt="Mid-fi list" style={{ width: '100%', height: 'auto', maxHeight: '363px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. SOLUÇÃO FINAL */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <SectionTitle>{t.finalTitle}</SectionTitle>

        {/* Part A */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start">
          <div className="w-full lg:w-[677px] lg:flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.melhorias}</p>
            <ol style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word', paddingLeft: 'clamp(18px, 5vw, 28px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {t.finalImprovementsA.map((item, i) => <li key={i}>{item}</li>)}
              <li>
                {t.finalImprovementsALast}
                <ol style={{ listStyleType: 'lower-alpha', paddingLeft: 'clamp(18px, 5vw, 28px)', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {t.finalSubItems.map((sub, i) => <li key={i}>{sub}</li>)}
                </ol>
              </li>
            </ol>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.layer1Add}</SectionLabel>
            <div style={{ position: 'relative', width: '100%', maxWidth: '541px' }}>
              <img src={imgFinalAdd} alt="Final add" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <Badge n={1} style={{ top: '23%', left: '64%' }} />
              <Badge n={2} style={{ top: '80%', left: '22%' }} />
              <Badge n={3} style={{ top: '95%', left: '34%' }} />
              <Badge n={4} style={{ top: '52%', left: '45%' }} />
            </div>
          </div>
        </div>

        <Divider />

        {/* Part B */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start">
          <div className="w-full lg:w-[677px] lg:flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.melhorias}</p>
            <ol style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word', paddingLeft: 'clamp(18px, 5vw, 28px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {t.finalImprovementsB.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.layer2List}</SectionLabel>
            <div style={{ position: 'relative', width: '100%', maxWidth: '536px' }}>
              <img src={imgFinalList} alt="Final list" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <Badge n={1} style={{ top: '30%', left: '69%' }} />
              <Badge n={2} style={{ top: '68%', left: '94%' }} />
              <Badge n={3} style={{ top: '77%', left: '86%' }} />
              <Badge n={4} style={{ top: '77%', left: '46%' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 7. RESULTADOS */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <SectionTitle>{t.resultsTitle}</SectionTitle>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[40px]">
          {t.metrics.map((m) => (
            <div key={m.value} style={{ flex: 1, borderBottom: '1px solid rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: 'clamp(18px, 4vw, 32px)', lineHeight: '1.2', color: 'rgba(0,0,0,0.9)' }}>{m.title}</p>
                <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '18px', lineHeight: '1.3', color: 'rgba(0,0,0,0.55)' }}>{m.desc}</p>
              </div>
              <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: 'clamp(48px, 12vw, 100px)', lineHeight: '1', color: '#29cc6a', whiteSpace: 'nowrap' }}>{m.value}</p>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
          <div style={{ display: 'flex', gap: '38px', alignItems: 'center', minWidth: '720px' }}>
            {/* Chart 1 */}
            <div style={{ width: '360px', height: '576px', flexShrink: 0, border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', position: 'relative', padding: '36px 20px 80px' }}>
              <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: '26px', color: 'rgba(0,0,0,0.9)', marginBottom: '24px' }}>Quant Seller</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '40px', height: '280px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: IBM, fontSize: '20px', color: 'rgba(0,0,0,0.9)' }}>4k</span>
                  <div style={{ width: '66px', height: '98px', backgroundColor: '#3483fa' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: IBM, fontSize: '16px', color: '#fff', backgroundColor: '#3483fa', padding: '2px 8px', borderRadius: '4px' }}>+5k</span>
                  <span style={{ fontFamily: IBM, fontSize: '20px', color: 'rgba(0,0,0,0.9)' }}>9k</span>
                  <div style={{ position: 'relative', width: '66px', height: '238px', backgroundColor: '#3483fa', display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ width: '100%', height: '140px', backgroundColor: '#00a650' }} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '12px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '4px', backgroundColor: '#3483fa', margin: '0 auto 4px' }} />
                  <p style={{ fontFamily: IBM, fontWeight: 600, fontSize: '14px', color: 'rgba(0,0,0,0.9)', lineHeight: '1.4' }}>14/04<br />{t.chartImplLabel}</p>
                </div>
                <p style={{ fontFamily: IBM, fontSize: '14px', color: 'rgba(0,0,0,0.9)', marginTop: '8px' }}>19/05</p>
              </div>
            </div>
            {/* Chart 2 */}
            <div style={{ width: '360px', height: '576px', flexShrink: 0, border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', position: 'relative', padding: '36px 20px 80px' }}>
              <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: '26px', color: 'rgba(0,0,0,0.9)', marginBottom: '24px' }}>Quant Seller</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '40px', height: '280px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: IBM, fontSize: '20px', color: 'rgba(0,0,0,0.9)' }}>2k</span>
                  <div style={{ width: '66px', height: '98px', backgroundColor: '#3483fa' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: IBM, fontSize: '16px', color: '#fff', backgroundColor: '#3483fa', padding: '2px 8px', borderRadius: '4px' }}>+2k</span>
                  <span style={{ fontFamily: IBM, fontSize: '20px', color: 'rgba(0,0,0,0.9)' }}>4k</span>
                  <div style={{ position: 'relative', width: '66px', height: '238px', backgroundColor: '#3483fa', display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ width: '100%', height: '140px', backgroundColor: '#00a650' }} />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '12px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '4px', backgroundColor: '#3483fa', margin: '0 auto 4px' }} />
                  <p style={{ fontFamily: IBM, fontWeight: 600, fontSize: '14px', color: 'rgba(0,0,0,0.9)', lineHeight: '1.4' }}>14/04<br />{t.chartImplLabel}</p>
                </div>
                <p style={{ fontFamily: IBM, fontSize: '14px', color: 'rgba(0,0,0,0.9)', marginTop: '8px' }}>19/05</p>
              </div>
            </div>
            <p style={{ flex: 1, fontFamily: IBM, fontWeight: 600, fontSize: 'clamp(24px, 4vw, 48px)', lineHeight: '1.3', letterSpacing: '-1.92px', color: '#252537', minWidth: '200px' }}>
              {t.highlight}<span style={{ color: '#00a650' }}>{t.highlightGreen}</span>
            </p>
          </div>
        </div>
        <Divider />
      </motion.div>

      {/* 8. DESIGNERS */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '80px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <SectionTitle>{t.designersTitle}</SectionTitle>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { name: 'Luiz Felipe Nepomuceno', role: 'Sr. UX Designer', avatar: imgAvatar, figmaH: '100%', figmaTop: '0%' },
            { name: 'Gabriel Gonzaga', role: 'Project Lead Designer', avatar: imgAvatar1, figmaH: '100%', figmaTop: '0%' },
            { name: 'Luiza Alexander', role: 'Semi Sr. UX Designer', avatar: imgAvatar2, figmaH: '100%', figmaTop: '0%' },
            { name: 'Soraia Shell', role: 'Semi Sr. UX Writer', avatar: imgAvatar3, figmaH: '100%', figmaTop: '0%' },
          ].map((p) => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '51px', height: '51px', borderRadius: '999px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                <img src={p.avatar} alt={p.name} style={{ position: 'absolute', width: '100%', height: p.figmaH, top: p.figmaTop, left: 0, maxWidth: 'none', objectFit: p.figmaH === '100%' ? 'cover' : undefined }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ fontFamily: IBM, fontWeight: 500, fontSize: '16px', color: '#101828' }}>{p.name}</p>
                <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '14px', color: '#4a5565' }}>{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
