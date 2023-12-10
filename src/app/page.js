import Hero from "@/components/Home/Hero";
import DataForSale from "@/components/Shared/DataForSale";

export default function Home() {
  return (
    <>
      <Hero />;
      <DataForSale cardsLength={6} />
    </>
  );
}
