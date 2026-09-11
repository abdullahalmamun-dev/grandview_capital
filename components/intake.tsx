'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { NativeSelect } from '@/components/ui/native-select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { programs } from '@/lib/programs';

function getUUID(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function Intake() {
  const [step, setStep] = useState(1);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const requestId = useRef('');

  const [values, setValues] = useState({
    company: '',
    goals: '',
    program: 'Not sure yet',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    smsConsent: false,
  });

  const update = (key: string, value: string | boolean) =>
    setValues((v) => ({ ...v, [key]: value }));

  useEffect(() => {
    requestId.current = getUUID();
    const program = new URLSearchParams(window.location.search).get('program');
    if (programs.some((p) => p[0] === program)) {
      setValues((v) => ({ ...v, program: program! }));
    }
  }, []);

  function changeStep(next: number) {
    setStep(next);
    setError('');
    setTimeout(() => heading.current?.focus(), 0);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) {
      changeStep(2);
      return;
    }
    if (pending) return;

    setPending(true);
    setError('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, requestId: requestId.current }),
      });
      const result = (await response.json()) as {
        error?: string;
        reference: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error || 'We couldn’t save your request. Please try again.'
        );
      }

      setReference(result.reference);
      setTimeout(() => heading.current?.focus(), 0);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'We couldn’t save your request. Please try again.'
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <aside className="intake" id="intake">
      <div className="intake-top">
        <span>YOUR NEXT CHAPTER STARTS HERE</span>
        <span className="chapter-badge">
          {reference ? 'COMPLETE' : `CHAPTER 0${step} OF 02`}
        </span>
      </div>

      {!reference && (
        <div className="chapter-steps-bar" aria-label="Form chapters">
          <div className={`chapter-step-pill ${step === 1 ? 'active' : 'completed'}`}>
            <span className="step-num">01</span>
            <div className="step-text">
              <span className="step-title">Business Profile</span>
              <span className="step-sub">Pathway &amp; Goals</span>
            </div>
          </div>
          <div className={`chapter-step-pill ${step === 2 ? 'active' : 'inactive'}`}>
            <span className="step-num">02</span>
            <div className="step-text">
              <span className="step-title">Contact Details</span>
              <span className="step-sub">Direct Information</span>
            </div>
          </div>
        </div>
      )}

      <div className={`step-line ${step === 2 ? 'step-two' : ''}`}>
        <i />
        <i />
      </div>

      {reference ? (
        <div className="success">
          <CheckCircle2 size={36} />
          <h2 ref={heading} tabIndex={-1}>
            A good first step.
          </h2>
          <p>
            Your consultation request has been saved for Grandview Capital to
            review.
          </p>
          <p className="reference">REFERENCE · {reference}</p>
          <p>
            Keep this reference for your records. Submitting an inquiry is not a
            funding application or an approval.
          </p>
          <a href="#programs" className="hero-link">
            Explore capital programs <ArrowRight size={18} />
          </a>
        </div>
      ) : (
        <>
          <p className="eyebrow">
            {step === 1 ? 'CHAPTER 1 · LET’S GET ACQUAINTED' : 'CHAPTER 2 · LET’S STAY IN TOUCH'}
          </p>
          <h2 ref={heading} tabIndex={-1}>
            {step === 1 ? (
              <>
                What’s your
                <br />
                next move?
              </>
            ) : (
              <>
                Put a name
                <br />
                to your ambition.
              </>
            )}
          </h2>
          <p>
            {step === 1
              ? 'Start with your business. We’ll help bring the capital options into focus.'
              : 'Tell us how to reach you about your business goals.'}
          </p>


          <form onSubmit={submit}>
            <div className="fields">
              {step === 1 ? (
                <>
                  <label htmlFor="company">
                    Company name
                    <Input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      required
                      maxLength={160}
                      value={values.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Your business name"
                    />
                  </label>

                  <label htmlFor="program">
                    Capital pathway
                    <NativeSelect
                      id="program"
                      name="program"
                      className="program-select"
                      value={values.program}
                      onChange={(e) => update('program', e.target.value)}
                    >
                      <option>Not sure yet</option>
                      {programs.map(([name]) => (
                        <option key={name}>{name}</option>
                      ))}
                    </NativeSelect>
                  </label>

                  <label htmlFor="goals">
                    What are you looking to accomplish?{' '}
                    <span className="optional">Optional</span>
                    <Textarea
                      id="goals"
                      name="goals"
                      rows={2}
                      maxLength={3000}
                      value={values.goals}
                      onChange={(e) => update('goals', e.target.value)}
                      placeholder="A new opportunity, equipment, room to grow…"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="field-pair">
                    <label htmlFor="firstName">
                      First name
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        maxLength={80}
                        autoComplete="given-name"
                        value={values.firstName}
                        onChange={(e) => update('firstName', e.target.value)}
                        placeholder="First name"
                      />
                    </label>
                    <label htmlFor="lastName">
                      Last name
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        maxLength={80}
                        autoComplete="family-name"
                        value={values.lastName}
                        onChange={(e) => update('lastName', e.target.value)}
                        placeholder="Last name"
                      />
                    </label>
                  </div>

                  <label htmlFor="email">
                    Business email
                    <Input
                      id="email"
                      name="email"
                      required
                      type="email"
                      maxLength={254}
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@company.com"
                    />
                  </label>

                  <label htmlFor="phone">
                    Mobile phone
                    <Input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      maxLength={30}
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="Include your country code"
                    />
                  </label>

                  <div className="consent">
                    <Checkbox
                      id="smsConsent"
                      name="smsConsent"
                      checked={values.smsConsent}
                      onCheckedChange={(checked) =>
                        update('smsConsent', Boolean(checked))
                      }
                    />
                    <label htmlFor="smsConsent">
                      By checking this box, I agree to receive recurring marketing,
                      promotional, and informational text messages from{' '}
                      <strong>Grandview Capital</strong> at the mobile number
                      provided above. Consent is optional. Message frequency varies
                      (typically 2–4 msgs/month). <strong>Message and data rates may apply.</strong>{' '}
                      Reply <strong>STOP</strong> to cancel, Reply{' '}
                      <strong>HELP</strong> for help. View{' '}
                      <a href="/terms#sms" target="_blank" rel="noreferrer">
                        Terms &amp; Conditions
                      </a>{' '}
                      and{' '}
                      <a href="/privacy" target="_blank" rel="noreferrer">
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>

                </>
              )}
            </div>

            <div className="honeypot" aria-hidden="true">
              <label>
                Leave this field empty
                <Input
                  tabIndex={-1}
                  autoComplete="off"
                  name="website"
                  value={values.website}
                  onChange={(e) => update('website', e.target.value)}
                />
              </label>
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="primary-button"
              disabled={pending}
            >
              {pending
                ? 'Saving your request…'
                : step === 1
                ? 'Continue to Chapter 2: Contact Details'
                : 'Request a consultation'}
              <ArrowRight />

            </Button>

            {step === 2 && (
              <Button
                className="back-button"
                variant="ghost"
                type="button"
                onClick={() => changeStep(1)}
                disabled={pending}
              >
                <ArrowLeft /> Back to your business
              </Button>
            )}

            <p className="form-note">
              {step === 1 ? (
                'A conversation, not a commitment.'
              ) : (
                <>
                  We use your details to respond to this inquiry.{' '}
                  <a href="/privacy" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                </>
              )}
            </p>
          </form>
        </>
      )}
    </aside>
  );
}

