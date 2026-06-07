import { useState } from 'react';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Portfolio Page - DF Ótica
 * Complete eyewear collection gallery
 */

export default function Portfolio() {
  const [, setLocation] = useLocation();
  const whatsappLink = 'https://wa.me/5583986754107';

  const produtos = [
    {
      id: 1,
      modelo: 'WZ1093',
      categoria: 'Metal',
      descricao: 'O equilíbrio perfeito entre o metal e a leveza, combinando resistência, conforto e elegância contemporânea.',
      preco: 'R$ 249,99',
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/product-wz1093-metal-VMAehPipaLQvts4jozYDp9.webp',
      detalhes: ['Armação em metal', 'Acabamento ouro/preto', 'Lentes premium', 'Proteção UV 100%'],
    },
    {
      id: 2,
      modelo: 'TR927 C58',
      categoria: 'Acetato',
      descricao: 'Design Cat-Eye com acabamento em tartaruga premium, ideal para mulheres que desejam destacar sua personalidade.',
      preco: 'R$ 249,99',
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/product-tr927-cat-eye-9rhpjtzaW3QEDKSQBXmJ5K.webp',
      detalhes: ['Acetato tartaruga', 'Design Cat-Eye', 'Acabamento premium', 'Conforto máximo'],
    },
    {
      id: 3,
      modelo: 'RB3025',
      categoria: 'Aviador',
      descricao: 'Clássico aviador com lentes escuras e armação em metal dourado. Estilo atemporal e sofisticado.',
      preco: 'R$ 299,99',
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/product-rb3025-aviator-haXMYzpRTCKxDFtrYrpSXs.webp',
      detalhes: ['Metal dourado', 'Lentes escuras', 'Proteção UV', 'Estilo clássico'],
    },
    {
      id: 4,
      modelo: 'VINTAGE ROUND',
      categoria: 'Vintage',
      descricao: 'Óculos redondos com armação em tartaruga e ponte dourada. Perfeito para quem ama estilo retrô.',
      preco: 'R$ 269,99',
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/product-round-vintage-Px4iZ58ZnuAgyTS7Q5QKtJ.webp',
      detalhes: ['Acetato tartaruga', 'Formato redondo', 'Ponte dourada', 'Estilo vintage'],
    },
    {
      id: 5,
      modelo: 'OVERSIZED BLACK',
      categoria: 'Moderno',
      descricao: 'Armação oversized em acetato preto com acabamento luxuoso. Tendência contemporânea de moda.',
      preco: 'R$ 279,99',
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/product-oversized-black-eokPiMRCcAuaQsb6h7ctVU.webp',
      detalhes: ['Acetato preto', 'Formato oversized', 'Design moderno', 'Acabamento premium'],
    },
    {
      id: 6,
      modelo: 'BROWLINE GOLD',
      categoria: 'Híbrido',
      descricao: 'Browline com topo em tartaruga e metal dourado na base. Combinação perfeita de estilos.',
      preco: 'R$ 289,99',
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/product-browline-gold-itNqeW6wwEJVLEnXsYwqtm.webp',
      detalhes: ['Híbrido tartaruga/ouro', 'Design browline', 'Acabamento premium', 'Versátil'],
    },
  ];

  const categorias = ['Todos', 'Metal', 'Acetato', 'Aviador', 'Vintage', 'Moderno', 'Híbrido'];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  const produtosFiltrados = categoriaSelecionada === 'Todos'
    ? produtos
    : produtos.filter(p => p.categoria === categoriaSelecionada);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect-dark backdrop-blur-md border-b border-emerald-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 smooth-transition"
          >
            <ChevronLeft size={20} />
            <span>Voltar</span>
          </button>
          <h1 className="text-2xl font-bold">Coleção Completa</h1>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black rounded-lg font-semibold hover:bg-emerald-400 smooth-transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa Coleção Exclusiva</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore nossa seleção curada de óculos premium, cada modelo escolhido para oferecer elegância, conforto e estilo incomparável.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSelecionada(cat)}
              className={`px-6 py-2 rounded-lg font-semibold smooth-transition ${
                categoriaSelecionada === cat
                  ? 'bg-emerald-500 text-black'
                  : 'glass-effect-dark text-white hover:bg-emerald-500/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              className="glass-effect-dark rounded-xl overflow-hidden hover-lift-effect smooth-transition group"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-white overflow-hidden flex items-center justify-center">
                <img
                  src={produto.imagem}
                  alt={produto.modelo}
                  className="w-full h-full object-contain group-hover:scale-110 smooth-transition p-6"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400">{produto.modelo}</h3>
                    <p className="text-sm text-gray-400">{produto.categoria}</p>
                  </div>
                  <span className="text-2xl font-bold text-emerald-400">{produto.preco}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm">{produto.descricao}</p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {produto.detalhes.map((detalhe, idx) => (
                    <div key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                      {detalhe}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 smooth-transition text-center"
                >
                  Solicitar Informações
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="glass-effect-dark rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Não encontrou o modelo ideal?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para conhecer mais modelos, fazer encomendas personalizadas ou agendar uma consulta com nossos especialistas.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 smooth-transition hover-lift-effect emerald-glow text-lg"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-500/20 py-8 bg-black/20 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2026 DF Ótica. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
