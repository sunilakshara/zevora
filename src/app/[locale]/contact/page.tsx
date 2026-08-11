"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { submitInquiry } from "@/app/actions/inquiry";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("cardamom");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useLanguage();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const result = await submitInquiry(formData);

    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Info */}
          <div>
            <span className="text-secondary font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              {t.contactPage.tagline}
            </span>
            <h1 className="text-primary text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">
              {t.contactPage.title1} <br />
              <span className="text-secondary italic">{t.contactPage.title2}</span>
            </h1>
            <p className="text-gray-600 mb-12 leading-relaxed">
              {t.contactPage.description}
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary mb-1">
                    {t.contactPage.hqTitle}
                  </h4>
                  <p className="text-sm text-gray-500 whitespace-pre-line">
                    {t.contactPage.hqAddress}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                  <Mail size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary mb-1">
                    {t.contactPage.emailTitle}
                  </h4>
                  <p className="text-sm text-gray-500">
                    B2B: export@zevoragroupe.com<br />
                    Logistics: supply@zevoragroupe.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-sm border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary mb-1">
                    {t.contactPage.phoneTitle}
                  </h4>
                  <p className="text-sm text-gray-500">
                    International: +91 484 2345 678<br />
                    Operations: +91 98470 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -mr-16 -mt-16 rounded-full" />

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-serif text-primary">
                  {t.contactPage.successMessage}
                </h3>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                  {t.contactPage.sendInquiry}
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-xl md:text-2xl font-serif text-primary mb-2">
                  {t.contactPage.formTitle}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                      {t.contactPage.fullName}
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2"
                      placeholder="Johnathan Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                      {t.contactPage.emailAddress}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2"
                      placeholder="j.doe@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                      {t.contactPage.company}
                    </label>
                    <input
                      name="company"
                      className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2"
                      placeholder="Global Logistics Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                      {t.contactPage.phone}
                    </label>
                    <input
                      name="phone"
                      className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {t.contactPage.productInterest}
                  </label>
                  
                  {/* Custom Styled Select Component */}
                  <div className="relative">
                    <input type="hidden" name="product" value={selectedProduct} />
                    
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full border-0 border-b border-gray-200 py-2 bg-transparent text-left flex justify-between items-center group focus:outline-none"
                    >
                      <span className="text-gray-800">
                        {
                          [
                            { id: "cardamom", label: t.products.cardamom },
                            { id: "pepper", label: t.products.blackPepper },
                            { id: "turmeric", label: t.products.turmeric },
                            { id: "cloves", label: t.products.cloves },
                            { id: "cinnamon", label: t.products.cinnamon },
                            { id: "marine", label: t.products.marine },
                            { id: "beverages", label: t.products.beverages },
                            { id: "meat", label: "Meat" },
                          ].find((p) => p.id === selectedProduct)?.label
                        }
                      </span>
                      <motion.span 
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        className="text-gray-400 group-hover:text-secondary transition-colors"
                      >
                        ▼
                      </motion.span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={isDropdownOpen ? "open" : "closed"}
                      variants={{
                        open: { opacity: 1, y: 0, display: "block" },
                        closed: { opacity: 0, y: -10, transitionEnd: { display: "none" } }
                      }}
                      onWheel={(e) => e.stopPropagation()}
                      onTouchMove={(e) => e.stopPropagation()}
                      className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 shadow-2xl rounded-md z-50 overflow-y-auto max-h-52 overscroll-contain touch-pan-y [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                      {[
                        { id: "cardamom", label: t.products.cardamom },
                        { id: "pepper", label: t.products.blackPepper },
                        { id: "turmeric", label: t.products.turmeric },
                        { id: "cloves", label: t.products.cloves },
                        { id: "cinnamon", label: t.products.cinnamon },
                        { id: "marine", label: t.products.marine },
                        { id: "beverages", label: t.products.beverages },
                        { id: "meat", label: "Meat" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setSelectedProduct(item.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-sm transition-colors cursor-pointer ${
                            selectedProduct === item.id 
                              ? "bg-primary text-white" 
                              : "text-gray-600 hover:bg-gray-50 hover:text-secondary"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {t.contactPage.message}
                  </label>
                  <textarea
                    name="requirement"
                    required
                    rows={4}
                    className="w-full border-0 border-b border-gray-200 focus:ring-0 focus:border-secondary py-2 resize-none"
                    placeholder="..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-between items-center group cursor-pointer"
                >
                  <span>{isSubmitting ? t.contactPage.submitting : t.contactPage.sendInquiry}</span>
                  {!isSubmitting && (
                    <Send size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
