import './App.css'
import contentData from './content/wedding-content.json'

function App() {
  const content = contentData
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="wedding-site">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">{content.couple.groom} & {content.couple.bride}</div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#story" onClick={() => scrollToSection('story')}>Our Story</a></li>
            <li><a href="#details" onClick={() => scrollToSection('details')}>Details</a></li>
            <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
            <li><a href="#rsvp" onClick={() => scrollToSection('rsvp')}>RSVP</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{content.hero.title}</h1>
          <p className="hero-subtitle">{content.hero.subtitle}</p>
          <div className="hero-date">
            <p>Save the Date</p>
            <h2>{content.hero.date}</h2>
            <p>{content.hero.location}</p>
          </div>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <h3>{content.story.howWeMet.title}</h3>
              <p>
                {content.story.howWeMet.text}
              </p>
              <h3>{content.story.proposal.title}</h3>
              <p>
                {content.story.proposal.text}
              </p>
            </div>
            <div className="story-image">
              {content.story.image ? (
                <img src={content.story.image} alt="Couple photo" className="couple-photo" />
              ) : (
                <div className="placeholder-image">Photo Placeholder</div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="details-section">
        <div className="container">
          <h2>Wedding Details</h2>
          <div className="details-grid">
            <div className="detail-card">
              <h3>Ceremony</h3>
              <p><strong>Date:</strong> {content.ceremony.date}</p>
              <p><strong>Time:</strong> {content.ceremony.time}</p>
              <p><strong>Location:</strong> {content.ceremony.venue}</p>
              <p>{content.ceremony.address}</p>
            </div>
            <div className="detail-card">
              <h3>Reception</h3>
              <p><strong>Time:</strong> {content.reception.time}</p>
              <p><strong>Location:</strong> {content.reception.venue}</p>
              <p>{content.reception.address}</p>
              <p>{content.reception.description}</p>
            </div>
            <div className="detail-card">
              <h3>Attire</h3>
              <p>{content.attire.dress_code}</p>
              <p>{content.attire.note}</p>
            </div>
            <div className="detail-card">
              <h3>Registry</h3>
              <p>{content.registry.message}</p>
              <p>{content.registry.details}</p>
              <p>{content.registry.info}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {content.gallery.images.map((image, index) => (
              <div key={index} className="gallery-item">
                {image && image !== `/images/gallery-${index + 1}.jpg` ? (
                  <img src={image} alt={`Gallery photo ${index + 1}`} className="gallery-photo" />
                ) : (
                  <div className="placeholder-image">Photo {index + 1}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="rsvp-section">
        <div className="container">
          <h2>RSVP</h2>
          <div className="rsvp-content">
            <p>Please respond by {content.rsvp.deadline}</p>
            <form className="rsvp-form">
              <div className="form-group">
                <label htmlFor="name">Name(s)</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="attending">Will you be attending?</label>
                <select id="attending" name="attending" required>
                  <option value="">Please select</option>
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Sorry, can't make it</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests" name="guests">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dietary">Dietary Restrictions</label>
                <textarea id="dietary" name="dietary" placeholder="Please let us know about any dietary restrictions or allergies"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message for the Couple</label>
                <textarea id="message" name="message" placeholder="Share your excitement or well wishes!"></textarea>
              </div>
              <button type="submit" className="rsvp-button">Send RSVP</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 {content.couple.groom} & {content.couple.bride}. Made with love.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
