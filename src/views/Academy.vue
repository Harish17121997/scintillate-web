<template>
  <div class="academy-page">

    <!-- HERO -->
    <section class="aca-hero">
      <div class="ah-decor">ACADEMY</div>
      <div class="ah-content">
        <div class="s-tag">Scintillate Academy · Baner, Pune</div>
        <h1>Transform Your <em>Passion</em><br>Into a Career</h1>
        <p>India's most trusted beauty academy offering professional certified courses with 100% job placement assurance. Learn from industry experts. Build a career you love.</p>
        <div class="hero-badges">
          <div class="badge" v-for="b in badges" :key="b">{{ b }}</div>
        </div>
        <div class="hero-acts">
          <a href="#courses" class="btn-primary" @click.prevent="scrollTo('courses')">View All Courses</a>
          <a href="#enroll" class="btn-outline" @click.prevent="scrollTo('enroll')">Free Counselling</a>
        </div>
      </div>
    </section>

    <!-- STATS BAND -->
    <div class="stats-band">
      <div class="stat-item" v-for="s in stats" :key="s.num">
        <span class="sn">{{ s.num }}</span>
        <span class="sl">{{ s.label }}</span>
      </div>
    </div>

    <!-- COURSES -->
    <section class="courses-section" id="courses">
      <div class="cs-intro">
        <div class="s-tag">Our Programmes</div>
        <h2 class="s-heading">Choose Your <em>Course</em></h2>
        <p class="s-sub">Every course comes with certification, real salon internship, and our 100% Job Placement Assurance guarantee.</p>
      </div>
      <div class="courses-grid">
        <div class="course-card" v-for="c in courses" :key="c.name">
          <div v-if="c.badge" :class="['cbadge', c.badgeClass]">{{ c.badge }}</div>
          <div class="cicon">{{ c.icon }}</div>
          <h3>{{ c.name }}</h3>
          <div class="cduration">{{ c.duration }}</div>
          <p>{{ c.desc }}</p>
          <ul class="ctopics">
            <li v-for="t in c.topics" :key="t">{{ t }}</li>
          </ul>
          <div class="cfoot">
            <div class="cprice">₹{{ c.price.toLocaleString() }}</div>
            <button class="cenroll" @click="selectCourse(c.name)">Enroll Now</button>
          </div>
        </div>
      </div>
    </section>

    <!-- MASTER COURSE -->
    <section class="master-section">
      <div class="master-inner">
        <div class="master-left">
          <div class="master-flag">✦ Flagship Programme</div>
          <h2 class="s-heading">Complete Beauty<br><em>Master Course</em></h2>
          <p class="s-sub">Our all-in-one comprehensive programme covering Hair, Makeup, Skin, and Nails — the most complete beauty education available, with guaranteed placement.</p>
          <div class="modules">
            <div class="module" v-for="m in modules" :key="m.num">
              <span class="mnum">{{ m.num }}</span>
              <div><h4>{{ m.title }}</h4><p>{{ m.desc }}</p></div>
            </div>
          </div>
        </div>
        <div class="master-right">
          <ul class="features-list">
            <li v-for="f in masterFeatures" :key="f.title">
              <span class="ficon">{{ f.icon }}</span>
              <div><strong>{{ f.title }}</strong><p>{{ f.desc }}</p></div>
            </li>
          </ul>
          <div class="guarantee-box">
            <div class="g-num">100%</div>
            <div class="g-label">Job Placement Guarantee</div>
          </div>
          <div class="master-price-block">
            <div class="mp-label">Complete Master Course</div>
            <div class="mp-amount">₹75,000</div>
            <div class="mp-note">6 Month Programme · EMI Available</div>
            <button class="btn-primary" style="width:100%;margin-top:16px" @click="selectCourse('Complete Beauty Master Course')">Enroll in Master Course</button>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY ACADEMY -->
    <section class="why-academy">
      <div class="wa-intro">
        <div class="s-tag">Why Choose Us</div>
        <h2 class="s-heading">The Scintillate <em>Difference</em></h2>
      </div>
      <div class="wa-grid">
        <div class="wa-card" v-for="w in whyAcademy" :key="w.title">
          <div class="wa-icon">{{ w.icon }}</div>
          <h3>{{ w.title }}</h3>
          <p>{{ w.desc }}</p>
        </div>
      </div>
    </section>

    <!-- STUDENT TESTIMONIALS -->
    <section class="testimonials">
      <div class="s-tag">Student Stories</div>
      <h2 class="s-heading">Our <em>Graduates</em></h2>
      <div class="testi-grid">
        <div class="testi-card" v-for="t in testimonials" :key="t.name">
          <p class="ttext">{{ t.text }}</p>
          <div class="tauthor">
            <div class="tavatar">{{ t.initials }}</div>
            <div>
              <div class="tname">{{ t.name }}</div>
              <div class="tcourse">{{ t.course }}</div>
              <div class="placed">✓ {{ t.placed }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ENROLL SECTION -->
    <section class="enroll-section" id="enroll">
      <div class="enroll-inner">
        <div class="enroll-info">
          <div class="s-tag">Get Started</div>
          <h2 class="s-heading">Begin Your<br><em>Beauty Journey</em></h2>
          <p>Have questions about admission, fees, or scheduling? Our counsellors are available 7 days a week.</p>
          <div class="contact-ways">
            <div class="cway" v-for="c in contactWays" :key="c.label">
              <span class="cwicon">{{ c.icon }}</span>
              <div>
                <div class="cwlabel">{{ c.label }}</div>
                <div class="cwval" v-html="c.val"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="enroll-form">
          <h3>Free Counselling &amp; Enrolment</h3>
          <div class="form-group">
            <label>Your Name *</label>
            <input v-model="ef.name" type="text" placeholder="Full name" />
          </div>
          <div class="form-group">
            <label>Phone *</label>
            <input v-model="ef.phone" type="tel" placeholder="+91 XXXXX XXXXX" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="ef.email" type="email" placeholder="your@email.com" />
          </div>
          <div class="form-group">
            <label>Interested Course *</label>
            <select v-model="ef.course">
              <option value="">Select a course</option>
              <option v-for="c in courses" :key="c.name">{{ c.name }}</option>
              <option>Complete Beauty Master Course</option>
              <option>Not sure – need guidance</option>
            </select>
          </div>
          <div class="form-group">
            <label>Your Message</label>
            <textarea v-model="ef.msg" placeholder="Any questions about admission, fees, timing..."></textarea>
          </div>
          <div class="form-acts">
            <button class="btn-wa" @click="sendWA">📱 WhatsApp Us</button>
            <button class="btn-em" @click="sendEmail">✉ Email Enquiry</button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const badges = ['✓ 100% Job Assurance', '✓ Certified Courses', '✓ Expert Mentors', '✓ Live Salon Training', '✓ Kit Included']

const stats = [
  { num: '200+', label: 'Graduates Placed' },
  { num: '100%', label: 'Job Assurance' },
  { num: '15+', label: 'Industry Partners' },
  { num: '5★', label: 'Student Rating' },
]

const courses = [
  {
    icon: '✂', name: 'Professional Hair Artist',
    badge: '100% Job Assured', badgeClass: 'assured',
    duration: '3 Months · Full Time', price: 35000,
    desc: 'Master the art of cutting, colouring, and styling from precision cuts to global colour techniques used by international artists.',
    topics: ['Haircut Theory & Sectioning', 'Blow-drying & Finishing', 'Balayage & Highlights', 'Keratin & Smoothening', 'Bridal Hair & Updo', 'Client Consultation'],
  },
  {
    icon: '✿', name: 'Beauty & Makeup Artist',
    badge: '100% Job Assured', badgeClass: 'assured',
    duration: '3 Months · Full Time', price: 30000,
    desc: 'Become a certified makeup artist skilled in bridal, editorial, and everyday glam — ready for weddings, films, and events.',
    topics: ['Skin Prep & Contouring', 'Bridal Makeup Looks', 'Airbrush Techniques', 'Eye Makeup Artistry', 'Facials & Skincare', 'Portfolio Building'],
  },
  {
    icon: '◈', name: 'Skin Care Specialist',
    badge: '100% Job Assured', badgeClass: 'assured',
    duration: '2 Months · Full Time', price: 25000,
    desc: 'Deep dive into advanced skincare science. Learn facials, skin analysis, and technology-based treatments used in premium salons.',
    topics: ['Skin Biology & Analysis', 'Facial Techniques', 'Chemical Peels', 'Anti-Ageing Treatments', 'Brightening Therapies', 'Product Knowledge'],
  },
  {
    icon: '◇', name: 'Nail Art Technician',
    badge: 'Popular', badgeClass: 'popular',
    duration: '6 Weeks · Full / Part Time', price: 18000,
    desc: 'Learn the craft of nail care and artistry — from natural nail treatments to intricate 3D nail art and gel extensions.',
    topics: ['Manicure & Pedicure Mastery', 'Gel Polish Application', 'Acrylic & Gel Extensions', 'Nail Art Designs', '3D Nail Art', 'Nail Business Setup'],
  },
  {
    icon: '⬡', name: 'Waxing & Threading Pro',
    badge: 'New Batch', badgeClass: 'new',
    duration: '4 Weeks · Part Time', price: 12000,
    desc: 'Specialise in professional hair removal with focus on client comfort, hygiene, and advanced waxing methods.',
    topics: ['Rica & Hot Waxing', 'Body & Brazilian Waxing', 'Threading Techniques', 'Bleach & Detan', 'Skin Safety Protocols', 'Retail Sales Skills'],
  },
  {
    icon: '◉', name: "Men's Grooming Expert",
    badge: 'Weekend Batch', badgeClass: 'weekend',
    duration: '6 Weeks · Weekends', price: 15000,
    desc: "Everything a modern men's grooming specialist needs — from barbering and beard artistry to scalp treatments.",
    topics: ["Men's Haircut Techniques", 'Fade & Undercut', 'Beard Design & Shaping', 'Razor & Hot Towel Shave', 'Scalp Treatments', "Men's Skincare"],
  },
]

const modules = [
  { num: '01', title: 'Hair Artistry Module', desc: 'Cuts, colouring, treatments, bridal styling — 8 weeks' },
  { num: '02', title: 'Skin & Facials Module', desc: 'Analysis, facials, peels, advanced therapies — 4 weeks' },
  { num: '03', title: 'Makeup Artistry Module', desc: 'Bridal, editorial, airbrush, looks — 4 weeks' },
  { num: '04', title: 'Business & Salon Management', desc: 'Client retention, pricing, salon setup — 2 weeks' },
  { num: '05', title: 'Internship + Placement', desc: 'Live salon training + guaranteed job placement' },
]

const masterFeatures = [
  { icon: '🏆', title: '100% Job Placement Assurance', desc: 'We guarantee placement in a premium salon or refund your course fee.' },
  { icon: '📜', title: 'Government Recognised Certificate', desc: 'Nationally recognised certification upon completion.' },
  { icon: '👥', title: 'Expert Industry Mentors', desc: 'Learn from working professionals with 10+ years experience.' },
  { icon: '🎯', title: 'Hands-On Live Training', desc: '70% practical training on real clients in our working salon.' },
  { icon: '📦', title: 'Premium Kit Included', desc: 'Professional tools & product kit worth ₹8,000 included free.' },
  { icon: '💼', title: 'Portfolio & Resume Building', desc: 'We help you build your professional portfolio and salon-ready resume.' },
]

const whyAcademy = [
  { icon: '🎓', title: 'Certified & Recognised', desc: 'All courses are certified and nationally recognised — credentials employers trust.' },
  { icon: '✂', title: 'Real Salon Experience', desc: 'Train inside our operational salon on real clients from day one. No dummy heads.' },
  { icon: '💼', title: 'Guaranteed Placement', desc: 'Our industry network spans 15+ salon partners. We place every graduate.' },
  { icon: '👩‍🏫', title: 'Expert Mentors', desc: 'Learn from working professionals, not just theorists. Active salon artists.' },
  { icon: '📦', title: 'Kit Included', desc: 'Every student receives a professional product kit to kick-start their career.' },
  { icon: '💳', title: 'Easy EMI Options', desc: 'Flexible, interest-free EMI plans on all courses — don\'t let finances hold you back.' },
]

const testimonials = [
  { name: 'Priyanka Shinde', initials: 'PS', course: 'Professional Hair Artist · 2024', placed: 'Placed at Lakme Salon, Pune', text: '"I joined the Hair Artist course with zero experience. After 3 months, I was placed at a premium salon in Pune. The training was incredibly thorough and practical."' },
  { name: 'Anjali Patil', initials: 'AP', course: 'Complete Beauty Master Course · 2024', placed: 'Freelance Bridal Artist', text: '"The Master Course changed my life. I now run my own freelance makeup business earning more than my previous corporate job. 100% job assurance is real!"' },
  { name: 'Rahul Deshmukh', initials: 'RD', course: "Men's Grooming Expert · 2025", placed: 'Placed at The Bombay Barber Co.', text: '"Amazing faculty, hands-on training from day one, and they actually placed me in a salon that matched my skills and salary expectations. Highly recommend!"' },
]

const contactWays = [
  { icon: '📞', label: 'Call / WhatsApp', val: '<a href="tel:9766419199">+91 97664 19199</a> — Mon–Sat, 10am–7pm' },
  { icon: '📧', label: 'Email Us', val: '<a href="mailto:academy@thescintillate.com">academy@thescintillate.com</a>' },
  { icon: '📍', label: 'Visit Us', val: 'SHOP 4, near Ganraj Chowk, Veerbhadra Nagar, Baner, Pune 411045' },
]

const ef = ref({ name: '', phone: '', email: '', course: '', msg: '' })

const selectCourse = name => {
  ef.value.course = name
  setTimeout(() => { document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' }) }, 100)
}

const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

const validate = () => {
  if (!ef.value.name) { alert('Please enter your name.'); return false }
  if (!ef.value.phone) { alert('Please enter phone number.'); return false }
  if (!ef.value.course) { alert('Please select a course.'); return false }
  return true
}

const sendWA = () => {
  if (!validate()) return
  const f = ef.value
  const msg = `Hello Scintillate Academy! 🎓\n\nEnquiry:\n👤 ${f.name}\n📞 ${f.phone}${f.email ? '\n📧 ' + f.email : ''}\n📚 ${f.course}${f.msg ? '\n💬 ' + f.msg : ''}\n\nPlease share admission details. Thank you!`
  window.open(`https://wa.me/919766419199?text=${encodeURIComponent(msg)}`, '_blank')
}

const sendEmail = () => {
  if (!validate()) return
  const f = ef.value
  const sub = `Academy Enquiry – ${f.course} – ${f.name}`
  const body = `Dear Scintillate Academy,\n\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || 'N/A'}\nCourse: ${f.course}\nMessage: ${f.msg || 'None'}\n\nKindly share the admission process and schedule.\n\nThank you!\n${f.name}`
  window.location.href = `mailto:academy@thescintillate.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`
}
</script>

<style scoped>
.academy-page { padding-top: 72px; }

/* HERO */
.aca-hero { min-height: 88vh; background: var(--cream-dark); display: flex; flex-direction: column; justify-content: center; padding: 80px 5vw 80px; position: relative; overflow: hidden; }
.ah-decor { position: absolute; right: -2vw; top: 50%; transform: translateY(-50%); font-family: 'Cormorant Garamond', serif; font-size: 18vw; font-weight: 300; color: rgba(201,169,110,0.05); line-height: 1; pointer-events: none; user-select: none; }
.ah-content { max-width: 680px; position: relative; z-index: 1; }
.aca-hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(46px, 6vw, 80px); font-weight: 300; color: var(--text-deep); line-height: 1.05; margin-bottom: 20px; }
.aca-hero h1 em { font-style: italic; color: var(--gold-dark); }
.aca-hero p { font-size: 16px; line-height: 1.75; color: var(--text-soft); max-width: 520px; margin-bottom: 32px; }
.hero-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 36px; }
.badge { background: var(--parchment); border: 1px solid var(--border-strong); padding: 7px 14px; font-size: 12px; letter-spacing: 0.06em; color: var(--gold-dark); }
.hero-acts { display: flex; gap: 14px; flex-wrap: wrap; }

/* STATS BAND */
.stats-band { background: var(--gold); display: flex; justify-content: center; gap: 0; padding: 0; }
.stat-item { flex: 1; max-width: 200px; display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 32px 20px; border-right: 1px solid rgba(250,247,242,0.25); }
.stat-item:last-child { border-right: none; }
.sn { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 300; color: var(--cream); line-height: 1; }
.sl { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(250,247,242,0.75); }

/* COURSES */
.courses-section { padding: 80px 5vw; background: var(--cream); }
.cs-intro { max-width: 560px; margin-bottom: 52px; }
.courses-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--border); }
.course-card { background: var(--cream); padding: 36px 28px; position: relative; display: flex; flex-direction: column; }
.cbadge { position: absolute; top: 0; right: 0; padding: 5px 14px; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
.cbadge.assured { background: #2d7a3a; color: var(--cream); }
.cbadge.popular { background: var(--gold); color: var(--cream); }
.cbadge.new { background: var(--gold-dark); color: var(--cream); }
.cbadge.weekend { background: var(--parchment); color: var(--gold-dark); border: 1px solid var(--border-strong); }
.cicon { font-size: 28px; color: var(--gold-dark); margin-bottom: 16px; }
.course-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 400; color: var(--text-deep); margin-bottom: 6px; }
.cduration { font-size: 11px; color: var(--gold); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px; }
.course-card p { font-size: 13px; line-height: 1.65; color: var(--text-soft); margin-bottom: 18px; flex: 1; }
.ctopics { list-style: none; display: flex; flex-direction: column; gap: 7px; margin-bottom: 24px; }
.ctopics li { font-size: 12px; color: var(--text-mid); display: flex; gap: 8px; }
.ctopics li::before { content: '✓'; color: var(--gold); font-size: 11px; flex-shrink: 0; margin-top: 1px; }
.cfoot { border-top: 1px solid var(--border); padding-top: 18px; display: flex; justify-content: space-between; align-items: center; }
.cprice { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 300; color: var(--gold-dark); }
.cenroll { background: var(--gold); color: var(--cream); border: none; padding: 9px 18px; font-size: 12px; letter-spacing: 0.06em; font-family: 'DM Sans', sans-serif; font-weight: 500; cursor: pointer; transition: background 0.2s; }
.cenroll:hover { background: var(--gold-dark); }

/* MASTER */
.master-section { padding: 80px 5vw; background: var(--parchment); border-top: 1px solid var(--border); }
.master-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
.master-flag { display: inline-block; background: var(--gold); color: var(--cream); padding: 7px 18px; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 20px; }
.modules { display: flex; flex-direction: column; gap: 1px; margin-top: 32px; background: var(--border); }
.module { background: var(--cream); display: flex; gap: 16px; align-items: flex-start; padding: 18px 20px; }
.mnum { font-family: 'Cormorant Garamond', serif; font-size: 26px; color: var(--gold); min-width: 36px; line-height: 1; }
.module h4 { font-size: 14px; font-weight: 500; color: var(--text-deep); margin-bottom: 3px; }
.module p { font-size: 12px; color: var(--text-soft); line-height: 1.5; }
.master-right { background: var(--cream); border: 1px solid var(--border-strong); padding: 36px 32px; }
.features-list { list-style: none; display: flex; flex-direction: column; gap: 0; margin-bottom: 24px; }
.features-list li { display: flex; gap: 14px; align-items: flex-start; padding: 16px 0; border-bottom: 1px solid var(--border); font-size: 13px; color: var(--text-mid); line-height: 1.5; }
.features-list li:last-child { border-bottom: none; }
.ficon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
.features-list li strong { display: block; font-size: 13px; font-weight: 500; color: var(--text-deep); margin-bottom: 3px; }
.guarantee-box { background: var(--gold); padding: 24px; text-align: center; margin-bottom: 0; }
.g-num { font-family: 'Cormorant Garamond', serif; font-size: 52px; font-weight: 300; color: var(--cream); line-height: 1; }
.g-label { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(250,247,242,0.85); margin-top: 4px; }
.master-price-block { border: 1px solid var(--border-strong); border-top: none; padding: 24px; background: var(--cream-dark); text-align: center; }
.mp-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-soft); margin-bottom: 6px; }
.mp-amount { font-family: 'Cormorant Garamond', serif; font-size: 44px; font-weight: 300; color: var(--gold-dark); line-height: 1; }
.mp-note { font-size: 12px; color: var(--text-soft); margin-top: 6px; }

