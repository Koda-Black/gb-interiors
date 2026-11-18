type BrandLockupProps = {
  display?: boolean;
};

export default function BrandLockup({ display = false }: BrandLockupProps) {
  return (
    <span className={`brand-lockup${display ? ' brand-lockup-display' : ''}`}>
      <img className="brand-logo" src="/gb-interiors-logo.png" alt="" width="1536" height="1024" decoding="async" />
    </span>
  );
}
