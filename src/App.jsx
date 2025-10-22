import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Star, Shield, TrendingUp, Award, ChevronRight, Search, Menu, X, Clock, Users, CheckCircle, Zap, Target, Trophy, Flame, Eye } from 'lucide-react'
import { NewsSection } from './components/NewsSection'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeUsers, setActiveUsers] = useState(2347)
  const [scrollY, setScrollY] = useState(0)
  const [visibleCards, setVisibleCards] = useState([])

  // Animated counter for active users
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...new Set([...prev, entry.target.dataset.index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-index]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Top Wettanbieter mit erweiterten Daten
  const topProviders = [
    {
      id: 1,
      name: 'bet365',
      logo: '🎯',
      rating: 4.8,
      reviews: 2847,
      bonus: '100€ Bonus',
      bonusType: 'HOT DEAL',
      highlights: ['Live-Streaming', 'Top-Quoten', 'Deutsche Lizenz'],
      license: 'Seit 2020',
      timeLeft: '23:45:12',
      usersWatching: 127,
      quickFacts: {
        auszahlung: '24h',
        sports: '35+',
        livewetten: 'Ja'
      }
    },
    {
      id: 2,
      name: 'Betano',
      logo: '⚡',
      rating: 4.7,
      reviews: 2156,
      bonus: '100% bis 100€',
      bonusType: 'EXKLUSIV',
      highlights: ['Schnelle Auszahlung', 'Große Auswahl', 'Mobile App'],
      license: 'Seit 2021',
      timeLeft: '47:23:08',
      usersWatching: 93,
      quickFacts: {
        auszahlung: '12h',
        sports: '30+',
        livewetten: 'Ja'
      }
    },
    {
      id: 3,
      name: 'bwin',
      logo: '🏆',
      rating: 4.6,
      reviews: 3421,
      bonus: '100€ Willkommensbonus',
      bonusType: 'BELIEBT',
      highlights: ['Etablierte Marke', 'Live-Wetten', 'Cash-Out'],
      license: 'Seit 2020',
      timeLeft: null,
      usersWatching: 156,
      quickFacts: {
        auszahlung: '48h',
        sports: '40+',
        livewetten: 'Ja'
      }
    }
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Nur lizenzierte Anbieter',
      description: 'Alle Wettanbieter verfügen über eine deutsche Lizenz und sind vollständig reguliert.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Unabhängige Tests',
      description: 'Unsere Experten testen jeden Anbieter gründlich und objektiv.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Aktuelle Quoten',
      description: 'Vergleichen Sie Live-Quoten von über 15 Wettanbietern in Echtzeit.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Beste Boni',
      description: 'Wir zeigen Ihnen die lukrativsten Willkommensboni und Aktionen.',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const testimonials = [
    {
      name: 'Michael S.',
      location: 'München',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Endlich eine übersichtliche Vergleichsseite! Habe dank Wett-Kompass den perfekten Anbieter gefunden.',
      date: 'vor 2 Tagen'
    },
    {
      name: 'Sarah K.',
      location: 'Berlin',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Die Testberichte sind wirklich unabhängig und detailliert. Sehr hilfreich!',
      date: 'vor 1 Woche'
    },
    {
      name: 'Thomas B.',
      location: 'Hamburg',
      avatar: '👨‍🔧',
      rating: 5,
      text: 'Beste Sportwetten-Vergleichsseite im deutschsprachigen Raum. Klare Empfehlung!',
      date: 'vor 3 Tagen'
    }
  ]

  const trustBadges = [
    { icon: <Shield className="w-6 h-6" />, text: 'SSL-Verschlüsselt' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Geprüfte Anbieter' },
    { icon: <Users className="w-6 h-6" />, text: '50.000+ Nutzer' },
    { icon: <Award className="w-6 h-6" />, text: 'Ausgezeichnet 2025' }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-bold text-xl">WK</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Wett-Kompass
                </span>
                <div className="text-xs text-gray-500 font-medium">Die #1 in Deutschland</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#vergleich" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                Vergleich
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#anbieter" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                Anbieter
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#ratgeber" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                Ratgeber
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#bonus" className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                Bonus
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Zap className="w-4 h-4 mr-2" />
                Jetzt vergleichen
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 animate-fade-in">
              <a href="#vergleich" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Vergleich</a>
              <a href="#anbieter" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Anbieter</a>
              <a href="#ratgeber" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Ratgeber</a>
              <a href="#bonus" className="block text-gray-700 hover:text-blue-600 font-medium py-2">Bonus</a>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800">
                Jetzt vergleichen
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center relative z-10">
          {/* Live Activity Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 animate-fade-in">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              <span className="text-green-600">{activeUsers.toLocaleString()}</span> Nutzer vergleichen gerade
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Die besten Wettanbieter mit
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent animate-gradient">
              deutscher Lizenz 2025
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Vergleichen Sie lizenzierte Sportwetten-Anbieter, finden Sie die besten Quoten und sichern Sie sich Top-Boni. 
            <span className="font-semibold text-gray-900"> Unabhängig, aktuell und vertrauenswürdig.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-lg px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse" />
              Zum Vergleich
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all duration-300">
              <Search className="mr-2 w-5 h-5" />
              Anbieter suchen
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-blue-600">{badge.icon}</div>
                <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 backdrop-blur-sm py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Warum Wett-Kompass?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Wir sind Deutschlands führende Vergleichsplattform für Sportwetten mit über 50.000 zufriedenen Nutzern
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Hover decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Providers Section */}
      <section id="vergleich" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold mb-4">
            <Flame className="w-5 h-5" />
            Top-Angebote diese Woche
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Wettanbieter im Vergleich</h2>
          <p className="text-xl text-gray-600">Die besten lizenzierten Sportwetten-Anbieter in Deutschland</p>
        </div>

        <div className="space-y-6">
          {topProviders.map((provider, index) => (
            <div 
              key={provider.id} 
              data-index={index}
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-2 border-transparent hover:border-blue-200 ${
                visibleCards.includes(String(index)) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Rank Badge */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-white font-bold text-3xl">#{index + 1}</span>
                  </div>
                  {provider.bonusType && (
                    <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-lg text-xs font-bold shadow-lg ${
                      provider.bonusType === 'HOT DEAL' ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white animate-pulse' :
                      provider.bonusType === 'EXKLUSIV' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                      'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    }`}>
                      {provider.bonusType}
                    </div>
                  )}
                </div>

                {/* Provider Info */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{provider.logo}</span>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-600 transition-colors">{provider.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span>Deutsche Lizenz {provider.license}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating & Watching */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(provider.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-lg">{provider.rating}/5.0</span>
                      <span className="text-gray-500">({provider.reviews.toLocaleString()} Bewertungen)</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      <Eye className="w-4 h-4" />
                      <span>{provider.usersWatching} sehen sich das gerade an</span>
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                      <span className="text-gray-600">Auszahlung:</span> <span className="font-semibold">{provider.quickFacts.auszahlung}</span>
                    </div>
                    <div className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                      <span className="text-gray-600">Sportarten:</span> <span className="font-semibold">{provider.quickFacts.sports}</span>
                    </div>
                    <div className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
                      <span className="text-gray-600">Live-Wetten:</span> <span className="font-semibold text-green-600">{provider.quickFacts.livewetten}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.highlights.map((highlight, i) => (
                      <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-all cursor-default">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Bonus */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 rounded-xl font-semibold shadow-md">
                      <Award className="w-5 h-5" />
                      {provider.bonus}
                    </div>
                    {provider.timeLeft && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-semibold">
                        <Clock className="w-4 h-4 animate-pulse" />
                        Endet in {provider.timeLeft}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0 w-full md:w-auto space-y-3">
                  <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                    <Trophy className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                    Jetzt wetten
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full md:w-auto border-2 hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all">
                    Zum Testbericht
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-lg border-2 hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all">
            Alle {topProviders.length + 12} Anbieter vergleichen
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Was unsere Nutzer sagen</h2>
            <p className="text-blue-100 text-lg">Über 50.000 zufriedene Sportwetten-Fans vertrauen uns</p>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                    <span className="text-blue-200 text-sm">{testimonials[currentTestimonial].location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-blue-200 text-sm">{testimonials[currentTestimonial].date}</span>
                  </div>
                  <p className="text-white text-lg leading-relaxed">"{testimonials[currentTestimonial].text}"</p>
                </div>
              </div>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">WK</span>
                </div>
                <span className="text-xl font-bold">Wett-Kompass</span>
              </div>
              <p className="text-gray-400">
                Ihr unabhängiger Ratgeber für Sportwetten in Deutschland.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Wettanbieter</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Vergleich</a></li>
                <li><a href="#" className="hover:text-white transition">Testberichte</a></li>
                <li><a href="#" className="hover:text-white transition">Bonus-Übersicht</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ratgeber</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Wett-Strategien</a></li>
                <li><a href="#" className="hover:text-white transition">Sportwetten-Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Quoten erklärt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="mb-4">
              18+ | Glücksspiel kann abhängig machen | Hilfe unter <a href="https://www.bzga.de" className="text-blue-400 hover:underline">bzga.de</a>
            </p>
            <p>
              Wir erhalten eine Provision von den hier angeführten Anbietern. 
              <a href="#" className="text-blue-400 hover:underline ml-1">Mehr Infos</a>
            </p>
            <p className="mt-4">
              © 2025 Wett-Kompass.de - Alle Rechte vorbehalten
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

