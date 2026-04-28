<template>
  <div id="scintillate-app">
    <!-- NAV -->
    <nav :class="{ scrolled: scrolled }">
      <router-link to="/" class="nav-logo">Scintil<em>late</em></router-link>
      <ul class="nav-links">
        <li><router-link to="/" exact-active-class="active">Home</router-link></li>
        <li><router-link to="/pricing" active-class="active">Services & Pricing</router-link></li>
        <li><router-link to="/academy" active-class="active">Academy</router-link></li>
        <li><a href="#location" @click.prevent="goLocation">Location</a></li>
      </ul>
      <button class="nav-cta" @click="openBooking">Book Appointment</button>
      <button class="hamburger" @click="mobileOpen = !mobileOpen" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <div class="mobile-menu" :class="{ open: mobileOpen }">
      <router-link to="/" @click="mobileOpen=false">Home</router-link>
      <router-link to="/pricing" @click="mobileOpen=false">Services & Pricing</router-link>
      <router-link to="/academy" @click="mobileOpen=false">Academy</router-link>
      <a @click="mobileOpen=false; openBooking()">Book Appointment</a>
    </div>

    <router-view />

    <!-- BOOKING POPUP -->
    <div class="popup-overlay" :class="{ active: bookingOpen }" @click.self="closeBooking">
      <div class="popup">
        <div class="popup-header">
          <h2>Book Your Appointment</h2>
          <p>We'll confirm within 30 minutes</p>
          <button class="popup-close" @click="closeBooking">×</button>
        </div>
        <div class="popup-body">
          <div class="form-row">
            <div class="form-group">
              <label>Your Name *</label>
              <input v-model="form.name" type="text" placeholder="Full name" />
            </div>
            <div class="form-group">
              <label>Phone *</label>
              <input v-model="form.phone" type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" placeholder="your@email.com" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Service *</label>
              <select v-model="form.service">
                <option value="">Select service</option>
                <optgroup label="Men's Hair">
                  <option>Classic Haircut (Men) – ₹350</option>
                  <option>Haircut with Style Change – ₹500</option>
                  <option>Beard Trim – ₹200</option>
                  <option>Shave – ₹200</option>
                </optgroup>
                <optgroup label="Women's Hair">
                  <option>Classic Haircut (Women) – ₹600</option>
                  <option>Haircut Sr. Stylist – ₹1200</option>
                  <option>Basic Hair Spa – ₹1500+</option>
                  <option>Nashi Hair Spa – ₹2500+</option>
                </optgroup>
                <optgroup label="Colour">
                  <option>Root Touch Up – ₹1200+</option>
                  <option>Global Colour – ₹3000+</option>
                  <option>Highlights Per Streak – ₹350+</option>
                </optgroup>
                <optgroup label="Treatments">
                  <option>Botox – ₹5500+</option>
                  <option>Keratin / Smoothening – ₹5000+</option>
                  <option>Nanoplastia – ₹6500+</option>
                </optgroup>
                <optgroup label="Skin">
                  <option>Clean Up Kanpeki – ₹1200</option>
                  <option>Bridal Facial – ₹5000</option>
                  <option>Men's Facial – ₹4000</option>
                </optgroup>
                <optgroup label="Nails">
                  <option>Classic Manicure – ₹1000</option>
                  <option>Classic Pedicure – ₹1000</option>
                  <option>Nail Extension – ₹2100+</option>
                </optgroup>
                <optgroup label="Makeup">
                  <option>Light Makeup – ₹2500</option>
                  <option>Party Makeup – ₹5000</option>
                  <option>Airbrush Makeup – ₹10000</option>
                </optgroup>
                <optgroup label="Other">
                  <option>Waxing</option>
                  <option>Threading</option>
                  <option>Body Polishing</option>
                  <option>Multiple Services</option>
                </optgroup>
              </select>
            </div>
            <div class="form-group">
              <label>Preferred Date *</label>
              <input v-model="form.date" type="date" :min="today" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Preferred Time</label>
              <select v-model="form.time">
                <option value="">Any time</option>
                <option v-for="t in timeSlots" :key="t">{{ t }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Gender</label>
              <select v-model="form.gender">
                <option value="">Prefer not to say</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Notes</label>
            <textarea v-model="form.notes" placeholder="Any special requests or concerns..."></textarea>
          </div>
        </div>
        <div class="popup-footer">
          <button class="btn-wa" @click="sendWhatsApp">📱 WhatsApp</button>
          <button class="btn-email" @click="sendEmail">✉ Email</button>
        </div>
      </div>
    </div>

    <!-- FLOAT WA -->
    <a class="float-wa" href="https://wa.me/919766419199?text=Hi%20Scintillate!%20I'd%20like%20to%20book%20an%20appointment." target="_blank" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    </a>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import { createBooking } from './composables/useBooking.js'

const router = useRouter()
const scrolled = ref(false)
const mobileOpen = ref(false)

const today = computed(() => new Date().toISOString().split('T')[0])
const timeSlots = ['10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM']

const form = ref({ name: '', phone: '', email: '', service: '', date: '', time: '', gender: '', notes: '' })

// Creates booking state AND provides it to all child components via inject
const { bookingOpen, openBooking, closeBooking } = createBooking()

const onScroll = () => { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const goLocation = () => {
  if (router.currentRoute.value.path !== '/') router.push('/')
  setTimeout(() => { document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' }) }, 300)
}

const validate = () => {
  if (!form.value.name) { alert('Please enter your name.'); return false }
  if (!form.value.phone) { alert('Please enter phone number.'); return false }
  if (!form.value.service) { alert('Please select a service.'); return false }
  if (!form.value.date) { alert('Please select a date.'); return false }
  return true
}

const sendWhatsApp = () => {
  if (!validate()) return
  const f = form.value
  const msg = `Hello Scintillate Salon! 👋\n\nAppointment Request:\n👤 ${f.name}\n📞 ${f.phone}${f.email ? '\n📧 ' + f.email : ''}\n💇 ${f.service}\n📅 ${f.date}\n⏰ ${f.time || 'Flexible'}${f.notes ? '\n📝 ' + f.notes : ''}\n\nPlease confirm. Thank you!`
  window.open(`https://wa.me/919766419199?text=${encodeURIComponent(msg)}`, '_blank')
}

const sendEmail = () => {
  if (!validate()) return
  const f = form.value
  const sub = `Appointment – ${f.name} – ${f.service}`
  const body = `Dear Scintillate Team,\n\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || 'N/A'}\nService: ${f.service}\nDate: ${f.date}\nTime: ${f.time || 'Flexible'}\nNotes: ${f.notes || 'None'}\n\nKindly confirm. Thank you!`
  window.location.href = `mailto:info@thescintillate.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`
}
</script>

<style>
:root {
  --cream: #FAF7F2;
  --cream-dark: #F0EBE1;
  --cream-mid: #EDE5D8;
  --parchment: #E8DFD0;
  --gold: #C9A96E;
  --gold-light: #E2C99A;
  --gold-dark: #8B6A3E;
  --gold-muted: rgba(201,169,110,0.18);
  --text-deep: #3D3328;
  --text-mid: #6B5D4F;
  --text-soft: #9A8878;
  --border: rgba(201,169,110,0.25);
  --border-strong: rgba(201,169,110,0.45);
}
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--text-deep); overflow-x: hidden; }

nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 5vw; height: 72px;
  background: rgba(250,247,242,0.92); backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  transition: box-shadow 0.3s;
}
nav.scrolled { box-shadow: 0 2px 24px rgba(139,106,62,0.1); }
.nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 300; color: var(--gold-dark); letter-spacing: 0.08em; text-decoration: none; }
.nav-logo em { font-style: italic; color: var(--gold); }
.nav-links { display: flex; gap: 36px; list-style: none; }
.nav-links a { color: var(--text-mid); text-decoration: none; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; transition: color 0.25s; }
.nav-links a:hover, .nav-links a.active { color: var(--gold-dark); }
.nav-cta { background: var(--gold); color: var(--cream); border: none; padding: 10px 24px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; transition: background 0.25s; }
.nav-cta:hover { background: var(--gold-dark); }
.hamburger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 4px; }
.hamburger span { width: 24px; height: 1.5px; background: var(--gold-dark); display: block; transition: all 0.3s; }
.mobile-menu { display: none; position: fixed; top: 72px; left: 0; right: 0; background: rgba(250,247,242,0.98); z-index: 999; padding: 32px 5vw 40px; flex-direction: column; gap: 24px; border-bottom: 1px solid var(--border); }
.mobile-menu.open { display: flex; }
.mobile-menu a { color: var(--text-deep); text-decoration: none; font-size: 18px; letter-spacing: 0.04em; border-bottom: 1px solid var(--border); padding-bottom: 16px; cursor: pointer; }

