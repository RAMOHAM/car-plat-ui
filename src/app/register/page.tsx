import {Button} from "@nextui-org/react";
import Image from "next/image";


export default function Register(){
    return(
        <>
            <main className="flex justify-center items-center h-screen bg-gray-950 w-screen">
                <div className="flex flex-col w-1/6 bg-gray-700 h-3/4 items-center justify-center">
                    <Image src="/brandLogos/carloginPage.png" alt="carImg" width={200} height={200}/>
                    <h2 className="text-white font-bold text-xl text-center">Ready to begin your journey? </h2>
                    <h2 className="text-gray-400 font-bold text-sm mt-1 text-center">Find all the best deals easily near you based on your interest.</h2>
                </div>
                <div className="flex flex-col w-1/3 bg-white h-3/4 items-center">
                    <h2 className="text-gray-600 font-bold text-2xl mt-5">Create an Account</h2>
                    <div className="w-3/4 pt-4">
                        <h2 className="text-gray-600 font-bold text-lg text-left">Username</h2>
                        <input type="text" placeholder="Enter Username ..."
                               className="border-gray-900 border-2 rounded-lg h-10 text-left block w-full text-gray-900 p-1.5"></input>
                        <h2 className="text-gray-600 font-bold text-lg text-left pt-4">Email</h2>
                        <input type="email" placeholder="Enter Email Address ..."
                               className="border-gray-900 border-2 rounded-lg h-10 text-left block w-full text-gray-900 p-1.5"></input>
                        <h2 className="text-gray-600 font-bold text-lg text-left pt-4">Password</h2>
                        <input type="password" placeholder="Enter Password ..."
                               className="border-gray-900 border-2 rounded-lg h-10 text-left block w-full text-gray-900 p-1.5"></input>
                        <h2 className="text-gray-600 font-bold text-lg text-left pt-4">Confirm Password</h2>
                        <input type="password" placeholder="Confirm Password ..."
                               className="border-gray-900 border-2 rounded-lg h-10 text-left block w-full text-gray-900 p-1.5"></input>
                    </div>
                    <Button className="bg-gray-900 text-white text-lg rounded-md w-3/4 mt-10 ">
                        Register Account
                    </Button>
                    <div className="bg-gray-900 text-lg w-4/5 mt-10 h-0.5 mb-10"></div>
                    <h2 className="text-gray-600 font-bold text-2xl">Have an Account Already ? </h2>
                    <h2 className="text-blue-700 font-bold text-xl">Sign In</h2>
                </div>
            </main>
        </>
    )
}