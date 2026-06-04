import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { site } from '@/lib/site';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.privacy;

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 4, 2026">
      <p>
        This Privacy Policy describes how {site.name} (&quot;we&quot;, &quot;our&quot;, or
        &quot;us&quot;) handles information when you use the {site.name} mobile application (
        {site.packageId}) and this website ({site.url}).
      </p>

      <h2>Summary</h2>
      <p>
        {site.name} is designed to keep your financial data on your device. We do not operate a
        cloud database of your balances, accounts, or holdings. We do not link to banks or
        brokerages.
      </p>

      <h2>Information stored on your device</h2>
      <p>
        The app stores accounts, assets, liabilities, snapshots, and settings locally using on-device
        storage (SQLite). This data is not transmitted to our servers by default.
      </p>

      <h2>Optional backup (Premium)</h2>
      <p>
        If you use backup and restore, you export a file to a location you choose (e.g. Files,
        iCloud Drive). We do not receive or host that file.
      </p>

      <h2>Purchases</h2>
      <p>
        Premium purchases are processed by Apple App Store or Google Play. We use RevenueCat to
        validate entitlements. RevenueCat and the stores may receive device and purchase identifiers
        as described in their respective privacy policies. We do not receive your payment card
        details.
      </p>

      <h2>Website</h2>
      <p>
        This marketing site may use minimal cookies or analytics in the future. See our{' '}
        <a href="/cookies/">Cookie Policy</a>. We do not collect financial data through the website.
      </p>

      <h2>Data retention and deletion</h2>
      <p>
        To delete app data, use in-app clear data or uninstall the app. For purchase or account
        questions, contact{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>Children</h2>
      <p>{site.name} is not directed at children under 13. We do not knowingly collect data from children.</p>

      <h2>Changes</h2>
      <p>We may update this policy. Material changes will be reflected by updating the date above.</p>

      <h2>Contact</h2>
      <p>
        Questions: <a href={`mailto:${site.legalEmail}`}>{site.legalEmail}</a>
      </p>
    </LegalLayout>
  );
}
