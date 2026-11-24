import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, CalendarDays, Menu, Phone, X } from "lucide-react";

import cedarRetreatLogo from "@/assets/Cedar_Retreat_Logo-removebg-preview.png";
import { Button } from "@/components/ui/button";
import { cedarContact, cedarNavigation } from "@/lib/cedar-content";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container nav-inner">
          <Link className="brand-link" to="/" aria-label="Cedar Retreat Nanyuki home">
            <img className="brand-logo" src={cedarRetreatLogo} alt="Cedar Retreat Nanyuki" />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {cedarNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "nav-link-active" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild variant="default" className="nav-visit">
            <Link to="/contact">
              <CalendarDays aria-hidden="true" />
              Plan a visit
            </Link>
          </Button>

          <details
            className="mobile-menu"
            open={menuOpen}
            onToggle={(event) => setMenuOpen(event.currentTarget.open)}
          >
            <summary aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </summary>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {cedarNavigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "nav-link-active" }}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link className="mobile-nav-cta" to="/contact" onClick={closeMenu}>
                Plan a visit <ArrowRight aria-hidden="true" />
              </Link>
            </nav>
          </details>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <Link className="footer-brand" to="/" aria-label="Back to Cedar Retreat home">
              <img src={cedarRetreatLogo} alt="Cedar Retreat Nanyuki" loading="lazy" />
            </Link>
            <p className="footer-tagline">Compassion. Dignity. Independence</p>
            <span className="footer-sub">
              Thoughtful retirement living for older adults and peace of mind for families in Nanyuki, Kenya.
            </span>
          </div>

          <div className="footer-links-col">
            <h4>Explore</h4>
            <ul>
              {cedarNavigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>For Families</h4>
            <ul>
              <li>
                <Link to="/resources">Family Guide &amp; FAQs</Link>
              </li>
              <li>
                <Link to="/living">Independent &amp; Supported Living</Link>
              </li>
              <li>
                <Link to="/media">Photos &amp; Video Tours</Link>
              </li>
              <li>
                <a href={`tel:${cedarContact.phoneLink}`}>
                  <Phone aria-hidden="true" /> {cedarContact.phoneNumber}
                </a>
              </li>
              <li>
                <Link to="/contact" className="footer-cta-link">
                  Arrange a visit <ArrowRight aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Cedar Retreat Nanyuki. All rights reserved.</span>
          <a href="#top">
            Back to top <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}
