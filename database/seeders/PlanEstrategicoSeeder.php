<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanEstrategicoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plan_estrategicos = [
            [
                'name' => 'Plan Estratégico Institucional',
                'slug' => 'plan-estrategico-institucional'
            ],
            [
                'name' => 'Memorias Institucionales',
                'slug' => 'memorias-institucionales'
            ],
            [
                'name' => 'Plan Operativo Anual (POA)',
                'slug' => 'plan-operativo-anual'
            ],
        ];

        $plan_estrategico = Category::where('slug', 'plan-estrategico-institucional')->first();
        foreach ($plan_estrategicos as $category) {
            $plan_estrategico->children()->create($category);
        }
    }
}
