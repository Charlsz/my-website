const contacts = [
  {
    href: "mailto:cgalvis21_@hotmail.com",
    title: "Email",
    icon: "fa-solid fa-envelope",
  },
  {
    href: "https://linkedin.com/in/cgalvisp",
    title: "LinkedIn",
    icon: "fa-brands fa-linkedin",
  },
  {
    href: "https://github.com/Charlsz",
    title: "GitHub",
    icon: "fa-brands fa-github",
  },
  {
    href: "https://www.youtube.com/@charlswfeelings",
    title: "YouTube",
    icon: "fa-brands fa-youtube",
  },
  {
    href: "https://x.com/charlswfeelings",
    title: "X",
    icon: "fa-brands fa-x-twitter",
  },
  {
    href: "https://www.instagram.com/cgalvis._/",
    title: "Instagram",
    icon: "fa-brands fa-instagram",
  },
];

export default function ContactSection() {
  return (
    <section className="section contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="section-line" />
      <div className="contact-icons">
        {contacts.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            title={c.title}
          >
            <i className={c.icon} />
          </a>
        ))}
      </div>
    </section>
  );
}
