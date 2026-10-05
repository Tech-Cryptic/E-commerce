import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Shield, Lock, FileText, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEO
        title="Privacy Policy & Terms of Service - Gabby's Gadget"
        description="Read Gabby's Gadget privacy policy, terms of service, return policy, warranty terms, and secure payment guarantees."
      />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#1a3dc4]/10 text-[#1a3dc4] rounded-full text-xs font-black uppercase tracking-widest mb-3">
            Legal & Customer Protections
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mb-3">
            Terms of Service & Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: September 2026 · Effective for all customers of Gabby's Gadget
          </p>
        </div>

        <div className="space-y-8 bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm">
          {/* Section 1: Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-foreground flex items-center gap-2">
              <Shield size={20} className="text-[#1a3dc4]" />
              1. Our Commitment to Your Privacy
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              At Gabby's Gadget, we value your trust and are dedicated to safeguarding your personal data. We collect only the information necessary to fulfill your orders, process secure payments, facilitate device swaps, and communicate important tracking updates. We will never sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          {/* Section 2: Secure Payments */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-foreground flex items-center gap-2">
              <Lock size={20} className="text-[#1a3dc4]" />
              2. Payment Processing & Security
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All electronic debit/credit card and bank transfer transactions on our platform are processed securely via <strong>Paystack</strong>, a PCI-DSS Level 1 certified payment gateway. Gabby's Gadget does not store, process, or have access to your full credit card number, CVV, or banking PINs.
            </p>
          </section>

          {/* Section 3: 7-Day Return Policy */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-foreground flex items-center gap-2">
              <RefreshCw size={20} className="text-[#1a3dc4]" />
              3. 7-Day Return & Replacement Policy
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We stand firmly behind the quality of our gadgets. If you experience any manufacturing defect or functional discrepancy upon unboxing:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground pl-4 list-disc">
              <li>You may request an exchange or full refund within <strong>7 calendar days</strong> of receiving your shipment.</li>
              <li>The item must be in its original packaging with all included accessories, documentation, and unbroken warranty seals.</li>
              <li>Returns are not eligible for accidental physical damage, liquid ingress, or unauthorized software modifications.</li>
            </ul>
          </section>

          {/* Section 4: Device Valuation & Trade-in Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-foreground flex items-center gap-2">
              <FileText size={20} className="text-[#1a3dc4]" />
              4. Buy, Sell & Swap Device Terms
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              When submitting a device for valuation or trade-in:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground pl-4 list-disc">
              <li>Online quotations provided via our valuation tool are preliminary estimates based on your submitted condition report.</li>
              <li>Final valuation is confirmed following physical device diagnostic verification by our certified technicians.</li>
              <li>Sellers must be the legitimate owner of the device and provide valid government-issued ID upon request.</li>
              <li>All personal accounts (iCloud, Google FRP, Samsung account) must be signed out prior to handover.</li>
            </ul>
          </section>

          {/* Section 5: Warranty Coverage */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-foreground flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#1a3dc4]" />
              5. Warranty Coverage
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              All Brand New devices come with a <strong>1-Year Manufacturer Warranty</strong>. Certified Open-Box and Pre-Owned gadgets include a <strong>90-Day Gabby's Gadget Limited Hardware Warranty</strong> covering logic board, display anomalies, and battery integrity.
            </p>
          </section>

          {/* Contact Information */}
          <div className="pt-6 border-t border-gray-100 text-xs text-muted-foreground">
            <p>
              Questions regarding these terms? Contact our compliance and customer team at{' '}
              <a href="mailto:support@gabbysgadget.com" className="text-[#1a3dc4] font-semibold underline">
                support@gabbysgadget.com
              </a>{' '}
              or via WhatsApp at +234 813 292 2551.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
