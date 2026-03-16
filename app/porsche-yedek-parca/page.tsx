import BrandPage, { getBrandMetadata } from "@/components/BrandPage";

export const metadata = getBrandMetadata("Porsche");

export default function Page() {
  return <BrandPage brand="Porsche" />;
}