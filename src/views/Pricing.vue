<template>
  <div class="pricing-page">
    <!-- HERO BAND -->
    <div class="pricing-hero">
      <div class="ph-decor">MENU</div>
      <div class="ph-content">
        <div class="s-tag">Transparent Pricing</div>
        <h1 class="s-heading">Services &amp; <em>Price List</em></h1>
        <p class="s-sub">All prices in ₹. Prices marked "onward" vary by hair length &amp; thickness. Walk-ins welcome — appointments recommended.</p>
      </div>
    </div>

    <!-- FILTER TABS -->
    <div class="filter-bar">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="['tab-btn', { active: activeTab === tab.key }]"
        @click="activeTab = tab.key"
      >{{ tab.label }}</button>
    </div>

    <!-- SECTIONS -->
    <div class="sections-wrap">

      <!-- MEN'S HAIR -->
      <div v-show="activeTab === 'all' || activeTab === 'men'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">✂</span>
          <div>
            <div class="s-tag">For Him</div>
            <h2 class="ps-title">Men's Haircut</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in menHair" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}<em v-if="item.plus">+</em></span>
          </div>
        </div>
      </div>

      <!-- WOMEN'S HAIR -->
      <div v-show="activeTab === 'all' || activeTab === 'women'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">✦</span>
          <div>
            <div class="s-tag">For Her</div>
            <h2 class="ps-title">Women's Haircut &amp; Spa</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in womenHair" :key="item.name">
            <span class="pname">{{ item.name }}<small v-if="item.note"> ({{ item.note }})</small></span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}<em v-if="item.plus">+</em></span>
          </div>
        </div>
      </div>

      <!-- COLOUR -->
      <div v-show="activeTab === 'all' || activeTab === 'colour'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">◈</span>
          <div>
            <div class="s-tag">Colour</div>
            <h2 class="ps-title">Hair Colour</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in colour" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}<em v-if="item.plus">+</em></span>
          </div>
        </div>
      </div>

      <!-- MASSAGE -->
      <div v-show="activeTab === 'all' || activeTab === 'men'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">◉</span>
          <div>
            <div class="s-tag">Relaxation</div>
            <h2 class="ps-title">Massage</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in massage" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}</span>
          </div>
        </div>
      </div>

      <!-- HAIR TREATMENT -->
      <div v-show="activeTab === 'all' || activeTab === 'treatment'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">✿</span>
          <div>
            <div class="s-tag">Treatment</div>
            <h2 class="ps-title">Hair Treatments</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in hairTreatment" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}<em v-if="item.plus">+</em></span>
          </div>
        </div>
      </div>

      <!-- HAIRWASH & BLOW DRY -->
      <div v-show="activeTab === 'all' || activeTab === 'women'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">◇</span>
          <div>
            <div class="s-tag">Wash &amp; Style</div>
            <h2 class="ps-title">Hairwash &amp; Blow Dry</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in hairwash" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}</span>
          </div>
        </div>
      </div>

      <!-- SKIN / CLEAN UP -->
      <div v-show="activeTab === 'all' || activeTab === 'skin'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">⬡</span>
          <div>
            <div class="s-tag">Skin Care</div>
            <h2 class="ps-title">Clean Up &amp; Facials</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in skin" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}</span>
          </div>
        </div>
      </div>

      <!-- MANICURE & PEDICURE -->
      <div v-show="activeTab === 'all' || activeTab === 'nails'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">◆</span>
          <div>
            <div class="s-tag">Nails</div>
            <h2 class="ps-title">Manicure &amp; Pedicure</h2>
          </div>
        </div>
        <div class="mp-grid">
          <div class="mp-col">
            <div class="mp-head">Manicure</div>
            <div class="price-row" v-for="item in manicure" :key="item.name">
              <span class="pname">{{ item.name }}</span>
              <span class="pdots"></span>
              <span class="pprice">₹{{ item.price }}</span>
            </div>
          </div>
          <div class="mp-col">
            <div class="mp-head">Pedicure</div>
            <div class="price-row" v-for="item in pedicure" :key="item.name">
              <span class="pname">{{ item.name }}</span>
              <span class="pdots"></span>
              <span class="pprice">₹{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- NAIL ART -->
      <div v-show="activeTab === 'all' || activeTab === 'nails'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">✧</span>
          <div>
            <div class="s-tag">Nail Art</div>
            <h2 class="ps-title">Nail Art &amp; Extensions</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in nailArt" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}<em v-if="item.plus">+</em></span>
          </div>
        </div>
      </div>

      <!-- THREADING -->
      <div v-show="activeTab === 'all' || activeTab === 'waxing'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">◈</span>
          <div>
            <div class="s-tag">Threading</div>
            <h2 class="ps-title">Threading</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in threading" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}</span>
          </div>
        </div>
      </div>

      <!-- BODY POLISHING -->
      <div v-show="activeTab === 'all' || activeTab === 'waxing'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">✺</span>
          <div>
            <div class="s-tag">Body</div>
            <h2 class="ps-title">Body Polishing</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in bodyPolish" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}<em v-if="item.plus">+</em></span>
          </div>
        </div>
      </div>

      <!-- WAXING -->
      <div v-show="activeTab === 'all' || activeTab === 'waxing'" class="price-section waxing-section">
        <div class="ps-header">
          <span class="ps-icon">◊</span>
          <div>
            <div class="s-tag">Waxing</div>
            <h2 class="ps-title">Waxing</h2>
          </div>
        </div>
        <div class="wax-table">
          <div class="wax-head">
            <span>Service</span>
            <span>Regular</span>
            <span>Liposoluble</span>
          </div>
          <div class="wax-row" v-for="item in waxing" :key="item.name">
            <span class="wname">{{ item.name }}</span>
            <span class="wprice">₹{{ item.regular }}</span>
            <span class="wprice lipo">₹{{ item.lipo }}</span>
          </div>
        </div>
      </div>

      <!-- MAKEUP -->
      <div v-show="activeTab === 'all' || activeTab === 'makeup'" class="price-section">
        <div class="ps-header">
          <span class="ps-icon">✾</span>
          <div>
            <div class="s-tag">Makeup</div>
            <h2 class="ps-title">Makeup &amp; Styling</h2>
          </div>
        </div>
        <div class="price-list">
          <div class="price-row" v-for="item in makeup" :key="item.name">
            <span class="pname">{{ item.name }}</span>
            <span class="pdots"></span>
            <span class="pprice">₹{{ item.price }}<em v-if="item.plus">+</em></span>
          </div>
        </div>
      </div>

      <!-- PACKAGES -->
      <div v-show="activeTab === 'all' || activeTab === 'packages'" class="price-section packages-section">
        <div class="ps-header">
          <span class="ps-icon">❋</span>
          <div>
            <div class="s-tag">Value Packages</div>
            <h2 class="ps-title">Membership Packages</h2>
          </div>
        </div>
        <div class="packages-grid">
          <div class="pkg-card" v-for="pkg in packages" :key="pkg.name">
            <div class="pkg-name">{{ pkg.name }}</div>
            <div class="pkg-pay"><span class="pkl">Pay</span><span class="pkv">₹{{ pkg.pay.toLocaleString() }}</span></div>
            <div class="pkg-divider"></div>
            <div class="pkg-get"><span class="pkl">Get Services Worth</span><span class="pkv accent">₹{{ pkg.get.toLocaleString() }}</span></div>
            <div class="pkg-benefit">
              <span class="pkl">You Save</span>
              <span class="pkv save">₹{{ (pkg.get - pkg.pay).toLocaleString() }}</span>
            </div>
            <div class="pkg-validity"><span class="pkl">Valid For</span><span class="validity-tag">{{ pkg.validity }}</span></div>
            <button class="btn-primary pkg-btn" @click="openBooking">Buy Package</button>
          </div>
        </div>
      </div>

    </div>

    <!-- BOOK CTA -->
    <div class="book-cta">
      <h2>Ready to Look <em>Stunning?</em></h2>
      <p>Book your appointment online or walk into our salon in Baner, Pune.</p>
      <button class="btn-primary" @click="openBooking">Book Your Appointment</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBooking } from '../composables/useBooking.js'
