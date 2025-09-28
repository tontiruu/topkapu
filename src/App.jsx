import React, { useState } from 'react'
import './App.css'

function PalaceTrivia() {
  const [openTrivia, setOpenTrivia] = useState(null)

  const triviaData = [
    {
      id: 1,
      title: "The \"Fruit Room\" for a Picky Young Prince",
      content: "One room in the Harem is covered wall-to-wall with paintings of fruits. This was created by a father's love - when young Sultan Ahmed was an extremely picky eater as a child, his father ordered the entire room to be decorated with fruit motifs to stimulate his appetite. A royal solution to childhood eating struggles!"
    },
    {
      id: 2,
      title: "The Mystery of Clocks Stopped at \"9:05\"",
      content: "Many antique clocks throughout the Harem and audience chambers are permanently stopped at 9:05 AM. This isn't neglect - it's a tribute to Mustafa Kemal Atatürk, the founder of modern Turkey, who passed away at exactly this time on November 10, 1938. Time stood still to honor a nation's father."
    },
    {
      id: 3,
      title: "The Hidden Meaning of the \"Gate of Felicity\"",
      content: "The golden ornament hanging from the ceiling of the Gate of Felicity isn't mere decoration. According to legend, this sphere symbolizes \"the world\" itself, representing that the Sultan's power extends across the entire globe. Every visitor unknowingly walked beneath the weight of an empire's ambition."
    },
    {
      id: 4,
      title: "The Empire's Most Ruthless Law",
      content: "The Ottoman Empire had one of history's most brutal succession laws: newly crowned sultans were required to execute all their brothers to prevent civil war. Created by Mehmet II (the conqueror of Istanbul), this law ensured stability through the ultimate sacrifice of family bonds."
    },
    {
      id: 5,
      title: "Eunuchs with Surprisingly Beautiful Names",
      content: "The African eunuchs who guarded the Harem were given unexpectedly delicate, feminine names like Rose, Carnation, and Hyacinth. These men, stripped of their masculinity and freedom, were ironically adorned with the names of the most beautiful flowers - a poetic tragedy of the imperial system."
    },
    {
      id: 6,
      title: "\"Topkapi Palace\" Was Actually a Nickname",
      content: "This magnificent palace was originally called \"Saray-ı Cedid\" (New Palace). It only became \"Topkapi\" (Cannon Gate Palace) after Sultan Mahmud I's seaside \"Topkapısı Palace\" burned down, and this palace inherited the name. Sometimes the most famous names in history are just hand-me-downs!"
    },
    {
      id: 7,
      title: "The Golden Birdcage Prison \"Kafes\"",
      content: "Deep within the Harem lay the \"Kafes\" (Cage) - luxurious prison chambers where the Sultan's brothers and sons were confined for life. This replaced the earlier brutal practice of fratricide, trading execution for a lifetime of golden captivity. Sometimes mercy can be its own form of cruelty."
    },
    {
      id: 8,
      title: "The Anti-Eavesdropping Fountain",
      content: "Sultan Murad III's private chamber in the Harem features one of the palace's most ingenious security devices: a three-tiered marble fountain. This wasn't merely decorative - the constant sound of cascading water was specifically designed to mask conversations and prevent eavesdropping. In an empire built on secrets and intrigue, even the architecture served as a shield against prying ears."
    },
    {
      id: 9,
      title: "Medical Examinations Through Curtains",
      content: "The Harem's strict rules created bizarre medical challenges. When women fell ill, male physicians could only examine them through heavy curtains, never seeing their patients directly. Doctors had to diagnose serious conditions based solely on symptoms described through fabric barriers - a medical practice that would make modern healthcare professionals shudder with disbelief."
    },
    {
      id: 10,
      title: "The Palace 'Refrigerator' Was Mountain Snow",
      content: "Long before refrigeration, the palace had an ingenious cooling system that would impress any logistics expert today. Fresh snow was transported by mule from the distant Mysian Olympus (modern-day Uludağ Mountain) across the Marmara Sea, then stored in specially designed underground chambers. Imagine the dedicated effort required to bring mountain snow to the Sultan's table in the heat of an Istanbul summer!"
    },
    {
      id: 11,
      title: "The World's First Specialized Dessert Kitchen",
      content: "Within the vast palace kitchens stood the \"Helvahane\" - a kitchen dedicated exclusively to creating sweets and desserts. While regular meals already featured an astounding 132 different dishes, this specialized confectionery workshop elevated Ottoman cuisine to legendary status. It was essentially the world's first luxury dessert laboratory, centuries before molecular gastronomy became trendy."
    },
    {
      id: 12,
      title: "The Mother Who Ruled an Empire",
      content: "The Sultan's mother (Valide Sultan) wielded power that would make modern political advisors jealous. She could directly command the Grand Vizier and essentially run the empire from behind palace walls. Most cunningly, she reportedly preferred that her son choose \"beautiful but slightly foolish\" wives over intelligent ones, fearing that smart women might diminish her own influence. A masterclass in political manipulation disguised as maternal concern."
    },
    {
      id: 13,
      title: "Turkey's Very First Museum",
      content: "When the Ottoman Empire ended and the Turkish Republic was founded in 1923, Topkapi Palace became government property. On April 3, 1924, it opened its doors to the public as a museum, earning the distinguished honor of being Turkey's very first museum. This transformation from imperial residence to public treasure trove marked the beginning of modern Turkey's commitment to preserving its extraordinary heritage."
    },
    {
      id: 14,
      title: "Food on an Imperial Scale That Defies Imagination",
      content: "The palace kitchens operated on a scale that would overwhelm modern industrial food production. In a single year, the royal cooks prepared an astronomical 30,000 chickens and 40,000 sheep! To put this in perspective, that's enough meat to feed a small city for months. The logistics alone - from sourcing to preparation to serving - represent one of history's most impressive culinary operations."
    },
    {
      id: 15,
      title: "97% of Imperial Secrets Still Hidden",
      content: "The palace archives contain one of history's greatest untapped treasure troves: 120 million pages of Ottoman documents covering politics, daily life, and imperial administration. Yet due to the complexity of Ottoman script and language, only 3% has been translated and decoded to this day. This means 97% of the empire's secrets - spanning 600 years of history - remain locked away, waiting for future scholars to unlock their mysteries."
    },
    {
      id: 16,
      title: "Florence Nightingale's Workplace Visible from the Palace",
      content: "From the Fourth Court gardens, gazing across the Bosphorus toward Asia, you can spot a large building complex that holds remarkable significance. During the Crimean War, this was the Selimiye Barracks where the legendary Florence Nightingale revolutionized nursing and hospital care. Standing in the Sultan's private garden, you're literally looking across the waters at the birthplace of modern medical care - a bridge between imperial luxury and humanitarian progress."
    }
  ]

  const toggleTrivia = (id) => {
    setOpenTrivia(openTrivia === id ? null : id)
  }

  return (
    <section className="trivia-section">
      <div className="container">
        <h2>Palace Secrets Unveiled: Discover the Hidden Stories That Will Blow Your Mind!</h2>
        <p className="trivia-intro">
          Ready to dive deeper into the palace's mysteries? These incredible tales will transform the way you see every room, every artifact, and every corner of this legendary palace.
        </p>
        
        <div className="trivia-accordion">
          {triviaData.map((trivia) => (
            <div key={trivia.id} className={`trivia-item ${openTrivia === trivia.id ? 'active' : ''}`}>
              <button 
                className="trivia-header" 
                onClick={() => toggleTrivia(trivia.id)}
              >
                <span className="trivia-title">{trivia.title}</span>
                <span className="trivia-icon">{openTrivia === trivia.id ? '−' : '+'}</span>
              </button>
              {openTrivia === trivia.id && (
                <div className="trivia-content">
                  <p>{trivia.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img src={`${import.meta.env.BASE_URL}images/IMG_0623.jpg`} alt="Topkapi Palace exterior view" className="hero-image" />
          <div className="hero-image-overlay">
            <h1 className="hero-title">Topkapi Palace</h1>
            <p className="hero-subtitle">Where Ottoman Sultans Ruled the World for 400 Years - The Ultimate Stage of Power</p>
            <div className="hero-description">
              <p>This is far more than just a magnificent building. For approximately 400 years, this was the home of the Sultans of the vast Ottoman Empire and the beating heart of political power at its absolute zenith. You are about to step into the very soul of history's most powerful empire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="introduction">
        <div className="container">
          <h2>Unlock the Secrets Behind Every Wall</h2>
          <p className="intro-text">
            Every single wall in this palace holds captivating stories waiting to be discovered. Prepare to embark on an extraordinary journey where you'll decode the tales carved into each corner, making your visit 100 times more enriching with secrets and fascinating historical insights that will absolutely blow your mind!
          </p>
        </div>
      </section>

      {/* Pre-Visit Tips */}
      <section className="pre-visit-tips">
        <div className="container">
          <h2>Before Your Epic Journey: Essential Secrets to Maximize Your Experience</h2>
          <p>Given the palace's vast grounds and entrance fees, simply wandering around would be an absolute waste. Master these insider tips to completely immerse yourself in the world of the Sultans and unlock experiences that will leave you spellbound!</p>
          
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Study with Drama: "Magnificent Century" is Absolutely Essential Viewing</h3>
              <p>
                The Turkish drama "Magnificent Century" (original title: "The Magnificent Century"), which became a hit in 80 countries worldwide, is set right here in Topkapi Palace. It depicts the intense power struggles among women in the Harem, centered around Sultan Suleiman the Magnificent and his consort Hürrem.
              </p>
              <p>
                Watching just one or two episodes will bring the characters' faces and emotions to vivid life, transforming each room from merely luxurious spaces into electrifying stages of love, passion, and intrigue. The emotional impact becomes absolutely mind-blowing when you have this background knowledge!
              </p>
            </div>

            <div className="tip-card">
              <h3>The Harem is Absolutely Essential - Don't Miss the Palace's Beating Heart!</h3>
              <p>
                Palace tickets come in two types: standard admission and tickets that include Harem access. While slightly more expensive, if you're visiting the palace, the Harem is absolutely essential to see.
              </p>
              <p>
                The Harem was the private living space of the Sultan and his family - the true "beating heart" of the palace. Its luxury and breathtaking beauty are simply incomparable to any other building. Leaving without seeing the Harem is like leaving a world-class restaurant without tasting the chef's masterpiece - it's a crime against your own experience!
              </p>
            </div>

            <div className="tip-card">
              <h3>Ticket and Audio Guide Tips</h3>
              <p>
                Be aware that ticket counters include both cash-only windows and card-accepting ones. The free audio guide included with tickets often has long queues, and you'll need to leave an ID (passport or driver's license) as deposit.
              </p>
              <p>
                If you're short on time or the queue is too long, you can rely on the information boards posted throughout the grounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Palace Exploration Guide */}
      <section className="palace-guide">
        <div className="container">
          <h2>Step Into the Sultans' World: Your Palace Adventure Guide</h2>

          {/* First Court */}
          <div className="court-section">
            <h3>First Court: Gateway to an Empire</h3>
            <div className="court-text">
              <p>
                Passing through the Imperial Gate opens up the First Court, once called "The Janissaries' Court" (the Sultan's elite guard). Behind the plane tree on your right lies the spine-chilling "Executioner's Fountain," where the heads of high officials who incurred the Sultan's wrath were washed and displayed as dire warnings. Can you feel the shivers running down your spine?
              </p>
            </div>
          </div>

          {/* Second Court */}
          <div className="court-section">
            <h3>Second Court: The Power Center Where Empires Were Born</h3>
            <p className="entrance-fee-note">※ Entrance fee required from this point</p>
            <div className="court-content">
              <img src={`${import.meta.env.BASE_URL}images/IMG_0586.jpg`} alt="Gate of Salutation (Bab-üs Selâm) entrance to Second Court" className="court-image" />
              <div className="court-text">
                <p>
                  The magnificent "Gate of Salutation" (Bab-üs Selâm) welcomes you - the symbolic entrance to absolute power. In the past, only the Sultan and his mother (Valide Sultan) were permitted to pass through this gate on horseback. Even the Grand Vizier had to dismount here. Talk about a dramatic display of hierarchy that would make Game of Thrones jealous!
                </p>
              </div>
            </div>

            <div className="subsection">
              <h4>Imperial Council Chamber (Divan)</h4>
              <p>
                The empire's most crucial policies were debated here. However, the Sultan didn't attend every meeting. From a secret small room behind the golden latticed window in the upper wall, he would secretly eavesdrop on the ministers' discussions. When the ministers began arguing, the Sultan would clear his throat to indicate his presence. Imagine the dramatic tension - pure political theater at its finest!
              </p>
            </div>

            <div className="subsection">
              <h4>Palace Kitchens</h4>
              <p>
                The buildings with chimneys on your right are the kitchens. At its peak, 1,200 cooks worked here. The Sultans feared poisoning and favored Chinese celadon porcelain, believed to change color when touched by poison.
              </p>
            </div>
          </div>

          {/* Third Court */}
          <div className="court-section">
            <h3>Third Court: The Sultan's Most Private Domain</h3>
            <div className="court-text">
              <p>
                Beyond the "Gate of Felicity" lies the Sultan's private area, guarded by white eunuchs. This was the most exclusive part of the palace, where only the Sultan's closest family and servants were allowed.
              </p>
            </div>

            <div className="subsection">
              <h4>Treasury: Where Imperial Wealth Becomes Legend</h4>
              <div className="subsection-content">
                <img src={`${import.meta.env.BASE_URL}images/IMG_8041.JPG`} alt="Topkapi Palace Treasury with incredible imperial treasures and jewels" className="subsection-image" />
                <p>
                  After years of renovation, the treasury has finally reopened and is absolutely essential to visit. Prepare to witness wealth beyond your wildest imagination - this is where fairy tales become reality!
                </p>
              </div>
            </div>

            <div className="subsection">
              <h4>The Spoonmaker's Diamond</h4>
              <div className="subsection-content">
                <img src={`${import.meta.env.BASE_URL}images/IMG_8043.jpg`} alt="The famous 86-carat Spoonmaker's Diamond" className="subsection-image" />
                <p>
                  An enormous 86-carat diamond with a heartbreaking backstory. A fisherman discovered this sparkling stone on the beach, but when he showed it to a jeweler, he was deceived. The jeweler told him it was "just worthless glass" but offered to trade it for three spoons out of "pity." Only later was it revealed to be one of the world's most valuable diamonds - a cruel tale of how the poor are often exploited by those who know better.
                </p>
              </div>
            </div>

            <div className="subsection">
              <h4>The Topkapi Dagger</h4>
              <p>
                Another star of the Treasury, the "Topkapi Dagger" dazzles with three massive emeralds and countless diamonds, but its true marvel lies hidden within. This isn't just a weapon - it's a high-tech gadget from the 18th century! The pommel conceals an incredibly rare London-made miniature timepiece, making this dagger the ultimate fusion of deadly beauty and cutting-edge innovation. Imagine: while threatening enemies, the Sultan could also check the time with style!
              </p>
            </div>
          </div>

          {/* Fourth Court */}
          <div className="court-section">
            <h3>Fourth Court: Gardens of Breathtaking Beauty and Elegant Kiosks</h3>
            <div className="court-content">
              <img src={`${import.meta.env.BASE_URL}images/IMG 0608 from Google Account.jpg`} alt="Fourth Court gardens with elegant kiosks and peaceful pavilions" className="court-image" />
              <div className="court-text">
                <p>
                  The palace's innermost garden, dotted with beautiful pavilions (kiosks). This tranquil area provided the Sultan with a peaceful retreat from the affairs of state.
                </p>
              </div>
            </div>

            <div className="subsection">
              <h4>Baghdad Kiosk</h4>
              <div className="subsection-content">
                <img src={`${import.meta.env.BASE_URL}images/IMG_8076.jpg`} alt="Baghdad Kiosk with spectacular Golden Horn view" className="subsection-image" />
                <p>
                  Built in 1639 by Sultan Murad IV to commemorate his victory in the Baghdad campaign, this is a masterpiece of Ottoman classical architecture. The interior tiles and mother-of-pearl inlay work are stunning, but the view of the Golden Horn and the New City from here is absolutely spectacular - a vista that will steal your breath and capture your soul forever!
                </p>
              </div>
            </div>

            <div className="subsection">
              <h4>Breathtaking Bosphorus Views from the Palace Gardens</h4>
              <div className="subsection-content">
                <img src={`${import.meta.env.BASE_URL}images/IMG_0603.jpg`} alt="Spectacular Bosphorus Strait view from Topkapi Palace gardens" className="subsection-image" />
                <p>
                  From the Fourth Court's elevated gardens, you'll witness one of the world's most spectacular panoramic views. The shimmering Bosphorus Strait stretches before you like a liquid highway between Europe and Asia, dotted with ships carrying dreams and destinies across continents. This is the same breathtaking vista that inspired sultans for centuries, where they would contemplate the vastness of their empire while watching the sun paint the waters in gold and crimson. Stand here, and you're not just seeing a view - you're experiencing the very perspective that shaped an empire's vision of the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harem Section */}
      <section className="harem-section">
        <div className="container">
          <h2>The Harem: Secret Garden of the "Forbidden Place"</h2>
          <p className="section-intro">
            "Harem" means "forbidden" in Arabic. Here lived the Sultan, his mother, wives, children, and hundreds of concubines, all guarded by black eunuchs. Prepare to enter a world where beauty, intrigue, and forbidden secrets collide!
          </p>

          <div className="harem-grid">
            <div className="harem-card">
              <img src={`${import.meta.env.BASE_URL}images/4858E3B8-A95B-46BA-98AD-329040D56AF7.jpg`} alt="Concubines' living quarters in the Harem" className="harem-image" />
              <h3>Life of the Concubines</h3>
              <p>
                Young girls brought to the Harem were trained in Turkish language, Islam, culture, and all the refinements needed to captivate the Sultan - makeup, music, and dance. They lived in an intense meritocracy, advancing their status by catching the Sultan's eye and earning his favor. It was the ultimate high-stakes competition where beauty, wit, and charm determined everything!
              </p>
            </div>

            <div className="harem-card">
              <img src={`${import.meta.env.BASE_URL}images/IMG_8070.jpg`} alt="Beautiful Iznik tiles with tulip and carnation patterns" className="harem-image" />
              <h3>Magnificent Tile Decorations</h3>
              <p>
                Iznik tiles that can only be viewed from afar in the Blue Mosque are here close enough to touch. The breathtaking beauty of tiles depicting tulips, carnations, and Quranic verses will leave you absolutely mesmerized and questioning everything you thought you knew about artistic perfection!
              </p>
            </div>

            <div className="harem-card">
              <img src={`${import.meta.env.BASE_URL}images/IMG_0623.jpg`} alt="Imperial Hall where the Sultan held banquets" className="harem-image" />
              <h3>Imperial Hall</h3>
              <p>
                The grand hall where the Sultan enjoyed meals and banquets. However, the Sultan's mother and her attendants were always present, making the banquets closer to formal ceremonies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Palace Secrets & Trivia */}
      <PalaceTrivia />

      {/* Conclusion */}
      <section className="conclusion">
        <div className="container">
          <div className="conclusion-content">
            <h2>A Timeless Adventure Awaits Your Discovery</h2>
            <p>
              The true magic of Topkapi Palace lies not only in its opulent luxury. By learning its extraordinary history and unleashing your imagination, you can have a transcendent experience where you literally hear the breathing of the people who once lived here. It's nothing short of a soul-stirring conversation across the centuries.
            </p>
            <p className="call-to-action">
              Now, won't you embark on this life-changing journey to discover the traces of the Sultans' dreams? An adventure that will transform your very soul awaits!
            </p>
          </div>
          <img src={`${import.meta.env.BASE_URL}images/Istanbul Bosphorus.jpg`} alt="Stunning view of Istanbul and the Bosphorus from Topkapi Palace" className="conclusion-image" />
        </div>
      </section>
    </div>
  )
}

export default App