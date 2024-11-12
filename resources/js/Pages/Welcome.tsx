import BaseLayout from "@/Layouts/BaseLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Welcome({
    auth,
    groups,
    page,
}: PageProps<{
    groups: {
        name: string;
        slug: string;
        children?: { name: string; slug: string }[];
    }[];
    page: any;
}>) {
    console.log(page);
    return (
        <>
            <Head title="Welcome" />
            <BaseLayout groups={groups}>
                <article className="overflow-hidden rounded shadow transition hover:shadow-lg h-full">
                    <div
                        className="p-10 wrapper"
                        dangerouslySetInnerHTML={{ __html: page.description }}
                    />
                </article>
            </BaseLayout>
        </>
    );
}
