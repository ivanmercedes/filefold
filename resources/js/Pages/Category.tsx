import ContentRenderer from "@/components/ContentRender";
import ProcurementListing from "@/components/ProcurementListing";
import BaseLayout from "@/Layouts/BaseLayout";
import { Page, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Welcome({ page }: PageProps<{ page: Page }>) {
    return (
        <>
            <Head title={page.name} />
            <BaseLayout title={page.name}>
                <article className="overflow-hidden rounded shadow transition h-full p-5">
                    {/* {!page?.content && (
                        <h1 className="text-2xl font-bold pb-5 border-b-2">
                            {page.name}
                        </h1>
                    )} */}
                    {page?.content ? (
                        <ContentRenderer content={page?.content} />
                    ) : (
                        <div>{page.description}</div>
                    )}

                    <h2 className="text-3xl font-bold my-5">Documentos</h2>
                    <div className="flex items-center p-4 bg-white shadow border rounded">
                        <div className="flex items-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
                                alt="PDF Icon"
                                className="w-10 h-10"
                            />
                        </div>

                        <div className="ml-4 flex-grow">
                            <h6 className="text-lg font-semibold">
                                Resolución 2-2023
                            </h6>
                            <p className="text-sm text-gray-500">
                                28.30MB fecha de subida: 17 enero, 2024
                            </p>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition"
                            >
                                Descargar
                            </a>
                        </div>
                    </div>







                    <h2 className="text-3xl font-bold my-5">Ejemplo procesos</h2>
                    <ProcurementListing type="process" />

                    <h2 className="text-3xl font-bold my-5">Ejemplo filtro documentos</h2>
                    <ProcurementListing type="files" />
                </article>
            </BaseLayout>
        </>
    );
}
