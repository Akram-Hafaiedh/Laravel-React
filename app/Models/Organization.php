<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Organization extends Model
{
    use SoftDeletes, HasFactory;

    //! SoftDeletes deleted_at (timestamps)

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
}
