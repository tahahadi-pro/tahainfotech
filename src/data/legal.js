import { contactDetails } from './content'

export const legalPages = {
  '/privacy-policy': {
    title: 'Privacy Policy',
    lead: 'How TahaInfoTech collects, uses, and protects information shared through tahainfotech.com.',
    updated: 'September 29, 2026',
    sections: [
      {
        heading: 'Overview',
        body: [
          'TahaInfoTech ("we", "us", or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit tahainfotech.com or contact us, how we use it, and the choices you have.',
        ],
      },
      {
        heading: 'Information we collect',
        body: [
          'When you submit our Contact Us form, we collect the details you provide: your full name, work email, company name, service interest, and project details.',
          'Like most websites, our hosting provider may automatically record basic technical data such as IP address, browser type, device information, and pages visited, for security and performance purposes.',
        ],
      },
      {
        heading: 'How we use your information',
        list: [
          'To respond to your inquiry and discuss your project.',
          'To prepare proposals, estimates, and follow-up communication you request.',
          'To operate, secure, and improve our website.',
          'To comply with legal obligations.',
        ],
        body: ['We do not sell, rent, or trade your personal information.'],
      },
      {
        heading: 'Service providers',
        body: [
          'We use trusted third-party providers to run this website and deliver your messages, including Vercel (website hosting) and Resend (email delivery for contact form submissions). These providers process data only as needed to provide their services to us.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'This website does not use advertising or tracking cookies. Our hosting provider may use strictly necessary technical mechanisms to deliver the site securely.',
        ],
      },
      {
        heading: 'Data retention',
        body: [
          'We keep inquiry information only as long as needed to respond to you, manage an ongoing business relationship, or meet legal and accounting requirements. You may ask us to delete your information at any time.',
        ],
      },
      {
        heading: 'Data security',
        body: [
          'We use reasonable technical and organizational measures to protect your information, including encrypted (HTTPS) connections. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Depending on where you live, you may have the right to access, correct, delete, or restrict the use of your personal information. To make a request, email us using the contact details below and we will respond within a reasonable time.',
        ],
      },
      {
        heading: 'Children’s privacy',
        body: [
          'Our website and services are intended for businesses and are not directed to children under 16. We do not knowingly collect personal information from children.',
        ],
      },
      {
        heading: 'Changes to this policy',
        body: [
          'We may update this Privacy Policy from time to time. The latest version will always be posted on this page with its effective date.',
        ],
      },
      {
        heading: 'Contact us',
        body: [
          `If you have questions about this Privacy Policy, contact us at ${contactDetails.email} or write to TahaInfoTech, ${contactDetails.location}.`,
        ],
      },
    ],
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions',
    lead: 'The terms that apply when you use tahainfotech.com and engage with TahaInfoTech.',
    updated: 'September 29, 2026',
    sections: [
      {
        heading: 'Acceptance of terms',
        body: [
          'By accessing or using tahainfotech.com (the "Website"), you agree to these Terms & Conditions. If you do not agree, please do not use the Website.',
        ],
      },
      {
        heading: 'Use of the website',
        body: ['You agree to use the Website only for lawful purposes. You must not:'],
        list: [
          'Attempt to gain unauthorized access to the Website or its systems.',
          'Submit false, misleading, or spam content through our forms.',
          'Interfere with the Website’s security, performance, or availability.',
          'Copy or reuse Website content for commercial purposes without our written permission.',
        ],
      },
      {
        heading: 'Services and proposals',
        body: [
          'Information on this Website describes our services in general terms and does not constitute a binding offer. Any project work is governed by a separate written proposal, statement of work, or agreement signed by both parties, which takes precedence over these Terms.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'All content on this Website, including text, graphics, logos, and design, is owned by or licensed to TahaInfoTech and is protected by applicable intellectual property laws. Client names and testimonials remain the property of their respective owners.',
        ],
      },
      {
        heading: 'Inquiries and communication',
        body: [
          'Submitting the Contact Us form does not create a client relationship or obligate either party. Information you share is handled in line with our Privacy Policy.',
        ],
      },
      {
        heading: 'Third-party links',
        body: [
          'The Website may link to third-party websites. We are not responsible for the content, policies, or practices of those websites.',
        ],
      },
      {
        heading: 'Disclaimer',
        body: [
          'The Website is provided on an "as is" and "as available" basis. We make reasonable efforts to keep information accurate and current, but we do not warrant that the Website will be error-free, uninterrupted, or free of harmful components.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'To the fullest extent permitted by law, TahaInfoTech will not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the Website.',
        ],
      },
      {
        heading: 'Governing law',
        body: [
          'These Terms are governed by the laws of the State of Wyoming, United States, without regard to its conflict-of-law rules.',
        ],
      },
      {
        heading: 'Changes to these terms',
        body: [
          'We may update these Terms & Conditions from time to time. Continued use of the Website after changes are posted means you accept the updated terms.',
        ],
      },
      {
        heading: 'Contact us',
        body: [
          `Questions about these Terms? Contact us at ${contactDetails.email} or write to TahaInfoTech, ${contactDetails.location}.`,
        ],
      },
    ],
  },
}
