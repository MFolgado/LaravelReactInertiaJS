<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        $faker = Faker\Factory::create('pt_BR');
        for ($i = 0; $i < 50; $i++) {
            User::create([
                'name'       => $faker->name,
                'email'      => $faker->email,
                'password'   => bcrypt('secret'),
                'remember_token' => Str::random(10)            ]);
        }
    }
}
