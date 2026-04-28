<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo">Scintil<em>late</em></div>
        <p>Pune's premier unisex salon — where artistry meets elegance in the heart of Baner.</p>
        <div class="social-row">
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <span>·</span>
          <a href="https://facebook.com" target="_blank">Facebook</a>
          <span>·</span>
          <a href="https://wa.me/919766419199" target="_blank">WhatsApp</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/pricing">Services & Pricing</router-link></li>
          <li><router-link to="/academy">Academy</router-link></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:9766419199">+91 97664 19199</a></li>
          <li><a href="mailto:info@thescintillate.com">info@thescintillate.com</a></li>
          <li>Baner, Pune 411045</li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Hours</h4>
        <ul>
          <li>Mon – Sat</li>
          <li>11:00 AM – 9:00 PM</li>
          <li style="margin-top:8px">Sunday</li>
          <li>11:00 AM – 8:00 PM</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Scintillate Unisex Salon. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
footer { background: var(--parchment); border-top: 1px solid var(--border); padding: 64px 5vw 0; }
.footer-inner { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 48px; }
.footer-brand .logo { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 300; color: var(--gold-dark); letter-spacing: 0.08em; margin-bottom: 12px; }
.footer-brand .logo em { font-style: italic; color: var(--gold); }
.footer-brand p { font-size: 13px; line-height: 1.7; color: var(--text-soft); max-width: 240px; margin-bottom: 16px; }
.social-row { display: flex; gap: 10px; align-items: center; }
.social-row a { color: var(--gold-dark); text-decoration: none; font-size: 13px; transition: color 0.2s; }
.social-row a:hover { color: var(--gold); }
.social-row span { color: var(--text-soft); font-size: 11px; }
.footer-col h4 { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; }
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 9px; }
.footer-col ul li { font-size: 13px; color: var(--text-soft); }
.footer-col ul li a { color: var(--text-mid); text-decoration: none; transition: color 0.2s; }
.footer-col ul li a:hover { color: var(--gold-dark); }
.footer-bottom { border-top: 1px solid var(--border); padding: 20px 0; }
.footer-bottom p { font-size: 12px; color: var(--text-soft); }
@media (max-width: 900px) {
  .footer-inner { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 500px) {
  .footer-inner { grid-template-columns: 1fr; }
}
</style>
