// Typed models for the ChineseMedicineClinics SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// AnnualAttendancesEn is the typed data model for the annual_attendances_en entity.
type AnnualAttendancesEn struct {
	Attendance *int `json:"attendance,omitempty"`
	ClinicName *string `json:"clinic_name,omitempty"`
	Location *string `json:"location,omitempty"`
	Year *string `json:"year,omitempty"`
}

// AnnualAttendancesEnListMatch mirrors the annual_attendances_en fields as an all-optional match
// filter (Go analog of Partial<AnnualAttendancesEn>).
type AnnualAttendancesEnListMatch struct {
	Attendance *int `json:"attendance,omitempty"`
	ClinicName *string `json:"clinic_name,omitempty"`
	Location *string `json:"location,omitempty"`
	Year *string `json:"year,omitempty"`
}

// AnnualAttendancesSc is the typed data model for the annual_attendances_sc entity.
type AnnualAttendancesSc struct {
	Attendance *int `json:"attendance,omitempty"`
	ClinicName *string `json:"clinic_name,omitempty"`
	Location *string `json:"location,omitempty"`
	Year *string `json:"year,omitempty"`
}

// AnnualAttendancesScListMatch mirrors the annual_attendances_sc fields as an all-optional match
// filter (Go analog of Partial<AnnualAttendancesSc>).
type AnnualAttendancesScListMatch struct {
	Attendance *int `json:"attendance,omitempty"`
	ClinicName *string `json:"clinic_name,omitempty"`
	Location *string `json:"location,omitempty"`
	Year *string `json:"year,omitempty"`
}

// AnnualAttendancesTc is the typed data model for the annual_attendances_tc entity.
type AnnualAttendancesTc struct {
	Attendance *int `json:"attendance,omitempty"`
	ClinicName *string `json:"clinic_name,omitempty"`
	Location *string `json:"location,omitempty"`
	Year *string `json:"year,omitempty"`
}

// AnnualAttendancesTcListMatch mirrors the annual_attendances_tc fields as an all-optional match
// filter (Go analog of Partial<AnnualAttendancesTc>).
type AnnualAttendancesTcListMatch struct {
	Attendance *int `json:"attendance,omitempty"`
	ClinicName *string `json:"clinic_name,omitempty"`
	Location *string `json:"location,omitempty"`
	Year *string `json:"year,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
