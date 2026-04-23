import React from 'react';
import { motion } from 'motion/react';
import { RiArrowRightUpLine, RiAttachment2, RiCheckLine } from '@remixicon/react';
import { useContactForm, services, budgetOptions } from '@/hooks/useContactForm';
import { useCursorInteraction } from '@/cursor';
import { BaseSection, CreativeButton } from '@/components';
import { fadeIn, fadeUp } from '@/data/anim/basic';

const ToggleRow = ({ label, active, onClick, index }) => {
  const { targetRef } = useCursorInteraction({
    content: 'check',
    size: 'small',
    fill: 'primary',
    magnetic: false,
  });

  return (
    <button
      ref={targetRef}
      type="button"
      onClick={onClick}
      className="group flex items-center justify-between w-full py-s300 border-b border-primary/30 hover:border-primary/50 transition-colors duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-s400">
        <span className="font-mono text-base-xs tracking-label text-primary/25 w-6 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
        <span className={`text-base transition-colors duration-300 ${active ? 'text-primary' : 'text-primary/45 group-hover:text-primary/70'}`}>{label}</span>
      </div>
      <div
        className={`w-4 h-4 border flex items-center justify-center transition-all duration-300 ${
          active ? 'border-primary bg-primary' : 'border-primary/30 group-hover:border-primary/50'
        }`}
      >
        {active && <RiCheckLine size={10} className="text-secondary" />}
      </div>
    </button>
  );
};

const Field = ({ label, children }) => (
  <div className="flex flex-col">
    <span className="font-mono text-base-xs tracking-label uppercase text-primary/30 pb-s200">{label}</span>
    <div className="border-b border-primary/30 focus-within:border-primary/50 transition-colors duration-300">{children}</div>
  </div>
);

const inputCls = 'w-full pt-s100 pb-s300 bg-transparent text-primary text-base placeholder:text-primary/20 focus:outline-none';

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
    <>
      <BaseSection sectionClassName="section-padding-hero" containerID="contact-form">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-s700 lg:gap-s900 items-start">
          <div className="flex flex-col gap-s700 lg:sticky lg:top-8 h-[100dvh]">
            <motion.div {...fadeUp(0.05)} className="flex flex-col gap-s400">
              <div className="flex items-center gap-s300">
                <div className="w-2 h-2 bg-accent" />
                <span className="font-mono text-base-xs tracking-label text-primary/30 uppercase">Let's talk</span>
              </div>
              <h1 className="text-h200 md:text-h100 leading-heading tracking-heading font-normal">
                Let's <em className="font-serif italic font-normal text-primary/40">create</em>
                <br />
                something
                <br />
                <span className="text-primary/15">great.</span>
              </h1>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="flex flex-col gap-s300 max-w-[36ch]">
              <p className="text-base text-primary/50 leading-body">Got a project in mind? Send me a message and let's build something remarkable together.</p>
            </motion.div>

            <motion.div {...fadeUp(0.14)} className="hidden md:flex flex-col gap-0">
              {[{ label: 'Email', value: 'hello@garr.dev', href: 'mailto:hello@garr.dev' }].map(({ label, value, href }) => (
                <div key={label} className="flex items-center justify-between py-s300 border-b border-primary/30">
                  <span className="font-mono text-base-xs tracking-label text-primary/30 uppercase">{label}</span>
                  {href ? (
                    <a href={href} className="text-base-sm text-primary/55 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary/50">
                      {value}
                    </a>
                  ) : (
                    <span className="text-base-sm text-primary/55">{value}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.08)}>
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Services */}
              <div className="hidden flex-col  md:flex">
                <div className="flex items-center justify-between pb-s300 border-b border-primary/30">
                  <span className="font-mono text-base-xs tracking-label uppercase text-primary/30">Services</span>
                  <span className="font-mono text-base-xs tracking-label text-primary/20">{selectedServices.length} selected</span>
                </div>
                {services.map((s, i) => (
                  <ToggleRow key={s.id} index={i} label={s.title} active={selectedServices.includes(s.id)} onClick={() => toggleService(s.id)} />
                ))}
              </div>

              <div className="flex flex-col lg:gap-s500 lg:mt-s800">
                <Field label="Name">
                  <input type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleInputChange} className={inputCls} />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} className={inputCls} />
                </Field>
                <Field label="Project Brief">
                  <textarea
                    name="project"
                    placeholder="Tell me about your project, goals, and timeline"
                    value={formData.project}
                    onChange={handleInputChange}
                    rows={2}
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>

              {/* Budget */}
              <div className="hidden: flex flex-col mt-s800">
                <div className="flex items-center justify-between pb-s300 border-b border-primary/30">
                  <span className="font-mono text-base-xs tracking-label uppercase text-primary/30">Budget (USD)</span>
                </div>
                {budgetOptions.map((opt, i) => (
                  <ToggleRow key={opt.id} index={i} label={opt.label} active={selectedBudget === opt.id} onClick={() => setSelectedBudget(opt.id)} />
                ))}
              </div>

              {/* Attachment */}
              <div className="flex flex-col gap-s200 mt-s800">
                <label className="inline-flex items-center gap-s200 cursor-pointer group w-fit">
                  <RiAttachment2 size={14} className="text-primary/30 group-hover:text-primary transition-colors duration-200" />
                  <span className="font-mono text-base-xs tracking-label uppercase text-primary/30 group-hover:text-primary border-b border-transparent group-hover:border-primary/50 transition-all duration-200">
                    Attach file
                  </span>
                  <input type="file" onChange={handleFileChange} className="hidden" />
                </label>
                {attachment && <p className="font-mono text-base-xs tracking-label text-primary/35 pl-s400">↳ {attachment.name}</p>}
              </div>

              <div className="flex flex-col gap-s300 mt-s800">
                <div className="h-px w-full bg-primary/30" />

                <CreativeButton ref={submitRef} type="submit" variant="fill" className="w-full mt-s400">
                  <span className="flex items-center justify-center gap-s300">
                    Send Message
                    <RiArrowRightUpLine size={16} />
                  </span>
                </CreativeButton>

                <p className="font-mono text-center text-base-xs tracking-label text-primary/20">
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
          </motion.div>
        </div>
      </BaseSection>
    </>
  );
};

export default ContactPage;
