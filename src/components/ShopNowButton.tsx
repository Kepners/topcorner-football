"use client";

type ShopNowButtonProps = {
  href: string;
  targetId?: string;
  className?: string;
  label: string;
};

export default function ShopNowButton({
  href,
  targetId = "shop",
  className,
  label,
}: ShopNowButtonProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `${window.location.pathname}#${targetId}`);
      return;
    }

    window.location.assign(href);
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
