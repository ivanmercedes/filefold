import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    AlertCircle,
    Calendar,
    ExternalLink,
    FileText,
    Filter,
    Search,
} from "lucide-react";

export default function ProcurementListing({ type }: { type: string }) {
    const years = [
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
    ];

    const months = [
        { value: "all", label: "Todos los Meses" },
        { value: "01", label: "Enero" },
        { value: "02", label: "Febrero" },
        { value: "03", label: "Marzo" },
        { value: "04", label: "Abril" },
    ];

    return (
        <div className="container mx-auto py-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-wrap  items-center  gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Año de publicación:</span>
                    {years.map((year) => (
                        <Button
                            key={year.value}
                            variant={
                                year.value === "2024" ? "default" : "outline"
                            }
                            className="w-20"
                        >
                            {year.label}
                        </Button>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Buscar..."
                            className="pl-8"
                        />
                    </div>

                    <div className="flex gap-4 items-center w-full sm:w-auto">
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full sm:w-[200px]">
                                <SelectValue placeholder="Seleccionar mes" />
                            </SelectTrigger>
                            <SelectContent>
                                {months.map((month) => (
                                    <SelectItem
                                        key={month.value}
                                        value={month.value}
                                    >
                                        {month.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                            <Filter className="h-4 w-4" />
                            24 documentos
                        </span>
                    </div>
                </div>

                <div className="grid gap-4">
                    {type === "process" ? (
                        <>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-base font-bold flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-base" />
                                        INAFOCAM-CCC-PEPU-2024-0005
                                    </CardTitle>
                                    <span className="text-sm text-muted-foreground">
                                        Octubre 2024
                                    </span>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Renovación De Los Servicios De Soporte,
                                        Mantenimiento Y Licencias Para El
                                        Software De Planificación Y Monitoreo
                                        Khristal, Utilizado Por La Dirección Y
                                        Departamentos De Planificación Y
                                        Desarrollo.
                                    </p>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto mt-2 flex items-center gap-1"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        VER PROCESO
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50">
                                <CardContent className="p-6 flex items-center gap-3">
                                    <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                                    <p className="text-muted-foreground mb-0">
                                        Durante el mes de{" "}
                                        <span className="font-medium">
                                            Septiembre del 2024
                                        </span>{" "}
                                        no se realizó ningún proceso de compras
                                        bajo esta modalidad.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-base font-bold flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-base" />
                                        INAFOCAM-CCC-PEPB-2024-0003
                                    </CardTitle>
                                    <span className="text-sm text-muted-foreground">
                                        Agosto 2024
                                    </span>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Servicio De Contratación De
                                        Publicaciones A Través De Medios De
                                        Comunicación, Correspondientes Al
                                        Período 2024-2025.
                                    </p>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto mt-2 flex items-center gap-1"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        VER PROCESO
                                    </Button>
                                </CardContent>
                            </Card>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
