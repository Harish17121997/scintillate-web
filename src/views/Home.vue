<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-decor">SCINTILLATE</div>
      <div class="hero-content">
        <div class="s-tag">Welcome · Baner, Pune</div>
        <h1>Where Beauty<br>Meets <em>Artistry</em></h1>
        <p>Pune's premium unisex salon crafting stunning transformations. From vibrant hair colour to rejuvenating skin therapies — your extraordinary beauty journey begins here.</p>
        <div class="hero-actions">
          <!--  Uses injected openBooking directly -->
          <button class="btn-primary" @click="openBooking">Book Appointment</button>
          <router-link to="/pricing" class="btn-outline">View Services & Pricing</router-link>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat"><span class="n">500+</span><span class="l">Happy Clients</span></div>
        <div class="stat-sep"></div>
        <div class="stat"><span class="n">8+</span><span class="l">Expert Stylists</span></div>
        <div class="stat-sep"></div>
        <div class="stat"><span class="n">5★</span><span class="l">Google Rating</span></div>
      </div>
    </section>

    <!-- WHY US -->
    <section class="why-us">
      <div class="why-grid">
        <div class="why-text">
          <div class="s-tag">Why Choose Us</div>
          <h2 class="s-heading">Excellence in<br>Every <em>Detail</em></h2>
          <p class="s-sub">Our expert team pushes the boundaries of beauty — creating stunning transformations that leave you radiant and confident.</p>
          <div class="why-items">
            <div class="why-item" v-for="(w, i) in whys" :key="i">
              <span class="wnum">0{{ i+1 }}</span>
              <div><h3>{{ w.title }}</h3><p>{{ w.desc }}</p></div>
            </div>
          </div>
        </div>
        <div class="why-visual">
          <img src="https://thescintillate.com/wp-content/uploads/2025/09/IMG_4903-768x1024.jpg" alt="Salon" @error="imgErr" />
          <div class="why-badge"><span class="bn">5★</span><span class="bl">Google Reviews</span></div>
        </div>
      </div>
    </section>

    <!-- SERVICES TEASER -->
    <section class="services-teaser">
      <div class="st-header">
        <div>
          <div class="s-tag">Our Services</div>
          <h2 class="s-heading">Crafted for <em>Every You</em></h2>
        </div>
        <router-link to="/pricing" class="btn-outline">Full Price List →</router-link>
      </div>
      <div class="services-grid">
        <div class="svc-card" v-for="s in services" :key="s.name">
          <div class="svc-icon">{{ s.icon }}</div>
          <h3>{{ s.name }}</h3>
          <p>{{ s.desc }}</p>
          <div class="svc-from">From ₹{{ s.from }}</div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <section class="reviews">
      <div class="s-tag">Client Love</div>
      <h2 class="s-heading">What They Say</h2>
      <div class="reviews-grid">
        <div class="review-card" v-for="r in reviews" :key="r.name">
          <div class="stars">★★★★★</div>
          <p class="rt">{{ r.text }}</p>
          <div class="reviewer">
            <div class="avatar">{{ r.initials }}</div>
            <div><div class="rname">{{ r.name }}</div><div class="rsrc">Google Review</div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATION -->
    <section class="location" id="location">
      <div class="loc-grid">
        <div class="loc-info">
          <div class="s-tag">Find Us</div>
          <h2 class="s-heading">Visit the <em>Salon</em></h2>
          <div class="loc-blocks">
            <div class="lb"><span class="ll">Address</span><span class="lv">SHOP 4, SRNO 113/7, near Ganraj Chowk,<br>Veerbhadra Nagar, Baner, Pune 411045</span></div>
            <div class="lb"><span class="ll">Phone</span><span class="lv"><a href="tel:9766419199">+91 97664 19199</a></span></div>
            <div class="lb"><span class="ll">Hours</span><span class="lv">Mon–Sat: 10 AM – 8 PM<br>Sunday: 10 AM – 6 PM</span></div>
          </div>
          <!--  Uses injected openBooking directly -->
          <button class="btn-primary" style="margin-top:28px" @click="openBooking">Book Appointment</button>
        </div>
        <div class="map-wrap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.5537638835009!2d73.77497122852482!3d18.564340798904066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc81a99d79b%3A0x8e4e59b6b475c119!2sScintillate%20unisex%20salon!5e0!3m2!1sen!2sin!4v1777368199401!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useBooking } from '../composables/useBooking.js'

