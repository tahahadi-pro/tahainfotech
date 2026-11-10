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
      <div className="container payment__stage">
        <div className="payment__visual">
          <img
            src={paypalCheckout.heroImage}
            alt=""
            width={1600}
            height={1200}
            loading="eager"
            decoding="async"
          />
          <div className="payment__visual-overlay" aria-hidden="true" />
          <div className="payment__visual-copy">
            <p className="payment__visual-eyebrow">Secure client payment</p>
            <h1 id="payment-title">Pay for IT services with confidence.</h1>
            <p>
              Complete your invoice through our branded payment page. Scan the QR code or continue
              with PayPal — funds settle directly to TahaInfoTech.
            </p>
            <ul className="payment__visual-points">
              <li>Encrypted PayPal checkout</li>
              <li>No card data stored on our site</li>
              <li>Receipt emailed by PayPal</li>
            </ul>
          </div>
        </div>

        <aside className="payment__panel" aria-label="Payment details">
          <div className="payment__brand-row">
            <span className="logo__mark" aria-hidden="true">
              T
            </span>
            <div>
              <p className="payment__merchant">TahaInfoTech</p>
              <p className="payment__merchant-sub">Official payment portal</p>
            </div>
          </div>

          <div className="payment__details">
            <div>
              <span>Service</span>
              <strong>{paypalCheckout.qrLabel}</strong>
            </div>
            <div>
              <span>Merchant</span>
              <strong>TahaInfoTech</strong>
            </div>
            <div>
              <span>Amount</span>
              <strong>Confirmed on PayPal</strong>
            </div>
            <div>
              <span>Support</span>
              <strong>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </strong>
            </div>
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
              Use your phone camera or PayPal app to scan and pay for {paypalCheckout.qrLabel}.
            </p>
          </div>

          <div className="payment__divider" role="separator">
            <span>or pay online</span>
          </div>

          <Button
            href={paypalCheckout.url}
            className="checkout__paypal-btn"
            full
            ariaLabel="Continue to PayPal secure checkout"
          >
            {paypalCheckout.label}
          </Button>

          <p className="payment__secure-line">
            <span className="payment__secure-dot" aria-hidden="true" />
            You’ll finish on PayPal’s encrypted page
          </p>

          <p className="checkout__policies">
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="/terms-and-conditions">Terms</a>
            <span aria-hidden="true">·</span>
            <a href="/return-policy">Return Policy</a>
          </p>
        </aside>
      </div>
    </section>
  )
}
