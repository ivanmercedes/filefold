<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompraContractacionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $compras_contrataciones = [
            [
                'name' => '¿Cómo registrarse como proveedor del Estado?',
                'slug' => 'como-registrarse-proveedor-estado',
                'is_custom_page' => 1,
            ],
            [
                'name' => 'Plan anual de compras',
                'slug' => 'plan-anual-compras',
            ],
            [
                'name' => 'Licitaciones públicas Nacionales e Internacionales',
                'slug' => 'licitaciones-publicas-nacionales-internacionales',
            ],
            [
                'name' => 'Licitaciones restringidas',
                'slug' => 'licitaciones-restringidas',
            ],
            [
                'name' => 'Sorteos de obras',
                'slug' => 'sorteos-obras',
            ],
            [
                'name' => 'Comparaciones de precios',
                'slug' => 'comparaciones-precios',
            ],
            [
                'name' => 'Compras menores',
                'slug' => 'compras-menores',
            ],
            [
                'name' => 'Subastas inversas',
                'slug' => 'subastas-inversas',
            ],
            [
                'name' => 'Relación de compras por debajo del umbral',
                'slug' => 'relacion-compras-debajo-umbral',
            ],
            [
                'name' => 'Micro pequeñas y medias empresas',
                'slug' => 'micro-pequenas-medianas-empresas',
            ],
            [
                'name' => 'Casos de Seguridad y Emergencia Nacional',
                'slug' => 'casos-seguridad-emergencia-nacional',
            ],
            [
                'name' => 'Casos de Urgencias',
                'slug' => 'casos-urgencias',
            ],
            [
                'name' => 'Casos de excepcion',
                'slug' => 'casos-excepcion',
            ],
            [
                'name' => 'Estado de cuentas de suplidores',
                'slug' => 'estado-cuentas-suplidores',
            ],
            [
                'name' => 'Portal Transaccional',
                'slug' => 'portal-transaccional',
            ],
        ];

        $compras_contratacione = Category::where('slug', 'compras-contrataciones-publicas')->first();
        foreach ($compras_contrataciones as $category) {
            $compras_contratacione->children()->create($category);
        }
    }
}
