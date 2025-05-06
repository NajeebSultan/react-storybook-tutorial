import React from 'react';

export type NavbarProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#282c34',
        color: '#fff',
      }}
    >
      <h1 style={{ margin: 0 }}>{title}</h1>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0 }}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: '#61dafb',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
