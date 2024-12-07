
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-400">
            <strong>Effective Date:</strong> September 10, 2024
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-gray-400">
            BlockvoteX ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website, use our platform, or engage with our services.
          </p>

          <h3 className="text-2xl font-bold text-white">1. Information We Collect</h3>
          <p className="text-gray-400">
            We may collect personal data from you when you interact with our platform. This includes:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li><strong>Identity Data:</strong> First name, last name, username, and other identification data.</li>
            <li><strong>Contact Data:</strong> Email address, phone number, and physical address.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, time zone settings, and other data related to your device and access method.</li>
            <li><strong>Usage Data:</strong> Information on how you use our platform, services, and voting features.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white">2. How We Use Your Data</h3>
          <p className="text-gray-400">
            We use your personal data in the following ways:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>To provide you access to our voting services.</li>
            <li>To verify your identity and maintain security on our platform.</li>
            <li>To communicate with you about updates, changes to services, or issues regarding your account.</li>
            <li>To improve our platform, analyze usage, and troubleshoot technical issues.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white">3. Data Sharing</h3>
          <p className="text-gray-400">
            We do not share your personal data with third parties except under the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>With trusted service providers who assist us in running the platform (e.g., hosting services, database management).</li>
            <li>If required by law, regulation, or to comply with legal processes.</li>
            <li>To enforce our terms of service, protect our rights, or ensure the safety of our users.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white">4. Data Security</h3>
          <p className="text-gray-400">
            We take the security of your personal data seriously. We have implemented appropriate security measures to prevent unauthorized access, alteration, or disclosure of your data. However, no system is completely secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-2xl font-bold text-white">5. Your Rights</h3>
          <p className="text-gray-400">
            Depending on your jurisdiction, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>The right to access the personal data we hold about you.</li>
            <li>The right to request corrections of inaccurate data.</li>
            <li>The right to request deletion of your personal data.</li>
            <li>The right to object to the processing of your data in certain circumstances.</li>
            <li>The right to withdraw consent where we rely on it to process your data.</li>
          </ul>

          <h3 className="text-2xl font-bold text-white">6. Cookies</h3>
          <p className="text-gray-400">
            We use cookies and similar technologies to track your usage of the platform, personalize your experience, and for analytics purposes. You can manage your cookie preferences through your browser settings.
          </p>

          <h3 className="text-2xl font-bold text-white">7. Changes to This Privacy Policy</h3>
          <p className="text-gray-400">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <h3 className="text-2xl font-bold text-white">8. Contact Us</h3>
          <p className="text-gray-400">
            If you have any questions about this privacy policy or how we handle your personal data, please contact us at:
          </p>
          <p className="text-gray-400">Email: <a href="mailto:privacy@blockvotex.com" className="text-blue-500">privacy@blockvotex.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;