.popup-overlay { display: none; position: fixed; inset: 0; background: rgba(61,51,40,0.6); z-index: 2000; align-items: center; justify-content: center; padding: 20px; }
.popup-overlay.active { display: flex; }
.popup { background: var(--cream); width: 100%; max-width: 560px; max-height: 92vh; overflow-y: auto; position: relative; animation: slideUp 0.35s ease; }
@keyframes slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
.popup-header { background: var(--parchment); padding: 32px 36px 24px; border-bottom: 1px solid var(--border); }
.popup-header h2 { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: var(--text-deep); margin-bottom: 4px; }
.popup-header p { font-size: 13px; color: var(--text-soft); }
.popup-close { position: absolute; top: 18px; right: 22px; background: none; border: none; color: var(--text-soft); font-size: 26px; cursor: pointer; line-height: 1; }
.popup-close:hover { color: var(--text-deep); }
.popup-body { padding: 28px 36px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-soft); margin-bottom: 6px; }
.form-group input, .form-group select, .form-group textarea { width: 100%; background: var(--parchment); border: 1px solid var(--border-strong); padding: 11px 14px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--text-deep); outline: none; transition: border-color 0.2s; appearance: none; }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--gold); background: white; }
.form-group textarea { resize: vertical; min-height: 72px; }
.popup-footer { padding: 0 36px 32px; display: flex; gap: 12px; }
.btn-wa { background: #25D366; color: white; border: none; padding: 14px 20px; font-size: 13px; font-weight: 500; font-family: 'DM Sans', sans-serif; cursor: pointer; flex: 1; transition: background 0.2s; }
.btn-wa:hover { background: #1db855; }
.btn-email { background: var(--gold); color: var(--cream); border: none; padding: 14px 20px; font-size: 13px; font-weight: 500; font-family: 'DM Sans', sans-serif; cursor: pointer; flex: 1; transition: background 0.2s; }
.btn-email:hover { background: var(--gold-dark); }

.float-wa { position: fixed; bottom: 28px; right: 28px; z-index: 999; width: 56px; height: 56px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 18px rgba(37,211,102,0.3); transition: transform 0.2s; text-decoration: none; }
.float-wa:hover { transform: scale(1.1); }
.float-wa svg { width: 28px; height: 28px; fill: white; }

.s-tag { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
.s-tag::before { content: ''; width: 28px; height: 1px; background: var(--gold); }
.s-heading { font-family: 'Cormorant Garamond', serif; font-size: clamp(34px, 4vw, 56px); font-weight: 300; line-height: 1.1; letter-spacing: -0.01em; color: var(--text-deep); margin-bottom: 16px; }
.s-heading em { font-style: italic; color: var(--gold-dark); }
.s-sub { font-size: 15px; line-height: 1.75; color: var(--text-soft); max-width: 520px; }
.btn-primary { background: var(--gold); color: var(--cream); border: none; padding: 15px 34px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: all 0.25s; text-decoration: none; display: inline-block; }
.btn-primary:hover { background: var(--gold-dark); }
.btn-outline { background: transparent; color: var(--gold-dark); border: 1px solid var(--border-strong); padding: 15px 34px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: all 0.25s; text-decoration: none; display: inline-block; }
.btn-outline:hover { background: var(--gold-muted); }

@media (max-width: 900px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
  .form-row { grid-template-columns: 1fr; }
  .popup-body, .popup-footer, .popup-header { padding-left: 22px; padding-right: 22px; }
}
</style>
