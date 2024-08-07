<?php

namespace App\Enums;

use Filament\Support\Contracts\HasLabel;

enum DocumentStatusEnum: string implements HasLabel
{
    case Published = 'published';
    case Draft = 'draft';
    case Archived = 'archived';

    public function getLabel(): ?string
    {
        return match ($this) {
            self::Published => 'Publicado',
            self::Draft => 'Borrador',
            self::Archived => 'Archivado',
        };
    }
}
