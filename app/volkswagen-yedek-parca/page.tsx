import BrandPage, { getBrandMetadata } from "@/components/BrandPage";

export const metadata = getBrandMetadata("Volkswagen");

export default function Page() {
  return <BrandPage brand="Volkswagen" />;
}