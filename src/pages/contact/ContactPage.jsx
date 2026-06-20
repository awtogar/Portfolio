import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RiArrowRightUpLine, RiAttachment2, RiCheckLine, RiArrowDownSLine } from '@remixicon/react';
import { useCursorInteraction } from '@/cursor';
import { BaseSection, TextReveal, CreativeButton } from '@/components';

const isAvailable = true;

const reasonOptions = [
  { id: 'fulltime', label: 'I want to hire you (full-time)' },
  { id: 'freelance', label: 'I have a freelance project' },
  { id: 'collab', label: 'I want to collaborate' },
  { id: 'connect', label: 'I just want to connect' },
  { id: 'other', label: 'Something else' },
];

const expectSteps = [
  { number: '01', title: 'You send the form', description: 'I read every message personally. No auto-replies, no templates.' },
  { number: '02', title: 'I get back to you', description: 'Within 1–2 business days — usually faster. I’ll confirm receipt and follow up with any questions.' },
  { number: '03', title: 'We find a time to talk', description: 'A short conversation to see if there’s a fit. No commitment required on either side.' },
];

const faqItems = [
  {
    q: 'Are you looking for full-time work?',
    a: 'Yes — actively. I’m open to roles in design, frontend development, product, or any combination. Industry doesn’t matter as much as the work itself and the team around it.',
  },
  { q: 'Are you open to remote work?', a: 'Yes. Jakarta-based but comfortable working async across time zones. I’ve been doing it since 2022.' },
  { q: 'Do you work with international teams?', a: 'Yes. Most of my freelance clients were outside Indonesia. Communication and async work are things I’ve done from the start.' },
  {
    q: 'What kinds of projects are you interested in?',
    a: 'Anything at the intersection of design and code. Branding, interfaces, frontend systems, motion — or any scope that combines them.',
  },
  { q: 'Can you do just design, or just development?', a: 'Yes to both. I’m flexible on scope depending on what you actually need.' },
  { q: 'I’m a recruiter — can I reach out?', a: 'Please do. The form works, or find me on LinkedIn. I respond to both.' },
];

const ReasonRow = ({ label, index, active, onClick }) => {
  const { targetRef } = useCursorInteraction({ content: 'check', size: 'small', fill: 'primary', magnetic: false });

  return (
    <button
      ref={targetRef}
      type="button"
      onClick={onClick}
      className="group flex items-center justify-between w-full py-s300 not-last:border-b border-neutral-200 hover:border-primary/50 transition-colors duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-s300">
        <span className="font-mono text-base-xs text-primary-muted tracking-widest w-6 tabular-nums">({String(index + 1).padStart(2, '0')})</span>
        <span className={`text-base body-display transition-colors duration-300 ${active ? 'text-primary' : 'text-primary-muted group-hover:text-primary'}`}>{label}</span>
      </div>
      <div
        className={`w-4 h-4 border flex items-center justify-center transition-all duration-300 shrink-0 ${
          active ? 'border-primary bg-primary' : 'border-neutral-300 group-hover:border-primary/50'
        }`}
      >
        {active && <RiCheckLine size={10} className="text-secondary" />}
      </div>
    </button>
  );
};

const Field = ({ label, children }) => (
  <div className="flex flex-col">
    <span className="font-mono text-base-xs tracking-widest uppercase text-primary-muted pb-s200">{label}</span>
    <div className="border-b border-neutral-200 focus-within:border-primary/50 transition-colors duration-300">{children}</div>
  </div>
);

const inputCls = 'w-full pt-s100 pb-s300 bg-transparent text-primary text-base body-display placeholder:text-primary-muted/40 focus:outline-none';

