import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img src="/images/IMG_0623.jpg" alt="Topkapi Palace exterior view" className="hero-image" />
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
              <img src="/images/magnificent-century.jpg" alt="Scene from Magnificent Century Turkish drama" className="tip-image" />
              <h3>Study with Drama: "Magnificent Century" is Absolutely Essential Viewing</h3>
              <p>
                The Turkish drama "Magnificent Century" (original title: "The Magnificent Century"), which became a hit in 80 countries worldwide, is set right here in Topkapi Palace. It depicts the intense power struggles among women in the Harem, centered around Sultan Suleiman the Magnificent and his consort Hürrem.
              </p>
              <p>
                Watching just one or two episodes will bring the characters' faces and emotions to vivid life, transforming each room from merely luxurious spaces into electrifying stages of love, passion, and intrigue. The emotional impact becomes absolutely mind-blowing when you have this background knowledge!
              </p>
            </div>

            <div className="tip-card">
              <img src="/images/harem-interior.jpg" alt="Topkapi Palace Harem interior with ornate decorations" className="tip-image" />
              <h3>The Harem is Absolutely Essential - Don't Miss the Palace's Beating Heart!</h3>
              <p>
                Palace tickets come in two types: standard admission and tickets that include Harem access. While slightly more expensive, if you're visiting the palace, the Harem is absolutely essential to see.
              </p>
              <p>
                The Harem was the private living space of the Sultan and his family - the true "beating heart" of the palace. Its luxury and breathtaking beauty are simply incomparable to any other building. Leaving without seeing the Harem is like leaving a world-class restaurant without tasting the chef's masterpiece - it's a crime against your own experience!
              </p>
            </div>

            <div className="tip-card">
              <img src="/images/topkapi-entrance.jpg" alt="Topkapi Palace entrance and ticket area" className="tip-image" />
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
            <div className="court-content">
              <img src="/images/imperial-gate.jpg" alt="Imperial Gate entrance to Topkapi Palace First Court" className="court-image" />
              <div className="court-text">
                <p>
                  Passing through the Imperial Gate opens up the First Court, once called "The Janissaries' Court" (the Sultan's elite guard). Behind the plane tree on your right lies the spine-chilling "Executioner's Fountain," where the heads of high officials who incurred the Sultan's wrath were washed and displayed as dire warnings. Can you feel the shivers running down your spine?
                </p>
              </div>
            </div>
          </div>

          {/* Second Court */}
          <div className="court-section">
            <h3>Second Court: The Power Center Where Empires Were Born</h3>
            <div className="court-content">
              <img src="/images/IMG_0586.jpg" alt="Gate of Salutation (Bab-üs Selâm) entrance to Second Court" className="court-image" />
              <div className="court-text">
                <p>
                  The magnificent "Gate of Salutation" (Bab-üs Selâm) welcomes you - the symbolic entrance to absolute power. In the past, only the Sultan and his mother (Valide Sultan) were permitted to pass through this gate on horseback. Even the Grand Vizier had to dismount here. Talk about a dramatic display of hierarchy that would make Game of Thrones jealous!
                </p>
              </div>
            </div>

            <div className="subsection">
              <h4>Imperial Council Chamber (Divan)</h4>
              <div className="subsection-content">
                <img src="/images/council-chamber.jpg" alt="Imperial Council Chamber (Divan) interior" className="subsection-image" />
                <p>
                  The empire's most crucial policies were debated here. However, the Sultan didn't attend every meeting. From a secret small room behind the golden latticed window in the upper wall, he would secretly eavesdrop on the ministers' discussions. When the ministers began arguing, the Sultan would clear his throat to indicate his presence. Imagine the dramatic tension - pure political theater at its finest!
                </p>
              </div>
            </div>

            <div className="subsection">
              <h4>Palace Kitchens</h4>
              <div className="subsection-content">
                <img src="/images/palace-kitchens.jpg" alt="Topkapi Palace kitchens with distinctive chimneys" className="subsection-image" />
                <p>
                  The buildings with chimneys on your right are the kitchens. At its peak, 1,200 cooks worked here. The Sultans feared poisoning and favored Chinese celadon porcelain, believed to change color when touched by poison.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Third Court */}
      <section className="third-court">
        <div className="container">
          <h2>Third Court: The Sultan's Most Private Domain</h2>
          <p>
            Beyond the "Gate of Felicity" lies the Sultan's private area, guarded by white eunuchs.
          </p>

          <div className="treasury-section">
            <h3>Treasury: Where Imperial Wealth Becomes Legend</h3>
            <div className="treasury-content">
              <img src="/images/treasury-interior.jpg" alt="Topkapi Palace Treasury displaying imperial treasures" className="treasury-image" />
              <p>
                After years of renovation, the treasury has finally reopened and is absolutely essential to visit. Prepare to witness wealth beyond your wildest imagination - this is where fairy tales become reality!
              </p>
            </div>

            <div className="treasure-grid">
              <div className="treasure-item">
                <img src="/images/spoonmaker-diamond.jpg" alt="The famous 86-carat Spoonmaker's Diamond" className="treasure-image" />
                <h4>The Spoonmaker's Diamond</h4>
                <p>
                  An enormous 86-carat diamond with the most incredible backstory ever. A fisherman found this treasure in a pile of garbage and traded it for three wooden spoons, not knowing its astronomical value - hence the name. Talk about the ultimate rags-to-riches tale!
                </p>
              </div>

              <div className="treasure-item">
                <img src="/images/topkapi-dagger.jpg" alt="The Topkapi Dagger decorated with emeralds and diamonds" className="treasure-image" />
                <h4>The Topkapi Dagger</h4>
                <p>
                  One of the world's most precious daggers, decorated with three huge emeralds and countless diamonds. The pommel contains a rare London-made watch embedded within.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Court */}
      <section className="fourth-court">
        <div className="container">
          <h2>Fourth Court: Gardens of Breathtaking Beauty and Elegant Kiosks</h2>
          <p>
            The palace's innermost garden, dotted with beautiful pavilions (kiosks).
          </p>

          <div className="kiosk-section">
            <div className="kiosk-content">
              <img src="/images/IMG_8076.jpg" alt="Baghdad Kiosk with spectacular Golden Horn view" className="kiosk-image" />
              <div className="kiosk-text">
                <h3>Baghdad Kiosk</h3>
                <p>
                  Built in 1639 by Sultan Murad IV to commemorate his victory in the Baghdad campaign, this is a masterpiece of Ottoman classical architecture. The interior tiles and mother-of-pearl inlay work are stunning, but the view of the Golden Horn and the New City from here is absolutely spectacular - a vista that will steal your breath and capture your soul forever!
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
              <img src="/images/concubines-quarters.jpg" alt="Concubines' living quarters in the Harem" className="harem-image" />
              <h3>Life of the Concubines</h3>
              <p>
                Young girls brought to the Harem were trained in Turkish language, Islam, culture, and all the refinements needed to captivate the Sultan - makeup, music, and dance. They lived in an intense meritocracy, advancing their status by catching the Sultan's eye and earning his favor. It was the ultimate high-stakes competition where beauty, wit, and charm determined everything!
              </p>
            </div>

            <div className="harem-card">
              <img src="/images/iznik-tiles.jpg" alt="Beautiful Iznik tiles with tulip and carnation patterns" className="harem-image" />
              <h3>Magnificent Tile Decorations</h3>
              <p>
                Iznik tiles that can only be viewed from afar in the Blue Mosque are here close enough to touch. The breathtaking beauty of tiles depicting tulips, carnations, and Quranic verses will leave you absolutely mesmerized and questioning everything you thought you knew about artistic perfection!
              </p>
            </div>

            <div className="harem-card">
              <img src="/images/imperial-hall.jpg" alt="Imperial Hall where the Sultan held banquets" className="harem-image" />
              <h3>Imperial Hall</h3>
              <p>
                The grand hall where the Sultan enjoyed meals and banquets. However, the Sultan's mother and her attendants were always present, making the banquets closer to formal ceremonies.
              </p>
            </div>

            <div className="harem-card">
              <img src="/images/twin-kiosk.jpg" alt="Crown Prince's Twin Kiosk with stained glass" className="harem-image" />
              <h3>Crown Prince's Twin Kiosk</h3>
              <p>
                One of the most beautiful rooms in the Harem. The stained glass and Iznik tile panels above the fireplace are absolutely must-see features.
              </p>
            </div>
          </div>
        </div>
      </section>

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
          <img src="/images/topkapi-sunset.jpg" alt="Topkapi Palace at sunset with Istanbul skyline" className="conclusion-image" />
        </div>
      </section>
    </div>
  )
}

export default App