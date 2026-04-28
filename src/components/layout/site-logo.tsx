import Image from "next/image";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Image
      src="/logo-primary.png"
      alt="EnableCX"
      width={768}
      height={228}
      priority={priority}
      className={className}
    />
  );
}
