<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ChineseMedicineClinicsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ChineseMedicineClinicsBaseFeature();
            case "test":
                return new ChineseMedicineClinicsTestFeature();
            default:
                return new ChineseMedicineClinicsBaseFeature();
        }
    }
}
