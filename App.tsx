import React, { useState, useMemo } from 'react';
import { ARTICLES_DATA } from './constants';
import { Article } from './types';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import ArticleDetail from './components/ArticleDetail';
import AdPlaceholder from './components/AdPlaceholder';
import CookieConsent from './components/CookieConsent';
import { SlidersHorizontal, ArrowLeft, Mail, ShieldAlert, FileText, Lock, Info, Newspaper, Cpu, GraduationCap, Briefcase, Clapperboard, Send } from 'lucide-react';

type View = 'home' | 'article' | 'about' | 'contact' | 'disclaimer' | 'privacy' | 'terms';
type FilterType = 'All' | 'Schemes' | 'Technology' | 'Current Affairs' | 'Govt Exams' | 'Movies';

function App() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter(article => {
      let matchesFilter = true;
      if (selectedFilter !== 'All') {
          if (selectedFilter === 'Schemes') {
              matchesFilter = article.isScheme === true;
          } else {
              matchesFilter = article.category === selectedFilter;
          }
      }
      return matchesFilter;
    });
  }, [selectedFilter]);

  const handleNavClick = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'home') {
        setSelectedArticle(null);
    }
  };

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setCurrentView('article');
  };

  const renderStaticContent = () => {
    const containerClass = "max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-200 my-8";
    const headingClass = "text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3";
    const sectionClass = "mb-6 text-gray-600 leading-relaxed text-sm sm:text-base";
    const subHeadingClass = "text-lg font-bold text-gray-800 mt-6 mb-2";

    switch (currentView) {
        case 'about':
            return (
                <div className={containerClass}>
                    <h2 className={headingClass}>
                        <Info className="text-orange-600" size={32} />
                        About Us
                    </h2>
                    <div className={sectionClass}>
                        <p className="mb-4">
                            Welcome to <strong>PKJhub</strong>, your premier digital destination for comprehensive information regarding Government Schemes, Entertainment, and Technology. Established with the vision of bridging the information gap, we serve as a one-stop platform for citizens, students, and movie buffs.
                        </p>
                        <p className="mb-4">
                            <strong>Our Mission:</strong> To democratize access to information and entertainment. Whether you are a farmer seeking details about subsidies, a student preparing for exams, or looking for the next top-rated movie to watch, PKJhub is designed for you.
                        </p>
                        <p className="mb-4">
                           We are a team of dedicated researchers and content creators who verify information from multiple sources to bring you simplified, easy-to-understand content in both Hindi and English contexts.
                        </p>
                        <p className="mb-4 font-semibold text-gray-900">
                          Why Choose PKJhub?
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Accurate and timely updates.</li>
                          <li>Simplified explanations of complex government orders.</li>
                          <li>Unbiased movie reviews and tech analysis.</li>
                        </ul>
                    </div>
                    <AdPlaceholder type="banner" />
                </div>
            );
        case 'contact':
            return (
                <div className={containerClass}>
                    <h2 className={headingClass}>
                        <Mail className="text-orange-600" size={32} />
                        Contact Us
                    </h2>
                    <div className={sectionClass}>
                        <p className="mb-8">
                            We value your feedback and suggestions. If you have found any discrepancy in our data, have a copyright concern, or simply want to say hello, please fill out the form below.
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Contact Form UI */}
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                              <h3 className="font-bold text-gray-900 mb-4">Send a Message</h3>
                              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                  <label className="block text-xs font-semibold text-gray-500 mb-1">Your Name</label>
                                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="John Doe" />
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold text-gray-500 mb-1">Email Address</label>
                                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="john@example.com" />
                                </div>
                                <div>
                                  <label className="block text-xs font-semibold text-gray-500 mb-1">Message</label>
                                  <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none h-24" placeholder="How can we help?"></textarea>
                                </div>
                                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                                  <Send size={16} /> Send Message
                                </button>
                              </form>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <Mail size={18} className="text-orange-500" /> General Inquiries
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-2">For general queries and feedback:</p>
                                    <a href="mailto:contact@pkjhub.com" className="text-orange-600 font-medium hover:underline">contact@pkjhub.com</a>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <ShieldAlert size={18} className="text-orange-500" /> Advertising
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-2">For advertisement placements:</p>
                                    <a href="mailto:ads@pkjhub.com" className="text-orange-600 font-medium hover:underline">ads@pkjhub.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'disclaimer':
            return (
                <div className={containerClass}>
                    <h2 className={headingClass}>
                        <ShieldAlert className="text-orange-600" size={32} />
                        Disclaimer
                    </h2>
                    <div className={sectionClass}>
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                            <p className="font-bold text-red-700">Non-Government Affiliation Warning</p>
                            <p className="text-red-600 text-sm mt-1">
                                PKJhub is a private information aggregator. We are <strong>NOT</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with the Government of Rajasthan, the Government of India, or any of their agencies.
                            </p>
                        </div>
                        
                        <h3 className={subHeadingClass}>Information Accuracy</h3>
                        <p className="mb-4">
                            All information provided on this website (Schemes, Exam Dates, Recruitment News) is collected from various online and offline sources, including official news outlets and press releases. While we strive for accuracy, we make no warranties about the completeness, reliability, or availability of this information.
                        </p>
                        
                        <h3 className={subHeadingClass}>User Responsibility</h3>
                        <p className="mb-4">
                            Any action you take upon the information you find on this website (PKJhub) is strictly at your own risk. We strongly recommend visiting the official government websites to verify details before applying for any scheme or paying any fees.
                        </p>
                    </div>
                </div>
            );
        case 'privacy':
             return (
                <div className={containerClass}>
                     <h2 className={headingClass}><Lock className="text-orange-600" size={32} /> Privacy Policy</h2>
                     <div className={sectionClass}>
                        <p className="text-sm text-gray-500 mb-4">Last Updated: June 2024</p>
                        <p className="mb-4">At PKJhub, accessible from pkjhub.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PKJhub and how we use it.</p>
                        
                        <h3 className={subHeadingClass}>Log Files</h3>
                        <p className="mb-4">PKJhub follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

                        <h3 className={subHeadingClass}>Cookies and Web Beacons</h3>
                        <p className="mb-4">Like any other website, PKJhub uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                        <h3 className={subHeadingClass}>Google DoubleClick DART Cookie</h3>
                        <p className="mb-4">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.</p>
                        
                        <h3 className={subHeadingClass}>GDPR Data Protection Rights</h3>
                        <p className="mb-4">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, rectification, erasure, restrict processing, object to processing, and data portability.</p>
                     </div>
                </div>
             );
        case 'terms':
             return (
                <div className={containerClass}>
                     <h2 className={headingClass}><FileText className="text-orange-600" size={32} /> Terms & Conditions</h2>
                     <div className={sectionClass}>
                        <p className="text-sm text-gray-500 mb-4">Welcome to PKJhub!</p>
                        <p className="mb-4">These terms and conditions outline the rules and regulations for the use of PKJhub's Website.</p>
                        
                        <h3 className={subHeadingClass}>Content Liability</h3>
                        <p className="mb-4">We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

                        <h3 className={subHeadingClass}>License</h3>
                        <p className="mb-4">Unless otherwise stated, PKJhub and/or its licensors own the intellectual property rights for all material on PKJhub. All intellectual property rights are reserved. You may access this from PKJhub for your own personal use subjected to restrictions set in these terms and conditions.</p>

                        <h3 className={subHeadingClass}>Reservation of Rights</h3>
                        <p className="mb-4">We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.</p>
                     </div>
                </div>
             );
        default:
            return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      <Header 
        onLogoClick={() => handleNavClick('home')}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {currentView === 'home' ? (
          <>
            {/* Hero Section */}
            <div className="mb-10 text-center sm:text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                Your Digital <span className="text-orange-600">Info & Entertainment Hub</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                One-stop destination for Govt Schemes, Tech Updates, Current Affairs, Exams, and Top Rated Movies.
              </p>
            </div>
            
            {/* Ad Placement: Top Banner */}
            <AdPlaceholder type="banner" className="mb-8" />

            {/* Main Filters */}
            <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center space-x-2">
                {(['All', 'Schemes', 'Technology', 'Current Affairs', 'Govt Exams', 'Movies'] as FilterType[]).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                      selectedFilter === filter
                        ? 'bg-gray-900 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    {filter === 'Schemes' && <Briefcase size={16} />}
                    {filter === 'Technology' && <Cpu size={16} />}
                    {filter === 'Current Affairs' && <Newspaper size={16} />}
                    {filter === 'Govt Exams' && <GraduationCap size={16} />}
                    {filter === 'Movies' && <Clapperboard size={16} />}
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <React.Fragment key={article.id}>
                    <ArticleCard 
                      article={article} 
                      onClick={handleArticleClick}
                    />
                    {/* Insert In-Feed Ad after every 6th item */}
                    {(index + 1) % 6 === 0 && (
                       <div className="sm:col-span-2 lg:col-span-3">
                          <AdPlaceholder type="in-feed" />
                       </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                <div className="bg-gray-100 p-4 rounded-full inline-block mb-4">
                  <SlidersHorizontal size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No content found</h3>
                <p className="text-gray-500">Try adjusting your filters.</p>
              </div>
            )}
            
            {/* Ad Placement: Bottom */}
            <div className="mt-12">
               <AdPlaceholder type="banner" />
            </div>
          </>
        ) : currentView === 'article' && selectedArticle ? (
            <ArticleDetail 
                article={selectedArticle} 
                onBack={() => handleNavClick('home')} 
            />
        ) : (
          // Static Pages View
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
                onClick={() => handleNavClick('home')}
                className="flex items-center text-gray-600 hover:text-orange-600 mb-4 transition-colors font-medium"
            >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
            </button>
            {renderStaticContent()}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">PKJhub</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-4">
                        An unofficial information aggregator helping citizens stay updated with Schemes, Tech, Movies, and Education news.
                    </p>
                    <div className="text-xs text-gray-400">
                       <p>Designed for educational and informational purposes only.</p>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><button onClick={() => { setSelectedFilter('Schemes'); handleNavClick('home'); }} className="hover:text-orange-600 transition-colors">Schemes</button></li>
                        <li><button onClick={() => { setSelectedFilter('Movies'); handleNavClick('home'); }} className="hover:text-orange-600 transition-colors">Movies</button></li>
                        <li><button onClick={() => { setSelectedFilter('Technology'); handleNavClick('home'); }} className="hover:text-orange-600 transition-colors">Tech News</button></li>
                        <li><button onClick={() => { handleNavClick('about'); }} className="hover:text-orange-600 transition-colors">About Us</button></li>
                         <li><button onClick={() => { handleNavClick('contact'); }} className="hover:text-orange-600 transition-colors">Contact</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><button onClick={() => handleNavClick('disclaimer')} className="hover:text-orange-600 transition-colors">Disclaimer</button></li>
                        <li><button onClick={() => handleNavClick('privacy')} className="hover:text-orange-600 transition-colors">Privacy Policy</button></li>
                        <li><button onClick={() => handleNavClick('terms')} className="hover:text-orange-600 transition-colors">Terms & Conditions</button></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-xs text-center md:text-left">
                    © {new Date().getFullYear()} PKJhub. All rights reserved.
                </p>
            </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
}

export default App;