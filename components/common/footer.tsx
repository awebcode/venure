import {
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {FaInstagram, FaPinterest,FaYoutube} from "react-icons/fa"
const footerLinks = {
  support: {
    title: "Support",
    links: [
      { label: "Coronavirus (COVID-19)", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Manage your trips", href: "#" },
      { label: "Contact Customer Service", href: "#" },
      { label: "Safety Resource Center", href: "#" },
    ],
  },
  discover: {
    title: "Discover",
    links: [
      { label: "Genius loyalty program", href: "#" },
      { label: "Seasonal and holiday deals", href: "#" },
      { label: "Travel articles", href: "#" },
      { label: "Booking.com for Business", href: "#" },
      { label: "Traveller Review Awards", href: "#" },
      { label: "Car rental", href: "#" },
      { label: "Flight finder", href: "#" },
      { label: "Restaurant reservations", href: "#" },
      { label: "Booking.com for Travel Agents", href: "#" },
    ],
  },
  terms: {
    title: "Terms and settings",
    links: [
      { label: "Privacy & cookies", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Dispute resolution", href: "#" },
      { label: "Don't sell or share my personal information", href: "#" },
      { label: "Modern Slavery Statement", href: "#" },
      { label: "Human Rights Statement", href: "#" },
    ],
  },
  partners: {
    title: "Partners",
    links: [
      { label: "Extranet login", href: "#" },
      { label: "Partner help", href: "#" },
      { label: "List your property", href: "#" },
      { label: "Become an affiliate", href: "#" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "About evenure.com", href: "#" },
      { label: "How We Work", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Press center", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Investor relations", href: "#" },
      { label: "Corporate contact", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "Youtube" },
  { icon: FaPinterest, href: "#", label: "Pinterest" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <Image src="/logo.svg" alt="venure logo" width={120} height={40} />
            <ul className="space-y-2 mt-6">
              {footerLinks.support.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-evenure-blue hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {Object.values(footerLinks)
            .filter((section) => section.title !== "Support")
            .map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-evenure-blue hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="mt-12 flex flex-wrap md:flex-nowrap justify-end space-x-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                className="bg-black hover:bg-gray-700 text-white hover:text-gray-200 p-2 rounded-full transition-all duration-300"
                aria-label={social.label}
              >
                <Icon fill="#fff" strokeWidth={0} className="h-8 w-8" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
