<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PresupuestoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $presupuestos = [
            [
                'name' => 'Presupuesto aprobado del año',
                'slug' => 'presupuesto-aprobado-anio',
            ],
            [
                'name' => 'Ejecución del Presupuesto',
                'slug' => 'ejecucion-presupuesto',
            ],
        ];

        $presupuesto = Category::where('slug', 'presupuesto')->first();
        foreach ($presupuestos as $category) {
            $presupuesto->children()->create($category);
        }
    }
}
