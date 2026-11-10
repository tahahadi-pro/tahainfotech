import { useEffect } from 'react'
import { Button } from '../components/Button'
import { contactDetails, paypalCheckout } from '../data/content'

export function PaymentPage() {
  useEffect(() => {
    document.title = 'Payment | TahaInfoTech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="section payment" aria-labelledby="payment-title">
      <div className="container payment__container">
        <header className="section__header payment__header">
          <p className="section__eyebrow">Direct payment</p>
          <h1 id="payment-title" className="section__title">
            Pay TahaInfoTech
          </h1>
          <p className="section__lead">
            Pay with the QR code or continue on PayPal’s secure checkout. The amount settles into
            our PayPal account.
          </p>
        </header>

        <div className="payment__layout">
          <aside className="payment__panel payment__panel--pay" aria-label="Pay now">
            <div className="payment__brand-row">
              <span className="logo__mark" aria-hidden="true">
                T
              </span>
              <div>
                <p className="payment__merchant">TahaInfoTech</p>
                <p className="payment__merchant-sub">Verified PayPal merchant</p>
              </div>
            </div>

            <div className="payment__amount-box">
              <span>Invoice / service payment</span>
              <strong>Amount shown on PayPal</strong>
            </div>

            <div className="payment__qr">
              <p className="payment__qr-title">Scan to pay</p>
              <figure className="payment__qr-frame">
                <img
                  src={paypalCheckout.qrImage}
                  alt={`${paypalCheckout.qrLabel} PayPal payment QR code`}
                  width={280}
                  height={280}
                  loading="eager"
                  decoding="async"
                />
              </figure>
              <p className="payment__qr-caption">
                Open your phone camera or PayPal app and scan this QR code for {paypalCheckout.qrLabel}.
              </p>
            </div>

            <div className="payment__divider" role="separator">
              <span>or</span>
            </div>

            <Button
              href={paypalCheckout.url}
              className="checkout__paypal-btn"
              full
              ariaLabel="Pay securely with PayPal"
            >
              {paypalCheckout.label}
            </Button>

            <p className="payment__secure-line">
              <span className="payment__secure-dot" aria-hidden="true" />
              256-bit encrypted · PayPal Buyer Protection
            </p>
          </aside>

          <div className="payment__panel">
            <h2>How payment works</h2>
            <ol className="payment__steps">
              <li>
                <strong>Scan the QR code or click Pay with PayPal</strong>
                <span>Either opens PayPal’s secure payment flow.</span>
              </li>
              <li>
                <strong>Review the total</strong>
                <span>Confirm the amount and payment method on PayPal.</span>
              </li>
              <li>
                <strong>Complete payment</strong>
                <span>Funds settle directly to TahaInfoTech’s PayPal account.</span>
              </li>
            </ol>

            <ul className="checkout__points payment__trust">
              <li>Card details stay with PayPal — never stored on our site</li>
              <li>Pay with PayPal balance, bank, or card</li>
              <li>
                Questions? Email{' '}
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </li>
            </ul>

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
