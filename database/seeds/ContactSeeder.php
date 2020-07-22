<?php

use Illuminate\Database\Seeder;
use App\Contact;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Contact::truncate();
        $faker = Faker\Factory::create('pt_BR');
        for ($i = 0; $i < 50; $i++) {
            Contact::create([
                'name'       => $faker->name,
                'cpf'        => $faker->cpf,
                'birthday'   => $faker->date($format = 'Y-m-d', $max = 'now'),
                'phone'      => $faker->phoneNumber,
                'cell_phone' => $faker->cellphoneNumber,
                'email'      => $faker->email,
            ]);
        }
    }
}
