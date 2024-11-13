import ContentRenderer from "@/components/ContentRender";
import BaseLayout from "@/Layouts/BaseLayout";
import { Page, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Welcome({
    page,
}: PageProps<{
    page: Page;
}>) {
    return (
        <>
            <Head title="Welcome" />
            <BaseLayout>
                <article className="overflow-hidden rounded shadow transition h-full p-5 wrapper">
                    <ContentRenderer content={page.content} />
                </article>
            </BaseLayout>
        </>
    );
}
