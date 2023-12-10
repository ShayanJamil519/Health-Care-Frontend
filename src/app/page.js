import DataForSale from "@/components/shared/DataForSale";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Hero />;
      <DataForSale cardsLength={6} />
    </>
  );
}
