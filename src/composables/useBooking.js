import { ref, provide, inject } from 'vue'

const BOOKING_KEY = Symbol('booking')

// Called once in App.vue to create + provide state
export function createBooking() {
  const bookingOpen = ref(false)

  const openBooking = () => {
    bookingOpen.value = true
    document.body.style.overflow = 'hidden'
  }

  const closeBooking = () => {
    bookingOpen.value = false
    document.body.style.overflow = ''
  }

  provide(BOOKING_KEY, { bookingOpen, openBooking, closeBooking })

  return { bookingOpen, openBooking, closeBooking }
}

// Called in any child component (Home, Pricing, Academy) to consume
export function useBooking() {
  return inject(BOOKING_KEY)
}
