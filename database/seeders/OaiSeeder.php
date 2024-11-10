<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OaiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $oai_childrens = [
            [
                'name' =>  'Derechos de los ciudadanos',
                'slug' =>  'derechos-ciudadanos',
            ],
            [
                'name' =>  'Estructura organizacional de la OAI',
                'slug' => 'estructura-organizacional-oai'
            ],
            [
                'name' =>  'Manual de organización de la OAI',
                'slug' => 'manual-organizacion-oai'
            ],
            [
                'name' =>  'Manual de procedimientos de la OAI',
                'slug' => 'manual-procedimientos-oai'
            ],
            [
                'name' =>  'Estadísticas y balances de la gestión OAI',
                'slug' => 'estadisticas-balances-gestion-oai'
            ],
            [
                'name' =>  'Contactos del RAI',
                'slug' => 'contactos-rai'
            ],
            [
                'name' =>  'Información clasificada',
                'slug' => 'informacion-clasificada'
            ],
            [
                'name' =>  'Indice de documentos',
                'slug' => 'indice-documentos'
            ],
            [
                'name' =>  'Formulario de solicitud de información pública',
                'slug' => 'formulario-solicitud-informacion-publica'
            ],
            [
                'name' =>  'Indice de Transparencia Estandarizado',
                'slug' => 'indice-transparencia-estandarizado'
            ],
        ];

        $oai = Category::where('slug', 'oai')->first();
        foreach ($oai_childrens as $category) {
            $oai->children()->create($category);
        }
    }
}
