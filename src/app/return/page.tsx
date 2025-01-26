export default function ReturnPolicy() {
    return (
      <div className="container bg-[#FFF3E3] mx-auto px-4 py-8">
        <h1 className="text-4xl  text-[#B88E2F] font-bold mb-4">Return Policy</h1>
        <p className="text-lg text-[#9F9F9F]">
          At Furniro, we want you to love your furniture. If you are not satisfied
          with your purchase, you can return it within 7 days of delivery under
          the following conditions:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>The item must be unused and in its original condition.</li>
          <li>The original packaging must be intact.</li>
          <li>Custom-made furniture is non-returnable.</li>
        </ul>
        <p className="mt-4 text-lg text-[#9F9F9F]">
          For more details, please contact our support team at support@furniro.com.
        </p>
      </div>
    );
  }
  