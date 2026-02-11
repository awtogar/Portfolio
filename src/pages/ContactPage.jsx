import React from 'react';
import BaseSection from '../layout/sections/BaseSection';
import { useContactForm, services, budgetOptions } from '../utils/contactHandling';

const ContactPage = () => {
  const { selectedServices, selectedBudget, setSelectedBudget, formData, attachment, toggleService, handleInputChange, handleFileChange, handleSubmit } = useContactForm();

  return (
    <BaseSection sectionClassName="min-h-screen bg-secondary py-s900" containerID="contact-form">
      <div className="w-full max-w-lg mx-auto">
        <div className="rounded-3xl p-4 md:p-8 lg:p-12 shadow-xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-primary text-h200 md:text-h100 font-semibold leading-tight">
              Let's create
              <br />
              something great
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Services Selection */}
            <div>
              <p className="text-primary font-medium mb-4">I'm interested in...</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {services.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedServices.includes(service.id) ? 'bg-primary text-secondary' : 'bg-transparent text-primary border border-primary/20 hover:border-primary/40'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Inputs */}
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-primary/20 text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-primary/20 text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="project"
                  placeholder="Tell us about your project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={1}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-primary/20 text-primary placeholder:text-primary/40 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Budget Selection */}
            <div>
              <p className="text-primary font-medium mb-4">Project budget (USD)</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {budgetOptions.map(option => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedBudget(option.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedBudget === option.id ? 'bg-primary text-secondary' : 'bg-transparent text-primary border border-primary/20 hover:border-primary/40'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* File Attachment */}
            <div>
              <label className="inline-flex items-center gap-2 cursor-pointer text-primary hover:text-primary/70 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
                <span className="font-medium border-b border-primary">Add attachment</span>
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
              {attachment && <p className="mt-2 text-sm text-primary/60">{attachment.name}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full py-4 bg-primary text-secondary rounded-full font-medium text-base hover:bg-primary/90 transition-colors">
              Send Message
            </button>

            {/* reCAPTCHA Notice */}
            <p className="text-center text-xs text-primary/40 leading-relaxed">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Terms of Service
              </a>{' '}
              apply.
            </p>
          </form>
        </div>
      </div>
    </BaseSection>
  );
};

export default ContactPage;
