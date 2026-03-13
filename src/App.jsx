import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Activity, Hand, 
  BrainCircuit, ArrowRight, Bot, Cpu, 
  ShieldCheck, ArrowUpRight, ChevronRight,
  Globe, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', id: 'home' },
    { name: '旗舰产品', id: 'products' },
    { name: '核心技术', id: 'tech' },
    { name: '关于我们', id: 'about' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
            <img src="/logo-dark.png" alt="麟动科技 LINDONG AI" className="h-[42px] w-auto drop-shadow-sm transition-transform hover:scale-[1.02]" />
          </div>
          
          <div className="hidden md:flex items-center space-x-1 bg-gray-100/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-gray-200/50">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeSection === link.id ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollTo('contact')} className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/20">
              联系我们
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-3xl border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left text-2xl font-bold text-gray-900 py-2 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <button onClick={() => scrollTo('contact')} className="w-full py-4 bg-gray-900 text-white rounded-2xl text-lg font-bold">
                  联系我们
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gray-50">
    {/* Background Decorative Elements */}
    <div className="absolute top-0 inset-x-0 h-screen bg-gradient-to-b from-blue-50/50 to-white/0 pointer-events-none"></div>
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/10 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center lg:text-left pt-10 lg:pt-0"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8">
            <Zap size={14} className="mr-2 text-blue-500" /> New Era of Robotics
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
            让机器人进入<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">千家万户</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            将前沿人工智能赋予物理载体，打造具备自主感知、决策与执行能力的具身智能系统，全面重塑个人、家庭及产业形态。
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="px-8 py-4.5 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center justify-center shadow-xl shadow-gray-900/20 group">
              探索旗舰产品 
              <span className="ml-2 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight size={16} />
              </span>
            </button>
            <button className="px-8 py-4.5 bg-white border border-gray-200 text-gray-900 rounded-full font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center">
              开发者平台
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-12 lg:mt-0 pb-20 lg:pb-0"
        >
          {/* Futuristic Visual Representation */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] transform rotate-3 scale-105 opacity-50"></div>
            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 p-8 flex flex-col justify-between">
              
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-gray-100">
                  <BrainCircuit size={32} />
                </div>
                <div className="flex items-center space-x-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>System Online</span>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-dashed border-gray-200 animate-[spin_30s_linear_infinite]"></div>
                <div className="absolute inset-8 rounded-full border border-dashed border-blue-200 animate-[spin_20s_linear_infinite_reverse]"></div>
                
                <div className="relative group cursor-pointer">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 transform transition-transform group-hover:scale-105 duration-500">
                    <Bot size={64} className="text-white" />
                  </div>
                  {/* Floating Elements */}
                  <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-blue-600">
                    <Zap size={20} />
                  </motion.div>
                  <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -bottom-2 -left-4 w-14 h-14 bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-white">
                    <Activity size={24} />
                  </motion.div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Core Engine</span>
                  <span className="text-xs font-bold text-blue-600">v7.0.4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-600 h-1.5 rounded-full w-4/5 animate-[pulse_2s_ease-in-out_infinite]"></div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

