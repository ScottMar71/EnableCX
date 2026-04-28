import Image from "next/image";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Image
      src="/logo-black.svg"
      alt="EnableCX"
      width={320}
      height={76}
      priority={priority}
      className={className}
    />
  );
}
