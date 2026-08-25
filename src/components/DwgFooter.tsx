import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function DwgFooter() {
  const { footer, footerBlurbLines, email, phone, location, name } = siteConfig;

  return (
    <footer className="dwg-footer" id="contact">
      <div className="dwg-footer-inner">
        <div className="dwg-footer-grid">
          <div className="dwg-footer-brand">
            <Logo className="logo-footer" />
            <p className="dwg-footer-blurb">
              {footerBlurbLines.map((line) => (
                <span key={line} className="dwg-footer-blurb-line">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="dwg-footer-col">
            <h3>Ecosystem</h3>
            <ul>
              {footer.ecosystem.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="dwg-footer-col">
            <h3>Company</h3>
            <ul>
              {footer.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="dwg-footer-col">
            <h3>Contact</h3>
            <ul>
              <li>{location}</li>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="dwg-footer-bottom">
          <p>© 2026 {name}. All rights reserved.</p>
          <p>{location}</p>
        </div>
      </div>
    </footer>
  );
}
