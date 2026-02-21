import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>DevEvent</p>
        </Link>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/">Event</Link>
          <Link href="/">Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

// Here we use header and nav to make it more accessible for screen readers and helps improve SEO
