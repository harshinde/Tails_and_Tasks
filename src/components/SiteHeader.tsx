import { CommunityJoin, SoftPawHeart } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="Paws & Tasks home">
          <SoftPawHeart className="site-header__mark" size={32} />
          <span className="site-header__wordmark">Paws &amp; Tasks</span>
        </a>
        <p className="site-header__proof">
          <CommunityJoin
            className="site-header__community"
            size={20}
            title="Community"
            variant="default"
          />
          <span>Join 10,000+</span>
        </p>
      </div>
    </header>
  );
}
