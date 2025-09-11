import React from 'react';

const socialMediaIcons = [
  {
    name: 'WhatsApp',
    icon: '/footer/WhatsApp.webp',
    url: 'https://whatsapp.com',
    alt: 'WhatsApp',
  },
  {
    name: 'Instagram',
    icon: '/footer/Instagram.jpg',
    url: 'https://instagram.com', 
    alt: 'Instagram',
  },
  {
    name: 'Facebook',
    icon: '/footer/FB.png',
    url: 'https://facebook.com',
    alt: 'Facebook',
  },
];

const footerLinks = {
  privacy: [
    { title: 'Terms of use', url: '/terms' },
    { title: 'privacy policy', url: '/privacy' },
    { title: 'cookies', url: '/cookies' },
  ],
  aboutUs: [
    { title: 'Find a location', url: '/locations' },
    { title: 'About us', url: '/about' },
    { title: 'Our story', url: '/story' },
  ],
  information: [
    { title: 'Plans and pricing', url: '/pricing' },
    { title: 'Sell your Product', url: '/sell' },
    { title: 'Jobs', url: '/jobs' },
  ],
  service: [
    { title: 'Shop', url: '/shop' },
    { title: 'Order ahead', url: '/order' },
    { title: 'Menu', url: '/menu' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative w-full h-80 overflow-hidden">
      {/* Coffee beans background */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/footer/footerbg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Coffee title at top left */}
      <div className="absolute top-6 left-6 z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 font-serif">
          Coffee
        </h1>
      </div>

      {/* Footer links sections */}
      <div className="absolute top-16 left-35 right-6 z-10 mt-8">
        <div className="flex flex-wrap justify-start gap-8 md:gap-16">
          {/* Privacy */}
          <div className="min-w-32">
            <h4 className="text-lg font-bold mb-5 uppercase tracking-wide text-black">
              PRIVACY
            </h4>
            <ul className="space-y-1">
              {footerLinks.privacy.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="text-lg text-gray-800 hover:text-amber-900 transition-colors block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="min-w-32">
            <h4 className="text-lg font-bold mb-5 uppercase tracking-wide text-black">
              ABOUT US
            </h4>
            <ul className="space-y-1">
              {footerLinks.aboutUs.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="text-lg text-gray-800 hover:text-amber-900 transition-colors block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="min-w-32">
            <h4 className="text-lg font-bold mb-5 uppercase tracking-wide text-black">
              INFORMATION
            </h4>
            <ul className="space-y-1">
              {footerLinks.information.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="text-lg text-gray-800 hover:text-amber-900 transition-colors block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div className="min-w-32">
            <h4 className="text-lg font-bold mb-5 uppercase tracking-wide text-black">
              SERVICE
            </h4>
            <ul className="space-y-1">
              {footerLinks.service.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="text-lg text-gray-800 hover:text-amber-900 transition-colors block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Logo at bottom left */}
      <div className="absolute left-6 bottom-6 z-20">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <img
            src="/footer/logo.jpg"
            alt="Love Coffee Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* Social Media at bottom right */}
      <div className="absolute right-6 bottom-6 z-20">
        <div className="text-right">
          <span className="text-lg font-bold text-amber-800 mb-2 bg-white bg-opacity-90 px-3 py-1 rounded inline-block">
            Social Media
          </span>
          <div className="flex gap-3 mt-2 justify-end">
            {socialMediaIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className="bg-white rounded-lg shadow-lg p-2 hover:shadow-xl transition-shadow w-12 h-12 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-8 h-8 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;