import { Link } from "@inertiajs/react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="flex flex-col relative">
            <div className="border-b-2">
                <div className="container px-5 mx-auto py-3 flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center gap-6 bg-white">
                    <Link href={route("home.index")}>
                        <img
                            src="/assets/images/logo-inafocam-2024.png"
                            alt="Logo - Inafocam"
                            className="cursor-pointer w-full h-full  md:block max-w-[240px] lg:max-w-[400px]"
                        />
                    </Link>
                    <div className="hidden lg:flex items-center h-12 gap-6">
                        <button
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:R1ita:"
                            data-state="closed"
                            className="outline-none"
                            title="Menú de enlaces de Interés"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="h-8 w-8 ease-in-out active:scale-90 text-inafocam-blue"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14 10V14H10V10H14ZM16 10H21V14H16V10ZM14 21H10V16H14V21ZM16 21V16H21V20C21 20.5523 20.5523 21 20 21H16ZM14 3V8H10V3H14ZM16 3H20C20.5523 3 21 3.44772 21 4V8H16V3ZM8 10V14H3V10H8ZM8 21H4C3.44772 21 3 20.5523 3 20V16H8V21ZM8 3V8H3V4C3 3.44772 3.44772 3 4 3H8Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Navbar />
        </div>
    );
};

export default Header;
