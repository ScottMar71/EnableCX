import Image from "next/image";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Image
      src="/logo-primary-correct.png"
      alt="EnableCX"
      width={1024}
      height={282}
      priority={priority}
      className={className}
    />
  );
}