/* WHY ACADEMY */
.why-academy { padding: 80px 5vw; background: var(--cream-dark); }
.wa-intro { max-width: 500px; margin-bottom: 48px; }
.wa-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--border); }
.wa-card { background: var(--cream); padding: 32px 26px; }
.wa-icon { font-size: 28px; margin-bottom: 16px; }
.wa-card h3 { font-size: 15px; font-weight: 500; color: var(--text-deep); margin-bottom: 8px; }
.wa-card p { font-size: 13px; line-height: 1.65; color: var(--text-soft); }

/* TESTIMONIALS */
.testimonials { padding: 80px 5vw; background: var(--cream); }
.testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
.testi-card { background: var(--parchment); border-left: 3px solid var(--gold); padding: 28px 24px; }
.ttext { font-size: 13px; line-height: 1.75; color: var(--text-mid); font-style: italic; margin-bottom: 20px; }
.tauthor { display: flex; gap: 12px; align-items: flex-start; }
.tavatar { width: 40px; height: 40px; border-radius: 50%; background: var(--gold-muted); border: 1px solid var(--border-strong); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 500; color: var(--gold-dark); flex-shrink: 0; }
.tname { font-size: 14px; font-weight: 500; color: var(--text-deep); }
.tcourse { font-size: 11px; color: var(--text-soft); margin-top: 2px; }
.placed { display: inline-block; background: rgba(45,122,58,0.1); color: #2d7a3a; padding: 3px 10px; font-size: 11px; letter-spacing: 0.05em; border-radius: 20px; margin-top: 7px; }

/* ENROLL */
.enroll-section { padding: 80px 5vw; background: var(--parchment); }
.enroll-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
.enroll-info h2 { color: var(--text-deep); }
.enroll-info > p { font-size: 15px; line-height: 1.75; color: var(--text-soft); margin-bottom: 36px; max-width: 400px; }
.contact-ways { display: flex; flex-direction: column; gap: 16px; }
.cway { display: flex; gap: 14px; align-items: flex-start; padding: 18px; background: var(--cream); border: 1px solid var(--border); }
.cwicon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
.cwlabel { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
.cwval { font-size: 13px; color: var(--text-mid); line-height: 1.6; }
.cwval a { color: var(--gold-dark); text-decoration: none; }
.enroll-form { background: var(--cream); padding: 36px; border: 1px solid var(--border); }
.enroll-form h3 { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 300; color: var(--text-deep); margin-bottom: 24px; }
.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-soft); margin-bottom: 6px; }
.form-group input, .form-group select, .form-group textarea { width: 100%; background: var(--parchment); border: 1px solid var(--border-strong); padding: 11px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--text-deep); outline: none; transition: border-color 0.2s; appearance: none; }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--gold); background: white; }
.form-group textarea { min-height: 80px; resize: vertical; }
.form-acts { display: flex; gap: 12px; margin-top: 8px; }
.btn-wa { background: #25D366; color: white; border: none; padding: 14px 20px; font-size: 13px; font-weight: 500; font-family: 'DM Sans', sans-serif; cursor: pointer; flex: 1; transition: background 0.2s; }
.btn-wa:hover { background: #1db855; }
.btn-em { background: var(--gold); color: var(--cream); border: none; padding: 14px 20px; font-size: 13px; font-weight: 500; font-family: 'DM Sans', sans-serif; cursor: pointer; flex: 1; transition: background 0.2s; }
.btn-em:hover { background: var(--gold-dark); }

@media (max-width: 900px) {
  .courses-grid, .wa-grid, .testi-grid { grid-template-columns: 1fr 1fr; }
  .master-inner, .enroll-inner { grid-template-columns: 1fr; }
  .stats-band { flex-wrap: wrap; }
  .stat-item { min-width: 120px; }
}
@media (max-width: 600px) {
  .courses-grid, .wa-grid, .testi-grid { grid-template-columns: 1fr; }
  .form-acts { flex-direction: column; }
  .hero-acts { flex-direction: column; }
}
</style>
