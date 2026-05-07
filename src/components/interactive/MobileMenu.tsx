import { useState, useRef, useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRefs = useRef<Record<number, HTMLUListElement | null>>({});

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  useEffect(() => {
    Object.keys(menuRefs.current).forEach((key) => {
      const submenu = menuRefs.current[Number(key)];
      if (submenu) {
        submenu.style.height = activeMenu === Number(key) ? `${submenu.scrollHeight}px` : '0px';
      }
    });
  }, [activeMenu]);

  const menuItems = [
    {
      id: 1,
      label: 'Home',
      href: '/',
    },
    { id: 0, label: 'About Us', href: '/about' },
    {
      id: 3,
      label: 'Service',
      children: [
        { label: 'All Services', href: '/service' },
        { label: 'Rhodes Rent a Boat', href: '/service/rhodes-rent-a-boat' },
        { label: 'Rhodes Boat Tours', href: '/service/rodos-boat-tours' },
        { label: 'Rhodes Boat Trips', href: '/service/rhodes-boat-trips' },
        { label: 'Rhodes Boat Cruises', href: '/service/rodos-boat-cruises' },
        { label: 'Rhodes Catamaran Tours', href: '/service/rhodes-catamaran-tours' },
        { label: 'Rhodes Sailing Trips', href: '/service/rhodes-sailing-trips' },
        { label: 'Rhodes Yacht Charter', href: '/service/rodos-charter' },
        { label: 'MICE & Incentive', href: '/service/rhodes-mice-events' },
        { label: 'Rhodes Tender Boat', href: '/service/rodos-tender-boat' },
        { label: 'Rhodes Transfers', href: '/service/rhodes-transfers' },
        { label: 'Rhodes Sidecar Tours', href: '/service/rhodes-sidecar-tours' },
        { label: 'Rhodes Rent a Car', href: 'https://siech-rentacar.com/', external: true },
      ],
    },
    { id: 5, label: 'Best Boat Tours in Rhodes', href: '/things-to-do' },
    {
      id: 7,
      label: 'Blog',
      href: '/blog',
    },
    { id: 0, label: 'FAQ', href: '/faq' },
    { id: 0, label: 'Contact Us', href: '/contact' },
  ];

  const closeMenu = () => {
    const wrapper = document.querySelector('.th-menu-wrapper');
    if (wrapper) {
      wrapper.classList.remove('th-body-visible');
      (wrapper as HTMLElement).style.visibility = 'hidden';
    }
    if (typeof onClose === 'function') onClose();
  };

  return (
    <div
      className={`th-menu-wrapper onepage-nav ${isOpen ? 'th-body-visible' : ''}`}
      style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeMenu();
      }}
    >
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={closeMenu} aria-label="Close menu">
          <i className="fas fa-times" aria-hidden="true" />
        </button>

        <div className="mobile-logo">
          <a href="/">
            <img src="/assets/img/logo2.svg" alt="Rhodes Rent a Boat" />
          </a>
        </div>

        <div className="th-mobile-menu">
          <ul>
            {menuItems.map((item, idx) =>
              item.children ? (
                <li
                  key={idx}
                  className={`menu-item-has-children ${item.id === 1 ? 'mega-menu-wrap' : ''} th-item-has-children ${activeMenu === item.id ? 'th-active' : ''}`}
                >
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu(item.id); }}>
                    {item.label}
                  </a>
                  <ul
                    ref={(el) => { menuRefs.current[item.id] = el; }}
                    className="th-submenu"
                    style={{ height: '0px', overflow: 'hidden', transition: 'height 0.3s ease-in-out' }}
                  >
                    {item.children.map((child: any, cidx) => (
                      <li key={cidx}>
                        <a
                          href={child.href}
                          target={child.external ? '_blank' : undefined}
                          rel={child.external ? 'noopener noreferrer' : undefined}
                        >{child.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={idx}>
                  <a href={item.href}>{item.label}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
