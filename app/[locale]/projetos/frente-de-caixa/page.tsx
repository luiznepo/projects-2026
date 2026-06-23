'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

const IBM = 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif'

// ─── Image URLs ──────────────────────────────────────────────────────────────
const imgWebMain     = '/images/frente/Frente1.png'
const imgWebCart     = '/images/frente/Frente2.png'
const imgWebPayment  = '/images/frente/forma%20de%20pagamento.png'
const imgWebCongrats = '/images/frente/congrats-1.png'
const imgSmartEmpty  = '/images/frente/frente%201.png'
const imgSmartFull   = '/images/frente/frente%202.png'
const imgSmartCart   = '/images/frente/carrito-estoque.png'
const imgSmartDone   = '/images/frente/congrats.png'
const imgAvatar      = 'https://www.figma.com/api/mcp/asset/f0dd279c-20a8-4993-8403-8680b503e56a'

// ─── Content ─────────────────────────────────────────────────────────────────
const content = {
  pt: {
    back: '← Voltar',
    headerLabel: 'MERCADO PAGO - Desktop & Smart POS',
    headerTitle: 'Frente de Caixa',
    caseTitle: 'Case',
    caseLabel: 'Problemática',
    contextoLabel: 'Contexto: ',
    contexto: 'Lojistas físicos e híbridos de Varejo e Gastronomia enfrentavam uma desconexão crítica no balcão: registravam a venda em um sistema e cobravam em outro, gerando retrabalho e filas. A digitação manual de preços e a busca ineficiente por itens tornavam o checkout lento e sujeito a erros. Além disso, negócios que vendem a granel — como padarias e açougues — não tinham suporte a vendas fracionadas.',
    valorLabel: 'Proposta de valor: ',
    valor: 'Transformar o momento do checkout ao integrar em uma única interface o registro do pedido, a baixa no estoque e o pagamento. O lojista passa a ter uma visão 360° das vendas do balcão, independentemente de como o cliente paga, com agilidade e adaptação a diferentes modelos de negócio presencial.',
    solucaoLabel: 'A solução: ',
    solucao: 'O Frente de Caixa (PDV) foi totalmente redesenhado para o Software de Gestão do Mercado Pago. Entrega leitura de código de barras (EAN), busca por nome ou SKU, suporte a vendas fracionadas (ex: 0,125 kg), omnicanalidade nos recebimentos (Point Smart, QR Code, espécie e maquininhas de terceiros) e integração end-to-end com o faturador para emissão de nota fiscal e devoluções com retorno automático de estoque.',
    impactoLabel: 'Impacto no negócio: ',
    impacto: 'O PDV é uma das âncoras de retenção do Mercado Pago. Ao englobar transações de outras maquininhas e dinheiro, aumenta a principalidade da plataforma, protege a conta do vendedor contra concorrentes e impulsiona a estratégia de atender negócios mais maduros (Move Up Market).',
    perfilTitle: 'Perfil do usuário e o problema',
    perfilLabel: 'Entendendo quem são nossos lojistas',
    segmentoLabel: 'Segmento: ',
    segmento: 'PMEs e vendedores de maior faturamento (HiLo), com lojas físicas ou operações híbridas nos segmentos de Varejo e Gastronomia. São empreendedores em fase de escalabilidade que buscam migrar de gestões rudimentares — cadernos, planilhas e sistemas básicos — para operações mais profissionais e automatizadas.',
    doresLabel: 'As principais dores no balcão',
    dores: [
      { bold: 'Desconexão entre venda e cobrança: ', text: 'O lojista registrava a venda em um sistema e cobrava na maquininha em outro momento, gerando retrabalho e erros no caixa.' },
      { bold: 'Lentidão no checkout: ', text: 'A digitação manual de preços e a busca ineficiente por itens criavam filas e impactavam a experiência do consumidor final.' },
      { bold: 'Limitação nas unidades de medida: ', text: 'Sistemas básicos só suportavam vendas unitárias. Negócios como padarias e açougues precisavam vender a granel (250g, 0,5 kg) sem ter ferramentas para isso.' },
    ],
    mainScreenLabel: 'PDV Web — tela principal',
    webTitle: 'A solução — PDV Web',
    webLabel: 'Registro de vendas e checkout no computador',
    cartTitle: 'Carrinho e ações contextuais',
    cartText: 'O layout divide a tela entre o catálogo de produtos (busca + lista) e o resumo de venda (carrinho). O lojista pode adicionar produtos por código de barras ou busca, e ao selecionar um item no carrinho acessa ações contextuais como editar preço, aplicar desconto ou remover — sem modais que bloqueiam o fluxo.',
    cartLabel: 'Carrinho com menu contextual',
    payTitle: 'Omnicanalidade nos recebimentos',
    payText: 'Após registrar os produtos, o lojista escolhe como receber. O PDV suporta Point Smart (maquininha integrada), Código QR e Espécie — além de permitir o registro de pagamentos em maquininhas de terceiros. Isso garante que 100% das vendas do balcão sejam capturadas na plataforma, independentemente do método de pagamento.',
    payLabel: 'Seleção de forma de pagamento',
    confirmTitle: 'Confirmação e próximos passos',
    confirmText: 'Após o pagamento confirmado, a tela de sucesso exibe o número da operação e oferece ao lojista ações imediatas: voltar ao PDV para uma nova venda ou avançar para a emissão da nota fiscal — integrando diretamente com o módulo faturador do SWE.',
    confirmLabel: 'Cobro realizado com sucesso',
    smartTitle: 'A solução — PDV Smart (Maquininha)',
    smartLabel: 'Vendas diretamente no terminal Point Smart',
    smartText: 'A versão para o terminal Smart permite ao lojista registrar vendas e cobrar sem sair da maquininha. O app exibe o catálogo de produtos em grade, com busca e filtros, e o carrinho atualizado em tempo real — com alerta de estoque baixo para evitar vendas indevidas.',
    smartScreen1: 'Tela inicial',
    smartScreen2: 'Catálogo com carrinho',
    smartScreen3: 'Detalhe do carrinho',
    smartScreen4: 'Cobro realizado',
    impactoTitle: 'Impacto no negócio',
    impactoCards: [
      { title: 'Aumento da principalidade da plataforma', desc: 'Ao capturar vendas em espécie e de terceiros, o Mercado Pago passa a ser o sistema central do negócio.' },
      { title: 'Redução do churn de lojistas', desc: 'A integração end-to-end (PDV → estoque → faturador) cria uma barreira de saída natural para lojistas.' },
      { title: 'Expansão para negócios mais maduros', desc: 'Suporte a unidades de medida fracionadas e omnicanalidade abrem mercado para varejo e gastronomia.' },
    ],
    highlightPre: 'O PDV transforma o balcão em ',
    highlightGreen: 'uma operação unificada',
    highlightPost: ' — do registro da venda ao pagamento e à nota fiscal, tudo em um único lugar.',
    designersTitle: 'Designers no projeto',
  },
  en: {
    back: '← Back',
    headerLabel: 'MERCADO PAGO - Desktop & Smart POS',
    headerTitle: 'Point of Sale',
    caseTitle: 'Case',
    caseLabel: 'Problem',
    contextoLabel: 'Context: ',
    contexto: 'Physical and hybrid Retail and Food Service merchants faced a critical disconnect at the counter: they recorded the sale in one system and charged in another, creating rework and queues. Manual price entry and inefficient item search made checkout slow and error-prone. Additionally, businesses selling in bulk — such as bakeries and butcher shops — had no support for fractional sales.',
    valorLabel: 'Value proposition: ',
    valor: 'Transform the checkout moment by integrating order recording, inventory update and payment in a single interface. Merchants gain a 360° view of counter sales regardless of how the customer pays, with agility and adaptation to different in-person business models.',
    solucaoLabel: 'The solution: ',
    solucao: 'The Point of Sale (POS) was completely redesigned for the Mercado Pago Management Software. It delivers barcode reading (EAN), search by name or SKU, support for fractional sales (e.g.: 0.125 kg), omnichannel payments (Point Smart, QR Code, cash and third-party machines) and end-to-end integration with the invoicing module for invoice issuance and returns with automatic stock restoration.',
    impactoLabel: 'Business impact: ',
    impacto: 'The POS is one of Mercado Pago\'s retention anchors. By capturing transactions from other card machines and cash, it increases platform primacy, protects the seller\'s account against competitors and drives the strategy of serving more mature businesses (Move Up Market).',
    perfilTitle: 'User profile and the problem',
    perfilLabel: 'Understanding who our merchants are',
    segmentoLabel: 'Segment: ',
    segmento: 'SMEs and higher-revenue sellers (HiLo), with physical stores or hybrid operations in Retail and Food Service segments. They are entrepreneurs in a scalability phase looking to migrate from rudimentary management — notebooks, spreadsheets and basic systems — to more professional and automated operations.',
    doresLabel: 'Main pain points at the counter',
    dores: [
      { bold: 'Disconnect between sale and payment: ', text: 'Merchants recorded the sale in one system and charged on the card machine at a different time, generating rework and cash register errors.' },
      { bold: 'Slow checkout: ', text: 'Manual price entry and inefficient item search created queues and impacted the end consumer\'s experience.' },
      { bold: 'Unit of measure limitations: ', text: 'Basic systems only supported unit sales. Businesses like bakeries and butcher shops needed to sell by weight (250g, 0.5 kg) without tools to do so.' },
    ],
    mainScreenLabel: 'Web POS — main screen',
    webTitle: 'The solution — Web POS',
    webLabel: 'Sales registration and checkout on computer',
    cartTitle: 'Cart and contextual actions',
    cartText: 'The layout divides the screen between the product catalog (search + list) and the sale summary (cart). Merchants can add products by barcode or search, and by selecting an item in the cart they access contextual actions like edit price, apply discount or remove — without modals that block the flow.',
    cartLabel: 'Cart with contextual menu',
    payTitle: 'Omnichannel payments',
    payText: 'After registering products, the merchant chooses how to receive payment. The POS supports Point Smart (integrated card machine), QR Code and Cash — as well as allowing registration of payments on third-party machines. This ensures 100% of counter sales are captured on the platform regardless of payment method.',
    payLabel: 'Payment method selection',
    confirmTitle: 'Confirmation and next steps',
    confirmText: 'After payment is confirmed, the success screen shows the operation number and offers the merchant immediate actions: return to POS for a new sale or proceed to invoice issuance — integrating directly with the SWE invoicing module.',
    confirmLabel: 'Payment successfully completed',
    smartTitle: 'The solution — Smart POS (Card Machine)',
    smartLabel: 'Sales directly on the Point Smart terminal',
    smartText: 'The Smart terminal version allows merchants to record sales and charge without leaving the card machine. The app displays the product catalog in a grid, with search and filters, and the cart updated in real time — with low stock alerts to prevent undue sales.',
    smartScreen1: 'Home screen',
    smartScreen2: 'Catalog with cart',
    smartScreen3: 'Cart detail',
    smartScreen4: 'Payment completed',
    impactoTitle: 'Business impact',
    impactoCards: [
      { title: 'Increased platform primacy', desc: 'By capturing cash and third-party sales, Mercado Pago becomes the central business system.' },
      { title: 'Merchant churn reduction', desc: 'The end-to-end integration (POS → inventory → invoicing) creates a natural exit barrier for merchants.' },
      { title: 'Expansion to more mature businesses', desc: 'Support for fractional units of measure and omnichannel payments opens the market for retail and food service.' },
    ],
    highlightPre: 'The POS transforms the counter into ',
    highlightGreen: 'a unified operation',
    highlightPost: ' — from sale registration to payment and invoice, all in one place.',
    designersTitle: 'Designers on the project',
  },
  es: {
    back: '← Volver',
    headerLabel: 'MERCADO PAGO - Desktop & Smart POS',
    headerTitle: 'Punto de Venta',
    caseTitle: 'Case',
    caseLabel: 'Problemática',
    contextoLabel: 'Contexto: ',
    contexto: 'Los comerciantes físicos e híbridos de Retail y Gastronomía enfrentaban una desconexión crítica en el mostrador: registraban la venta en un sistema y cobraban en otro, generando retrabajo y filas. La entrada manual de precios y la búsqueda ineficiente de artículos hacía el checkout lento y propenso a errores. Además, negocios que venden a granel — como panaderías y carnicerías — no tenían soporte para ventas fraccionadas.',
    valorLabel: 'Propuesta de valor: ',
    valor: 'Transformar el momento del checkout al integrar en una única interfaz el registro del pedido, la baja del inventario y el pago. El comerciante pasa a tener una visión 360° de las ventas del mostrador, independientemente de cómo pague el cliente, con agilidad y adaptación a diferentes modelos de negocio presencial.',
    solucaoLabel: 'La solución: ',
    solucao: 'El Punto de Venta (PDV) fue completamente rediseñado para el Software de Gestión de Mercado Pago. Entrega lectura de código de barras (EAN), búsqueda por nombre o SKU, soporte para ventas fraccionadas (ej: 0,125 kg), omnicanalidad en los cobros (Point Smart, QR Code, efectivo y máquinas de terceros) e integración de extremo a extremo con el módulo de facturación para emisión de facturas y devoluciones con restitución automática de inventario.',
    impactoLabel: 'Impacto en el negocio: ',
    impacto: 'El PDV es uno de los anclas de retención de Mercado Pago. Al englobar transacciones de otras máquinas y efectivo, aumenta la principalidad de la plataforma, protege la cuenta del vendedor contra competidores e impulsa la estrategia de atender negocios más maduros (Move Up Market).',
    perfilTitle: 'Perfil del usuario y el problema',
    perfilLabel: 'Entendiendo quiénes son nuestros comerciantes',
    segmentoLabel: 'Segmento: ',
    segmento: 'PyMEs y vendedores de mayor facturación (HiLo), con tiendas físicas u operaciones híbridas en los segmentos de Retail y Gastronomía. Son emprendedores en fase de escalabilidad que buscan migrar de gestiones rudimentarias — cuadernos, hojas de cálculo y sistemas básicos — a operaciones más profesionales y automatizadas.',
    doresLabel: 'Los principales dolores en el mostrador',
    dores: [
      { bold: 'Desconexión entre venta y cobro: ', text: 'El comerciante registraba la venta en un sistema y cobraba en la máquina de tarjetas en otro momento, generando retrabajo y errores en la caja.' },
      { bold: 'Lentitud en el checkout: ', text: 'La entrada manual de precios y la búsqueda ineficiente de artículos creaban filas e impactaban la experiencia del consumidor final.' },
      { bold: 'Limitación en las unidades de medida: ', text: 'Los sistemas básicos solo soportaban ventas unitarias. Negocios como panaderías y carnicerías necesitaban vender a granel (250g, 0,5 kg) sin herramientas para hacerlo.' },
    ],
    mainScreenLabel: 'PDV Web — pantalla principal',
    webTitle: 'La solución — PDV Web',
    webLabel: 'Registro de ventas y checkout en computadora',
    cartTitle: 'Carrito y acciones contextuales',
    cartText: 'El diseño divide la pantalla entre el catálogo de productos (búsqueda + lista) y el resumen de venta (carrito). El comerciante puede agregar productos por código de barras o búsqueda, y al seleccionar un artículo en el carrito accede a acciones contextuales como editar precio, aplicar descuento o eliminar — sin modales que bloqueen el flujo.',
    cartLabel: 'Carrito con menú contextual',
    payTitle: 'Omnicanalidad en los cobros',
    payText: 'Tras registrar los productos, el comerciante elige cómo cobrar. El PDV soporta Point Smart (máquina integrada), Código QR y Efectivo — además de permitir el registro de pagos en máquinas de terceros. Esto garantiza que el 100% de las ventas del mostrador sean capturadas en la plataforma independientemente del método de pago.',
    payLabel: 'Selección de método de pago',
    confirmTitle: 'Confirmación y próximos pasos',
    confirmText: 'Tras confirmar el pago, la pantalla de éxito muestra el número de operación y ofrece al comerciante acciones inmediatas: volver al PDV para una nueva venta o avanzar hacia la emisión de la factura — integrando directamente con el módulo de facturación del SWE.',
    confirmLabel: 'Cobro realizado con éxito',
    smartTitle: 'La solución — PDV Smart (Máquina)',
    smartLabel: 'Ventas directamente en el terminal Point Smart',
    smartText: 'La versión para el terminal Smart permite al comerciante registrar ventas y cobrar sin salir de la máquina. La app muestra el catálogo de productos en cuadrícula, con búsqueda y filtros, y el carrito actualizado en tiempo real — con alerta de stock bajo para evitar ventas indebidas.',
    smartScreen1: 'Pantalla inicial',
    smartScreen2: 'Catálogo con carrito',
    smartScreen3: 'Detalle del carrito',
    smartScreen4: 'Cobro realizado',
    impactoTitle: 'Impacto en el negocio',
    impactoCards: [
      { title: 'Aumento de la principalidad de la plataforma', desc: 'Al capturar ventas en efectivo y de terceros, Mercado Pago se convierte en el sistema central del negocio.' },
      { title: 'Reducción del churn de comerciantes', desc: 'La integración de extremo a extremo (PDV → inventario → facturador) crea una barrera de salida natural para los comerciantes.' },
      { title: 'Expansión hacia negocios más maduros', desc: 'El soporte para unidades de medida fraccionadas y omnicanalidad abre el mercado para retail y gastronomía.' },
    ],
    highlightPre: 'El PDV transforma el mostrador en ',
    highlightGreen: 'una operación unificada',
    highlightPost: ' — desde el registro de la venta hasta el pago y la factura, todo en un solo lugar.',
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
  return <p style={{ fontFamily: IBM, fontWeight: 600, fontStyle: 'italic', fontSize: '18px', lineHeight: '24px', color: '#141313' }}>{children}</p>
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: '40px', lineHeight: '48px', color: '#141313' }}>{children}</p>
}
function Divider() {
  return <div style={{ width: '100%', height: '1px', backgroundColor: '#141313' }} />
}
function fadeIn(delay = 0) {
  return { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.55, delay } }
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function FrenteDeCaixaPage() {
  const params = useParams()
  const locale = (params?.locale as string) ?? 'pt'
  const t = content[locale as keyof typeof content] ?? content.pt

  return (
    <div style={{ backgroundColor: '#fff', fontFamily: IBM }}>

      {/* BACK */}
      <div style={{ padding: '32px 120px 0' }}>
        <button onClick={() => window.history.back()} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: IBM, fontWeight: 500, fontSize: '16px', color: '#141313', padding: '8px 0', opacity: 0.6 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')} onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
          {t.back}
        </button>
      </div>

      {/* 1. HEADER */}
      <motion.div {...fadeIn()} style={{ padding: '56px 120px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ fontFamily: IBM, fontWeight: 600, fontStyle: 'italic', fontSize: '18px', lineHeight: '24px', color: '#141313' }}>{t.headerLabel}</p>
        <h1 style={{ fontFamily: IBM, fontWeight: 700, fontSize: '48px', lineHeight: '56px', color: '#141313', textTransform: 'uppercase' }}>{t.headerTitle}</h1>
      </motion.div>

      {/* 2. CASE */}
      <motion.div {...fadeIn(0.05)} style={{ padding: '0 120px 56px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <SectionTitle>{t.caseTitle}</SectionTitle>
        <SectionLabel>{t.caseLabel}</SectionLabel>
        <div style={{ display: 'flex', gap: '40px' }}>
          <p style={{ flex: 1, fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}><strong>{t.contextoLabel}</strong>{t.contexto}</p>
          <p style={{ flex: 1, fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}><strong>{t.valorLabel}</strong>{t.valor}</p>
        </div>
        <div style={{ display: 'flex', gap: '40px' }}>
          <p style={{ flex: 1, fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}><strong>{t.solucaoLabel}</strong>{t.solucao}</p>
          <p style={{ flex: 1, fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}><strong>{t.impactoLabel}</strong>{t.impacto}</p>
        </div>
      </motion.div>

      {/* 3. PERFIL */}
      <motion.div {...fadeIn(0.05)} style={{ padding: '0 120px 56px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SectionTitle>{t.perfilTitle}</SectionTitle>
        <SectionLabel>{t.perfilLabel}</SectionLabel>
        <div style={{ display: 'flex', gap: '100px', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}><strong>{t.segmentoLabel}</strong>{t.segmento}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <SectionLabel>{t.doresLabel}</SectionLabel>
              <ul style={{ fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px', listStyleType: 'disc' }}>
                {t.dores.map((d, i) => <li key={i}><strong>{d.bold}</strong>{d.text}</li>)}
              </ul>
            </div>
          </div>
          <div style={{ width: '540px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.mainScreenLabel}</SectionLabel>
            <div style={{ borderRadius: '11px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
              <img src={imgWebMain} alt="POS Web main screen" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. PDV WEB */}
      <motion.div {...fadeIn(0.05)} style={{ padding: '0 120px 56px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SectionTitle>{t.webTitle}</SectionTitle>
          <SectionLabel>{t.webLabel}</SectionLabel>
        </div>

        {/* Cart */}
        <div style={{ display: 'flex', gap: '90px', alignItems: 'flex-start' }}>
          <div style={{ width: '677px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}>{t.cartTitle}</p>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}>{t.cartText}</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.cartLabel}</SectionLabel>
            <div style={{ position: 'relative', maxWidth: '541px' }}>
              <img src={imgWebCart} alt="Cart" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)' }} />
              <Badge n={1} style={{ top: '52%', left: '46%' }} />
              <Badge n={2} style={{ top: '58%', left: '46%' }} />
              <Badge n={3} style={{ top: '64%', left: '46%' }} />
            </div>
          </div>
        </div>

        <Divider />

        {/* Payment */}
        <div style={{ display: 'flex', gap: '90px', alignItems: 'flex-start' }}>
          <div style={{ width: '677px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}>{t.payTitle}</p>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}>{t.payText}</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.payLabel}</SectionLabel>
            <div style={{ position: 'relative', maxWidth: '541px' }}>
              <img src={imgWebPayment} alt="Payment" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)' }} />
              <Badge n={4} style={{ top: '38%', left: '80%' }} />
              <Badge n={5} style={{ top: '52%', left: '80%' }} />
              <Badge n={6} style={{ top: '65%', left: '80%' }} />
            </div>
          </div>
        </div>

        <Divider />

        {/* Confirm */}
        <div style={{ display: 'flex', gap: '90px', alignItems: 'flex-start' }}>
          <div style={{ width: '677px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontFamily: IBM, fontWeight: 700, fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}>{t.confirmTitle}</p>
            <p style={{ fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)' }}>{t.confirmText}</p>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SectionLabel>{t.confirmLabel}</SectionLabel>
            <img src={imgWebCongrats} alt="Success" style={{ width: '100%', maxWidth: '541px', height: 'auto', display: 'block', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)' }} />
          </div>
        </div>
      </motion.div>

      {/* 5. PDV SMART */}
      <motion.div {...fadeIn(0.05)} style={{ padding: '0 120px 56px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SectionTitle>{t.smartTitle}</SectionTitle>
          <SectionLabel>{t.smartLabel}</SectionLabel>
        </div>
        <p style={{ fontSize: '18px', lineHeight: '28px', color: 'rgba(20,19,19,0.8)', maxWidth: '800px' }}>{t.smartText}</p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {[
            { label: t.smartScreen1, src: imgSmartEmpty },
            { label: t.smartScreen2, src: imgSmartFull },
            { label: t.smartScreen3, src: imgSmartCart },
            { label: t.smartScreen4, src: imgSmartDone },
          ].map((s) => (
            <div key={s.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <SectionLabel>{s.label}</SectionLabel>
              <img src={s.src} alt={s.label} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. IMPACTO */}
      <motion.div {...fadeIn(0.05)} style={{ padding: '0 120px 56px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <SectionTitle>{t.impactoTitle}</SectionTitle>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
          {t.impactoCards.map((m) => (
            <div key={m.title} style={{ flex: 1, borderBottom: '1px solid rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '16px' }}>
              <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '32px', lineHeight: '1.2', color: 'rgba(0,0,0,0.9)' }}>{m.title}</p>
              <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '20px', lineHeight: '1.3', color: 'rgba(0,0,0,0.55)' }}>{m.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: IBM, fontWeight: 600, fontSize: '48px', lineHeight: '64px', letterSpacing: '-1.92px', color: '#252537', maxWidth: '900px' }}>
          {t.highlightPre}<span style={{ color: '#00a650' }}>{t.highlightGreen}</span>{t.highlightPost}
        </p>
        <Divider />
      </motion.div>

      {/* 7. DESIGNERS */}
      <motion.div {...fadeIn(0.05)} style={{ padding: '0 120px 80px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <SectionTitle>{t.designersTitle}</SectionTitle>
        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          {[
            { name: 'Luiz Felipe Nepomuceno', role: 'Sr. UX Designer', avatar: imgAvatar, figmaH: '191.3%', figmaTop: '-0.8%' },
            { name: 'Gabriel Gonzaga', role: 'Project Lead Designer', avatar: 'https://www.figma.com/api/mcp/asset/fa2c7df6-1ea8-442e-8ae7-6e24a0833f6b', figmaH: '100%', figmaTop: '0%' },
            { name: 'Melissa Salvatti', role: 'Semi Sr. UX Writer', avatar: '/images/Melissa%20Salvatti.png', figmaH: '100%', figmaTop: '0%' },
          ].map((p) => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '51px', height: '51px', borderRadius: '999px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                <img src={p.avatar} alt={p.name} style={{ position: 'absolute', width: '100%', height: p.figmaH, top: p.figmaTop, left: 0, maxWidth: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ fontFamily: IBM, fontWeight: 500, fontSize: '18px', color: '#101828', whiteSpace: 'nowrap' }}>{p.name}</p>
                <p style={{ fontFamily: IBM, fontWeight: 400, fontSize: '16px', color: '#4a5565', whiteSpace: 'nowrap' }}>{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
