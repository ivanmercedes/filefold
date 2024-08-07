<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Base Legal de la Institución',
                'slug' => 'base-legal-institucion'
            ],
            [
                'name' => 'Marco Legal del Sistema de Transparencia',
                'slug' => 'marco-legal-sistema-transparencia'
            ],
            [
                'name' => 'Estructura Orgánica de la Institución',
                'slug' => 'estructura-organica'
            ],
            [
                'name' => 'Oficina de Libre Acceso a la Información (OAI)',
                'slug' => 'oai'
            ],
            [
                'name' => 'Plan Estratégico Institucional',
                'slug' => 'plan-estrategico-institucional'
            ],
            [
                'name' => 'Publicaciones Oficiales',
                'slug' => 'publicaciones-oficiales'
            ],
            [
                'name' => 'Estadísticas Institucionales',
                'slug' => 'estadisticas-institucionales'
            ],
            [
                'name' => 'Información básica sobre Servicios Públicos',
                'slug' => 'informacion-basica-servicios-publicos'
            ],
            [
                'name' => 'Portal 311',
                'slug' => 'portal-311'
            ],
            [
                'name' => 'Declaraciones Juradas de Patrimonio (DJP)',
                'slug' => 'declaraciones-juradas-patrimonio'
            ],
            [
                'name' => 'Presupuesto',
                'slug' => 'presupuesto'
            ],
            [
                'name' => 'Recursos Humanos',
                'slug' => 'recursos-humanos'
            ],
            [
                'name' => 'Programas Asistenciales',
                'slug' => 'programas-asistenciales'
            ],
            [
                'name' => 'Compras y contrataciones públicas',
                'slug' => 'compras-contrataciones-publicas'
            ],
            [
                'name' => 'Proyectos y programas',
                'slug' => 'proyectos-programas'
            ],
            [
                'name' => 'Finanzas',
                'slug' => 'finanzas'
            ],
            [
                'name' => 'Datos Abiertos',
                'slug' => 'datos-abiertos'
            ],
            [
                'name' => 'Comisión de Integridad Gubernamental y Cumplimiento Normativo (CIGCN)',
                'slug' => 'cigcn'
            ],
            [
                'name' => 'Consulta Publica',
                'slug' => 'consulta-publica'
            ],
        ];

        foreach ($categories as $category) {
            \App\Models\Category::create($category);
        }

        $this->command->info('Categorías creadas correctamente');
    }
}