const { openBooking } = useBooking()

const activeTab = ref('all')
const tabs = [
  { key: 'all', label: 'All Services' },
  { key: 'men', label: "Men's" },
  { key: 'women', label: "Women's Hair" },
  { key: 'colour', label: 'Colour' },
  { key: 'treatment', label: 'Treatments' },
  { key: 'skin', label: 'Skin' },
  { key: 'nails', label: 'Nails' },
  { key: 'waxing', label: 'Waxing & Body' },
  { key: 'makeup', label: 'Makeup' },
  { key: 'packages', label: 'Packages' },
]

const menHair = [
  { name: 'Classic Haircut', price: '350' },
  { name: 'Haircut with Customised Style Change', price: '500' },
  { name: 'Kids Haircut (Upto 10 Years)', price: '300' },
  { name: 'Shave', price: '200' },
  { name: 'Beard Trim', price: '200' },
  { name: 'Hair Wash & Blowdry', price: '300' },
]

const womenHair = [
  { name: 'Classic Haircut', price: '600', note: 'Jr. Hairstylist' },
  { name: 'Haircut with Customised Style Change', price: '1200', note: 'Sr. Hairstylist' },
  { name: 'Kids Haircut (Upto 10 Years)', price: '400' },
  { name: 'Hairwash with Blast Dry', price: '500' },
  { name: 'Hairwash with Blow Dry', price: '600' },
  { name: 'Basic Hair Spa', price: '1500', plus: true },
  { name: 'Luxury Shea Butter Spa', price: '2000', plus: true },
  { name: 'Nashi Hair Spa', price: '2500', plus: true },
]

