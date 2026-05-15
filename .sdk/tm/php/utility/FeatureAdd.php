<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK utility: feature_add

class ChineseMedicineClinicsFeatureAdd
{
    public static function call(ChineseMedicineClinicsContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
