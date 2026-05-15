<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK utility: prepare_body

class ChineseMedicineClinicsPrepareBody
{
    public static function call(ChineseMedicineClinicsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
