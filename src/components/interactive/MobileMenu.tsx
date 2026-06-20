import { useState, useRef, useEffect, useCallback } from 'react';

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRefs = useRef<Record<number, HTMLUListElement | null>>({});

  const closeMenu = useCallback(() => {
    setActiveMenu(null);
    setMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onTriggerClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      openMenu();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    const onPageLoad = () => closeMenu();

    let trigger: HTMLElement | null = null;

    const bindTrigger = () => {
      if (trigger) trigger.removeEventListener('click', onTriggerClick);
      trigger = document.getElementById('mobile-menu-trigger');
      trigger?.addEventListener('click', onTriggerClick);
    };

    bindTrigger();
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('astro:page-load', onPageLoad);
    document.addEventListener('astro:page-load', bindTrigger);

    return () => {
      trigger?.removeEventListener('click', onTriggerClick);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('astro:page-load', onPageLoad);
      document.removeEventListener('astro:page-load', bindTrigger);
    };
  }, [openMenu, closeMenu]);

  const menuItems = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About Us', href: '/about' },
    {
      id: 3,
      label: 'Service',
      children: [
        { label: 'Rhodes Boat Tours', href: '/service/rhodes-boat-tours' },
        { label: 'Rhodes Boat Trips', href: '/service/rhodes-boat-trips' },
        { label: 'Rhodes Boat Cruises', href: '/service/rhodes-boat-cruises' },
        { label: 'Rhodes Catamaran Tours', href: '/service/rhodes-catamaran-tours' },
        { label: 'Rhodes Sailing Trips', href: '/service/rhodes-sailing-trips' },
        { label: 'Rhodes Yacht Charter', href: '/service/rhodes-charter' },
        { label: 'MICE & Incentive', href: '/service/rhodes-mice-events' },
        { label: 'Rhodes Tender Boat', href: '/service/rhodes-tender-boat' },
        { label: 'Rhodes Transfers', href: 'https://www.rhodestransfer24.com/', external: true },
        { label: 'Rhodes Sidecar Tours', href: 'https://rhodessidecartours.com/', external: true },
        { label: 'Rhodes Rent a Car', href: 'https://siech-rentacar.com/', external: true },
      ],
    },
    { id: 4, label: 'All Experiences', href: '/things-to-do' },
    { id: 5, label: 'Blog', href: '/blog' },
    { id: 6, label: 'FAQ', href: '/faq' },
    { id: 7, label: 'Contact Us', href: '/contact' },
  ];

  return (
    <div
      className={`th-menu-wrapper onepage-nav${menuOpen ? ' th-body-visible' : ''}`}
      aria-hidden={!menuOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeMenu();
      }}
    >
      <div className="th-menu-area">
        <button type="button" className="th-menu-toggle mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="th-mobile-menu" aria-label="Mobile navigation">
          <ul>
            {menuItems.map((item, idx) =>
              item.children ? (
                <li
                  key={item.id}
                  className={`menu-item-has-children th-item-has-children${activeMenu === item.id ? ' th-active' : ''}`}
                >
                  <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu(item.id); }}>
                    {item.label}
                  </a>
                  <ul
                    ref={(el) => { menuRefs.current[item.id] = el; }}
                    className="th-submenu"
                    style={{ height: '0px', overflow: 'hidden', transition: 'height 0.3s ease-in-out' }}
                  >
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <a
                          href={child.href}
                          target={child.external ? '_blank' : undefined}
                          rel={child.external ? 'noopener noreferrer' : undefined}
                          onClick={closeMenu}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.id}>
                  <a href={item.href} onClick={closeMenu}>{item.label}</a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
