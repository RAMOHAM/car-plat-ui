import {CarSale} from "@/components/CarSale";
import {NavbarComponent} from "@/components/NavbarComponent";
import {HomeSearchBar} from "@/components/HomeSearchBar";
import {MotorAppsHeading} from "@/components/MotorAppsHeading";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
          <NavbarComponent/>
          <div
              className="flex flex-col items-center justify-center w-screen p-24 top-0 relative"
              style={{
                  backgroundImage: "url('/car.gif')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
              }}
          >
              <div
                  className="absolute inset-0"
                  style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
              ></div>
              <div className="relative z-10">
                  <MotorAppsHeading />
                  <HomeSearchBar />
              </div>
          </div>
          <div className="relative">
              <CarSale name={"2015 - Toyota"} price={"$5000.00"}/>
              <CarSale name={"2018 - Honda"} price={"$3700.00"}/>
          </div>

      </main>
  );
}
