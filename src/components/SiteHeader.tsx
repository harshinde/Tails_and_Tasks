import { SoftPawHeart } from "@/components/icons/SoftPawHeart";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Paws & Tasks home">
          <SoftPawHeart className="site-header__mark" />
          <span className="site-header__wordmark">Paws &amp; Tasks</span>
        </a>
        <p className="site-header__proof">Join 10,000+</p>
      </div>
    </header>
  );
}
