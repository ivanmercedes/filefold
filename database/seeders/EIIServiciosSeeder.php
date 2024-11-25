<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EIIServiciosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $eii_list = [
            [
                'name' => 'Link de acceso al 311',
                'slug' => 'link-acceso-311',
                'custom_url' => 'https://311.gob.do/',
                'target_blank' => 1,
                'is_custom_url' => 1,

            ],
            [
                'name' => 'Estadisticas Linea 311',
                'slug' => 'estadisticas-linea-311',
            ],
        ];

        $eii = Category::where('slug', 'portal-311')->first();
        foreach ($eii_list as $category) {
            $eii->children()->create($category);
        }
    }
}
