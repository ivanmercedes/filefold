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
import { Groups } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function BaseLayout({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string;
}) {
    const [openDropdowns, setOpenDropdowns] = React.useState<string[]>([]);
    const { menu } = usePage().props as unknown as { menu: Groups };
    return (
        <div className="">
            <OficialSite />
            <Header />
            {title && (
                <div className="py-20 bg-inafocam-gray">
                    <div className="container px-5 mx-auto">
                        <h1 className="text-inafocam-blue font-bold text-4xl">
                            {title}
                        </h1>
                    </div>
                </div>
            )}
            <div className="container px-5 mx-auto py-10 grid lg:grid-cols-5 lg:gap-10">
                <div className="w-72 shadow">
                    {menu.map((category: any) =>
                        category.children && category.children.length > 0 ? (
                            <React.Fragment key={`${category.slug}-category`}>
                                <DropdownMenu
                                    onOpenChange={(open) => {
                                        setOpenDropdowns((prev) =>
                                            open
                                                ? [...prev, category.name]
                                                : prev.filter(
                                                      (title) =>
                                                          title !==
                                                          category.name
                                                  )
                                        );
                                    }}
                                >
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="w-full justify-between font-normal h-100 rounded-none border-transparent focus-visible:border-transparent  outline-none focus-visible:ring-0"
                                        >
                                            <span className="text-left text-wrap">
                                                {category.name}
                                            </span>
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-200 ${
                                                    openDropdowns.includes(
                                                        category.name
                                                    )
                                                        ? "-rotate-90"
                                                        : ""
                                                }`}
                                            />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-56"
                                        align="start"
                                        side="right"
                                    >
                                        {category.children.map((child: any) => (
                                            <DropdownMenuItem
                                                key={`${category.slug}-${child.slug}`}
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
                            </React.Fragment>
                        ) : (
                            <React.Fragment key={`${category.slug}-category`}>
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
                            </React.Fragment>
                        )
                    )}
                </div>
                <main className="lg:col-span-4">{children}</main>
            </div>
            <Footer />
        </div>
    );
}
