import BrandPage, { getBrandMetadata } from "@/components/BrandPage";

export const metadata = getBrandMetadata("Seat");

export default function Page() {
  return <BrandPage brand="Seat" />;
}