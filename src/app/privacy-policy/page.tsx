export default function PrivacyPolicy() {
    return (
      <div className="container bg-[#FFF3E3]  mx-auto px-4 py-8">
        <h1 className="text-4xl text-[#B88E2F] text-center font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-[#9F9F9F]  mb-4">
          At Furniro, your privacy is our priority. This Privacy Policy explains
          how we collect, use, and protect your personal information when you
          visit our website or make a purchase.
        </p>
  
        {/* Data Collection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">What Information We Collect</h2>
          <p className="text-[#9F9F9F] text-lg">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Name, email address, phone number, and shipping address.</li>
            <li>Payment information (processed securely through third-party providers).</li>
            <li>Browsing activity, IP address, and cookies for website analytics.</li>
          </ul>
        </section>
  
        {/* Data Usage Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
          <p className="text-[#9F9F9F] text-lg">
            We use your personal information to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Process and deliver your orders.</li>
            <li>Provide customer support and respond to your inquiries.</li>
            <li>Send updates about your orders or promotional offers (with your consent).</li>
            <li>Improve our website experience through analytics.</li>
          </ul>
        </section>
  
        {/* Third-Party Sharing Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Sharing Your Information</h2>
          <p className="text-[#9F9F9F] text-lg">
            We may share your information with trusted third parties, such as:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Payment processors to handle secure transactions.</li>
            <li>Delivery partners for shipping your orders.</li>
            <li>Analytics providers to improve website performance.</li>
          </ul>
          <p className="mt-4 text-[#9F9F9F]">
            We do not sell or share your personal information with unauthorized
            third parties.
          </p>
        </section>
  
        {/* Security Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">How We Protect Your Information</h2>
          <p className="text-[#9F9F9F] text-lg">
            We take appropriate measures to ensure the security of your personal
            information, including encryption and secure server storage. However,
            no system is 100% secure, so please use our website responsibly.
          </p>
        </section>
  
        {/* Cookies Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Cookies and Tracking</h2>
          <p className="text-[#9F9F9F] text-lg">
            Our website uses cookies to enhance your browsing experience. Cookies
            help us analyze website performance and remember your preferences. You
            can disable cookies in your browser settings if you prefer.
          </p>
        </section>
  
        {/* Contact Information Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-[#9F9F9F] text-lg">
            If you have any questions about this Privacy Policy or how we handle
            your data, please contact us:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Email: <a href="mailto:support@furniro.com" className="text-black">support@furniro.com</a></li>
            <li>Phone: +92-XXX-XXXXXXX</li>
            <li>Address: Karachi, Pakistan</li>
          </ul>
        </section>
  
        <p className="text-[#9F9F9F] text-lg">
          By using our website, you agree to this Privacy Policy. We may update
          this policy periodically, so please review it regularly.
        </p>
      </div>
    );
  }
  