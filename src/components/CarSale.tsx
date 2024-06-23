import {Card, CardBody, CardFooter} from "@nextui-org/react";
import Image from "next/image";

export const CarSale = () => {
    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            <Card shadow="sm" isPressable>
                <CardBody className="overflow-visible p-0">
                    <Image
                        alt="title"
                        className="w-full object-cover h-[140px]"
                        src="/toyota.png"
                        width={100}
                        height={25}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>Toyota</b>
                    <p className="text-default-500">$5000.00</p>
                </CardFooter>
            </Card>
        </div>
    )
}