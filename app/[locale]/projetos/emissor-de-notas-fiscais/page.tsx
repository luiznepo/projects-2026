'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

const IBM = 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif'

// ─── Image URLs ──────────────────────────────────────────────────────────────
const imgVendas     = '/images/emissor/vendas.png'
const imgBifurcador = '/images/emissor/bifurcador-acesso.png'
const imgDados      = '/images/emissor/dados%20do%20cliente_default.png'
const imgRevisa     = '/images/emissor/revisayconfirma.png'
const imgLoading    = '/images/emissor/loading.png'
const imgCongrats   = '/images/emissor/congrats.png'
const imgAvatar     = '/images/luiz.png'

// ─── Content ─────────────────────────────────────────────────────────────────
const content = {
  pt: {
    back: '← Voltar',
    headerLabel: 'MERCADO PAGO - Desktop',
    headerTitle: 'Emissor de Notas Fiscais',
    caseTitle: 'Case',
    caseLabel: 'Problemática',
    contextoLabel: 'Contexto: ',
    contexto: 'À medida que pequenas e médias empresas crescem e expandem nacionalmente, deparam-se com a complexidade das tributações brasileiras. O ICMS varia de estado para estado e o lojista frequentemente precisava cobrar o cliente na maquininha e usar um sistema terceiro — ou até papel — para emitir a nota, gerando lentidão no caixa e erros manuais. Pesquisas indicam que a emissão de nota fiscal a partir da própria plataforma é uma das maiores necessidades não atendidas no dia a dia dos vendedores.',
    valorLabel: 'Proposta de valor: ',
    valor: 'Eliminar o retrabalho manual do vendedor ao unificar o registro da venda, o pagamento e a obrigação tributária em um único ecossistema, transformando o Mercado Pago no sistema operacional completo da loja. A emissão fiscal passa a ser uma consequência natural da venda já registrada, permitindo que o lojista foque no atendimento e na estratégia.',
    solucaoLabel: 'A solução: ',
    solucao: 'O emissor de notas (faturador) é um módulo central do Software de Gestão (SWE) do Mercado Pago. Atua integrado ao Frente de Caixa e ao Catálogo de Produtos, atualizando o estoque e gerando a nota com dados fiscais pré-configurados a cada checkout. Permite emitir, imprimir, baixar e enviar por e-mail notas do tipo NFe (web) e NFCe (web e terminais Smart), além de evoluir para um modelo de auto-faturamento onde o próprio comprador preenche seus dados.',
    impactoLabel: 'Impacto no negócio: ',
    impacto: 'A disponibilização do faturador atende à estratégia de "move up market", sendo uma ferramenta essencial para atrair e reter lojistas de maior porte. Ao resolver obrigações legais diretamente na plataforma, o Mercado Pago aumenta a barreira de saída, reduz o churn e eleva a principalidade do uso das contas PJ e ferramentas de gestão.',
    perfilTitle: 'Perfil do usuário e o problema',
    perfilLabel: 'Entendendo quem são nossos lojistas',
    segmentoLabel: 'Segmento: ',
    segmento: 'Pequenas e Médias Empresas (SMBs), vendedores com faturamento maior (segmento HiLo) e majoritariamente contas Pessoa Jurídica (PJ). São lojistas físicos e híbridos — físico e online — que estão em fase de escalabilidade de seus negócios.',
    doresLabel: 'As principais dores do lojista',
    dores: [
      { bold: 'Complexidade e burocracia: ', text: 'A tributação no Brasil é uma grande dor, com oscilações de impostos como o ICMS que variam de estado para estado, exigindo muito tempo administrativo.' },
      { bold: 'Retrabalho e sistemas desconectados: ', text: 'O lojista precisava cobrar na maquininha e usar um sistema terceiro ou papel para emitir a nota, gerando lentidão no caixa e erros manuais.' },
      { bold: 'Expectativa frustrada no ponto de venda: ', text: 'Pesquisas mostram que a emissão de nota fiscal a partir da própria maquininha é uma das maiores necessidades e oportunidades não atendidas no dia a dia dos vendedores.' },
    ],
    entradaLabel: 'Ponto de entrada: lista de vendas',
    solTitle: 'A solução',
    solLabel: 'Funcionalidades e fluxo de emissão',
    solText1: 'O emissor oferece omnicanalidade completa: NFe (via web) e NFCe (via web e terminais Smart). O lojista pode emitir faturas genéricas (público em geral) ou nominais (com dados específicos do cliente). Para as notas nominais, a solução evoluiu para um modelo onde o próprio comprador preenche seus dados via QR Code, eliminando quase por completo a carga de trabalho do lojista no caixa.',
    solText2: 'A integração nativa com o Frente de Caixa e o Catálogo de Produtos atualiza o estoque e gera a nota com os dados fiscais pré-configurados a cada checkout, tornando o processo completamente fluído.',
    fluxoTitle: 'Fluxo de emissão',
    fluxoLabel: 'Da seleção do tipo até a confirmação',
    step1Title: 'Etapa 1 — Seleção do tipo de nota',
    step1Text: 'O lojista escolhe entre emitir uma NFCe (Nota Fiscal de Consumidor Eletrônica, para vendas presenciais ao consumidor final) ou uma NFe (Nota Fiscal Eletrônica, para vendas entre empresas ou de maior valor). A separação clara evita erros fiscais e guia o usuário pelo fluxo correto.',
    bifLabel: 'Bifurcador de acesso',
    step2Title: 'Etapa 2 — Dados do destinatário',
    step2Text: 'Para notas nominais, o lojista informa os dados do cliente ou ativa o auto-faturamento: o comprador recebe um QR Code no recibo da maquininha Smart e preenche seus próprios dados, eliminando a carga de trabalho no caixa. O formulário foi desenhado para ser rápido, com campos essenciais e preenchimento progressivo.',
    dadosLabel: 'Dados do cliente',
    step3Title: 'Etapa 3 — Revisão e confirmação',
    step3Text: 'Antes de emitir, o lojista revisa todos os dados da nota: itens, valores, impostos e dados do destinatário. Essa etapa reduz erros de emissão e dá ao usuário controle e confiança antes da ação irreversível de envio à Sefaz.',
    revisaLabel: 'Revisa e confirma',
    step45Title: 'Etapas 4 e 5 — Emissão e confirmação de sucesso',
    step45Text: 'Após confirmar, o sistema processa a nota junto à Sefaz em tempo real. O estado de carregamento mantém o usuário informado, e a tela de sucesso confirma que a nota foi emitida com opções de imprimir, baixar ou enviar por e-mail.',
    loadingLabel: 'Carregando',
    successLabel: 'Nota emitida com sucesso',
    impactoTitle: 'Impacto no negócio',
    impactoCards: [
      { title: 'Redução na rotatividade de lojistas PJ', desc: 'Lojistas que utilizam o faturador apresentam maior retenção na plataforma.' },
      { title: 'Estratégia de subida de mercado', desc: 'Ferramenta essencial para atrair e reter lojistas de maior porte e contas PJ.' },
      { title: 'Principalidade das contas PJ', desc: 'Aumento do uso das ferramentas de gestão e da conta PJ como principal financeiro.' },
    ],
    highlightPre: 'O faturador transforma o Mercado Pago no ',
    highlightGreen: 'sistema operacional completo da loja',
    highlightPost: ' — unificando venda, pagamento e obrigação fiscal em um único lugar.',
    designersTitle: 'Designers no projeto',
  },
  en: {
    back: '← Back',
    headerLabel: 'MERCADO PAGO - Desktop',
    headerTitle: 'Invoice Issuer',
    caseTitle: 'Case',
    caseLabel: 'Problem',
    contextoLabel: 'Context: ',
    contexto: 'As small and medium enterprises grow and expand nationally, they face the complexity of Brazilian taxation. The ICMS (state sales tax) varies from state to state and merchants frequently had to charge the customer on the card machine and use a third-party system — or even paper — to issue the invoice, causing checkout delays and manual errors. Research indicates that issuing invoices directly from the platform is one of the biggest unmet needs in sellers\' daily operations.',
    valorLabel: 'Value proposition: ',
    valor: 'Eliminate the seller\'s manual rework by unifying the sale record, payment and tax obligation in a single ecosystem, transforming Mercado Pago into the store\'s complete operating system. Tax issuance becomes a natural consequence of an already recorded sale, allowing the merchant to focus on service and strategy.',
    solucaoLabel: 'The solution: ',
    solucao: 'The invoice issuer is a central module of the Mercado Pago Management Software (SWE). It works integrated with the POS and Product Catalog, updating inventory and generating the invoice with pre-configured tax data at each checkout. It allows issuing, printing, downloading and emailing NFe (web) and NFCe (web and Smart terminals) invoices, also evolving to a self-invoicing model where the buyer fills in their own data.',
    impactoLabel: 'Business impact: ',
    impacto: 'Making the invoicing tool available serves the "move up market" strategy, being an essential tool to attract and retain larger merchants. By resolving legal obligations directly on the platform, Mercado Pago increases the exit barrier, reduces churn and elevates the primacy of PJ accounts and management tools.',
    perfilTitle: 'User profile and the problem',
    perfilLabel: 'Understanding who our merchants are',
    segmentoLabel: 'Segment: ',
    segmento: 'Small and Medium Businesses (SMBs), sellers with higher revenue (HiLo segment) and mostly Legal Entity (PJ) accounts. They are physical and hybrid merchants — physical and online — who are in a business scalability phase.',
    doresLabel: 'Main merchant pain points',
    dores: [
      { bold: 'Complexity and bureaucracy: ', text: 'Taxation in Brazil is a major pain point, with tax fluctuations like ICMS that vary state by state, requiring a lot of administrative time.' },
      { bold: 'Rework and disconnected systems: ', text: 'Merchants had to charge on the card machine and use a third-party system or paper to issue the invoice, causing checkout delays and manual errors.' },
      { bold: 'Frustrated expectations at point of sale: ', text: 'Research shows that issuing an invoice directly from the card machine is one of the biggest unmet needs and opportunities in sellers\' daily routine.' },
    ],
    entradaLabel: 'Entry point: sales list',
    solTitle: 'The solution',
    solLabel: 'Features and issuance flow',
    solText1: 'The issuer offers complete omnichannel support: NFe (via web) and NFCe (via web and Smart terminals). Merchants can issue generic invoices (general public) or named ones (with specific customer data). For named invoices, the solution evolved to a model where the buyer fills in their own data via QR Code, virtually eliminating the merchant\'s workload at checkout.',
    solText2: 'Native integration with the POS and Product Catalog updates inventory and generates the invoice with pre-configured tax data at each checkout, making the process completely fluid.',
    fluxoTitle: 'Issuance flow',
    fluxoLabel: 'From type selection to confirmation',
    step1Title: 'Step 1 — Invoice type selection',
    step1Text: 'The merchant chooses between issuing an NFCe (Electronic Consumer Invoice, for in-person sales to end consumers) or an NFe (Electronic Invoice, for business-to-business sales or higher value transactions). The clear separation prevents tax errors and guides the user through the correct flow.',
    bifLabel: 'Access bifurcator',
    step2Title: 'Step 2 — Recipient data',
    step2Text: 'For named invoices, the merchant enters the customer\'s data or activates self-invoicing: the buyer receives a QR Code on the Smart machine receipt and fills in their own data, eliminating the checkout workload. The form was designed to be fast, with essential fields and progressive completion.',
    dadosLabel: 'Customer data',
    step3Title: 'Step 3 — Review and confirmation',
    step3Text: 'Before issuing, the merchant reviews all invoice data: items, amounts, taxes and recipient data. This step reduces issuance errors and gives the user control and confidence before the irreversible action of submitting to the tax authority.',
    revisaLabel: 'Review and confirm',
    step45Title: 'Steps 4 and 5 — Issuance and success confirmation',
    step45Text: 'After confirming, the system processes the invoice with the tax authority in real time. The loading state keeps the user informed, and the success screen confirms the invoice was issued with options to print, download or email it.',
    loadingLabel: 'Loading',
    successLabel: 'Invoice successfully issued',
    impactoTitle: 'Business impact',
    impactoCards: [
      { title: 'Reduction in PJ merchant churn', desc: 'Merchants using the invoicing tool show higher retention on the platform.' },
      { title: 'Move up market strategy', desc: 'Essential tool to attract and retain larger merchants and PJ accounts.' },
      { title: 'PJ account primacy', desc: 'Increased use of management tools and PJ account as main financial hub.' },
    ],
    highlightPre: 'The invoicing tool transforms Mercado Pago into the ',
    highlightGreen: 'store\'s complete operating system',
    highlightPost: ' — unifying sale, payment and tax obligation in one place.',
    designersTitle: 'Designers on the project',
  },
  es: {
    back: '← Volver',
    headerLabel: 'MERCADO PAGO - Desktop',
    headerTitle: 'Emisor de Facturas',
    caseTitle: 'Case',
    caseLabel: 'Problemática',
    contextoLabel: 'Contexto: ',
    contexto: 'A medida que las pequeñas y medianas empresas crecen y se expanden nacionalmente, se enfrentan a la complejidad de la tributación brasileña. El ICMS varía de estado a estado y el comerciante frecuentemente tenía que cobrar al cliente en la máquina de tarjetas y usar un sistema externo — o incluso papel — para emitir la factura, generando lentitud en la caja y errores manuales. Las investigaciones indican que la emisión de facturas desde la propia plataforma es una de las mayores necesidades no atendidas en el día a día de los vendedores.',
    valorLabel: 'Propuesta de valor: ',
    valor: 'Eliminar el retrabajo manual del vendedor al unificar el registro de la venta, el pago y la obligación tributaria en un único ecosistema, transformando a Mercado Pago en el sistema operativo completo de la tienda. La emisión fiscal se convierte en una consecuencia natural de la venta ya registrada, permitiendo que el comerciante se enfoque en la atención y la estrategia.',
    solucaoLabel: 'La solución: ',
    solucao: 'El emisor de facturas es un módulo central del Software de Gestión (SWE) de Mercado Pago. Actúa integrado al Punto de Venta y al Catálogo de Productos, actualizando el inventario y generando la factura con datos fiscales preconfigurados en cada checkout. Permite emitir, imprimir, descargar y enviar por correo electrónico facturas del tipo NFe (web) y NFCe (web y terminales Smart), evolucionando también hacia un modelo de autofacturación donde el propio comprador completa sus datos.',
    impactoLabel: 'Impacto en el negocio: ',
    impacto: 'La disponibilización del facturador atiende a la estrategia de "move up market", siendo una herramienta esencial para atraer y retener comerciantes de mayor tamaño. Al resolver obligaciones legales directamente en la plataforma, Mercado Pago aumenta la barrera de salida, reduce el churn y eleva la principalidad del uso de las cuentas PJ y herramientas de gestión.',
    perfilTitle: 'Perfil del usuario y el problema',
    perfilLabel: 'Entendiendo quiénes son nuestros comerciantes',
    segmentoLabel: 'Segmento: ',
    segmento: 'Pequeñas y Medianas Empresas (PyMEs), vendedores con mayor facturación (segmento HiLo) y principalmente cuentas de Persona Jurídica (PJ). Son comerciantes físicos e híbridos — físico y online — que están en fase de escalabilidad de sus negocios.',
    doresLabel: 'Los principales dolores del comerciante',
    dores: [
      { bold: 'Complejidad y burocracia: ', text: 'La tributación en Brasil es un gran dolor, con variaciones de impuestos como el ICMS que varían de estado a estado, requiriendo mucho tiempo administrativo.' },
      { bold: 'Retrabajo y sistemas desconectados: ', text: 'El comerciante debía cobrar en la máquina de tarjetas y usar un sistema externo o papel para emitir la factura, generando lentitud en la caja y errores manuales.' },
      { bold: 'Expectativa frustrada en el punto de venta: ', text: 'Las investigaciones muestran que la emisión de facturas desde la propia máquina es una de las mayores necesidades y oportunidades no atendidas en el día a día de los vendedores.' },
    ],
    entradaLabel: 'Punto de entrada: lista de ventas',
    solTitle: 'La solución',
    solLabel: 'Funcionalidades y flujo de emisión',
    solText1: 'El emisor ofrece omnicanalidad completa: NFe (vía web) y NFCe (vía web y terminales Smart). El comerciante puede emitir facturas genéricas (público en general) o nominales (con datos específicos del cliente). Para las facturas nominales, la solución evolucionó hacia un modelo donde el propio comprador completa sus datos vía QR Code, eliminando casi por completo la carga de trabajo del comerciante en la caja.',
    solText2: 'La integración nativa con el Punto de Venta y el Catálogo de Productos actualiza el inventario y genera la factura con los datos fiscales preconfigurados en cada checkout, haciendo el proceso completamente fluido.',
    fluxoTitle: 'Flujo de emisión',
    fluxoLabel: 'Desde la selección del tipo hasta la confirmación',
    step1Title: 'Paso 1 — Selección del tipo de factura',
    step1Text: 'El comerciante elige entre emitir una NFCe (Factura Electrónica de Consumidor, para ventas presenciales al consumidor final) o una NFe (Factura Electrónica, para ventas entre empresas o de mayor valor). La separación clara evita errores fiscales y guía al usuario por el flujo correcto.',
    bifLabel: 'Bifurcador de acceso',
    step2Title: 'Paso 2 — Datos del destinatario',
    step2Text: 'Para facturas nominales, el comerciante ingresa los datos del cliente o activa la autofacturación: el comprador recibe un QR Code en el recibo de la máquina Smart y completa sus propios datos, eliminando la carga de trabajo en la caja. El formulario fue diseñado para ser rápido, con campos esenciales y completado progresivo.',
    dadosLabel: 'Datos del cliente',
    step3Title: 'Paso 3 — Revisión y confirmación',
    step3Text: 'Antes de emitir, el comerciante revisa todos los datos de la factura: artículos, valores, impuestos y datos del destinatario. Este paso reduce errores de emisión y da al usuario control y confianza antes de la acción irreversible de envío a la autoridad fiscal.',
    revisaLabel: 'Revisa y confirma',
    step45Title: 'Pasos 4 y 5 — Emisión y confirmación de éxito',
    step45Text: 'Tras confirmar, el sistema procesa la factura con la autoridad fiscal en tiempo real. El estado de carga mantiene al usuario informado, y la pantalla de éxito confirma que la factura fue emitida con opciones de imprimir, descargar o enviar por correo.',
    loadingLabel: 'Cargando',
    successLabel: 'Factura emitida con éxito',
    impactoTitle: 'Impacto en el negocio',
    impactoCards: [
      { title: 'Reducción en la rotatividad de comerciantes PJ', desc: 'Los comerciantes que usan el facturador presentan mayor retención en la plataforma.' },
      { title: 'Estrategia de subida de mercado', desc: 'Herramienta esencial para atraer y retener comerciantes de mayor tamaño y cuentas PJ.' },
      { title: 'Principalidad de las cuentas PJ', desc: 'Aumento del uso de las herramientas de gestión y de la cuenta PJ como principal financiero.' },
    ],
    highlightPre: 'El facturador transforma a Mercado Pago en el ',
    highlightGreen: 'sistema operativo completo de la tienda',
    highlightPost: ' — unificando venta, pago y obligación fiscal en un solo lugar.',
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
export default function EmissorDeNotasFiscaisPage() {
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
        <p style={{ fontFamily: IBM, fontWeight: 600, fontStyle: 'italic', fontSize: '18px', lineHeight: '24px', color: '#141313' }}>{t.headerLabel}</p>
        <h1 style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(28px, 6vw, 48px)', lineHeight: '1.2', color: '#141313', textTransform: 'uppercase' }}>{t.headerTitle}</h1>
      </motion.div>

      {/* 2. CASE */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <SectionTitle>{t.caseTitle}</SectionTitle>
        <SectionLabel>{t.caseLabel}</SectionLabel>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[40px]">
          <p style={{ flex: 1, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.contextoLabel}</strong>{t.contexto}</p>
          <p style={{ flex: 1, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.valorLabel}</strong>{t.valor}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[40px]">
          <p style={{ flex: 1, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.solucaoLabel}</strong>{t.solucao}</p>
          <p style={{ flex: 1, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.impactoLabel}</strong>{t.impacto}</p>
        </div>
      </motion.div>

      {/* 3. PERFIL */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SectionTitle>{t.perfilTitle}</SectionTitle>
        <SectionLabel>{t.perfilLabel}</SectionLabel>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-start">
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}><strong>{t.segmentoLabel}</strong>{t.segmento}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <SectionLabel>{t.doresLabel}</SectionLabel>
              <ul style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word', paddingLeft: 'clamp(16px, 5vw, 24px)', display: 'flex', flexDirection: 'column', gap: '12px', listStyleType: 'disc' }}>
                {t.dores.map((d, i) => <li key={i}><strong>{d.bold}</strong>{d.text}</li>)}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[540px] lg:flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.entradaLabel}</SectionLabel>
            <div style={{ borderRadius: '11px', overflow: 'hidden' }}>
              <img src={imgVendas} alt="Sales list" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. SOLUÇÃO */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <SectionTitle>{t.solTitle}</SectionTitle>
        <SectionLabel>{t.solLabel}</SectionLabel>
        <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.solText1}</p>
        <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.solText2}</p>
      </motion.div>

      {/* 5. FLUXO */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SectionTitle>{t.fluxoTitle}</SectionTitle>
          <SectionLabel>{t.fluxoLabel}</SectionLabel>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start">
          <div className="w-full lg:w-[677px] lg:flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.step1Title}</p>
            <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.step1Text}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.bifLabel}</SectionLabel>
            <div style={{ position: 'relative', width: '100%', maxWidth: '541px' }}>
              <img src={imgBifurcador} alt="Invoice type selection" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
              <Badge n={1} style={{ top: '35%', left: '25%' }} />
              <Badge n={2} style={{ top: '35%', left: '65%' }} />
            </div>
          </div>
        </div>

        <Divider />

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start">
          <div className="w-full lg:w-[677px] lg:flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.step2Title}</p>
            <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.step2Text}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.dadosLabel}</SectionLabel>
            <div style={{ position: 'relative', width: '100%', maxWidth: '541px' }}>
              <img src={imgDados} alt="Customer data" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
              <Badge n={3} style={{ top: '28%', left: '82%' }} />
            </div>
          </div>
        </div>

        <Divider />

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start">
          <div className="w-full lg:w-[677px] lg:flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.step3Title}</p>
            <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.step3Text}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.revisaLabel}</SectionLabel>
            <div style={{ position: 'relative', width: '100%', maxWidth: '541px' }}>
              <img src={imgRevisa} alt="Review" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
              <Badge n={4} style={{ top: '80%', left: '50%' }} />
            </div>
          </div>
        </div>

        <Divider />

        {/* Steps 4 & 5 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.step45Title}</p>
          <p style={{ fontSize: 'clamp(14px, 4vw, 17px)', lineHeight: '1.65', color: 'rgba(20,19,19,0.8)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>{t.step45Text}</p>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[60px] mt-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              <SectionLabel>{t.loadingLabel}</SectionLabel>
              <img src={imgLoading} alt="Loading" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              <SectionLabel>{t.successLabel}</SectionLabel>
              <img src={imgCongrats} alt="Success" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 6. IMPACTO */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '56px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <SectionTitle>{t.impactoTitle}</SectionTitle>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[40px]">
          {t.impactoCards.map((m) => (
            <div key={m.title} style={{ flex: 1, borderBottom: '1px solid rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '16px' }}>
              <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: 'clamp(20px, 4vw, 32px)', lineHeight: '1.2', color: 'rgba(0,0,0,0.9)' }}>{m.title}</p>
              <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '18px', lineHeight: '1.3', color: 'rgba(0,0,0,0.55)' }}>{m.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: IBM, fontWeight: 600, fontSize: 'clamp(26px, 6vw, 48px)', lineHeight: '1.3', letterSpacing: '-1.92px', color: '#252537', maxWidth: '900px' }}>
          {t.highlightPre}<span style={{ color: '#00a650' }}>{t.highlightGreen}</span>{t.highlightPost}
        </p>
        <Divider />
      </motion.div>

      {/* 7. DESIGNERS */}
      <motion.div {...fadeIn(0.05)} className="px-6 lg:px-[120px]" style={{ paddingBottom: '80px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <SectionTitle>{t.designersTitle}</SectionTitle>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { name: 'Luiz Felipe Nepomuceno', role: 'Sr. UX Designer', avatar: imgAvatar, figmaH: '100%', figmaTop: '0%' },
            { name: 'Gabriel Gonzaga', role: 'Project Lead Designer', avatar: '/images/Gabriel.png', figmaH: '100%', figmaTop: '0%' },
            { name: 'Soraia Shell', role: 'Semi Sr. UX Writer', avatar: '/images/Soraia.png', figmaH: '100%', figmaTop: '0%' },
            { name: 'Camila Ramos', role: 'Semi Sr. UX Designer', avatar: '/images/Camila%20Ramos.png', figmaH: '100%', figmaTop: '0%' },
          ].map((p) => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '51px', height: '51px', borderRadius: '999px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                <img src={p.avatar} alt={p.name} style={{ position: 'absolute', width: '100%', height: p.figmaH, top: p.figmaTop, left: 0, maxWidth: 'none' }} />
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
