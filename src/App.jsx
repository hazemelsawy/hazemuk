import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Download, 
  ExternalLink, 
  Code, 
  Database, 
  TrendingUp, 
  Server, 
  Moon, 
  Sun,
  Terminal,
  Cpu,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Best Practice Theme Detection
  useEffect(() => {
    // 1. Define the logic in a reusable function
    const checkTime = () => {
      const hour = new Date().getHours();
      // Night is between 6 PM (18) and 6 AM (6)
      const isNight = hour >= 18 || hour < 6;
      
      // Only trigger a re-render if the value actually changes
      setDarkMode(prevMode => {
        if (prevMode !== isNight) return isNight;
        return prevMode;
      });
    };

    // 2. Run immediately on mount so the user doesn't see a flash of wrong theme
    checkTime();

    // 3. Set up a low-cost interval (every 60 seconds)
    // This ensures that if the time crosses 6:00 PM while the site is open, it switches.
    const intervalId = setInterval(checkTime, 5000);

    // 4. CLEANUP: Crucial React Best Practice
    // When the component unmounts, kill the timer to prevent memory leaks.
    return () => clearInterval(intervalId);
  }, []);

  // Toggle dark mode manual override
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 shadow-md transition-colors duration-300 ${darkMode ? 'bg-slate-900/95 border-b border-slate-800' : 'bg-white/95 border-b border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
              <span className="font-bold text-2xl tracking-tighter text-blue-600">HE.</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : (darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                  }`}
                >
                  {item}
                </button>
              ))}
              
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`md:hidden absolute w-full border-b shadow-xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                      : (darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100')
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            OPEN TO RELOCATION
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-600">Hazem Elsawy</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-500">
            Full Stack Developer & Growth Engineer
          </h2>
          
          <p className={`text-lg max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I bridge the gap between technical engineering and product growth. 
            Specializing in <strong>React, TypeScript, and Node.js</strong>, I build scalable web applications 
            integrated with advanced analytics and CRO strategies to drive measurable business results.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Contact Me
            </button>
            
            {/* Download Resume Button - Points to /public/resume.pdf */}
            <a 
              href="/resume.pdf" 
              download="Hazem_Elsawy_Resume.pdf"
              className={`px-6 py-3 rounded-lg font-semibold border transition-colors flex items-center gap-2 ${
                darkMode 
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300' 
                  : 'border-slate-300 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:hazemelsawy@outlook.com" className="hover:text-blue-600 transition-colors"><Mail size={24} /></a>
          </div>
        </div>

        {/* Abstract Tech Visual */}
        <div className="flex-1 flex justify-center">
          <div className={`relative w-72 h-72 md:w-96 md:h-96 rounded-2xl rotate-3 transition-colors duration-500 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border shadow-2xl p-6 flex flex-col justify-between`}>
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-mono text-slate-400">app.tsx</div>
            </div>
            
            <div className="space-y-3 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-purple-500">const</span>
                <span className="text-blue-500">Developer</span>
                <span className="text-slate-400">=</span>
                <span className="text-yellow-500">{'{'}</span>
              </div>
              <div className="pl-4 text-slate-500">
                name: <span className="text-green-500">'Hazem'</span>,
              </div>
              <div className="pl-4 text-slate-500">
                stack: [<span className="text-green-500">'React'</span>, <span className="text-green-500">'Node'</span>, <span className="text-green-500">'TS'</span>],
              </div>
              <div className="pl-4 text-slate-500">
                focus: <span className="text-green-500">'Growth & Performance'</span>,
              </div>
               <div className="pl-4 text-slate-500">
                location: <span className="text-green-500">'Perth, WA'</span>
              </div>
              <div className="text-yellow-500">{'}'}</div>
            </div>

            <div className="h-2 w-full bg-slate-100 rounded overflow-hidden dark:bg-slate-700">
              <div className="h-full bg-blue-500 w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Value Prop */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">More Than Just Code</h2>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              I don't just build features; I build solutions that convert. My background combines deep technical engineering with product analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Engineering",
                desc: "Clean, maintainable React & TypeScript code built for scale and performance."
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Growth",
                desc: "Expertise in A/B testing, CRO, and Analytics integration (GA, Amplitude)."
              },
              {
                icon: <Cpu size={32} />,
                title: "Innovation",
                desc: "Leveraging AI-assisted workflows to accelerate development and debugging."
              }
            ].map((card, idx) => (
              <div key={idx} className={`p-6 rounded-xl border transition-all hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 hover:border-blue-500/50' 
                  : 'bg-white border-slate-200 hover:border-blue-200 shadow-sm'
              }`}>
                <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              category: "Frontend",
              icon: <Terminal size={20} />,
              skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/SCSS"]
            },
            {
              category: "Backend",
              icon: <Server size={20} />,
              skills: ["Node.js", "Express", "RESTful APIs", "SQL / MySQL", "PHP"]
            },
            {
              category: "Growth & Data",
              icon: <TrendingUp size={20} />,
              skills: ["Google Analytics 4", "GTM", "Amplitude", "Hotjar", "A/B Testing"]
            },
            {
              category: "DevOps & Tools",
              icon: <Database size={20} />,
              skills: ["Git / GitHub", "CI/CD Pipelines", "Firebase", "AI Copilots", "Jest"]
            }
          ].map((group, idx) => (
            <div key={idx} className={`rounded-xl overflow-hidden ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`p-4 border-b font-semibold flex items-center gap-2 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-blue-500">{group.icon}</span>
                {group.category}
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Journey</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow'}`}>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Independent Professional Development</h3>
                  <span className="text-xs font-mono py-1 px-2 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">2024 - Present</span>
                </div>
                <div className="text-sm text-slate-500 mb-4 font-medium">Perth, WA (Relocation Period)</div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Undertook a planned career hiatus for relocation to Australia. Maintained active development by integrating AI tools (Copilot) into coding workflows and studying advanced React patterns.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 - Cleaned up (No Company Name) */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow'}`}>
                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
              </div>
              
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                 <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Software Engineer</h3>
                  <span className="text-xs font-mono py-1 px-2 rounded bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">2019 - 2024</span>
                </div>
                <div className="text-sm text-slate-500 mb-4 font-medium">London, UK</div>
                <ul className={`text-sm list-disc pl-4 space-y-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <li>Spearheaded CRO strategies increasing conversion rates by ~15%.</li>
                  <li>Optimized UI performance, improving Core Web Vitals and load times by 20%.</li>
                  <li>Built reusable React component libraries to standardize UI across services.</li>
                </ul>
              </div>
            </div>

             {/* Timeline Item 3 - Cleaned up (No Company Name) */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow'}`}>
                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
              </div>
              
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
                 <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Software Developer</h3>
                  <span className="text-xs font-mono py-1 px-2 rounded bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">2018 - 2019</span>
                </div>
                <div className="text-sm text-slate-500 mb-4 font-medium">Saudi Arabia</div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                   Developed the organization's main web presence and custom Android applications for internal workflows, focusing on secure API data syncing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`rounded-2xl p-8 md:p-12 text-center border ${darkMode ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-100'}`}>
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            I am currently based in Perth, WA, and actively looking for Full Stack or Front-End opportunities. I am ready to relocate or work remotely.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:hazemelsawy@outlook.com" className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              <Mail size={20} />
              hazemelsawy@outlook.com
            </a>
            <a href="tel:0405941783" className={`flex items-center justify-center gap-3 px-6 py-4 rounded-lg border transition-colors font-semibold ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
              <Phone size={20} />
              0405 941 783
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-center gap-6 text-slate-500">
             <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Perth, WA</span>
             </div>
             <div className="flex items-center gap-2">
                <ExternalLink size={16} />
                <a href="https://hazem.uk" className="hover:text-blue-500 underline">hazem.uk</a>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center text-sm ${darkMode ? 'bg-slate-950 text-slate-600' : 'bg-slate-50 text-slate-400'}`}>
        <p>© {new Date().getFullYear()} Hazem Elsawy. Built with React & Tailwind.</p>
      </footer>

    </div>
  );
};

export default Portfolio;