// Inject openBooking from App.vue — works anywhere in the component tree
const { openBooking } = useBooking()

const whys = [
  { title: 'Expert Stylists', desc: 'Our skilled team stays ahead of global trends with continuous training and a passion for perfection.' },
  { title: 'Premium Products', desc: 'We use only the finest international hair and skin care products tailored to your unique needs.' },
  { title: 'Luxury Ambience', desc: 'Step into a world of calm elegance — designed for comfort, privacy, and relaxation.' },
  { title: 'Kids Friendly', desc: 'A welcoming space for the entire family — from toddlers to grandparents.' },
]

const services = [
  { icon: '✂', name: 'Hair Services', desc: 'Precision cuts, vibrant colours, transformative treatments.', from: '350' },
  { icon: '✿', name: 'Skin & Facials', desc: 'Advanced skincare for radiant, glowing skin.', from: '1200' },
  { icon: '◇', name: 'Nails & Body', desc: 'Manicure, pedicure, nail art & extensions.', from: '900' },
  { icon: '◉', name: "Men's Grooming", desc: 'Dedicated cuts, beard artistry & facials.', from: '200' },
  { icon: '✦', name: 'Bridal & Makeup', desc: 'Breathtaking looks for your most special occasions.', from: '2500' },
  { icon: '⬡', name: 'Waxing & Threading', desc: 'Smooth precision hair removal with premium wax.', from: '100' },
]

const reviews = [
  { name: 'Disha Baghele', initials: 'DB', text: '"I visited Scintillate for a manicure and pedicure, and it was a wonderful experience! The ambiance is modern and relaxing, staff are professional and attentive."' },
  { name: 'Janhavii Deshpande', initials: 'JD', text: '"Amazing work done by Mr Amit for hair botox. Thank you for making my hair look beautiful! Highly recommend this salon."' },
  { name: 'Shanu Agrawal', initials: 'SA', text: '"Scintillate is one of the luxury salons everyone could wish for. Owner is humble and expert — strongly recommend for something different."' },
  { name: 'Priya Majge', initials: 'PM', text: '"The Kanpeki Blanch Facial was amazing! I could see instant brightness right after the session. The products were very gentle yet effective."' },
  { name: 'Abhilasha Pagar', initials: 'AP', text: '"Staff were friendly, space was clean and stylish, and my haircut was exactly what I wanted. They really listen and care."' },
  { name: 'Pankaj Baviskar', initials: 'PB', text: '"My stylist gave me a sharp, clean cut that looks awesome. Service was quick and professional, high-quality products left my hair feeling great."' },
]

const imgErr = e => { e.target.style.display = 'none' }
</script>

<style scoped>
.hero { min-height: 100vh; background: var(--cream-dark); display: flex; flex-direction: column; justify-content: center; padding: 120px 5vw 80px; position: relative; overflow: hidden; }
.hero-decor { position: absolute; right: -3vw; top: 50%; transform: translateY(-50%); font-family: 'Cormorant Garamond', serif; font-size: 20vw; font-weight: 300; color: rgba(201,169,110,0.07); line-height: 1; pointer-events: none; user-select: none; letter-spacing: -0.02em; }
.hero-content { max-width: 680px; position: relative; z-index: 1; }
.hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(52px, 7vw, 88px); font-weight: 300; color: var(--text-deep); line-height: 1.05; letter-spacing: -0.01em; margin-bottom: 24px; }
.hero h1 em { font-style: italic; color: var(--gold-dark); }
.hero p { font-size: 16px; line-height: 1.75; color: var(--text-soft); max-width: 500px; margin-bottom: 44px; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.hero-stats { display: flex; align-items: center; gap: 0; margin-top: 64px; position: relative; z-index: 1; }
.stat { display: flex; flex-direction: column; gap: 4px; padding: 0 32px; }
.stat:first-child { padding-left: 0; }
.stat .n { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 300; color: var(--gold-dark); line-height: 1; }
.stat .l { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-soft); }
.stat-sep { width: 1px; height: 40px; background: var(--border-strong); }

