"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, ArrowLeft, User, Home, Briefcase, AlertCircle } from "lucide-react";
import { useSiteData } from "@/lib/site-context";
import { properties } from "@/lib/properties";

function ApplyForm() {
  const siteData = useSiteData();
  const searchParams = useSearchParams();
  const preselectedProperty = searchParams.get("property") || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",

    // Current Address
    currentAddress: "",
    currentCity: "",
    currentState: "",
    currentZip: "",
    currentLandlord: "",
    currentLandlordPhone: "",
    monthsAtAddress: "",
    reasonForLeaving: "",

    // Employment/Student
    occupation: "student",
    employer: "",
    employerPhone: "",
    monthlyIncome: "",
    university: "",
    graduationYear: "",

    // Property Selection
    preferredProperty: preselectedProperty,
    preferredBedrooms: "",
    moveInDate: "",
    leaseTerm: "12",

    // Background
    hasEviction: "no",
    evictionExplanation: "",
    hasForeclosure: "no",
    foreclosureExplanation: "",
    hasPets: "no",
    petDetails: "",

    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",

    // Additional
    additionalOccupants: "",
    additionalInfo: "",

    // Acknowledgments
    acknowledgeCredit: false,
    acknowledgeDeposit: false,
    acknowledgeAccuracy: false,
  });

  const email = siteData.contact.email || "info@passportstudenthoming.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In production, this would send an email to the landlord
    // For now, we'll simulate the submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.currentAddress && formData.currentCity && formData.currentState;
      case 3:
        return (formData.occupation === "student" ? formData.university : formData.employer);
      case 4:
        return formData.preferredProperty && formData.moveInDate;
      case 5:
        return formData.acknowledgeCredit && formData.acknowledgeDeposit && formData.acknowledgeAccuracy;
      default:
        return true;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for applying. Your application has been sent to our team and we will
              review it within 1-2 business days. We'll contact you at <strong>{formData.email}</strong> with next steps.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              If you have any questions, please call us at {siteData.contact.phone || "(216) 702-7666"}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                View More Properties
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Rental Application</h1>
          <p className="text-blue-200">
            Complete this application to apply for one of our properties.
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Personal", icon: User },
              { num: 2, label: "Address", icon: Home },
              { num: 3, label: "Employment", icon: Briefcase },
              { num: 4, label: "Property", icon: Home },
              { num: 5, label: "Review", icon: CheckCircle },
            ].map((step, idx) => (
              <div key={step.num} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.num ? "bg-blue-800 text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className={`ml-2 hidden sm:block text-sm font-medium ${
                  currentStep >= step.num ? "text-blue-800" : "text-gray-500"
                }`}>
                  {step.label}
                </span>
                {idx < 4 && (
                  <div className={`w-8 sm:w-16 h-1 mx-2 ${
                    currentStep > step.num ? "bg-blue-800" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Current Address */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Address</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="currentAddress"
                    required
                    value={formData.currentAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="currentCity"
                      required
                      value={formData.currentCity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <input
                      type="text"
                      name="currentState"
                      required
                      value={formData.currentState}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="currentZip"
                      value={formData.currentZip}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Landlord Name</label>
                    <input
                      type="text"
                      name="currentLandlord"
                      value={formData.currentLandlord}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Landlord Phone</label>
                    <input
                      type="tel"
                      name="currentLandlordPhone"
                      value={formData.currentLandlordPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Months at Current Address</label>
                    <input
                      type="number"
                      name="monthsAtAddress"
                      value={formData.monthsAtAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Leaving</label>
                    <input
                      type="text"
                      name="reasonForLeaving"
                      value={formData.reasonForLeaving}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Employment/Student Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Employment / Student Information</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am a: *</label>
                  <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="student">Student</option>
                    <option value="employed">Employed</option>
                    <option value="both">Student & Employed</option>
                  </select>
                </div>

                {(formData.occupation === "student" || formData.occupation === "both") && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">University/College *</label>
                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        placeholder="e.g., Case Western Reserve University"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expected Graduation Year</label>
                      <input
                        type="text"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        placeholder="e.g., 2026"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}

                {(formData.occupation === "employed" || formData.occupation === "both") && (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Employer *</label>
                        <input
                          type="text"
                          name="employer"
                          value={formData.employer}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Employer Phone</label>
                        <input
                          type="tel"
                          name="employerPhone"
                          value={formData.employerPhone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income</label>
                      <input
                        type="text"
                        name="monthlyIncome"
                        value={formData.monthlyIncome}
                        onChange={handleChange}
                        placeholder="$"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name</label>
                    <input
                      type="text"
                      name="emergencyName"
                      value={formData.emergencyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone</label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Property Selection & Background */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Selection</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Property *</label>
                  <select
                    name="preferredProperty"
                    required
                    value={formData.preferredProperty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a property...</option>
                    {properties.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.address}, {p.city}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Bedrooms</label>
                    <select
                      name="preferredBedrooms"
                      value={formData.preferredBedrooms}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Any</option>
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="4">4 Bedrooms</option>
                      <option value="5">5+ Bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Desired Move-in Date *</label>
                    <input
                      type="date"
                      name="moveInDate"
                      required
                      value={formData.moveInDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lease Term</label>
                  <select
                    name="leaseTerm"
                    value={formData.leaseTerm}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="summer">Summer (June-August)</option>
                    <option value="12">12 Months</option>
                    <option value="academic">Academic Year</option>
                  </select>
                </div>

                <hr className="my-6" />

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Background Information</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Have you ever had an eviction?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasEviction"
                          value="no"
                          checked={formData.hasEviction === "no"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        No
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasEviction"
                          value="yes"
                          checked={formData.hasEviction === "yes"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Yes
                      </label>
                    </div>
                    {formData.hasEviction === "yes" && (
                      <textarea
                        name="evictionExplanation"
                        value={formData.evictionExplanation}
                        onChange={handleChange}
                        placeholder="Please explain..."
                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        rows={2}
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Have you ever had a foreclosure?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasForeclosure"
                          value="no"
                          checked={formData.hasForeclosure === "no"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        No
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasForeclosure"
                          value="yes"
                          checked={formData.hasForeclosure === "yes"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Yes
                      </label>
                    </div>
                    {formData.hasForeclosure === "yes" && (
                      <textarea
                        name="foreclosureExplanation"
                        value={formData.foreclosureExplanation}
                        onChange={handleChange}
                        placeholder="Please explain..."
                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        rows={2}
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Do you have any pets?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasPets"
                          value="no"
                          checked={formData.hasPets === "no"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        No
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasPets"
                          value="yes"
                          checked={formData.hasPets === "yes"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Yes
                      </label>
                    </div>
                    {formData.hasPets === "yes" && (
                      <textarea
                        name="petDetails"
                        value={formData.petDetails}
                        onChange={handleChange}
                        placeholder="Type, breed, weight..."
                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        rows={2}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Occupants (names and relationship)
                  </label>
                  <textarea
                    name="additionalOccupants"
                    value={formData.additionalOccupants}
                    onChange={handleChange}
                    placeholder="List any other people who will be living in the unit..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={2}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Submit</h2>

                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900">Application Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Name:</span>
                      <span className="ml-2 text-gray-900">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Email:</span>
                      <span className="ml-2 text-gray-900">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Phone:</span>
                      <span className="ml-2 text-gray-900">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Move-in Date:</span>
                      <span className="ml-2 text-gray-900">{formData.moveInDate}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-gray-500">Preferred Property:</span>
                      <span className="ml-2 text-gray-900">
                        {properties.find(p => p.id === formData.preferredProperty)?.address || "Not selected"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div className="text-sm text-amber-800">
                      <strong>Important:</strong> By submitting this application, you authorize us to verify the information provided and conduct a background/credit check.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="acknowledgeCredit"
                      checked={formData.acknowledgeCredit}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I authorize the landlord to verify my credit history and conduct a background check. *
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="acknowledgeDeposit"
                      checked={formData.acknowledgeDeposit}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I understand that a security deposit is required upon approval and may be non-refundable under certain conditions. *
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="acknowledgeAccuracy"
                      checked={formData.acknowledgeAccuracy}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I certify that all information provided in this application is true and accurate to the best of my knowledge. *
                    </span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information or Comments
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Anything else you'd like us to know..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className="px-6 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !isStepValid(5)}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-800 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading application...</p>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ApplyForm />
    </Suspense>
  );
}
