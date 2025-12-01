import React, { useState } from 'react';
import Button from './shared/Button';
import AnimatedSection from './shared/AnimatedSection';

interface FormData {
  name: string;
  email: string;
  organization: string;
  gameInterest: string;
  serviceType: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
  meetingType: 'zoom' | 'discord' | 'phone';
}

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    gameInterest: '',
    serviceType: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    meetingType: 'zoom'
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const gameOptions = ['BGMI', 'Free Fire', 'Pokémon Unite', 'Indus', 'Other'];
  const serviceOptions = [
    'Team Management',
    'Content Creation',
    'Tournament Organization',
    'Player Development',
    'Brand Partnerships',
    'General Consultation'
  ];

  const meetingTypes = [
    { id: 'zoom', label: 'Zoom Call', icon: '📹' },
    { id: 'discord', label: 'Discord Call', icon: '💬' },
    { id: 'phone', label: 'Phone Call', icon: '📞' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.gameInterest) newErrors.gameInterest = 'Game interest is required';
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData, uploadedFile);
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-[var(--sec-y-mobile)] md:py-[var(--sec-y-tablet)] lg:py-[var(--sec-y-desktop)] bg-gradient-to-b from-black to-gray-900">
        <div className="container-safe max-w-4xl text-center">
          <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">
              ✓
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Consultation Request Submitted!
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Thank you for your interest in working with Autobotz. 
              We'll review your request and get back to you within 24 hours.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-white font-semibold">What's Next?</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Our team will review your consultation request</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>You'll receive a confirmation email with next steps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>We'll schedule your meeting at your preferred time</span>
                </div>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[var(--sec-y-mobile)] md:py-[var(--sec-y-tablet)] lg:py-[var(--sec-y-desktop)] bg-gradient-to-b from-black to-gray-900">
      <div className="container-safe max-w-4xl">
        <AnimatedSection className="text-center flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            BOOK A <span className="text-red-600">CONSULTATION</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to take your esports journey to the next level? Let's discuss how 
            Autobotz can help you achieve your gaming goals.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: '⏱️', label: 'Quick Response', desc: '< 24 hrs reply' },
              { icon: '✓', label: 'Verified Partners', desc: '100+ teams managed' },
              { icon: '📅', label: 'Flexible Schedule', desc: 'Your preferred time' }
            ].map((indicator) => (
              <div
                key={indicator.label}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3 text-2xl">
                  {indicator.icon}
                </div>
                <h3 className="text-white font-semibold">{indicator.label}</h3>
                <p className="text-gray-400 text-sm">{indicator.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
        >
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Organization/Team Name
            </label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => handleInputChange('organization', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              placeholder="Your organization or team name (optional)"
            />
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Game of Interest *
              </label>
              <select
                value={formData.gameInterest}
                onChange={(e) => handleInputChange('gameInterest', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.gameInterest ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors`}
              >
                <option value="">Select a game</option>
                {gameOptions.map((game) => (
                  <option key={game} value={game} className="bg-gray-800">
                    {game}
                  </option>
                ))}
              </select>
              {errors.gameInterest && <p className="text-red-500 text-sm mt-1">{errors.gameInterest}</p>}
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">
                Service Type *
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => handleInputChange('serviceType', e.target.value)}
                className={`w-full bg-gray-800 border ${errors.serviceType ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors`}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service} className="bg-gray-800">
                    {service}
                  </option>
                ))}
              </select>
              {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Message *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className={`w-full bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors`}
              placeholder="Tell us about your goals, current situation, and how we can help you..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Upload Files (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="w-full bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg px-4 py-6 text-center cursor-pointer hover:border-red-600 transition-colors block"
              >
                <div className="text-4xl text-gray-400 mx-auto mb-2">📤</div>
                <p className="text-gray-400">
                  {uploadedFile ? uploadedFile.name : 'Click to upload roster, pitch deck, or relevant documents'}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  PDF, PNG, JPG, DOC (Max 10MB)
                </p>
              </label>
              {uploadedFile && (
                <button
                  type="button"
                  onClick={() => setUploadedFile(null)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-400 text-2xl font-bold"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Meeting Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full bg-gray-800 border ${errors.preferredDate ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors`}
              />
              {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">
                Preferred Time
              </label>
              <input
                type="time"
                value={formData.preferredTime}
                onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          </div>

          {/* Meeting Type */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-4">
              Preferred Meeting Platform
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {meetingTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleInputChange('meetingType', type.id)}
                  className={`flex items-center justify-center space-x-3 p-4 rounded-lg border-2 transition-colors ${
                    formData.meetingType === type.id
                      ? 'border-red-600 bg-red-600/10 text-white'
                      : 'border-gray-700 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <span className="text-xl">{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full md:w-auto px-12"
            >
              Schedule Consultation
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;