const colour = [
  { name: 'Root Touch Up', price: '1200', plus: true },
  { name: 'Global Colour', price: '3000', plus: true },
  { name: 'Ammonia-Free Colour', price: '1500', plus: true },
  { name: 'Highlights Per Streak', price: '350', plus: true },
  { name: "Men's Highlights", price: '2000' },
]

const massage = [
  { name: 'Head Massage', price: '600' },
  { name: 'Head Massage with Hair Wash', price: '800' },
]

const hairTreatment = [
  { name: 'Ironing (Temporary)', price: '1200' },
  { name: 'Tongs (Temporary)', price: '1200' },
  { name: 'Straightening / Rebonding', price: '4000', plus: true },
  { name: 'Smoothening, Keratin & Protein Treatments', price: '5000', plus: true },
  { name: 'Botox', price: '5500', plus: true },
  { name: 'Nanoplastia', price: '6500', plus: true },
  { name: 'Anti Dandruff Treatment', price: '2000', plus: true },
]

const hairwash = [
  { name: 'Anti-Hairfall Hairwash', price: '600' },
  { name: 'Anti-Dandruff Hairwash', price: '600' },
  { name: 'Treatment Hairwash', price: '800' },
  { name: 'Hairwash with Blow Dry', price: '600' },
  { name: 'Hairwash with Blast Dry', price: '500' },
]

const skin = [
  { name: 'Clean Up Kanpeki', price: '1200' },
  { name: 'Detan Clean Up', price: '1500' },
  { name: 'Clean Up Gold', price: '1500' },
  { name: 'O3+ (All Skin Types)', price: '3000' },
  { name: 'Acne Treatment', price: '2000' },
  { name: 'Hydration Boost', price: '2500' },
  { name: 'Pigmentation Treatment', price: '2500' },
  { name: "Men's Facial", price: '4000' },
  { name: 'Bridal Facial', price: '5000' },
]

