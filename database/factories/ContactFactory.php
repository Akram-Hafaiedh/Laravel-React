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
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeMail(),
            'phone' => fake()->e164PhoneNumber(),
            'address' => fake()->streetAddress(),
            'city' => fake()->city(),
            'region' => fake()->streetAddress(),
            'country' => fake()->countryCode(),
            'postal_code' => fake()->postcode(),

            // 'title' => fake()->jobTitle(),
            // 'suffix' => fake()->suffix(),
            // 'age' => fake()->numberBetween(0, 50),
            // 'description' => fake()->paragraph(2),
            // 'options'
        ];
    }
}
