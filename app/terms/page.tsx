import { Header, Footer } from '@/components/site-chrome';

export const metadata = {
  title: 'Terms & Conditions | Grandview Capital Lending Inc',
  description: 'Website, consulting, and SMS messaging program terms for Grandview Capital Lending Inc.',
};

const content = `
<p class="eyebrow">LEGAL</p>
<h1>Terms &amp; Conditions</h1>
<p class="updated">Effective date: September 11, 2026</p>

<p>These Terms &amp; Conditions govern your use of the Grandview Capital Lending Inc website and financial consulting services operated by Grandview Capital Lending Inc (“Grandview Capital,” “we,” “our,” or “us”). By accessing our website or submitting an inquiry, you agree to comply with these terms and our <a href="/privacy">Privacy Policy</a>.</p>

<h2>1. Advisory Scope &amp; Role</h2>
<p>Grandview Capital Lending Inc provides direct commercial business consulting and strategic advisory services. We assist business owners and executives in analyzing, structuring, and preparing their business profiles for capital readiness. Grandview Capital Lending Inc provides direct 1:1 advisory services and is not a lead generator, loan broker, or affiliate marketer.</p>

<h2>2. Eligibility &amp; Website Usage</h2>
<p>You must be at least 18 years old and authorized to act on behalf of a commercial business to use this website. Materials on this site are for informational purposes only and do not constitute formal accounting, legal, or investment advice.</p>

<h2 id="sms">3. Mobile Messaging Program (Grandview Capital Updates)</h2>
<p>Grandview Capital Lending Inc offers a mobile text messaging service under the program name <strong>Grandview Capital Updates</strong>. We use SMS messaging to communicate regarding your consultation requests, appointment scheduling, inquiry status, and capital pathway updates.</p>

<h3>Program Enrollment &amp; Mobile Opt-In</h3>
<p>You may enroll in the mobile messaging program by completing the consultation inquiry form on our website at <a href="/#intake">/#intake</a>, providing your mobile telephone number, checking the explicit SMS consent box, and submitting your request. By completing these steps, you provide express written consent to receive automated marketing, promotional, and transactional text messages from Grandview Capital Lending Inc at the number provided.</p>

<blockquote style="border-left:4px solid #c9ad75;background:rgba(201, 173, 117, 0.1);padding:22px 28px;margin:24px 0;border-radius:2px;color:#142735">
  <strong style="display:block;margin-bottom:12px;color:#907440;font-size:15px">SMS Program Summary &amp; Disclosures:</strong>
  <ul style="margin:0;padding-left:18px;line-height:1.8;font-size:13.5px">
    <li><strong>Program Name:</strong> Grandview Capital Updates</li>
    <li><strong>Message Frequency:</strong> Message frequency varies according to your consultation activity (typically 2–4 messages per month).</li>
    <li><strong>Message &amp; Data Rates:</strong> <strong>Message and data rates may apply.</strong></li>
    <li><strong>Opt-Out Instructions:</strong> Text <strong>STOP</strong> at any time to cancel your enrollment.</li>
    <li><strong>Customer Support:</strong> Text <strong>HELP</strong> for assistance, call us at <a href="tel:+13072070000">(307) 207-0000</a>, or email <a href="mailto:Info@grandviewcapital.com">Info@grandviewcapital.com</a>.</li>
    <li><strong>Privacy Safeguards:</strong> Mobile opt-in data and consent records are not shared with third parties or affiliates for marketing purposes. View our <a href="/privacy">Privacy Policy</a>.</li>
    <li><strong>Consent Voluntary:</strong> Opt-in consent is voluntary and not required as a condition of purchasing any service.</li>
  </ul>
</blockquote>

<h3>Cancellation &amp; Opt-Out (STOP)</h3>
<p>You can unsubscribe from text messages at any time by replying <strong>STOP</strong> to any message received from Grandview Capital Lending Inc. You will receive a single confirmation text confirming that you have been unsubscribed, after which no further text messages will be sent unless you re-enroll.</p>

<h3>Customer Support (HELP)</h3>
<p>If you experience issues or need assistance with text notifications, reply <strong>HELP</strong> to any text message, call our customer support line at <a href="tel:+13072070000">(307) 207-0000</a>, email <a href="mailto:Info@grandviewcapital.com">Info@grandviewcapital.com</a>, or submit an inquiry through <a href="/#intake">our online consultation form</a>. Wireless carriers are not liable for delayed or undelivered messages.</p>

<h2>4. Intellectual Property</h2>
<p>All website content, design, trademarks, graphics, and code are the exclusive property of Grandview Capital Lending Inc and protected under applicable copyright and trademark laws.</p>

<h2>5. Limitation of Liability</h2>
<p>This website and its services are provided on an "as is" and "as available" basis. Grandview Capital Lending Inc disclaims all warranties to the extent permitted by law and shall not be liable for indirect, incidental, or consequential damages arising from site usage.</p>

<h2>6. Contact Information</h2>
<p>If you have questions regarding these Terms &amp; Conditions or our SMS messaging program, please contact us at:</p>
<address style="font-style:normal;line-height:1.85;margin:16px 0 20px;color:#546770">
  <strong style="color:#142735">Grandview Capital Lending Inc</strong><br />
  EIN: 42-2403145<br />
  Contact: Enrique Romero<br />
  30 N Gould St, Suite 64218<br />
  Sheridan, WY 82801, United States<br />
  Phone: <a href="tel:+13072070000">(307) 207-0000</a><br />
  Email: <a href="mailto:Info@grandviewcapital.com">Info@grandviewcapital.com</a>
</address>
<p>You may also submit inquiries through <a href="/#intake">our online consultation form</a>.</p>
`;


export default function LegalPage() {
  return (
    <div id="top">
      <Header />
      <main className="legal" dangerouslySetInnerHTML={{ __html: content }} />
      <Footer />
    </div>
  );
}
