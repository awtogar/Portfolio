import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { RiArrowRightUpLine, RiAttachment2 } from '@remixicon/react';
import { useContactForm, services, budgetOptions } from '@/hooks/useContactForm';
import { useCursorInteraction } from '@/hooks/useCursorInteraction';

const ease = [0.7, 0, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease },
});

const pillCls = active =>
  `px-4 py-2 rounded-full text-base-xs tracking-label transition-all duration-300 whitespace-nowrap border cursor-pointer ${
    active ? 'bg-primary text-secondary border-primary' : 'bg-transparent text-primary/55 border-border hover:border-primary/40 hover:text-primary'
  }`;

const ServicePill = ({ label, active, onClick }) => {
  const { targetRef } = useCursorInteraction({
    content: 'check',
    size: 'small',
    fill: 'primary',
    magnetic: false,
  });

  return (
    <button ref={targetRef} type="button" onClick={onClick} className={pillCls(active)}>
      {label}
    </button>
  );
};

const BudgetPill = ({ label, active, onClick }) => {
  const { targetRef } = useCursorInteraction({
    content: label,
    size: 'large',
    textColor: 'text-secondary',
    fill: 'primary',
    magnetic: false,
  });

  return (
    <button ref={targetRef} type="button" onClick={onClick} className={pillCls(active)}>
      {label}
    </button>
  );
};

const Field = ({ children }) => <div className="group border-b border-border focus-within:border-primary/50 transition-colors duration-300">{children}</div>;

const inputCls = 'w-full py-s400 bg-transparent text-primary text-base placeholder:text-primary/25 focus:outline-none';

const VerticalMarquee = () => {
  const words = ['BRANDING', 'WEB DEV', 'UI/UX', 'MOTION', 'WEBFLOW', 'PRODUCT'];

  return (
    <div className="hidden lg:flex flex-col overflow-hidden h-full pointer-events-none select-none">
      <motion.div animate={{ y: ['0%', '-50%'] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} className="flex flex-col gap-s600">
        {[...words, ...words].map((w, i) => (
          <span
            key={i}
            className="text-h100 font-black uppercase leading-none tracking-tight text-primary/[0.04] dark:text-primary/[0.06] whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ── Main ── */
const ContactPage = () => {
  const { selectedServices, selectedBudget, setSelectedBudget, formData, attachment, toggleService, handleInputChange, handleFileChange, handleSubmit } = useContactForm();

  const { targetRef: submitRef } = useCursorInteraction({
    content: 'arrow',
    size: 'large',
    textColor: 'text-secondary',
    fill: 'accent',
    magnetic: false,
  });

  return (
    <BaseSection sectionClassName="section-padding-hero lg:h-svh lg:overflow-hidden" containerID="contact-form">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_600px] gap-s700 lg:gap-s900 items-start lg:h-full">
        <div className="flex flex-col gap-s700 lg:justify-between lg:h-full lg:py-s200">
          <motion.div {...fadeUp(0.05)} className="flex flex-col gap-s300">
            <span className="hsAccent">(Let's talk)</span>
            <h1 className="text-h200 md:text-h100 leading-heading tracking-heading">
              Let's <em className="font-serif italic font-normal">create</em>
              <br />
              something
              <br />
              <span className="text-primary/25">great.</span>
            </h1>
          </motion.div>

          <motion.div {...fadeUp(0.12)} className="flex flex-col gap-s400 max-w-[38ch]">
            <p className="text-base text-primary/55 leading-body">
              Got a project in mind? I'd love to hear about it. Send me a message and let's build something remarkable together.
            </p>

            <div className="flex flex-col gap-s200">
              {[
                { label: 'Email', value: 'hello@garr.dev' },
                { label: 'Based in', value: 'Depok, Indonesia' },
                { label: 'Availability', value: 'Open to projects' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-baseline gap-s300 text-base-sm">
                  <span className="text-base-xs tracking-label uppercase text-primary/30 w-[80px] shrink-0">{label}</span>
                  <span className="text-primary/65">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.18)} className="hidden lg:flex items-center gap-s400 mt-auto">
            <span className="font-mono text-base-xs tracking-label text-primary/20">01 / 01</span>
            <div className="flex-1 h-px bg-border" />
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.1)} className="lg:h-full lg:overflow-y-auto lg:py-s200 scrollbar-none">
          <form onSubmit={handleSubmit} className="flex flex-col gap-s700">
            <div className="flex flex-col gap-s300">
              <p className="text-base-xs tracking-label uppercase text-primary/30">I'm interested in</p>
              <div className="flex flex-wrap gap-2">
                {services.map(s => (
                  <ServicePill key={s.id} label={s.title} active={selectedServices.includes(s.id)} onClick={() => toggleService(s.id)} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-s100">
              <Field>
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className={inputCls} />
              </Field>
              <Field>
                <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} className={inputCls} />
              </Field>
              <Field>
                <textarea
                  name="project"
                  placeholder="Tell me about your project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  className={`${inputCls} resize-none`}
                />
              </Field>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-s300">
              <p className="text-base-xs tracking-label uppercase text-primary/30">Project budget (USD)</p>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map(opt => (
                  <BudgetPill key={opt.id} label={opt.label} active={selectedBudget === opt.id} onClick={() => setSelectedBudget(opt.id)} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-s200">
              <label className="inline-flex items-center gap-s200 cursor-pointer group w-fit">
                <RiAttachment2 size={16} className="text-primary/35 group-hover:text-primary transition-colors duration-200" />
                <span className="text-base-sm text-primary/45 group-hover:text-primary border-b border-border group-hover:border-primary/40 transition-all duration-200">
                  Add attachment
                </span>
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
              {attachment && <p className="text-base-xs tracking-label text-primary/35">{attachment.name}</p>}
            </div>

            <div className="flex flex-col gap-s400">
              <CreativeButton ref={submitRef} type="submit" variant="fill" className="w-full">
                <span className="flex items-center justify-center gap-s300">
                  Send Message
                  <RiArrowRightUpLine size={18} />
                </span>
              </CreativeButton>

              <p className="text-center text-base-xs text-primary/25 leading-relaxed">
                Protected by reCAPTCHA —{' '}
                <a href="#" className="text-accent hover:underline underline-offset-2">
                  Privacy Policy
                </a>{' '}
                &{' '}
                <a href="#" className="text-accent hover:underline underline-offset-2">
                  Terms
                </a>{' '}
                apply.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </BaseSection>
  );
};

export default ContactPage;
