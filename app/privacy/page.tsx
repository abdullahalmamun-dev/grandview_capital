import { Header, Footer } from '@/components/site-chrome';

export const metadata = {
  title: 'Privacy Policy | Grandview Capital',
  description: 'How Grandview Capital handles inquiry information and mobile SMS opt-in consent.',
};

const content = `
<p class="eyebrow">LEGAL</p>
<h1>Privacy Policy</h1>
<p class="updated">Effective date: September 11, 2026</p>

<p>Grandview Capital, operated by Lead Service Group LLC (“Lead Service Group,” “Grandview,” “we,” “our,” or “us”), respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, request a consultation, or communicate with us, including through our mobile text messaging program (Grandview Capital Updates).</p>


<h2>Information We Collect</h2>
<p>We may collect information you provide directly to us, including your name, company name, business email address, mobile telephone number, financing goals, business profile details, and the content of your communications with us. We may also collect device, browser, IP address, referral, and website usage information through essential cookies and security log data.</p>

<h2>How We Use Information</h2>
<p>We use your information to respond to consultation requests; provide independent capital consulting services; evaluate suitable financing pathways; communicate with you regarding your inquiries; operate, maintain, and secure our website; comply with legal obligations; and send recurring marketing, promotional, and transactional text messages when you have expressly opted in.</p>

<h2>Mobile Opt-In & Text Messaging Data Non-Sharing Policy</h2>
<p>Grandview Capital is committed to protecting your mobile privacy. If you opt in to receive text messages from Grandview Capital, we handle your mobile information under strict 10DLC and CTIA regulatory guidelines:</p>

<blockquote style="border-left:4px solid #c9ad75;background:rgba(201, 173, 117, 0.12);padding:22px 28px;margin:24px 0;border-radius:2px;color:#142735">
  <strong style="display:block;margin-bottom:10px;color:#907440;font-size:15px">10DLC &amp; CTIA Non-Sharing Disclosure:</strong>
  <span style="line-height:1.75;font-size:14px;display:block">
    No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
  </span>
</blockquote>

<p>Mobile opt-in data, phone numbers, and SMS consent records will not be sold, rented, leased, traded, or shared with third parties, affiliates, or lead generators for marketing or promotional purposes. Information sharing to subcontractors in support services (such as SMS gateway providers) is strictly limited to facilitating message delivery on our behalf.</p>

<h2>How We Disclose General Information</h2>
<p>We may disclose non-mobile business information to trusted service providers performing technical services on our behalf, professional advisers, or regulatory bodies when required by law. With your explicit direction and authorization, we may introduce your financing request to prospective independent capital providers. We do not sell any personal or business data.</p>

<h2>Cookies and Tracking</h2>
<p>This website uses essential session tokens for navigation and security. We do not utilize third-party advertising cookies or cross-site tracking scripts.</p>

<h2>Data Retention and Security</h2>
<p>We retain your information for as long as necessary to fulfill the consultation request, maintain legitimate business records, and comply with regulatory requirements. We maintain administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, or misuse.</p>

<h2>Your Choices &amp; Opt-Out Instructions</h2>
<p>You have the right to request access to, correction of, or deletion of your personal data by contacting us. For mobile text messages:</p>
<ul>
  <li><strong>To Stop Messages:</strong> Reply <strong>STOP</strong> to any text message to cancel your enrollment immediately.</li>
  <li><strong>For Help:</strong> Reply <strong>HELP</strong> to any text message or contact us directly.</li>
</ul>

<h2>Children’s Privacy</h2>
<p>Our website and consulting services are intended strictly for adult business owners and commercial enterprises. We do not knowingly collect personal data from individuals under 18 years of age.</p>

<h2>Changes to This Policy</h2>
<p>We may update this Privacy Policy periodically. The effective date at the top of this document indicates when changes were last implemented. Continued use of our site following an update constitutes acceptance of the revised terms.</p>

<h2>Contact Us</h2>
<p>If you have questions regarding this Privacy Policy, our mobile data protection practices, or wish to exercise your privacy rights, please contact us at:</p>
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
