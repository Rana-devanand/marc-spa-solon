import React, { useState } from 'react';
import Layout from '@/components/layouts/Layout';
import AnimationWrapper from '@/components/Animations/animations';
import Card from '@/components/UI/Card';
import Button from '@/components/UI/Button';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    provider: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    concerns: '',
    medicalHistory: '',
    medications: '',
    allergies: '',
    previousTreatments: '',
    goals: '',
    consent: false,
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    { id: 'hydrafacial', name: 'HydraFacial MD', duration: '45 min', price: '$180' },
    { id: 'botox', name: 'Botox Cosmetic', duration: '30 min', price: '$12/unit' },
    { id: 'fillers', name: 'Dermal Fillers', duration: '45 min', price: '$650+' },
    { id: 'chemical-peel', name: 'Chemical Peel', duration: '60 min', price: '$120+' },
    { id: 'laser-hair', name: 'Laser Hair Removal', duration: '30 min', price: '$99+' },
    { id: 'coolsculpting', name: 'CoolSculpting', duration: '60 min', price: '$750+' },
    { id: 'microneedling', name: 'Microneedling', duration: '60 min', price: '$250' },
    { id: 'consultation', name: 'Consultation Only', duration: '30 min', price: 'Free' }
  ];

  const providers = [
    { id: 'dr-chen', name: 'Dr. Michael Chen', title: 'Medical Director' },
    { id: 'sarah', name: 'Sarah Johnson', title: 'Master Aesthetician' },
    { id: 'emily', name: 'Emily Rodriguez', title: 'Senior Aesthetician' },
    { id: 'any', name: 'Any Available Provider', title: 'First Available' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 2000);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const steps = [
    { number: 1, title: 'Select Service', description: 'Choose your treatment' },
    { number: 2, title: 'Schedule', description: 'Pick date & time' },
    { number: 3, title: 'Personal Info', description: 'Contact details' },
    { number: 4, title: 'Medical History', description: 'Health information' }
  ];

  if (showSuccess) {
    return (
      <Layout>
        <section className="pt-24 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimationWrapper>
              <div className="text-8xl mb-8">✅</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Booking Confirmed!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for choosing Marc Med Spa. We've received your booking request and 
                will contact you within 24 hours to confirm your appointment.
              </p>
              
              <Card className="text-left mb-8" variant="gradient">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Details:</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Service:</strong> {services.find(s => s.id === formData.service)?.name}</p>
                  <p><strong>Provider:</strong> {providers.find(p => p.id === formData.provider)?.name}</p>
                  <p><strong>Requested Date:</strong> {new Date(formData.date).toLocaleDateString()}</p>
                  <p><strong>Requested Time:</strong> {formData.time}</p>
                  <p><strong>Contact:</strong> {formData.email} | {formData.phone}</p>
                </div>
              </Card>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-blue-800 text-sm text-left space-y-1">
                  <li>• Our team will review your request and medical history</li>
                  <li>• We'll call you within 24 hours to confirm your appointment</li>
                  <li>• You'll receive a confirmation email with pre-treatment instructions</li>
                  <li>• If you have questions, call us at (555) 123-4567</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.location.href = '/'}>
                  Return Home
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/services'}>
                  Browse Services
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-24 pb-20 bg-gradient-to-br from-rose-50 via-white to-pink-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Book Your Appointment
              </h1>
              <p className="text-xl text-gray-600">
                Complete the steps below to schedule your treatment
              </p>
            </div>
          </AnimationWrapper>

          {/* Progress Steps */}
          <AnimationWrapper delay={0.2}>
            <div className="flex items-center justify-center mb-12">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex flex-col items-center ${index !== 0 ? 'ml-8' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      currentStep >= step.number 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.number ? '✓' : step.number}
                    </div>
                    <div className="text-center mt-2">
                      <div className={`font-semibold text-sm ${
                        currentStep >= step.number ? 'text-rose-600' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-400">{step.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-px mt-[-20px] ${
                      currentStep > step.number ? 'bg-rose-500' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </AnimationWrapper>

          {/* Step Content */}
          <AnimationWrapper delay={0.4}>
            <Card className="p-8">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Service</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => setFormData(prev => ({ ...prev, service: service.id }))}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.service === service.id
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-gray-200 hover:border-rose-300'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-gray-900">{service.name}</h3>
                          <span className="text-rose-600 font-bold">{service.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{service.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Schedule */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Date & Time</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Provider
                      </label>
                      <select
                        name="provider"
                        value={formData.provider}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                      >
                        <option value="">Select a provider</option>
                        {providers.map((provider) => (
                          <option key={provider.id} value={provider.id}>
                            {provider.name} - {provider.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={getMinDate()}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, time }))}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            formData.time === time
                              ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-rose-50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Information */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Primary Concerns
                      </label>
                      <input
                        type="text"
                        name="concerns"
                        value={formData.concerns}
                        onChange={handleInputChange}
                        placeholder="e.g., Anti-aging, acne, skin texture"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Treatment Goals
                    </label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Tell us about your aesthetic goals and what you hope to achieve..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Medical History */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical History</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Medications
                      </label>
                      <textarea
                        name="medications"
                        value={formData.medications}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="List all current medications, supplements, and vitamins"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Allergies
                      </label>
                      <textarea
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="Please list any known allergies to medications, foods, or other substances"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Previous Cosmetic Treatments
                      </label>
                      <textarea
                        name="previousTreatments"
                        value={formData.previousTreatments}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Please describe any previous cosmetic treatments, when they were done, and results"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Medical History & Conditions
                      </label>
                      <textarea
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Please describe any significant medical history, current conditions, or surgeries"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                      />
                    </div>

                    <div className="space-y-4 pt-6 border-t border-gray-200">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="mt-1 mr-3 w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                          required
                        />
                        <label className="text-sm text-gray-700">
                          <span className="font-semibold">I consent to treatment</span> and understand that:
                          <ul className="mt-2 ml-4 list-disc text-xs space-y-1">
                            <li>All cosmetic treatments carry inherent risks and benefits will be discussed during consultation</li>
                            <li>Results may vary and multiple treatments may be needed</li>
                            <li>I will follow all pre and post-treatment instructions</li>
                            <li>I am over 18 years of age or have parental consent</li>
                          </ul>
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="mr-3 w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                        />
                        <label className="text-sm text-gray-700">
                          Subscribe to our newsletter for special offers and beauty tips
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <div>
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={handlePrev}>
                      Previous
                    </Button>
                  )}
                </div>

                <div>
                  {currentStep < 4 ? (
                    <Button onClick={handleNext}>
                      Next Step
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmit} 
                      loading={isSubmitting}
                      disabled={!formData.consent}
                    >
                      {isSubmitting ? 'Submitting...' : 'Complete Booking'}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </AnimationWrapper>

          {/* Security Note */}
          <AnimationWrapper delay={0.6}>
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                🔒 Your information is secure and will only be used for appointment scheduling and treatment purposes.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;