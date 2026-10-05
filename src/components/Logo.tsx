import Image from "next/image";

type Props = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
  alt?: string;
};

export default function Logo({
  variant = "dark",
  className = "h-12 w-auto",
  priority = false,
  alt = "",
}: Props) {
  return (
    <Image
      src={variant === "light" ? "/logo-light.png" : "/logo.png"}
      alt={alt}
      width={813}
      height={241}
      priority={priority}
      className={className}
    />
  );
}
