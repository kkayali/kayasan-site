import BrandPage, { getBrandMetadata } from "@/components/BrandPage";

export const metadata = getBrandMetadata("Skoda");

export default function Page() {
  return <BrandPage brand="Skoda" />;
}