<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProyectoProgramasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $poryectos_programas = [
            [
                'name' => 'Descripción de los proyectos y programas',
                'slug' => 'descripcion-proyectos-programas',
            ],
            [
                'name' => 'Informes de seguimientos a los programas y proyectos',
                'slug' => 'informes-seguimientos-programas-proyectos',
            ],
            [
                'name' => 'Calendario de ejecución a los programas y proyectos',
                'slug' => 'calendario-ejecucion-programas-proyectos',
            ],
            [
                'name' => 'Informes de presupuestos sobre programas y proyectos',
                'slug' => 'informes-presupuestos-programas-proyectos',
            ],
        ];

        $poryectos_programa = Category::where('slug', 'proyectos-programas')->first();
        foreach ($poryectos_programas as $category) {
            $poryectos_programa->children()->create($category);
        }
    }
}
