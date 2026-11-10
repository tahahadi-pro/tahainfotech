import { useEffect } from 'react'
import { Button } from '../components/Button'
import { contactDetails, paypalCheckout } from '../data/content'

export function CheckoutPage() {
  useEffect(() => {
    document.title = 'Checkout | TahaInfoTech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="section checkout" aria-labelledby="checkout-title">
      <div className="container checkout__container">
        <header className="section__header">
          <p className="section__eyebrow">Secure payment</p>
          <h1 id="checkout-title" className="section__title">
            Checkout
          </h1>
          <p className="section__lead">
            Complete your payment securely through PayPal. The amount will settle directly into the
            TahaInfoTech PayPal account.
          </p>
        </header>

        <div className="checkout__card">
          <div className="checkout__summary">
            <h2>Payment summary</h2>
            <p>
              You will be redirected to PayPal’s secure checkout to review the total and complete
              payment with your PayPal balance, linked bank, or card.
            </p>

            <ul className="checkout__points">
              <li>Encrypted PayPal checkout</li>
              <li>No card details are stored on tahainfotech.com</li>
              <li>Payment settles to our verified PayPal account</li>
            </ul>
          </div>

          <div className="checkout__action">
            <p className="checkout__merchant">Pay to: TahaInfoTech</p>
            <Button
              href={paypalCheckout.url}
              className="checkout__paypal-btn"
              full
              ariaLabel="Pay with PayPal"
            >
              {paypalCheckout.label}
            </Button>
            <p className="checkout__note">
              After clicking, PayPal will open so you can confirm and pay. Need help? Email{' '}
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>.
            </p>
            <p className="checkout__policies">
              <a href="/privacy-policy">Privacy Policy</a>
              <span aria-hidden="true">·</span>
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>
              <span aria-hidden="true">·</span>
              <a href="/return-policy">Return Policy</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
