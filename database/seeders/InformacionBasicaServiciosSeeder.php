<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InformacionBasicaServiciosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $infomacion_basica_sobre_servicios = [

            [
                'name' => 'Carta Compromiso al Ciudadano (CCC)',
                'slug' => 'carta-compromiso-al-ciudadano'
            ],
            [
                'name' => 'Información básica sobre los servicios',
                'slug' => 'información-basica-sobre-los-servicios',
                'custom_url' => '#',
                'target_blank' => 1,
                'is_custom_url' => 1,
            ],
        ];

        $infomacion_basica_sobre_servicio = Category::where('slug', 'informacion-basica-servicios-publicos')->first();
        foreach ($infomacion_basica_sobre_servicios as $category) {
            $infomacion_basica_sobre_servicio->children()->create($category);
        }
    }
}
