<?php
declare(strict_types=1);

// Typed models for the ChineseMedicineClinics SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AnnualAttendancesEn entity data model. */
class AnnualAttendancesEn
{
    public ?int $attendance = null;
    public ?string $clinic_name = null;
    public ?string $location = null;
    public ?string $year = null;
}

/** Request payload for AnnualAttendancesEn#list. */
class AnnualAttendancesEnListMatch
{
    public ?int $attendance = null;
    public ?string $clinic_name = null;
    public ?string $location = null;
    public ?string $year = null;
}

/** AnnualAttendancesSc entity data model. */
class AnnualAttendancesSc
{
    public ?int $attendance = null;
    public ?string $clinic_name = null;
    public ?string $location = null;
    public ?string $year = null;
}

/** Request payload for AnnualAttendancesSc#list. */
class AnnualAttendancesScListMatch
{
    public ?int $attendance = null;
    public ?string $clinic_name = null;
    public ?string $location = null;
    public ?string $year = null;
}

/** AnnualAttendancesTc entity data model. */
class AnnualAttendancesTc
{
    public ?int $attendance = null;
    public ?string $clinic_name = null;
    public ?string $location = null;
    public ?string $year = null;
}

/** Request payload for AnnualAttendancesTc#list. */
class AnnualAttendancesTcListMatch
{
    public ?int $attendance = null;
    public ?string $clinic_name = null;
    public ?string $location = null;
    public ?string $year = null;
}

