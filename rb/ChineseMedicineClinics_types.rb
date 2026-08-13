# frozen_string_literal: true

# Typed models for the ChineseMedicineClinics SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AnnualAttendancesEn entity data model.
#
# @!attribute [rw] attendances
#   @return [Integer, nil]
#
# @!attribute [rw] clinicName
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
AnnualAttendancesEn = Struct.new(
  :attendances,
  :clinicName,
  :location,
  :year,
  keyword_init: true
)

# Request payload for AnnualAttendancesEn#list.
#
# @!attribute [rw] attendances
#   @return [Integer, nil]
#
# @!attribute [rw] clinicName
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
AnnualAttendancesEnListMatch = Struct.new(
  :attendances,
  :clinicName,
  :location,
  :year,
  keyword_init: true
)

# AnnualAttendancesSc entity data model.
#
# @!attribute [rw] attendances
#   @return [Integer, nil]
#
# @!attribute [rw] clinicName
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
AnnualAttendancesSc = Struct.new(
  :attendances,
  :clinicName,
  :location,
  :year,
  keyword_init: true
)

# Request payload for AnnualAttendancesSc#list.
#
# @!attribute [rw] attendances
#   @return [Integer, nil]
#
# @!attribute [rw] clinicName
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
AnnualAttendancesScListMatch = Struct.new(
  :attendances,
  :clinicName,
  :location,
  :year,
  keyword_init: true
)

# AnnualAttendancesTc entity data model.
#
# @!attribute [rw] attendances
#   @return [Integer, nil]
#
# @!attribute [rw] clinicName
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
AnnualAttendancesTc = Struct.new(
  :attendances,
  :clinicName,
  :location,
  :year,
  keyword_init: true
)

# Request payload for AnnualAttendancesTc#list.
#
# @!attribute [rw] attendances
#   @return [Integer, nil]
#
# @!attribute [rw] clinicName
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [String, nil]
AnnualAttendancesTcListMatch = Struct.new(
  :attendances,
  :clinicName,
  :location,
  :year,
  keyword_init: true
)

