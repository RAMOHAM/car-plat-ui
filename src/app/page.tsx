import {CarSale} from "@/components/homepage/CarSale";
import {NavbarComponent} from "@/components/homepage/NavbarComponent";
import {HomeSearchBar} from "@/components/homepage/HomeSearchBar";
import {MotorAppsHeading} from "@/components/homepage/MotorAppsHeading";
import carData from "../mock/carData.json"
import {BrandSection} from "@/components/homepage/BrandSection";

/**
 * This is the main application running, using components from other files
 * and bringing them in together to display the UI of the entire application
 */
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
            <BrandSection/>
            <div className="grid grid-cols-4 gap-4 pt-10 mb-20">
                {carData.map((car, index) => (
                    <CarSale key={index} name={car.name} price={car.price}/>
                ))}
            </div>
            <footer className="bg-gray-800 text-white py-8 w-screen h-auto">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h5 className="font-bold mb-2">Company</h5>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h5 className="font-bold mb-2">Support</h5>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h5 className="font-bold mb-2">Follow Us</h5>
                            <ul className="flex space-x-4">
                                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400">
                        © 2024 Your Company. All rights reserved.
                    </div>
                </div>
            </footer>
        </main>
    );
}
