import { siteConfig } from "@/lib/site";

export function DwgFooter() {
  const { footer, footerBlurb, email, phone, location, name } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="dwg-footer" id="contact">
      <div className="dwg-footer-inner">
        <div className="dwg-footer-grid">
          <div className="dwg-footer-brand">
            <a href="/" className="dwg-footer-wordmark">
              {name}
            </a>
            <p className="dwg-footer-blurb">{footerBlurb}</p>
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
          <p>© {year} {name}. All rights reserved.</p>
          <p>{location}</p>
        </div>
      </div>
    </footer>
  );
}
