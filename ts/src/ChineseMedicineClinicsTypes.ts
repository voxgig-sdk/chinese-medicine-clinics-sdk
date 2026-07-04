// Typed models for the ChineseMedicineClinics SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AnnualAttendancesEn {
  attendance?: number
  clinic_name?: string
  location?: string
  year?: string
}

export type AnnualAttendancesEnListMatch = Partial<AnnualAttendancesEn>

export interface AnnualAttendancesSc {
  attendance?: number
  clinic_name?: string
  location?: string
  year?: string
}

export type AnnualAttendancesScListMatch = Partial<AnnualAttendancesSc>

export interface AnnualAttendancesTc {
  attendance?: number
  clinic_name?: string
  location?: string
  year?: string
}

export type AnnualAttendancesTcListMatch = Partial<AnnualAttendancesTc>

