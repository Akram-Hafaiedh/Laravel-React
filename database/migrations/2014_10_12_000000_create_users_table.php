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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('account_id')->index(); // adds an index
            $table->string('first_name', 25);
            $table->string('last_name', 25);
            $table->string('password')->nullable();
            $table->string('email', 50)->unique();
            // $table->enum('status', ['active', 'pending', 'inactive', 'banned']);
            $table->boolean('admin')->default(false); // default value
            $table->string('photo_path')->nullable();

            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes(); //deleted_at (timestamp) for eloquent soft deleted
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
