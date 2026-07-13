import { useState, useEffect, useCallback, useMemo } from 'react';

export interface MobileNavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface MobileNavItem extends MobileNavLink {
  id?: number;
  children?: MobileNavLink[];
}

interface Props {
  menuItems: MobileNavItem[];
}

export default function MobileMenu({ menuItems }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const items = useMemo(
    () => menuItems.map((item, index) => ({ ...item, id: item.id ?? index + 1 })),
    [menuItems],
  );

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
            {items.map((item) =>
              item.children ? (
                <li
                  key={item.id}
                  className={`menu-item-has-children th-item-has-children${activeMenu === item.id ? ' th-active' : ''}`}
                >
                  {/* A real href to the section hub so a tap before hydration
                      still navigates somewhere sensible; once hydrated the click
                      is intercepted to toggle the submenu instead. */}
                  <a
                    href={item.href}
                    className="th-submenu-toggle"
                    aria-expanded={activeMenu === item.id}
                    onClick={(e) => { e.preventDefault(); toggleMenu(item.id!); }}
                  >
                    <span>{item.label}</span>
                    <svg
                      className="th-submenu-caret"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </a>
                  {/* Pure-CSS accordion: the wrapper animates grid-template-rows
                      0fr -> 1fr. No imperative height/scrollHeight measurement,
                      so it adapts to content and needs no per-toggle reflow. */}
                  <div className="th-submenu-wrap">
                    <ul className="th-submenu">
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
                  </div>
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
