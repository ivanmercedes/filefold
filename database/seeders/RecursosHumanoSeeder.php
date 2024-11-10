<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecursosHumanoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $recursos_humanos = [
            [
                'name' => 'Nómina',
                'slug' => 'nomina',
            ],
            [
                'name' => 'Jubilaciones, pensiones y retiros',
                'slug' => 'jubilaciones-pensiones-retiros',
            ],
            [
                'name' => 'Portal Concursa - Vacantes',
                'slug' => 'portal-concursa-vacantes',
            ],
        ];

        $recursos_humano = Category::where('slug', 'recursos-humanos')->first();
        foreach ($recursos_humanos as $category) {
            $recursos_humano->children()->create($category);
        }
    }
}
