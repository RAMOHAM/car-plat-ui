import {CarSale} from "@/components/CarSale";
import {NavbarComponent} from "@/components/NavbarComponent";
import {HomeSearchBar} from "@/components/HomeSearchBar";
import {MotorAppsHeading} from "@/components/MotorAppsHeading";
import carData from "../mock/carData.json"

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gray-900">
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
                  <MotorAppsHeading/>
                  <HomeSearchBar/>
              </div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-5">
              {carData.map((car, index) => (
                  <CarSale key={index} name={car.name} price={car.price}/>
              ))}
          </div>

      </main>
  );
}
