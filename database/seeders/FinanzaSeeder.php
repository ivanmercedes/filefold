<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FinanzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $finanzas = [
            [
                'name' => 'Estados financieros',
                'slug' => 'estados-financieros',
            ],
            [
                'name' => 'Informes financieros',
                'slug' => 'informes-financieros',
            ],
            [
                'name' => 'Ingresos y egresos',
                'slug' => 'ingresos-egresos',
            ],
            [
                'name' => 'Informes de auditorías',
                'slug' => 'informes-auditorias',
            ],
            [
                'name' => 'Activos fijos',
                'slug' => 'activos-fijos',
            ],
            [
                'name' => 'Inventario en almacén',
                'slug' => 'inventario-almacen',
            ],
        ];

        $finanza = Category::where('slug', 'finanzas')->first();
        foreach ($finanzas as $category) {
            $finanza->children()->create($category);
        }
    }
}
