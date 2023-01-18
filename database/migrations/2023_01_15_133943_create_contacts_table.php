<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->integer('account_id')->index();
            $table->integer('organizaion_id')->nullable()->index();
            $table->string('first_name', 25);
            $table->string('last_name', 25);
            $table->string('email', 50)->nullable();
            $table->string('phone', 50)->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('region')->nullable();
            $table->string('country', 2)->nullable();
            $table->string('postal_code', 25)->nullable();
            // $table->string('title');
            // $table->string('suffix');
            // $table->integer('age');
            // $table->string('description');
            // $table->json('options')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
};
