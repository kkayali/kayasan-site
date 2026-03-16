import BrandPage, { getBrandMetadata } from "@/components/BrandPage";

export const metadata = getBrandMetadata("Audi");

export default function Page() {
  return <BrandPage brand="Audi" />;
}