import { useEffect } from 'react'
import { Button } from '../components/Button'
import { contactDetails, paypalCheckout } from '../data/content'

const orderItems = [
  {
    name: 'Professional services payment',
    detail: 'Software, cloud, security, or consultancy engagement as agreed',
  },
]

export function CheckoutPage() {
  useEffect(() => {
    document.title = 'Checkout | TahaInfoTech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="section checkout" aria-labelledby="checkout-title">
      <div className="container checkout__shell">
        <header className="section__header checkout__header">
          <p className="section__eyebrow">Secure checkout</p>
          <h1 id="checkout-title" className="section__title">
            Review &amp; pay
          </h1>
          <p className="section__lead">
            Confirm your payment details below, then continue to PayPal to complete the transaction
            securely.
          </p>

          <ol className="checkout__progress" aria-label="Checkout steps">
            <li className="is-active">
              <span>1</span> Review
            </li>
            <li>
              <span>2</span> Pay on PayPal
            </li>
            <li>
              <span>3</span> Confirmation
            </li>
          </ol>
        </header>

        <div className="checkout__grid">
          <div className="checkout__main">
            <article className="checkout__card">
              <h2>Order summary</h2>
              <ul className="checkout__items">
                {orderItems.map((item) => (
                  <li key={item.name}>
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.detail}</p>
                    </div>
                    <span className="checkout__item-meta">Via PayPal</span>
                  </li>
                ))}
              </ul>

              <div className="checkout__totals">
                <div>
                  <span>Subtotal</span>
                  <span>Shown on PayPal</span>
                </div>
                <div>
                  <span>Processing</span>
                  <span>Handled by PayPal</span>
                </div>
                <div className="checkout__totals-due">
                  <span>Amount due</span>
                  <strong>Confirmed on PayPal</strong>
                </div>
              </div>
            </article>

            <article className="checkout__card">
              <h2>What you get</h2>
              <ul className="checkout__points">
                <li>Secure payment through PayPal’s encrypted checkout</li>
                <li>Funds settle directly to TahaInfoTech’s PayPal account</li>
                <li>Email receipt from PayPal after successful payment</li>
                <li>Support from our team if you need invoice help</li>
              </ul>
            </article>

            <article className="checkout__card checkout__card--soft">
              <h2>Need help before paying?</h2>
              <p className="checkout__note">
                Contact us at{' '}
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> or call{' '}
                <a href={`tel:${contactDetails.phone.replace(/[^\d+]/g, '')}`}>
                  {contactDetails.phone}
                </a>
                . For refunds and cancellations, see our{' '}
                <a href="/return-policy">Return Policy</a>.
              </p>
            </article>
          </div>

          <aside className="checkout__aside" aria-label="Payment">
            <div className="checkout__paybox">
              <p className="checkout__paybox-label">Pay to</p>
              <p className="checkout__merchant">TahaInfoTech</p>
              <p className="checkout__merchant-meta">{contactDetails.location}</p>

              <div className="checkout__paybox-total">
                <span>Total</span>
                <strong>Open PayPal to view</strong>
              </div>

              <Button
                href={paypalCheckout.url}
                className="checkout__paypal-btn"
                full
                ariaLabel="Continue to PayPal checkout"
              >
                Continue to PayPal
              </Button>

              <p className="payment__secure-line">
                <span className="payment__secure-dot" aria-hidden="true" />
                You’ll finish on PayPal’s secure page
              </p>

              <p className="checkout__note">
                Want the shortest path? Use our{' '}
                <a href="/payment">Payment page</a> to pay in one click.
              </p>

              <p className="checkout__policies">
                <a href="/privacy-policy">Privacy</a>
                <span aria-hidden="true">·</span>
                <a href="/terms-and-conditions">Terms</a>
                <span aria-hidden="true">·</span>
                <a href="/return-policy">Returns</a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