.why-us { padding: 100px 5vw; background: var(--cream); }
.why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
.why-items { margin-top: 40px; display: flex; flex-direction: column; gap: 28px; }
.why-item { display: flex; gap: 18px; align-items: flex-start; }
.wnum { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: var(--gold); min-width: 30px; padding-top: 2px; }
.why-item h3 { font-size: 15px; font-weight: 500; color: var(--text-deep); margin-bottom: 5px; }
.why-item p { font-size: 13px; line-height: 1.65; color: var(--text-soft); }
.why-visual { position: relative; }
.why-visual img { width: 100%; height: 560px; object-fit: cover; display: block; }
.why-badge { position: absolute; bottom: -20px; left: -20px; background: var(--gold); padding: 24px 28px; text-align: center; }
.why-badge .bn { display: block; font-family: 'Cormorant Garamond', serif; font-size: 42px; font-weight: 300; color: var(--cream); line-height: 1; }
.why-badge .bl { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(250,247,242,0.8); margin-top: 3px; display: block; }

.services-teaser { padding: 100px 5vw; background: var(--cream-dark); }
.st-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 52px; flex-wrap: wrap; gap: 20px; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--border); }
.svc-card { background: var(--cream); padding: 36px 28px; transition: background 0.25s; position: relative; overflow: hidden; }
.svc-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: var(--gold); transform: scaleX(0); transition: transform 0.35s; transform-origin: left; }
.svc-card:hover { background: var(--parchment); }
.svc-card:hover::after { transform: scaleX(1); }
.svc-icon { font-size: 26px; margin-bottom: 16px; color: var(--gold-dark); }
.svc-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 400; color: var(--text-deep); margin-bottom: 10px; }
.svc-card p { font-size: 13px; line-height: 1.65; color: var(--text-soft); margin-bottom: 18px; }
.svc-from { font-size: 13px; color: var(--gold-dark); font-weight: 500; letter-spacing: 0.04em; }

.reviews { padding: 100px 5vw; background: var(--cream); }
.reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
.review-card { background: var(--parchment); padding: 28px 24px; border: 1px solid var(--border); }
.stars { color: var(--gold); font-size: 13px; margin-bottom: 14px; letter-spacing: 2px; }
.rt { font-size: 13px; line-height: 1.75; color: var(--text-mid); margin-bottom: 20px; font-style: italic; }
.reviewer { display: flex; align-items: center; gap: 12px; }
.avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--gold-muted); border: 1px solid var(--border-strong); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 500; color: var(--gold-dark); flex-shrink: 0; }
.rname { font-size: 14px; font-weight: 500; color: var(--text-deep); }
.rsrc { font-size: 11px; color: var(--text-soft); margin-top: 2px; }

.location { padding: 100px 5vw; background: var(--cream-dark); }
.loc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
.loc-blocks { display: flex; flex-direction: column; gap: 24px; margin-top: 36px; }
.lb { border-left: 2px solid var(--gold); padding-left: 18px; display: flex; flex-direction: column; gap: 4px; }
.ll { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
.lv { font-size: 14px; color: var(--text-mid); line-height: 1.6; }
.lv a { color: var(--gold-dark); text-decoration: none; }
.map-wrap { height: 360px; overflow: hidden; border: 1px solid var(--border); }
.map-wrap iframe { width: 100%; height: 100%; border: none; }

@media (max-width: 900px) {
  .why-grid, .loc-grid { grid-template-columns: 1fr; }
  .services-grid, .reviews-grid { grid-template-columns: 1fr 1fr; }
  .hero-stats { flex-wrap: wrap; gap: 16px; }
  .stat-sep { display: none; }
}
@media (max-width: 600px) {
  .services-grid, .reviews-grid { grid-template-columns: 1fr; }
  .st-header { flex-direction: column; align-items: flex-start; }
}
</style>
