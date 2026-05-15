<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ChineseMedicineClinicsMakeContext
{
    public static function call(array $ctxmap, ?ChineseMedicineClinicsContext $basectx): ChineseMedicineClinicsContext
    {
        return new ChineseMedicineClinicsContext($ctxmap, $basectx);
    }
}
