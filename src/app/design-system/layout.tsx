import DesignContainer from "@/features/design-system/container/design-container";

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DesignContainer>{children}</DesignContainer>;
}
