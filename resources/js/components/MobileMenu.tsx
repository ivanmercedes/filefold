import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "./ui/drawer";

const MobileMenu = ({ items }: { items: any }) => {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="outline"
                    className="lg:hidden w-16 fixed bottom-10 right-4 bg-white shadow-lg z-10"
                >
                    <Menu size={50} className="!w-10 !h-8"  />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[80%] lg:h-[320px]">
                <div className="mx-auto w-full max-w-sm overflow-y-auto">
                    <DrawerHeader>
                        {/* <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>
                            Set your daily activity goal.
                        </DrawerDescription> */}
                    </DrawerHeader>
                    <div className="p-4 pb-0 ">
                        {items.map((category: any) =>
                            category.children &&
                            category.children.length > 0 ? (
                                <Accordion
                                    type="single"
                                    collapsible
                                    key={category.slug}
                                    className="w-full"
                                >
                                    <AccordionItem value={category.slug}>
                                        <AccordionTrigger>
                                            {category.name}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col space-y-2">
                                                {category.children.map(
                                                    (child) => (
                                                        <Link
                                                            key={child.slug}
                                                            href={route(
                                                                "category.view",
                                                                {
                                                                    category:
                                                                        category.slug,
                                                                    child: child.slug,
                                                                }
                                                            )}
                                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ) : (
                                <Link
                                    key={category.slug}
                                    href={route("category.view", category.slug)}
                                    className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 border-b border-gray-200"
                                >
                                    {category.name}
                                </Link>
                            )
                        )}
                    </div>
                    <DrawerFooter></DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default MobileMenu;
