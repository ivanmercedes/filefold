<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MarcoLegalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $marco_legal_childrens = [
            [
                'name' => 'Leyes',
                'slug' => 'leyes'
            ],
            [
                'name' => 'Decretos',
                'slug' => 'decretos'
            ],
            [
                'name' => 'Resoluciones',
                'slug' => 'resoluciones'
            ],
            [
                'name' => 'Otras Normativas',
                'slug' => 'resoluciones'
            ],
            [
                'name' => 'Reglamentos',
                'slug' => 'reglamento'
            ],

        ];

        $marco_legal = Category::where('slug', 'marco-legal-sistema-transparencia')->first();
        foreach ($marco_legal_childrens as $category) {
            $marco_legal->children()->create($category);
        }
    }
}
