import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OficialSite from "@/components/OficialSite";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import { PropsWithChildren } from "react";

interface BaseLayoutProps extends PropsWithChildren {
    groups: Array<{
        name: string;
        slug: string;
        children?: Array<{ name: string; slug: string }>;
    }>;
}

export default function BaseLayout({ children, groups }: BaseLayoutProps) {
    return (
        <div className="">
            <OficialSite />
            <Header />

            <div className="container px-5 mx-auto py-10 grid lg:grid-cols-5 lg:gap-10">
                <div className="w-72 shadow-lg">
                    {groups.map((category: any) =>
                        category.children && category.children.length > 0 ? (
                            <>
                                <DropdownMenu key={category.name}>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-between font-normal h-100 rounded-none border-transparent focus-visible:border-transparent  outline-none focus-visible:ring-0"
                                        >
                                            <span className="text-left text-wrap">
                                                {category.name}
                                            </span>
                                            <ChevronDown className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-56"
                                        align="start"
                                        side="right"
                                    >
                                        {category.children.map((child: any) => (
                                            <DropdownMenuItem
                                                key={child.name}
                                                asChild
                                            >
                                                <Link
                                                    href={route(
                                                        "category.view",
                                                        {
                                                            category:
                                                                category.slug,
                                                            child: child.slug,
                                                        }
                                                    )}
                                                    className="flex w-full items-center"
                                                >
                                                    {/* <ChevronRight className="mr-2 h-4 w-4" /> */}
                                                    {child.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenuSeparator className="py-0 my-0" />
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start font-normal h-100 rounded-none border-transparent focus-visible:border-transparent focus-visible:ring-0 outline-none"
                                    asChild
                                >
                                    <Link
                                        key={category.name}
                                        href={route(
                                            "category.view",
                                            category.slug
                                        )}
                                        className="text-wrap"
                                    >
                                        <span>{category.name}</span>
                                    </Link>
                                </Button>
                                <DropdownMenuSeparator className="py-0 my-0" />
                            </>
                        )
                    )}
                </div>
                <main className="lg:col-span-4">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
