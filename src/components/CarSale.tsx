"use client"

import {Button, Card, CardBody, CardFooter} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {useState} from "react";

type CarItemData = {
    name: string,
    price: string
}

export const CarSale = (carItem: CarItemData) => {
    const [isFavourite, setIsFavourite] = useState(false)
    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            <Card className="w-80" shadow="sm" isPressable={false}>
                <CardBody className="relative overflow-visible h-48 rounded-2xl">
                    <Image
                        alt="title"
                        className="w-full object-cover h-full rounded-t-lg"
                        src="/toyota.png"
                        width={100}
                        height={50}
                    />
                    <div className="absolute text-center rounded-full bg-white border-black border-2 top-0 right-0 w-8 h-8 mt-[-8px] mr-[-8px]"
                         onClick={() => {
                             setIsFavourite(!isFavourite)
                         }}
                    >
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={`${isFavourite ? 'text-sm text-red-600' : 'text-sm text-black'}`}
                        />
                    </div>
                </CardBody>
                <CardFooter className="flex flex-col text-small bg-white p-4 rounded-b-lg">
                    <div className="flex justify-between w-full">
                        <b className="text-blue-600 font-bold">{carItem.name}</b>
                        <p className="text-blue-600 font-bold">{carItem.price}</p>
                    </div>
                    <Button className="self-end bg-blue-600 text-white p-2 mt-2 w-20 rounded-2xl">Buy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}