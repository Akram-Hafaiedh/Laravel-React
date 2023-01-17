<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    // For mass assignement protection
    protected $fillable = [
        'message',
    ];


    // to display the name of author(user) of the post
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
