import React, { useState, useEffect } from 'react';
// Note: If icons don't show, run: npm install lucide-react framer-motion clsx tailwind-merge
import { 
  Shield, 
  Search, 
  Radio, 
  Settings, 
  ArrowRight, 
  Mail, 
  Globe, 
  Cpu,
  Zap,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto filter drop-shadow-[0_0_8px_rgba(79,140,255,0.5)]" />
          <span className="font-heading font-bold text-xl tracking-tighter text-white">MARSUPIAL <span className="text-blue-500">RF</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Inicio', id: 'inicio' },
            { name: 'Sistemas', id: 'productos' },
            { name: 'Tecnología', id: 'tecnologia' },
            { name: 'Desafíos', id: 'desafios' },
            { name: 'Ingeniería', id: 'ingenieria' },
            { name: 'Enlace', id: 'contacto' }
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-[10px] font-black text-slate-400 hover:text-blue-400 transition-colors uppercase tracking-[0.2em]">
              {item.name}
            </a>
          ))}
          <a href="#contacto" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded text-[10px] font-black tracking-[0.2em] transition-all transform hover:-translate-y-0.5 uppercase shadow-lg shadow-blue-900/20">
            CONSOLIDAR MISIÓN
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-slate-900/98 backdrop-blur-xl border-b border-white/10 p-10 flex flex-col gap-8 md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
          {[
            { name: 'Inicio', id: 'inicio' },
            { name: 'Sistemas', id: 'productos' },
            { name: 'Tecnología', id: 'tecnologia' },
            { name: 'Desafíos', id: 'desafios' },
            { name: 'Ingeniería', id: 'ingenieria' },
            { name: 'Enlace', id: 'contacto' }
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-xl font-black text-white hover:text-blue-500 transition-colors uppercase tracking-[0.3em] border-b border-white/5 pb-4" onClick={() => setMobileMenu(false)} >
              {item.name}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMobileMenu(false)} className="bg-blue-600 text-white p-6 text-center text-sm font-black tracking-[0.4em] uppercase shadow-xl shadow-blue-900/20">
             Consolidar Misión
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent opacity-50" />
    <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase mb-10 shadow-lg shadow-blue-950/20">
          <Zap size={14} className="fill-blue-500" /> Protocolo de Espectro Electromagnético
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] font-black tracking-tighter">
          DEFENSA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white italic">AVANZADA</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-light italic">
          Ingeniería de alta precisión en detección pasiva y radiolocalización. 
          Protegemos lo invisible para asegurar el dominio estratégico.
        </p>
        <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.2em] uppercase text-slate-300">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" /> I+D DESARROLLADA EN ARGENTINA
        </div>
        <div className="flex flex-wrap gap-6 items-center">
          <a href="#productos" className="bg-white text-black hover:bg-slate-200 px-10 py-5 rounded text-xs font-black tracking-[0.3em] transition-all uppercase flex items-center gap-3 shadow-xl">
            Catálogo Táctico <ArrowRight size={18} />
          </a>
          <a href="#ingenieria" className="glass-hover border border-white/20 text-white px-10 py-5 rounded text-xs font-black tracking-[0.3em] transition-all uppercase flex items-center gap-3">
            Servicios LAB
          </a>
        </div>
      </div>

      <div className="hidden lg:flex justify-center">
        <div className="glass rounded-2xl p-6 max-w-md w-full transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.01]">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/50">
            <img
              src="/argentina.png"
              alt="Referencia Argentina"
              className="w-full h-72 object-cover opacity-85 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-300 mb-1">Base Operativa</p>
              <p className="text-white text-sm font-bold uppercase tracking-wide">Argentina • Desarrollo local con estándares globales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-12 animate-bounce text-blue-500/40 hidden md:block">
      <ChevronDown size={32} strokeWidth={1} />
    </div>
  </section>
);

const SectionHeading = ({ badge, title, subtitle }) => (
  <div className="mb-16">
    <div className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-4">{badge}</div>
    <h2 className="text-4xl md:text-5xl mb-6">{title}</h2>
    <div className="w-20 h-1 bg-blue-600 mb-6" />
    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">{subtitle}</p>
  </div>
);

