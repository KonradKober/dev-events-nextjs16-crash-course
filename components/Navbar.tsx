'use client';
import Link from 'next/link';
import Image from 'next/image';
import posthog from 'posthog-js';

const Navbar = () => {
  const handleNavClick = (label: string) => {
    posthog.capture('navbar_link_clicked', {
      link_label: label,
    });
  };

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={() => handleNavClick('Logo')}>
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>DevEvent</p>
        </Link>
        <ul>
          <Link href="/" onClick={() => handleNavClick('Home')}>Home</Link>
          <Link href="/" onClick={() => handleNavClick('Event')}>Event</Link>
          <Link href="/" onClick={() => handleNavClick('Create Event')}>Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// Here we use header and nav to make it more accessible for screen readers and helps improve SEO
