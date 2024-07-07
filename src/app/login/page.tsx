import {Button} from "@nextui-org/react";


export default function Login() {
        return (
            <main className="flex justify-center items-center h-screen bg-gray-950 w-screen">
                <div className="bg-gray-700 sm:w-1/2 lg:w-2/4 h-min-[80%] px-4 py-8 rounded-md">
                    <div>
                        <div className="flex justify-center items-start">
                            <h1 className="text-5xl font-extrabold text-white to-blue-600 drop-shadow-lg"
                                style={{
                                textShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)",
                                }}
                            >
                                Motor Apps Platform
                            </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className='pt-4 text-center'>
                                <h2 className='text-white text-2xl font-semibold'>Log in to your personal account</h2>
                            </div>
                            <div className="w-[90%] lg:w-[80%]">
                                <form>
                                    <div className='pt-6'>
                                        <h2 className='text-white text-1xl font-semibold'>Email</h2>
                                        <input type='text' name='email' className='border-2 rounded-lg border-blue-950 h-12  text-blue-950 text-left block w-full p-1.5 md:p-2.5' />
                                    </div>
                                    <div className='pt-10'>
                                        <h2 className='text-white text-1xl font-semibold'>Password</h2>
                                        <input type='password' name='password' className='border-2 rounded-lg border-blue-950 text-blue-950 h-12 text-left block w-full p-1.5 md:p-2.5' />
                                    </div>
                                    <div className='flex justify-center items-center w-full pt-10'>
                                        <Button className='flex justify-center items-center px-6 py-3 text-lg font-bold text-center text-blue-950 bg-white rounded-lg hover:bg-blue-800 min-w-[150px]'>
                                            Log in
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div className='pt-8 text-center'>
                                <p className='text-white text-xl'>
                                    Don't have an account?
                                    <a className='underline text-blue-300 ml-2'>Sign Up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
}