const ProductCard = ({ title, category, description, features, status, image, restricted }) => (
  <div className="glass group overflow-hidden transition-all duration-500 hover:scale-[1.02] flex flex-col h-full">
    <div className="relative h-64 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10" />
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      <div className="absolute top-4 right-4 z-20">
        {restricted && (
          <div className="flex flex-col items-end gap-1">
            <span className="bg-red-600/90 text-white text-[9px] font-black tracking-[0.2em] px-3 py-1.5 rounded-sm shadow-2xl flex items-center gap-2 backdrop-blur-md border border-red-500/50 animate-pulse">
              <Shield size={10} strokeWidth={3} /> ACCESO RESTRINGIDO
            </span>
            <span className="text-[8px] text-red-500 font-bold tracking-widest bg-black/50 px-2 py-0.5 rounded uppercase">Gobiernos / Agencias</span>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-4 z-20">
        <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase bg-blue-400/10 px-2 py-1 border border-blue-400/20 backdrop-blur-sm">{category}</span>
      </div>
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <h3 className="text-xl mb-4 group-hover:text-blue-400 transition-colors uppercase font-black leading-tight">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="text-[11px] text-slate-500 flex items-start gap-2 italic leading-snug">
            <span className="text-blue-500 mt-1 shrink-0">/</span> {f}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center pt-6 border-t border-white/10 group/cta">
        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${restricted ? 'text-red-500 italic' : status === 'En Stock' ? 'text-green-500' : 'text-blue-400'}`}>{status}</span>
        <a href="#contacto" className="text-white hover:text-blue-400 transition-all flex items-center gap-2 font-black text-[10px] tracking-[0.2em] uppercase">
          Espec. Técnicas <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
);

const Products = () => {
  const products = [
    {
      title: "Localización Celular SAR (Platforms Aéreas)",
      category: "Búsqueda y Rescate / Seguridad",
      description: "Carga útil orientada a la localización de dispositivos celulares para apoyo a operaciones de búsqueda y rescate (SAR) y aplicaciones de seguridad interior.",
      features: [
        "Disponible en versiones terrestre y aérea",
        "Detección precisa de víctimas en zonas críticas",
        "Disponibilidad restringida a entidades gubernamentales",
        "Validación de credenciales requerida"
      ],
      status: "Solicitar Info",
      image: "/products/airborne_sar.png",
      restricted: true
    },
    {
      title: "Detector Pasivo LTE (4G)",
      category: "Vigilancia Aérea / C-UAS",
      description: "Detector pasivo binario de blancos aéreos en movimiento que utiliza señales celulares 4G/LTE como iluminadores de oportunidad.",
      features: [
        "Integración ASTERIX para sistemas C2",
        "Detección binaria (sin estimación de acimut)",
        "Operación pasiva de baja firma (invisible)",
        "Útil para detección de drones silenciosos"
      ],
      status: "En Stock",
      image: "/products/radar_pasivo_lte.png",
      restricted: false
    },
    {
      title: "Radar Pasivo ISDB-T Móvil",
      category: "Vigilancia de Largo Alcance",
      description: "Sistema portátil con antenas Yagi-Uda para despliegue rápido sobre emisiones de televisión digital terrestre.",
      features: [
        "Mayor alcance respecto a soluciones LTE",
        "Ideal para entornos fronterizos o rurales",
        "Compatible con cabezal rotante Marsupial",
        "Alta eficiencia en espacios abiertos"
      ],
      status: "Solicitar Info",
      image: "/products/radar_pasivo_isdbt.png",
      restricted: false
    },
    {
      title: "Radiogoniómetro 5CH Alta Res.",
      category: "SIGINT / Inteligencia Electrónica",
      description: "Sistema de estimación de Ángulo de Arribo (AoA) de 5 canales coherentes para despliegue táctico.",
      features: [
        "Rango continuo: 300–1700 MHz",
        "Formación de patrones en medio cuadrante",
        "Integrable en plataformas vehiculares/navales",
        "Alta resolución espacial de señales"
      ],
      status: "En Stock",
      image: "/products/array_lineal_3d.jpeg",
      restricted: true
    },
    {
      title: "Frontend Profesional 2D",
      category: "Análisis Espacial",
      description: "Frontend de antena propietario para análisis de patrones de intensidad de radio en dos dimensiones.",
      features: [
        "Integración nativa con radiogoniómetro 5CH",
        "Orientado a formación de patrones 2D",
        "Análisis espacial detallado de señales",
        "Optimizado para despliegues técnicos"
      ],
      status: "Consultar",
      image: "/products/array_profesional.png",
      restricted: false
    },
    {
       title: "SDR Coherente 8 Canales",
       category: "Adquisición Multicanal",
       description: "Sistema receptor multicanal de 12 bits de alto rendimiento basado en arquitectura AD9361.",
       features: [
         "Rango: 60 MHz a 6000 MHz",
         "56 MHz ancho de banda instantáneo por canal",
         "Compatible con AD9371 / ADRV9009",
         "8 canales de adquisición coherente"
       ],
       status: "En Stock",
       image: "/products/receptor_8ch_ad9361.jpeg",
       restricted: false
    },
    {
       title: "Plataforma Vehicular Next-Gen",
       category: "Defensa Proactiva",
       description: "Evolución para despliegue vehicular con mayor potencia de integración y capacidades avanzadas.",
       features: [
         "Iluminadores híbridos: LTE + ISDB-T",
         "Estimación de acimut 2D (Bearing)",
         "Integración ASTERIX nativa",
         "Desarrollado en conjunto con especialistas UBA"
       ],
       status: "En Desarrollo",
       image: "/products/continuous_rotation.png",
       restricted: true
    }
  ];

  return (
    <section id="productos" className="py-24 bg-[#080a0f]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          badge="Arsenal de Tecnologías"
          title="SISTEMAS CRÍTICOS"
          subtitle="Nuestras soluciones están diseñadas para operar donde otros fallan. Alta precisión, discreción operativa y robustez industrial."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors uppercase tracking-[0.2em] text-sm">
            Ver catálogo completo de ingeniería <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Storytelling = () => (
  <section id="tecnologia" className="py-24 relative overflow-hidden">
    <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-600/5 blur-3xl rounded-full" />
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <SectionHeading 
          badge="Nuestra Filosofía"
          title="MÁS ALLÁ DEL ESPECTRO VISIBLE"
          subtitle="En MARSUPIAL RF, no solo fabricamos equipos; resolvemos problemas de física aplicada para garantizar la seguridad nacional y la protección de vidas."
        />
        
        <div className="space-y-12">
          {[
            { icon: <Shield className="text-blue-500" size={32} />, title: "Detección Pasiva", text: "Vigilancia sin ser detectado. Nuestros sistemas no emiten señales, lo que permite observar el espacio aéreo sin revelar la posición del operador." },
            { icon: <Radio className="text-blue-500" size={32} />, title: "Precisión RF", text: "Diseño de cadenas de radiofrecuencia con mínima distorsión y máxima sensibilidad para captar señales en entornos ruidosos." },
            { icon: <Search className="text-blue-500" size={32} />, title: "Localización SAR", text: "Tecnología aérea para encontrar dispositivos móviles en misiones de socorro, optimizando tiempos de respuesta vitales." },
            { icon: <Globe className="text-blue-500" size={32} />, title: "Soberanía Tecnológica", text: "Desarrollo local con estándares globales. Poseemos el control total de nuestra arquitectura de hardware y software." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="mt-1 p-3 bg-blue-600/5 rounded-lg border border-blue-500/10 group-hover:bg-blue-600/10 transition-colors h-fit shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl mb-3 font-black uppercase text-white tracking-[0.2em] group-hover:text-blue-400 transition-colors">{item.title}</h4>
                <p className="text-slate-500 font-light leading-relaxed max-w-lg">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="glass p-4 rounded-lg transform rotate-2">
          <img src="/products/services.jpg" alt="Ingeniería" className="rounded grayscale hover:grayscale-0 transition-all duration-1000" />
        </div>
        <div className="absolute -bottom-10 -left-10 glass p-8 rounded-lg max-w-xs transform -rotate-3 hidden md:block">
          <div className="text-4xl font-black text-blue-500 mb-2">12+</div>
          <p className="text-xs text-slate-300 font-bold tracking-widest uppercase mb-4">Años de Experticia RF</p>
          <p className="text-[10px] text-slate-500 italic font-medium leading-relaxed">
            "Acompañamos proyectos desde el diseño conceptual hasta la validación experimental y la documentación técnica."
          </p>
        </div>
      </div>
    </div>
  </section>
);

const OpportunitiesAndChallenges = () => (
  <section id="desafios" className="py-24 bg-[#070910] border-y border-white/5">
    <div className="container mx-auto px-6">
      <SectionHeading
        badge="Oportunidades"
        title="BÚSQUEDAS Y DESAFÍOS TÉCNICOS"
        subtitle="Espacio para convocatorias, colaboraciones y problemas técnico-matemáticos vinculados a I+D en MARSUPIAL RF."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-lg border border-white/10">
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-6">Búsquedas abiertas</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">Actualmente no tenemos búsquedas abiertas.</p>
          <div className="pt-5 border-t border-white/10">
            <h5 className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px] mb-3">Búsquedas anteriores (cerradas)</h5>
            <a href="/summerinternship_2026.html" className="text-white hover:text-blue-400 transition-colors text-sm font-bold inline-flex items-center gap-2">
              Pasantías de verano 2026 <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="glass p-8 rounded-lg border border-white/10">
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-6">Desafíos técnicos</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Recopilamos problemas de carácter técnico-matemático para talleres, pasantías y colaboraciones académicas orientadas a defensa, SAR y sistemas de radiofrecuencia.
          </p>
          <a
            href="/docs/MARSUPIALRF_propuesta_TAMI7_FCEYN_UBA.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded text-[10px] font-black tracking-[0.2em] uppercase transition-all"
          >
            Descargar propuesta TAMI VII <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contacto" className="bg-[#030508] border-t border-white/5 pt-24 pb-10">
    <div className="container mx-auto px-6">
      <div className="mb-20">
        <div className="grid lg:grid-cols-3 gap-12 items-end">
          <div className="lg:col-span-2">
            <div className="text-blue-500 font-black tracking-[0.4em] uppercase text-xs mb-6">Canales de Enlace Táctico</div>
            <h2 className="text-5xl md:text-6xl mb-10 font-bold max-w-2xl">¿LISTO PARA ELEVAR SU <span className="text-blue-500 underline decoration-1 underline-offset-8">CAPACIDAD OPERATIVA?</span></h2>
          </div>
          <div className="flex justify-start lg:justify-end pb-4">
             <div className="flex gap-4">
                <div className="p-4 glass rounded-full text-blue-500 border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
                  <Globe size={24} />
                </div>
                <div className="p-4 glass rounded-full text-blue-500 border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
                  <Shield size={24} />
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="col-span-2 space-y-8">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            <div className="h-10 w-[1px] bg-white/10 mx-2" />
            <span className="font-heading font-black text-2xl tracking-tighter text-white">MARSUPIAL <span className="text-blue-600">RF</span></span>
          </div>
          <p className="text-slate-500 max-w-md leading-relaxed text-lg font-light italic">
            "Donde la física se encuentra con la defensa nacional. Diseñamos el futuro de la vigilancia pasiva y el rescate técnico."
          </p>
          <div className="pt-4 flex flex-col gap-2">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-600">Sede Central</span>
            <span className="text-white font-bold tracking-widest uppercase">Buenos Aires, Argentina</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-black tracking-[0.4em] uppercase text-[10px] mb-10 border-b border-blue-600/30 pb-2 w-fit">Departamentos</h4>
          <ul className="space-y-8">
            <li>
              <a href="mailto:sales@marsupialrf.com" className="group block">
                <span className="text-blue-500 text-xs font-black tracking-widest uppercase block mb-1 group-hover:translate-x-1 transition-transform">Ventas Internacionales</span>
                <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">sales@marsupialrf.com</span>
              </a>
            </li>
            <li>
              <a href="mailto:defensa@marsupialrf.com" className="group block">
                <span className="text-blue-500 text-xs font-black tracking-widest uppercase block mb-1 group-hover:translate-x-1 transition-transform">División de Defensa</span>
                <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">defensa@marsupialrf.com</span>
              </a>
            </li>
            <li>
              <a href="mailto:engineering@marsupialrf.com" className="group block">
                <span className="text-blue-500 text-xs font-black tracking-widest uppercase block mb-1 group-hover:translate-x-1 transition-transform">Consultoría de Ingeniería</span>
                <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">engineering@marsupialrf.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
           <div className="glass p-8 rounded-lg border-t-2 border-blue-600 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
               <Shield size={80} />
             </div>
             <h4 className="text-white font-black tracking-widest uppercase text-xs mb-6 relative z-10">Enlace Directo</h4>
             <p className="text-slate-400 text-[10px] mb-8 leading-relaxed uppercase tracking-widest font-bold relative z-10">Solicite una reunión técnica o cotización formal para proyectos de gran escala.</p>
             <a 
               href="mailto:sales@marsupialrf.com?subject=Consulta Técnica - Proyecto"
               className="group/btn w-full bg-blue-600 py-4 rounded text-[10px] font-black tracking-[0.2em] text-white hover:bg-blue-500 transition-all shadow-2xl relative z-10 flex items-center justify-center gap-2"
             >
               INICIAR CONSULTA <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
             </a>
           </div>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.2em] text-slate-600 uppercase">
        <div className="flex gap-8">
          <p>© {new Date().getFullYear()} MARSUPIAL RF SISTEMAS TÁCTICOS</p>
          <a href="#" className="hover:text-blue-500 transition-colors">Seguridad de Datos</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Legal</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="h-1.5 w-1.5 bg-blue-600 rounded-full animate-pulse" />
          <p>Operaciones Activas • 24/7 Soporte Técnico</p>
        </div>
      </div>
    </div>
  </footer>
);

const EngineeringServices = () => (
   <section id="ingenieria" className="py-24 bg-[#05070a]">
      <div className="container mx-auto px-6">
         <div className="glass p-12 rounded-2xl border-l-4 border-l-blue-600">
            <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2">
                  <SectionHeading 
                    badge="Capacidades Avanzadas"
                    title="SERVICIOS DE INGENIERÍA RF"
                    subtitle="Ofrecemos optimización de sistemas de comunicación y caracterización técnica detallada para entornos electromagnéticos complejos."
                  />
                  <div className="grid md:grid-cols-2 gap-6 -mt-8">
                     <div className="border border-white/5 p-6 rounded bg-white/[0.01]">
                        <h4 className="text-blue-400 text-sm font-bold mb-3 uppercase tracking-widest">Validación Experimental</h4>
                        <p className="text-xs text-slate-500 leading-relaxed italic">Ensayos de laboratorio y pruebas de campo con reportes técnicos detallados y transferencia tecnológica directa.</p>
                     </div>
                     <div className="border border-white/5 p-6 rounded bg-white/[0.01]">
                        <h4 className="text-blue-400 text-sm font-bold mb-3 uppercase tracking-widest">Arquitecturas RF/IF</h4>
                        <p className="text-xs text-slate-500 leading-relaxed italic">Diseño de cadenas de recepción y transmisión con caracterización de ruido, linealidad y dinámica punta a punta.</p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center text-center bg-blue-600/5 p-8 rounded-xl border border-blue-500/10">
                  <div className="p-4 bg-blue-600/10 rounded-full mb-6">
                    <Cpu className="text-blue-500" size={48} />
                  </div>
                  <p className="text-sm font-bold tracking-[0.2em] uppercase mb-8 text-white">Laboratorio de Grado Industrial</p>
                  <a href="mailto:engineering@marsupialrf.com" className="w-full bg-blue-600 text-white px-6 py-4 rounded font-black text-xs tracking-widest hover:bg-blue-500 uppercase transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                     Contactar Ingeniería <ArrowRight size={16} />
                  </a>
               </div>
            </div>
         </div>
      </div>
   </section>
);

function App() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
              <span className="font-heading font-bold text-[10px] tracking-[0.4em] text-white">DEFENSE GRADE</span>
              <span className="font-heading font-bold text-[10px] tracking-[0.4em] text-white">RF EXCELLENCE</span>
              <span className="font-heading font-bold text-[10px] tracking-[0.4em] text-white">PASSIVE TRACKING</span>
              <span className="font-heading font-bold text-[10px] tracking-[0.4em] text-white">SDR INTEGRATED</span>
              <span className="font-heading font-bold text-[10px] tracking-[0.4em] text-white">SAR MISSIONS</span>
            </div>
          </div>
        </section>
        <Products />
        <Storytelling />
        <OpportunitiesAndChallenges />
        <EngineeringServices />
      </main>
      <Footer />
    </div>
  );
}

export default App;
