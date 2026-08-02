import { SoftPawHeart } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Paws & Tasks home">
          <SoftPawHeart className="site-header__mark" size={32} />
          <span className="site-header__wordmark">Paws &amp; Tasks</span>
        </a>
      </div>
    </header>
  );
}
