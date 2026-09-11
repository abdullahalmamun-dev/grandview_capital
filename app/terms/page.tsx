import { Header, Footer } from '@/components/site-chrome';

export const metadata = {
  title: 'Terms & Conditions | Grandview Capital',
  description: 'Website, consulting, and SMS messaging program terms for Grandview Capital.',
};

const content = `
<p class="eyebrow">LEGAL</p>
<h1>Terms &amp; Conditions</h1>
<p class="updated">Effective date: September 11, 2026</p>

<p>These Terms &amp; Conditions govern your use of the Grandview Capital website and financial consulting services operated by Lead Service Group LLC (“Lead Service Group,” “Grandview Capital,” “we,” “our,” or “us”). By accessing our site or submitting an inquiry, you agree to comply with these terms and our Privacy Policy.</p>


<h2>Our Role &amp; Independent Advisory Scope</h2>
<p>Grandview Capital provides independent financial consulting services to assist business owners in evaluating suitable capital pathways. Grandview Capital is a financial consultant, not a lender. We do not make credit decisions, issue loans, or guarantee funding approvals, interest rates, or specific terms. All financing programs are provided by independent third parties subject to separate agreements and credit evaluation.</p>

<h2>Website Usage</h2>
<p>You must be at least 18 years old and authorized to act on behalf of a commercial enterprise to use this site. Content provided on this website is for informational purposes only and does not constitute formal legal, accounting, tax, or investment advice.</p>

<h2 id="sms">Grandview Capital Updates SMS Messaging Program</h2>
<p>Program Name: <strong>Grandview Capital Updates</strong></p>

<h3>Mobile Opt-In &amp; Call to Action (CTA) Details</h3>
<p>Customers opt in to receive text messages from Grandview Capital by taking the following specific action on our website:</p>
<ol>
  <li>Navigate to the online consultation inquiry form located at <a href="/#intake"><u>/#intake</u></a>.</li>
  <li>Enter their business information, mobile phone number, and details.</li>
  <li>Check the explicit SMS opt-in checkbox stating consent to receive text messages.</li>
  <li>Click the <strong>“Request a consultation”</strong> button to submit the form.</li>
</ol>
<p>By checking the opt-in checkbox and submitting your mobile number, you expressly agree to receive recurring marketing, promotional, and informational text messages from <strong>Grandview Capital</strong> (including consultation scheduling, inquiry updates, and capital pathway information) sent via automated dialing technology.</p>

<blockquote style="border-left:4px solid #c9ad75;background:rgba(201, 173, 117, 0.12);padding:22px 28px;margin:24px 0;border-radius:2px;color:#142735">
  <strong style="display:block;margin-bottom:10px;color:#907440;font-size:15px">SMS Program Disclosure &amp; Key Terms:</strong>
  <ul style="margin:0;padding-left:18px;line-height:1.75;font-size:13.5px">
    <li><strong>Program Name:</strong> Grandview Capital Updates</li>
    <li><strong>Message Frequency:</strong> Message frequency varies (typically 2–4 messages per month).</li>
    <li><strong>Message &amp; Data Rates:</strong> <strong>Message and data rates may apply.</strong></li>
    <li><strong>Opt-Out Instructions:</strong> Reply <strong>STOP</strong> to cancel or opt out.</li>
    <li><strong>Customer Support:</strong> Reply <strong>HELP</strong> for help, call <a href="tel:+17147479562">+1 (714) 747-9562</a>, or contact customer support online.</li>
    <li><strong>Privacy Policy Link:</strong> View our <a href="/privacy"><u>Privacy Policy</u></a> for full data protection details.</li>
    <li><strong>Consent Non-Condition:</strong> Consent is not a condition of purchase or receiving services.</li>
  </ul>
</blockquote>

<h3>Sample Message Formats</h3>
<p>Messages received from our program may include:</p>
<ul>
  <li><em>Opt-In Confirmation:</em> "Grandview Capital: Thank you for subscribing to Grandview Capital Updates regarding your consultation. Msg frequency varies. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help."</li>
  <li><em>Consultation Update:</em> "Grandview Capital: Your consultation inquiry ref #GV-10293 has been received. A consultant will review your business profile shortly. Reply STOP to cancel, HELP for help."</li>
</ul>

<h3>How to Opt Out (STOP Instructions)</h3>
<p>You can cancel the SMS service at any time by texting <strong>STOP</strong> to any message received. Upon sending <strong>STOP</strong>, we will send one final SMS message confirming that you have been unsubscribed. After this, you will no longer receive text messages from us. If you wish to join again, simply complete the inquiry form and check the opt-in box as you did initially.</p>

<h3>Customer Care &amp; Support (HELP Instructions)</h3>
<p>If you experience issues with the messaging program or need assistance, reply <strong>HELP</strong> to any text message, call us directly at <a href="tel:+17147479562">+1 (714) 747-9562</a>, or reach out through <a href="/#intake">our online inquiry form</a>. Wireless carriers are not liable for delayed or undelivered messages.</p>

<h3>Mobile Privacy Protection</h3>
<p>We respect your mobile privacy. Mobile phone numbers, opt-in records, and SMS consent data will not be sold, rented, leased, or shared with third parties or affiliates for marketing or promotional purposes. Review our full <a href="/privacy"><u>Privacy Policy</u></a> for detailed safeguards.</p>

<h2>Intellectual Property</h2>
<p>All website design, text, graphics, trademarks, and code are the property of Lead Service Group LLC / Grandview Capital and protected by applicable copyright and trademark laws.</p>

<h2>Limitation of Liability</h2>
<p>The website and materials are provided on an "as is" and "as available" basis. Grandview Capital disclaims all warranties and shall not be liable for any indirect, incidental, or consequential damages arising from the use of our site or services.</p>

<h2>Changes to Terms</h2>
<p>We reserve the right to modify these terms at any time. Updated versions will be posted on this page with an updated effective date.</p>

<h2>Contact Us</h2>
<p>If you have questions regarding these Terms &amp; Conditions or our SMS messaging program, please contact us at:</p>
<address style="font-style:normal;line-height:1.85;margin:16px 0 20px;color:#546770">
  <strong style="color:#142735">Lead Service Group LLC</strong> (d/b/a Grandview Capital)<br />
  690 S Highway 89, Suite 200. Box 9149<br />
  Jackson, WY 83002, US<br />
  Phone: <a href="tel:+17147479562">+1 (714) 747-9562</a>
</address>
<p>You may also submit inquiries online through <a href="/#intake">our consultation inquiry form</a>.</p>
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
