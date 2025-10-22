import { useState } from 'react'
import { TrendingUp, Clock, Eye, Star } from 'lucide-react'

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState('alle')

  const newsArticles = [
    {
      id: 1,
      category: 'anbieter-test',
      title: 'Bayern vs Brügge: Welcher Wettanbieter bietet die besten Konditionen?',
      excerpt: 'Wir haben alle großen Wettanbieter für das heutige Bayern-Spiel verglichen. Oddset bietet 1.20 für Bayern-Sieg, aber Winamax überrascht mit einem 1000%-Quotenboost auf 14.00! Welcher Anbieter ist für dich am besten geeignet?',
      date: '22. Oktober 2025',
      author: 'Anbieter-Test Team',
      readTime: '4 Min.',
      image: '🧭',
      anbieterVergleich: [
        { name: 'Winamax', rating: '⭐⭐⭐⭐⭐', highlight: 'BESTE QUOTE', quote: '14.00' },
        { name: 'Oddset', rating: '⭐⭐⭐', highlight: 'Solide', quote: '1.20' },
        { name: 'Tipico', rating: '⭐⭐⭐', highlight: 'OK', quote: '1.18' }
      ]
    },
    {
      id: 2,
      category: 'ratgeber',
      title: 'Champions League heute: Anbieter-Guide für deutsche Teams',
      excerpt: 'Vier deutsche Teams spielen heute in der Champions League. Wir zeigen dir, welcher Wettanbieter für welches Spiel die besten Konditionen bietet: Bayern (Winamax), Leverkusen (Bet365), Frankfurt (Betano), Dortmund (bwin).',
      date: '22. Oktober 2025',
      author: 'Ratgeber-Team',
      readTime: '5 Min.',
      image: '🏆',
      empfehlungen: [
        { spiel: 'Bayern vs Brügge', anbieter: 'Winamax', grund: '1000% Boost' },
        { spiel: 'Leverkusen vs PSG', anbieter: 'Bet365', grund: 'Live-Streaming' },
        { spiel: 'Frankfurt vs Liverpool', anbieter: 'Betano', grund: 'Schnelle Auszahlung' },
        { spiel: 'Dortmund vs Kopenhagen', anbieter: 'bwin', grund: 'Cash-Out' }
      ]
    },
    {
      id: 3,
      category: 'anbieter-test',
      title: 'Arsenal 4:0: Welcher Anbieter hatte die fairsten Quoten?',
      excerpt: 'Nach dem gestrigen Arsenal-Kantersieg haben wir analysiert, welche Anbieter die besten Quoten boten. Bet365 führt mit Quote 18.0 für korrektes Ergebnis, Betano mit 1.85 für Arsenal-Sieg. Unser Fazit: Quoten-Vergleich lohnt sich!',
      date: '22. Oktober 2025',
      author: 'Anbieter-Test Team',
      readTime: '3 Min.',
      image: '📊',
      ranking: [
        { platz: 1, anbieter: 'Bet365', quote: '18.0', wette: 'Korrektes Ergebnis 4:0' },
        { platz: 2, anbieter: 'Betano', quote: '1.85', wette: 'Arsenal-Sieg' },
        { platz: 3, anbieter: 'bwin', quote: '3.20', wette: 'Über 3.5 Tore' }
      ]
    }
  ]

  const categories = [
    { id: 'alle', label: 'Alle', icon: '📰' },
    { id: 'anbieter-test', label: 'Anbieter-Tests', icon: '🧭' },
    { id: 'ratgeber', label: 'Ratgeber', icon: '💡' }
  ]

  const filteredArticles = activeCategory === 'alle' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory)

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Täglich aktualisiert</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🧭 Wett-News & Anbieter-Tests
          </h2>
          <p className="text-xl text-gray-600">
            Aktuelle Tests, Vergleiche und Ratgeber für deine Wetten
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-transparent hover:border-blue-500">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{article.image}</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold uppercase">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Anbieter-Vergleich Preview */}
                {article.anbieterVergleich && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <div className="text-xs font-semibold text-blue-700 mb-2">🧭 ANBIETER-VERGLEICH:</div>
                    {article.anbieterVergleich.map((a, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm mb-1">
                        <span className={`${a.highlight === 'BESTE QUOTE' ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
                          {a.name} {a.rating}
                        </span>
                        <span className={`${a.highlight === 'BESTE QUOTE' ? 'font-bold text-green-600' : 'text-gray-600'}`}>
                          {a.quote}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Empfehlungen Preview */}
                {article.empfehlungen && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                    <div className="text-xs font-semibold text-green-700 mb-2">✅ UNSERE EMPFEHLUNGEN:</div>
                    {article.empfehlungen.slice(0, 2).map((e, idx) => (
                      <div key={idx} className="text-sm text-gray-700 mb-1">
                        <span className="font-semibold">{e.anbieter}</span> → {e.grund}
                      </div>
                    ))}
                    <div className="text-xs text-gray-500 mt-1">+ 2 weitere...</div>
                  </div>
                )}

                {/* Ranking Preview */}
                {article.ranking && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="text-xs font-semibold text-yellow-700 mb-2">🏆 TOP 3 ANBIETER:</div>
                    {article.ranking.map((r, idx) => (
                      <div key={idx} className="flex justify-between text-sm mb-1">
                        <span className={`${idx === 0 ? 'font-bold text-yellow-600' : 'text-gray-700'}`}>
                          {r.platz}. {r.anbieter}
                        </span>
                        <span className={`${idx === 0 ? 'font-bold text-green-600' : 'text-gray-600'}`}>
                          {r.quote}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all group-hover:scale-105">
                  Artikel lesen →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">🧭 Finde den perfekten Wettanbieter!</h3>
          <p className="text-lg mb-6">
            Vergleiche über 15 lizenzierte Anbieter und finde die besten Quoten für deine Wetten.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://nur-sportwetten.de" 
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zu den Wett-Tipps →
            </a>
            <a 
              href="https://sportwett-vergleich.de" 
              className="inline-block bg-blue-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-900 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quoten vergleichen →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

