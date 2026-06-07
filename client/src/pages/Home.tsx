import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Star } from 'lucide-react';

/**
 * DF Ótica Landing Page
 * Design System: Cinematic Dark Luxury with Emerald Accents
 * 
 * Key Features:
 * - Glassmorphism cards and effects
 * - Emerald glow accents for luxury feel
 * - Split-screen hero layout
 * - Premium animations and transitions
 * - Conversion-focused CTAs
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = 'https://wa.me/5583986754107';

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect-dark backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
{/* Logo */}
<div className="flex items-center gap-2">
  <div className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center overflow-hidden">
    <img 
      src="/../logo.png" 
      alt="Logo DF" 
      className="w-full h-full object-contain"
    />
  </div>
  <span className="text-xl font-bold hidden sm:inline">DF Ótica</span>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm hover:text-emerald-400 smooth-transition">
              Início
            </a>
            <a href="/portfolio" className="text-sm hover:text-emerald-400 smooth-transition">
              Coleção
            </a>
            <a href="/#depoimentos" className="text-sm hover:text-emerald-400 smooth-transition">
              Depoimentos
            </a>
            <a href="/#localizacao" className="text-sm hover:text-emerald-400 smooth-transition">
              Localização
            </a>
            <a href="/#contato" className="text-sm hover:text-emerald-400 smooth-transition">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black rounded-lg font-semibold hover:bg-emerald-400 smooth-transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-emerald-500/10 rounded-lg smooth-transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect-dark border-t border-emerald-500/20 p-4 space-y-4">
            <a href="/" className="block text-sm hover:text-emerald-400 smooth-transition">
              Início
            </a>
            <a href="/portfolio" className="block text-sm hover:text-emerald-400 smooth-transition">
              Coleção
            </a>
            <a href="/#depoimentos" className="block text-sm hover:text-emerald-400 smooth-transition">
              Depoimentos
            </a>
            <a href="/#localizacao" className="block text-sm hover:text-emerald-400 smooth-transition">
              Localização
            </a>
            <a href="/#contato" className="block text-sm hover:text-emerald-400 smooth-transition">
              Contato
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-emerald-500 text-black rounded-lg font-semibold text-center hover:bg-emerald-400 smooth-transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/hero-woman-elegant-cZYXkCemMwu2kSPaGytFJc.webp"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay - Left to Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          {/* Additional Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect-dark w-fit">
              <Star size={16} className="text-emerald-400" />
              <span className="text-sm text-emerald-300">Ótica Premium em João Pessoa</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient">DF Ótica:</span>
              <br />
              <span>A Arte de Enxergar com Estilo</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Óculos premium que unem elegância, conforto e tecnologia para transformar sua visão e elevar sua presença.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 smooth-transition hover-lift-effect text-center emerald-glow"
              >
                Falar no WhatsApp
              </a>
              <a
                href="/portfolio"
                className="px-8 py-4 glass-effect-dark text-white font-semibold rounded-lg hover:bg-emerald-500/10 smooth-transition text-center"
              >
                Ver Coleção
              </a>
            </div>
          </div>

          {/* Right Side - Empty for background image */}
          <div />
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 relative bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lentes Premium',
                description: 'Tecnologia para máxima nitidez e conforto visual.',
                icon: '👁️',
              },
              {
                title: 'Atendimento Especializado',
                description: 'Orientação personalizada para cada cliente.',
                icon: '🤝',
              },
              {
                title: 'Design Exclusivo',
                description: 'Modelos modernos para todos os estilos.',
                icon: '✨',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-effect-dark p-8 rounded-xl hover-lift-effect smooth-transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 smooth-transition">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coleção Section */}
      <section id="colecao" className="py-20 relative bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Coleção Exclusiva</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Modelos selecionados para quem valoriza sofisticação e personalidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                modelo: 'WZ1093',
                descricao: 'O equilíbrio perfeito entre o metal e a leveza, combinando resistência, conforto e elegância contemporânea.',
                preco: 'R$ 249,99',
                imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/product-wz1093-metal-VMAehPipaLQvts4jozYDp9.webp',
              },
              {
                modelo: 'TR927 C58',
                descricao: 'Design Cat-Eye com acabamento em tartaruga premium, ideal para mulheres que desejam destacar sua personalidade.',
                preco: 'R$ 249,99',
                imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663691218489/W7wbNqsgqTQxw7v5QPPgjq/product-tr927-cat-eye-9rhpjtzaW3QEDKSQBXmJ5K.webp',
              },
            ].map((produto, index) => (
              <div
                key={index}
                className="glass-effect-dark rounded-xl overflow-hidden hover-lift-effect smooth-transition group"
              >
                <div className="relative h-80 bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={produto.imagem}
                    alt={`Produto ${produto.modelo}`}
                    className="w-full h-full object-contain group-hover:scale-110 smooth-transition p-8"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-emerald-400">{produto.modelo}</h3>
                  <p className="text-gray-300 mb-6">{produto.descricao}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-400">{produto.preco}</span>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 smooth-transition"
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 relative bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Quem Usa Recomenda</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nome: 'Iva Costa',
                depoimento: 'Atendimento impecável e qualidade excepcional. Me senti valorizada em cada detalhe.',
                iniciais: 'IC',
              },
              {
                nome: 'Déborah',
                depoimento: 'Os óculos ficaram perfeitos. Recebi elogios desde o primeiro dia.',
                iniciais: 'DB',
              },
              {
                nome: 'Jesse Maiara',
                depoimento: 'Experiência premium do início ao fim. Voltarei com certeza.',
                iniciais: 'JM',
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-effect-dark p-8 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.depoimento}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center font-bold text-black">
                    {testimonial.iniciais}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.nome}</p>
                    <p className="text-sm text-gray-400">Cliente DF Ótica</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contato" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-effect-dark rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para encontrar o óculos ideal?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Descubra uma nova forma de enxergar com estilo, conforto e exclusividade.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 smooth-transition hover-lift-effect emerald-glow text-lg"
              >
                Agendar Atendimento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-black/40 border-t border-emerald-500/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Visite Nossa Loja</h2>
          <p className="text-center text-gray-300 text-lg mb-12">Localizada no coração de João Pessoa</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect-dark rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Endereço</h3>
              <div className="space-y-4 mb-8">
                <p className="text-white"><span className="text-gray-400">Rua:</span> Rua João Clímaco Monteiro da França, 122</p>
                <p className="text-white"><span className="text-gray-400">Bairro:</span> José Américo</p>
                <p className="text-white"><span className="text-gray-400">Cidade:</span> João Pessoa - PB</p>
              </div>
              <div className="border-t border-emerald-500/20 pt-6 mb-8">
                <h4 className="text-gray-400 text-sm mb-3">Horário de Funcionamento</h4>
                <p className="text-white">Segunda a Sexta: 09:00 - 18:00</p>
                <p className="text-white">Sábado: 09:00 - 13:00</p>
              </div>
              <a href="https://www.google.com/maps/search/Rua+Jo%C3%A3o+Cl%C3%ADmaco+Monteiro+da+Fran%C3%A7a,+122,+Jos%C3%A9+Am%C3%A9rico,+Jo%C3%A3o+Pessoa+-+PB" target="_blank" rel="noopener noreferrer" className="w-full px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 smooth-transition text-center block">
                Abrir no Google Maps
              </a>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-emerald-500/20" style={{ height: '400px' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0639382647303!2d-34.8453!3d-7.1097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace8c8c8c8c8c8d%3A0x0!2sRua%20Jo%C3%A3o%20Cl%C3%ADmaco%20Monteiro%20da%20Fran%C3%A7a%2C%20122%20-%20Jos%C3%A9%20Am%C3%A9rico%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-500/20 py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center">
                  <span className="text-lg font-bold text-emerald-400">DF</span>
                </div>
                <span className="text-xl font-bold">DF Ótica</span>
              </div>
              <div className="space-y-2 text-gray-400">
                <p>Rua João Clímaco Monteiro da França, 122</p>
                <p>José Américo</p>
                <p>João Pessoa - PB</p>
              </div>
            </div>

            <div className="flex gap-6 md:justify-end">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:bg-emerald-500/20 smooth-transition"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:bg-emerald-500/20 smooth-transition"
                title="Facebook"
              >
                f
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:bg-emerald-500/20 smooth-transition"
                title="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          <div className="border-t border-emerald-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 DF Ótica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