const ProductCard = ({ title, subtitle, features, specs, icon: Icon, type }) => (
  <motion.div 
    variants={fadeUp}
    className="bg-white rounded-[2rem] p-8 lg:p-10 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group border border-gray-100 relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 rounded-full opacity-[0.03] transition-transform duration-700 group-hover:scale-150 ${type === 'care' ? 'bg-teal-600' : 'bg-blue-600'}`}></div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-8">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors shadow-sm ${type === 'care' ? 'bg-teal-50 text-teal-600' : 'bg-blue-50 text-blue-600'}`}>
          <Icon size={32} />
        </div>
        <div className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
          {type === 'care' ? 'Service/Care' : 'Industrial/Inspection'}
        </div>
      </div>
      
      <h3 className="text-3xl font-black text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 mb-10 leading-relaxed min-h-[3rem]">{subtitle}</p>
      
      <div className="space-y-4 mb-10">
        {features.map((f, i) => (
          <div key={i} className="flex items-start text-gray-700">
            <ShieldCheck size={20} className={`mr-3 shrink-0 ${type === 'care' ? 'text-teal-500' : 'text-blue-500'}`} />
            <span className="text-sm font-medium">{f}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-8 border-t border-gray-100">
        {Object.entries(specs).map(([label, val]) => (
          <div key={label}>
            <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-2">{label}</p>
            <p className="text-lg font-bold text-gray-900">{val}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const SectionHeading = ({ title, description, badge }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUp}
    className="text-center mb-16 lg:mb-24"
  >
    {badge && <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs tracking-widest uppercase mb-6">{badge}</span>}
    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title}</h2>
    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{description}</p>
  </motion.div>
);

const Products = () => (
  <section id="products" className="py-24 lg:py-32 bg-white relative">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <SectionHeading 
        badge="Product Portfolio"
        title="双旗舰主力平台" 
        description="面向不同行业深度定制，集仿人感知、精细操作与大模型智能于一体的多模态系统。" 
      />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid lg:grid-cols-2 gap-8 lg:gap-12"
      >
        <ProductCard 
          title="伏 · 康养护理专家"
          subtitle="首款面向康养行业深度定制的具身护理机器人，提供全天候智能陪伴与辅助。"
          type="care"
          icon={Activity}
          features={["非接触式精准体征监测", "单剂量智能安全发药", "适老化专业护理辅助", "情感分析与心理陪伴"]}
          specs={{ "运行高度": "1.5m", "整机重量": "75kg", "标准续航": "6-8h", "单臂负载": "3kg" }}
        />
        <ProductCard 
          title="RK100 · 智能探勘者"
          subtitle="集智能巡检与精细操作于一体的多功能双足人形机器人，胜任高危复杂环境。"
          type="industrial"
          icon={Cpu}
          features={["抗干扰高性能双足系统", "7自由度仿生灵巧手臂", "复杂全地形自适应移动", "工业级边缘智能决策"]}
          specs={{ "运行高度": "1.6m", "最大速度": "1.2m/s", "标准续航": "2-3h", "适应环境": "全地形" }}
        />
      </motion.div>
    </div>
  </section>
);

const Technology = () => (
  <section id="tech" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="lg:w-1/2"
        >
          <motion.span variants={fadeUp} className="inline-block py-1.5 px-4 rounded-full bg-blue-100/50 border border-blue-200 text-blue-600 font-bold text-xs tracking-widest uppercase mb-6">Core Technology</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]">突破具身智能的<br />想象边界</motion.h2>
          
          <div className="space-y-10 mt-12">
            {[
              {
                icon: Hand,
                color: "blue",
                title: "精细化类人灵巧操作",
                desc: "7 自由度手臂配合 5 指灵巧手，实现自主开门、精细抓取、器械操作等亚毫米级精度动作控制。"
              },
              {
                icon: BrainCircuit,
                color: "indigo",
                title: "多模态行业通用大模型",
                desc: "基于盘古基础大模型，结合行业Know-How深度微调，驱动全流程智能零样本决策与自然语言交互。"
              },
              {
                icon: Globe,
                color: "teal",
                title: "全场景 3D 感知融合",
                desc: "集成固态激光雷达、双目深度相机及声学传感器阵列，实现复杂动态环境下的实时构建与语义理解。"
              }
            ].map((feature, i) => (
              <motion.div variants={fadeUp} key={i} className="flex gap-6 group">
                <div className={`shrink-0 w-16 h-16 bg-white rounded-2xl border border-gray-100 flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 duration-300 text-${feature.color}-600`}>
                  <feature.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 relative w-full"
        >
           <div className="w-full aspect-square bg-gray-900 rounded-[3rem] overflow-hidden flex items-center justify-center relative shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
              
              <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full p-8 opacity-20 absolute z-0">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border border-blue-400/30 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-80 h-80 absolute border-4 border-gray-800 rounded-full"></div>
                <div className="w-64 h-64 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite] absolute mix-blend-screen"></div>
                <div className="w-48 h-48 border-2 border-dashed border-indigo-400/40 rounded-full animate-reverse-spin absolute mix-blend-screen"></div>
                
                <div className="w-32 h-32 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20"></div>
                  <Cpu size={56} className="text-blue-400" />
                </div>
                
                <div className="mt-8 px-6 py-2 bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-700 font-mono text-sm text-blue-400 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                  LINDONG_OS_KERNEL
                </div>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-16 lg:mb-24"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs tracking-widest uppercase mb-6">Founding Team</span>
        <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">科学家驱动的创新</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">麟动科技由行业巨头与顶尖科学家共同创立，致力于将前沿机电一体化研究转化为普惠大众的人工智能终端产品。</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
         {[
           {
             role: "战略股东",
             name: "亿嘉和科技 (603666)",
             desc: "作为母公司提供强大的底层通用机器人技术平台支撑与深厚的产业化落地经验。"
           },
           {
             role: "首席科学家",
             name: "李泽湘 教授",
             desc: "机器人与自动化领域国际顶级专家，大疆创新董事长，松山湖机器人基地创始人。"
           },
           {
             role: "核心科学家",
             name: "于欣格 教授",
             desc: "生物医学工程与传感技术专家，专注柔性电子与健康监测技术在机器人的前沿应用。"
           }
         ].map((person, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.2 }}
             className="bg-white/5 backdrop-blur-md p-8 lg:p-10 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors"
           >
              <h4 className="text-xs font-black tracking-widest uppercase mb-4 text-blue-400">{person.role}</h4>
              <h3 className="text-2xl font-bold mb-4">{person.name}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{person.desc}</p>
           </motion.div>
         ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-gray-900 rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-gray-900/20">
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/30 to-indigo-600/30 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-[1.1]">准备好迎接<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">具身智能时代</span>了吗？</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              无论您是寻找行业落地方案的合作伙伴，还是希望加入我们共同创造未来，我们都期待您的讯息。
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center group">
              获取合作方案 
              <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full grid sm:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <h5 className="font-bold text-lg mb-2">深圳总部</h5>
              <p className="text-sm text-gray-400 leading-relaxed">深圳市南山区<br/>深圳国际创新谷7栋B座5楼</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-indigo-400" size={24} />
              </div>
              <h5 className="font-bold text-lg mb-2">南京研发中心</h5>
              <p className="text-sm text-gray-400 leading-relaxed">南京市雨花台区<br/>亿嘉和机器人产业园3栋</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'tech', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Products />
      <Technology />
      <About />
      <Contact />
      
      <footer className="py-12 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img src="/logo-light.png" alt="麟动科技 LINDONG AI" className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-gray-400 text-sm">© 2025 深圳麟动具身科技有限公司 版权所有</p>
          <div className="flex space-x-6 text-sm font-semibold text-gray-400">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
