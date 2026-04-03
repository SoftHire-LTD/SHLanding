import { useState, useRef } from "react";
import { Send, CheckCircle, User, Mail, Phone, Globe, Calendar, CreditCard, GraduationCap, BookOpen, Trophy, MessageSquare } from "lucide-react";

const CandidatesForm2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    dateOfBirth: "",
    passportNumber: "",
    university: "",
    program: "",
    graduationYear: "",
    englishLevel: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // combine all fields into one message
      const combinedMessage = `
      Visa Sponsorship Application Request
      ------------------------------------
      Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Nationality: ${formData.nationality}
      Date of Birth: ${formData.dateOfBirth}
      Passport Number: ${formData.passportNumber}
      University: ${formData.university}
      Program: ${formData.program}
      Graduation Year: ${formData.graduationYear}
      English Level: ${formData.englishLevel}
      Additional Message: ${formData.message}
      `;

      const response = await fetch(
        import.meta.env.VITE_CONTACT_ENDPOINT
          ? import.meta.env.VITE_CONTACT_ENDPOINT + "/support/contact-us"
          : "https://support-service-api.azurewebsites.net/support/contact-us",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            message: combinedMessage,
          }),
        }
      );

      if (response.ok) {
        setMessageSent(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          nationality: "",
          dateOfBirth: "",
          passportNumber: "",
          university: "",
          program: "",
          graduationYear: "",
          englishLevel: "",
          message: "",
        });
        setTimeout(() => setMessageSent(false), 6000);
      } else {
        console.error("Failed to send");
      }
    } catch (err) {
      console.error("Error sending message", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-mint-50/30 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-mint-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-lavender-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-aqua-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-navy-900 via-blue-600 to-navy-900 bg-clip-text text-transparent mb-6">
              Apply for UK Visa Sponsorship
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-mint-400 to-lavender-400 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-white via-blue-50/30 to-mint-50/30 rounded-3xl p-8 border border-blue-100/50 shadow-xl backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-xl text-charcoal-700 leading-relaxed">
              We specialize in helping international candidates secure <span className="font-semibold text-blue-600">sponsorship opportunities</span> in the United Kingdom.
              Fill in the form below with your details, and take the first step toward your <span className="font-semibold text-mint-600">future in the UK</span>.
            </p>
          </div>
        </div>

        {/* Enhanced Application Form */}
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-12 border border-grey-200/50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-mint-200/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-lavender-200/10 to-aqua-200/10 rounded-full blur-xl"></div>

          <div className="relative z-10">
            {/* Enhanced Success Message */}
            {messageSent && (
              <div className="mb-8 bg-gradient-to-r from-mint-50 to-mint-100 border border-mint-200 rounded-2xl p-6 flex items-center space-x-4 shadow-lg">
                <div className="bg-mint-500 rounded-full p-2">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-mint-700 text-lg">Application Submitted Successfully!</h4>
                  <p className="text-mint-600">Thank you! We'll contact you within 48 hours to discuss next steps.</p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="bg-gradient-to-br from-blue-50/30 to-white rounded-2xl p-8 border border-blue-100/50">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Personal Information</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className=" font-semibold text-navy-900 mb-3 flex items-center">
                      <User className="h-4 w-4 mr-2 text-blue-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="group">
                    <label className=" font-semibold text-navy-900 mb-3 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-mint-500" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-mint-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="your.email@domain.com"
                    />
                  </div>

                  <div className="group">
                    <label className=" font-semibold text-navy-900 mb-3 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-lavender-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  <div className="group">
                    <label className=" font-semibold text-navy-900 mb-3 flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-aqua-500" />
                      Nationality
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="Your nationality"
                    />
                  </div>

                  <div className="group">
                    <label className=" font-semibold text-navy-900 mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                    />
                  </div>

                  <div className="group">
                    <label className=" font-semibold text-navy-900 mb-3 flex items-center">
                      <CreditCard className="h-4 w-4 mr-2 text-mint-500" />
                      Passport Number
                    </label>
                    <input
                      type="text"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleChange}
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-mint-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="Passport number"
                    />
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-gradient-to-br from-mint-50/30 to-white rounded-2xl p-8 border border-mint-100/50">
                <div className="flex items-center mb-6">
                  <div className="bg-mint-100 p-3 rounded-xl mr-4">
                    <GraduationCap className="h-6 w-6 text-mint-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Education Details</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="font-semibold text-navy-900 mb-3 flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-mint-500" />
                      University
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-mint-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="University name"
                    />
                  </div>

                  <div className="group">
                    <label className="font-semibold text-navy-900 mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-lavender-500" />
                      Program of Study
                    </label>
                    <input
                      type="text"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="Your degree/program"
                    />
                  </div>

                  <div className="group">
                    <label className="font-semibold text-navy-900 mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-aqua-500" />
                      Expected Graduation Year
                    </label>
                    <input
                      type="number"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="2024"
                    />
                  </div>

                  <div className="group">
                    <label className="font-semibold text-navy-900 mb-3 flex items-center">
                      <Trophy className="h-4 w-4 mr-2 text-blue-500" />
                      English Proficiency
                    </label>
                    <input
                      type="text"
                      name="englishLevel"
                      value={formData.englishLevel}
                      onChange={handleChange}
                      className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 group-hover:bg-white"
                      placeholder="IELTS 7.0 or TOEFL 100"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Message Section */}
              <div className="bg-gradient-to-br from-lavender-50/30 to-white rounded-2xl p-8 border border-lavender-100/50">
                <div className="flex items-center mb-6">
                  <div className="bg-lavender-100 p-3 rounded-xl mr-4">
                    <MessageSquare className="h-6 w-6 text-lavender-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Additional Information</h3>
                </div>

                <div className="group">
                  <label className="font-semibold text-navy-900 mb-3 flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-lavender-500" />
                    Why do you want to study/work in the UK?
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-grey-300 px-4 py-4 rounded-xl focus:ring-2 focus:ring-lavender-500 focus:border-transparent transition-all duration-300 resize-none bg-white/80 group-hover:bg-white"
                    placeholder="Tell us about your goals, aspirations, and why you want to pursue opportunities in the UK. Include any relevant experience or achievements..."
                  ></textarea>
                </div>
              </div>

              {/* Enhanced Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-navy-900 to-blue-600 text-white py-5 px-12 rounded-2xl font-bold text-lg flex items-center justify-center mx-auto hover:from-blue-600 hover:to-navy-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-w-64"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-charcoal-600 mt-4 text-sm">
                  By submitting this form, you agree to our processing of your personal data for visa sponsorship purposes.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesForm2;
