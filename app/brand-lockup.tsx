type BrandLockupProps = {
  display?: boolean;
};

export default function BrandLockup({ display = false }: BrandLockupProps) {
  return (
    <span className={`brand-lockup${display ? ' brand-lockup-display' : ''}`}>
      <span className="brand-emblem" aria-hidden="true">
        <img src="/gb-monogram.png" alt="" />
      </span>
      <span className="brand-copy">
        <strong>GB INTERIORS</strong>
        <small>CREATING YOUR DREAM HOME</small>
      </span>
    </span>
  );
}