const FaqRow = ({ item, index, isOpen, onClick }) => (
  <li className="not-last:border-b border-neutral-200">
    <button type="button" onClick={onClick} className="w-full flex items-center justify-between py-s400 gap-s400 text-left cursor-pointer group">
      <div className="flex items-center gap-s300">
        <span className="font-mono text-base-xs text-primary-muted tracking-widest shrink-0">({String(index + 1).padStart(2, '0')})</span>
        <span className="text-base sm:text-h600 font-[450] tracking-heading leading-heading text-primary group-hover:text-primary-muted transition-colors duration-300">
          {item.q}
        </span>
      </div>
      <RiArrowDownSLine size={18} className={`shrink-0 text-primary-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-base-sm sm:text-base body-display text-primary-muted pb-s400 pl-9 max-w-[60ch]">{item.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </li>
);

const ContactPage = () => {
  const [selectedReason, setSelectedReason] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [attachment, setAttachment] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const { targetRef: submitRef } = useCursorInteraction({ content: 'send', size: 'large', textColor: 'text-secondary', fill: 'accent', magnetic: false });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    const file = e.target.files?.[0];
    if (file) setAttachment(file);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // TODO: wire to actual submit endpoint
    setIsSubmitted(true);
  };

  return (
    <main className="page-container">
      {/* C-01 + C-02 — Availability + Header */}
      <BaseSection containerID="contact-hero">
        <div className="flex flex-col">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-s300 mb-s500 lg:mb-s700">
            <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-accent' : 'bg-primary-muted/40'}`} />
            <TextReveal as="span" className="font-mono text-base-xs tracking-widest uppercase text-primary-muted">
              {isAvailable ? 'Open to new opportunities' : 'Not currently available for new projects'}
            </TextReveal>
          </motion.div>

          <div className="flex items-end justify-between w-full md:mb-s200 lg:mb-s600">
            <TextReveal as="h1" className="text-h100 heading-display font-bold">
              LET'S
            </TextReveal>
            <div className="flex flex-col items-end gap-1 pb-1 lg:pb-2">
              <TextReveal as="h1" className="text-h100 heading-display font-bold">
                TALK.
              </TextReveal>
            </div>
          </div>

          <div className="mt-s500 md:grid md:grid-cols-6">
            <TextReveal as="p" startDelay={0.1} className="text-h500 body-display text-primary-muted md:col-span-4">
              Whether you're a studio, a company, or a recruiter — if you think there's a fit, I want to hear about it. I'll get back to you within 1–2 business days.
            </TextReveal>
          </div>
        </div>
      </BaseSection>

      {/* C-03 — What to Expect */}
      <BaseSection containerID="what-to-expect" containerClassName="m-auto w-full max-w-[1920px]">
        <div className="flex flex-col mb-s200">
          <TextReveal as="span">
            <span className="text-base-sm leading-heading tracking-body font-[450] uppercase text-primary-muted">what happens next?</span>
          </TextReveal>
        </div>
        <ul className="flex flex-col">
          {expectSteps.map(step => (
            <li key={step.number} className="flex flex-col py-s400 sm:py-s500 not-last:border-b not-last:border-neutral-200 md:grid md:grid-cols-12 md:gap-s400">
              <div className="md:col-span-4 flex items-start gap-s300 md:gap-s200">
                <TextReveal as="span" className="font-mono text-base-xs text-primary-muted tracking-widest pt-4">
                  ({step.number})
                </TextReveal>
                <TextReveal as="h3" className="font-serif leading-[1.2] tracking-[-0.02em] text-h400 md:text-h300 text-primary">
                  {step.title}
                </TextReveal>
              </div>
              <TextReveal as="p" className="md:col-span-8 text-base-sm sm:text-base body-display text-primary-muted mt-s200 md:mt-0">
                {step.description}
              </TextReveal>
            </li>
          ))}
        </ul>
      </BaseSection>

      {/* C-04 — Form */}
      <BaseSection containerID="contact-form">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-s500 md:gap-s400">
          <div className="md:col-span-2 flex flex-col gap-s400 md:sticky md:top-8 self-start">
            <TextReveal as="span">
              <span className="text-base-sm leading-heading tracking-body font-[450] uppercase text-primary-muted">direct line</span>
            </TextReveal>

            <a
              href="mailto:hello@garr.dev"
              data-cursor
              data-cursor-magnetic
              className="text-h400 font-serif heading-display w-fit text-primary hover:text-primary-muted transition-colors duration-300"
            >
              hello@garr.dev
            </a>
            <TextReveal as="p" startDelay={0.1} className="text-base-sm body-display text-primary-muted max-w-[36ch]">
              Prefer the form? Pick what this is about, leave a message, and I'll take it from there.
            </TextReveal>
          </div>

          <div className="md:col-span-4">
            {isSubmitted ? (
              <div className="flex flex-col gap-s200 py-s800">
                <span className="text-h300 font-serif heading-display text-primary">Sent.</span>
                <p className="text-base body-display text-primary-muted">I'll get back to you within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col">
                  <div className="pb-s300 border-b border-neutral-200">
                    <span className="font-mono text-base-xs tracking-widest uppercase text-primary-muted">What's this about?</span>
                  </div>
                  {reasonOptions.map((opt, i) => (
                    <ReasonRow key={opt.id} index={i} label={opt.label} active={selectedReason === opt.id} onClick={() => setSelectedReason(opt.id)} />
                  ))}
                </div>

                <div className="flex flex-col gap-s500 mt-s700">
                  <Field label="Name">
                    <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className={inputCls} />
                  </Field>
                  <Field label="Email">
                    <input type="email" name="email" placeholder="Best email to reach you" value={formData.email} onChange={handleInputChange} className={inputCls} />
                  </Field>
                  <Field label="Message">
                    <textarea
                      name="message"
                      placeholder="Tell me what's on your mind"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className={`${inputCls} resize-none`}
                    />
                  </Field>
                </div>

                <div className="flex flex-col gap-s200 mt-s600">
                  <label className="inline-flex items-center gap-s200 cursor-pointer group w-fit">
                    <RiAttachment2 size={14} className="text-primary-muted group-hover:text-primary transition-colors duration-200" />
                    <span className="font-mono text-base-xs tracking-widest uppercase text-primary-muted group-hover:text-primary border-b border-transparent group-hover:border-primary/50 transition-all duration-200">
                      Attach a brief, JD, or reference (optional)
                    </span>
                    <input type="file" onChange={handleFileChange} className="hidden" />
                  </label>
                  {attachment && <p className="font-mono text-base-xs text-primary-muted/70 pl-s500">↳ {attachment.name}</p>}
                </div>

                <div className="flex flex-col gap-s300 mt-s700">
                  <CreativeButton ref={submitRef} type="submit" variant="fill" className="w-full">
                    <span className="flex items-center justify-center gap-s300">
                      Send it
                      <RiArrowRightUpLine size={16} />
                    </span>
                  </CreativeButton>

                  <p className="font-mono text-center text-base-xs text-primary-muted/50">
                    Protected by reCAPTCHA —{' '}
                    <a href="#" className="text-accent hover:underline underline-offset-2">
                      Privacy
                    </a>{' '}
                    &{' '}
                    <a href="#" className="text-accent hover:underline underline-offset-2">
                      Terms
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </BaseSection>

      {/* C-05 — FAQ */}
      <BaseSection containerID="contact-faq" containerClassName="m-auto w-full max-w-[1920px]">
        <div className="flex flex-col mb-s200">
          <TextReveal as="span">
            <span className="text-base-sm leading-heading tracking-body font-[450] uppercase text-primary-muted">questions</span>
          </TextReveal>
        </div>
        <ul className="flex flex-col">
          {faqItems.map((item, i) => (
            <FaqRow key={item.q} item={item} index={i} isOpen={openFaq === i} onClick={() => setOpenFaq(prev => (prev === i ? null : i))} />
          ))}
        </ul>
      </BaseSection>
    </main>
  );
};

export default ContactPage;
