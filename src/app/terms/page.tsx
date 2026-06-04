import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { site } from '@/lib/site';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.terms;

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 4, 2026">
      <p>
        By downloading or using {site.name} ({site.packageId}), you agree to these Terms. If you do
        not agree, do not use the app.
      </p>

      <h2>Service description</h2>
      <p>
        {site.name} is a personal finance tool for manually tracking net worth. It is not financial
        advice, tax advice, or investment advice. You are responsible for the accuracy of data you
        enter.
      </p>

      <h2>License</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable license to use the app for personal,
        non-commercial purposes, subject to these Terms and app store rules.
      </p>

      <h2>Premium purchases</h2>
      <p>
        Premium is a one-time in-app purchase for lifetime access to listed features on your store
        account, subject to platform terms. Prices are shown in your local currency at purchase.
        Refunds are handled by Apple or Google per their policies — contact the store, not us, for
        refund requests unless required by law.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Keep your device and backups secure.</li>
        <li>Do not misuse the app for unlawful purposes.</li>
        <li>Do not reverse engineer or redistribute the app except as allowed by law.</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE
        UNINTERRUPTED OR ERROR-FREE OPERATION. NET WORTH FIGURES ARE BASED ON YOUR INPUTS ONLY.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for indirect, incidental, or
        consequential damages arising from use of the app, including data loss. Our total liability
        shall not exceed the amount you paid for Premium in the twelve months preceding the claim.
      </p>

      <h2>Termination</h2>
      <p>You may stop using the app at any time. We may discontinue the service with reasonable notice where practicable.</p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by applicable laws in your jurisdiction of residence unless
        mandatory consumer protections require otherwise.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.legalEmail}`}>{site.legalEmail}</a>
      </p>
    </LegalLayout>
  );
}
