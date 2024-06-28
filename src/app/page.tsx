import {CarSale} from "@/components/CarSale";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CarSale name={"2015 - Toyota"} price={"$5000.00"} />
        <CarSale name={"2018 - Honda"} price={"$3700.00"} />
    </main>
  );
}
