import Image from "next/image";

/**
 * This is the section containing all brands and links them to the
 * cars of the specific brands that were clicked
 */
export const BrandSection = () => {
    const brandLogos = [
        "/brandLogos/nissan.png",
        "/brandLogos/toyotaLogo.png",
        "/brandLogos/mercedes.png",
        "/brandLogos/honda.png",
        "/brandLogos/ford.png"
    ]
    return (
        <div className="flex flex-col bg-white border-2 border-gray-900 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 items-center p-12 w-screen">
            <div className="text-2xl font-extrabold text-gray-900 text-center mb-10">Our Brands</div>
            <div className="grid gap-24 grid-cols-5">
                {brandLogos.map((logo, index) => (
                    <Image src={logo} alt={"brandLogo"} key={index} width={100} height={100}/>
                ))}
            </div>
        </div>
    )
}