const manicure = [
  { name: 'Classic', price: '1000' },
  { name: 'Advance', price: '1500' },
]

const pedicure = [
  { name: 'Classic', price: '1000' },
  { name: 'Advance', price: '1800' },
]

const nailArt = [
  { name: 'Gel Polish', price: '900' },
  { name: 'Overlay Nails', price: '1200' },
  { name: 'Nail Extension', price: '2100', plus: true },
  { name: 'Nailpaint Removal', price: '400' },
  { name: 'Temporary Extension', price: '1500', plus: true },
]

const threading = [
  { name: 'Eyebrows + Forehead', price: '100' },
  { name: 'Chin or Upper Lip', price: '50' },
  { name: 'Cheek', price: '100' },
  { name: 'Full Face', price: '300' },
]

const bodyPolish = [
  { name: 'Body Polishing (without bleach)', price: '4000', plus: true },
  { name: 'Arms', price: '1300' },
  { name: 'Legs (Back / Front)', price: '2500', plus: true },
]

const waxing = [
  { name: 'Half Arms', regular: '250', lipo: '350' },
  { name: 'Full Arms', regular: '450', lipo: '650' },
  { name: 'Underarms', regular: '100', lipo: '150' },
  { name: 'Half Legs', regular: '350', lipo: '550' },
  { name: 'Full Legs', regular: '550', lipo: '750' },
  { name: 'Upper Lip / Chin / Forehead', regular: '100', lipo: '150' },
  { name: 'Full Face', regular: '300', lipo: '500' },
  { name: 'Full Body', regular: '2500', lipo: '3000' },
  { name: 'Bikini / Brazilian', regular: '1500', lipo: '2500' },
]

const makeup = [
  { name: 'Light Makeup', price: '2500' },
  { name: 'Detailed Makeup', price: '3500' },
  { name: 'Party Makeup + Fancy Hair (Bun, Juda, Crimping, Curls)', price: '5000' },
  { name: 'Saree Draping', price: '600' },
  { name: 'Hair Do', price: '1000', plus: true },
  { name: 'Groom Makeup', price: '4000', plus: true },
  { name: 'Airbrush Makeup', price: '10000' },
]

const packages = [
  { name: 'Package 1', pay: 5000, get: 6250, validity: '3 Months' },
  { name: 'Package 2', pay: 11000, get: 14300, validity: '6 Months' },
  { name: 'Package 3', pay: 21000, get: 28350, validity: '10 Months' },
]
</script>

<style scoped>
.pricing-page { padding-top: 72px; }

/* HERO */
.pricing-hero { background: var(--cream-dark); padding: 80px 5vw 60px; position: relative; overflow: hidden; }
.ph-decor { position: absolute; right: 0; top: 50%; transform: translateY(-50%); font-family: 'Cormorant Garamond', serif; font-size: 16vw; font-weight: 300; color: rgba(201,169,110,0.06); line-height: 1; pointer-events: none; user-select: none; letter-spacing: -0.02em; }
.ph-content { position: relative; z-index: 1; max-width: 640px; }

/* FILTER */
.filter-bar { background: var(--cream); border-bottom: 1px solid var(--border); padding: 0 5vw; display: flex; gap: 0; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; position: sticky; top: 72px; z-index: 100; }
.filter-bar::-webkit-scrollbar { display: none; }
.tab-btn { background: none; border: none; border-bottom: 2px solid transparent; padding: 16px 20px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--text-soft); letter-spacing: 0.05em; cursor: pointer; white-space: nowrap; transition: all 0.2s; }
.tab-btn:hover { color: var(--text-deep); }
.tab-btn.active { color: var(--gold-dark); border-bottom-color: var(--gold); font-weight: 500; }

