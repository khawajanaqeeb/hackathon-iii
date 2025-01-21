// components/ContactInfo.tsx
import React from "react";

interface ContactInfoProps {
  icon: string; // e.g., 'bi bi-geo-alt-fill'
  title: string;
  description: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, description }) => (
  <div className="flex mt-6 items-start">
    <i className={`text-4xl ${icon}`}></i>
    <div className="ml-4">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
);

export default ContactInfo;
