<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Document extends Model
{
    use HasFactory;

    protected $guarded   = [];

    /**
     * Get the category that owns the document.
     */

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }


    /**
     * Get all of the downloads for the Document
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function downloads(): HasMany
    {
        return $this->hasMany(Download::class);
    }

}
