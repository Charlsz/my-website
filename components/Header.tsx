import Image from "next/image";

export default function Header() {
  return (
    <header className="masthead">
      <div className="header-line" />
      <h1 className="site-title">Charlie</h1>
      <p className="tagline">Software Engineering Student</p>
      <div className="header-line" />
      <Image
        src="/images/cat-pixel.gif"
        width={50}
        height={50}
        alt="Pixel cat"
        unoptimized
      />
    </header>
  );
}
