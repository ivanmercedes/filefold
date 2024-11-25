<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserAndRoleSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(MarcoLegalSeeder::class);
        $this->call(PlanEstrategicoSeeder::class);
        $this->call(OaiSeeder::class);
        $this->call(InformacionBasicaServiciosSeeder::class);
        $this->call(EIIServiciosSeeder::class);
        $this->call(BaseLegalSeeder::class);
        $this->call(PresupuestoSeeder::class);
        $this->call(RecursosHumanoSeeder::class);
        $this->call(CompraContractacionesSeeder::class);
        $this->call(ProyectoProgramasSeeder::class);
        $this->call(FinanzaSeeder::class);

    }
}
