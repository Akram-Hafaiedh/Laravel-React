<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'firstname' => fake()->name(),
            'lastname' => fake()->name(),
            'corporation' => fake()->company(),
            'title' => fake()->jobTitle(),
            'suffix' => fake()->suffix(),
            'address' => fake()->address(),
            'age' => fake()->numberBetween(0, 50),
            'phone' => fake()->e164PhoneNumber(),
            'description' => fake()->paragraph(2),
            // 'options'
        ];
    }
}
