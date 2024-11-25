<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BaseLegalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $base_legal_childrens = [
            [
                'name' => 'Constitución de la República Dominicana',
                'slug' => 'constitucion-republica-dominicana',
            ],
            [
                'name' => 'Leyes',
                'slug' => 'leyes',
            ],
            [
                'name' => 'Decretos',
                'slug' => 'decretos',
            ],
            [
                'name' => 'Resoluciones',
                'slug' => 'resoluciones',
            ],
            [
                'name' => 'Otras Normativas',
                'slug' => 'otras-normativas',
            ],
            [
                'name' => 'Reglamentos',
                'slug' => 'reglamentos',
            ],
        ];

        // add base legal childrens
        $base_legal = Category::where('slug', 'base-legal-institucion')->first();
        foreach ($base_legal_childrens as $category) {
            $base_legal->children()->create($category);
        }
    }
}