/* SECTIONS */
.sections-wrap { padding: 60px 5vw; display: flex; flex-direction: column; gap: 4px; background: var(--cream-mid); }
.price-section { background: var(--cream); padding: 44px 40px; }
.ps-header { display: flex; align-items: center; gap: 20px; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
.ps-icon { font-size: 28px; color: var(--gold); width: 52px; height: 52px; border: 1px solid var(--border-strong); display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: var(--parchment); }
.ps-title { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: var(--text-deep); line-height: 1.1; }

.price-list { display: flex; flex-direction: column; gap: 0; }
.price-row { display: flex; align-items: baseline; gap: 8px; padding: 14px 0; border-bottom: 1px solid rgba(201,169,110,0.1); }
.price-row:last-child { border-bottom: none; }
.pname { font-size: 14px; color: var(--text-mid); flex-shrink: 0; }
.pname small { font-size: 11px; color: var(--text-soft); }
.pdots { flex: 1; border-bottom: 1px dashed rgba(201,169,110,0.3); margin: 0 10px; margin-bottom: 4px; min-width: 20px; }
.pprice { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 400; color: var(--gold-dark); flex-shrink: 0; white-space: nowrap; }
.pprice em { font-style: normal; font-size: 14px; color: var(--gold); }

/* MANICURE PEDICURE */
.mp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.mp-head { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 300; color: var(--gold-dark); margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid var(--border); font-style: italic; }

/* WAXING TABLE */
.wax-table { width: 100%; }
.wax-head { display: grid; grid-template-columns: 1fr 120px 130px; gap: 16px; padding: 10px 0 14px; border-bottom: 2px solid var(--border-strong); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); }
.wax-row { display: grid; grid-template-columns: 1fr 120px 130px; gap: 16px; padding: 13px 0; border-bottom: 1px solid rgba(201,169,110,0.1); align-items: center; }
.wax-row:last-child { border-bottom: none; }
.wname { font-size: 14px; color: var(--text-mid); }
.wprice { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: var(--gold-dark); }
.wprice.lipo { color: var(--gold); }

/* PACKAGES */
.packages-section { background: var(--parchment); }
.packages-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.pkg-card { background: var(--cream); border: 1px solid var(--border-strong); padding: 36px 28px; display: flex; flex-direction: column; gap: 0; }
.pkg-name { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 300; color: var(--gold-dark); margin-bottom: 24px; font-style: italic; }
.pkg-pay, .pkg-get, .pkg-benefit, .pkg-validity { display: flex; flex-direction: column; gap: 3px; padding: 14px 0; border-bottom: 1px solid var(--border); }
.pkg-validity { border-bottom: none; margin-bottom: 20px; }
.pkl { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-soft); }
.pkv { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: var(--text-deep); }
.pkv.accent { color: var(--gold-dark); }
.pkv.save { color: #2d7a3a; }
.pkg-divider { height: 0; }
.validity-tag { display: inline-block; background: var(--gold-muted); border: 1px solid var(--border-strong); padding: 4px 14px; font-size: 13px; color: var(--gold-dark); margin-top: 3px; }
.pkg-btn { width: 100%; text-align: center; }

/* BOOK CTA */
.book-cta { background: var(--parchment); border-top: 1px solid var(--border); text-align: center; padding: 80px 5vw; }
.book-cta h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 4vw, 52px); font-weight: 300; color: var(--text-deep); margin-bottom: 12px; }
.book-cta h2 em { font-style: italic; color: var(--gold-dark); }
.book-cta p { font-size: 15px; color: var(--text-soft); margin-bottom: 32px; }

@media (max-width: 900px) {
  .price-section { padding: 32px 20px; }
  .packages-grid, .mp-grid { grid-template-columns: 1fr; }
  .wax-head, .wax-row { grid-template-columns: 1fr 90px 100px; gap: 8px; font-size: 13px; }
}
@media (max-width: 600px) {
  .sections-wrap { padding: 40px 0; gap: 2px; }
}
</style>
