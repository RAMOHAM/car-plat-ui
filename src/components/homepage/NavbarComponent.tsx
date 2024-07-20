import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

/**
 * Displays the navbar found in the homepage, and it's respective URLs
 */
export const NavbarComponent = () => {
    return(
        <>
            <Navbar className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-50" shouldHideOnScroll>
                <NavbarBrand>
                    <p className="font-bold text-inherit pl-10">MOTOR APPS</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-8 mr-auto pl-10">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            HOME
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            MANUFACTURERS
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            CONTACT US
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} className="mr-5 text-blue-950 bg-white text-lg font-bold pl-5 pr-5 pt-2 pb-2 rounded-2xl" href="/login" variant="flat">
                            Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}