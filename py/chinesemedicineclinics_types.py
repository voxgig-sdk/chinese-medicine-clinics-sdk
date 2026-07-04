# Typed models for the ChineseMedicineClinics SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class AnnualAttendancesEn:
    attendance: Optional[int] = None
    clinic_name: Optional[str] = None
    location: Optional[str] = None
    year: Optional[str] = None


@dataclass
class AnnualAttendancesEnListMatch:
    attendance: Optional[int] = None
    clinic_name: Optional[str] = None
    location: Optional[str] = None
    year: Optional[str] = None


@dataclass
class AnnualAttendancesSc:
    attendance: Optional[int] = None
    clinic_name: Optional[str] = None
    location: Optional[str] = None
    year: Optional[str] = None


@dataclass
class AnnualAttendancesScListMatch:
    attendance: Optional[int] = None
    clinic_name: Optional[str] = None
    location: Optional[str] = None
    year: Optional[str] = None


@dataclass
class AnnualAttendancesTc:
    attendance: Optional[int] = None
    clinic_name: Optional[str] = None
    location: Optional[str] = None
    year: Optional[str] = None


@dataclass
class AnnualAttendancesTcListMatch:
    attendance: Optional[int] = None
    clinic_name: Optional[str] = None
    location: Optional[str] = None
    year: Optional[str] = None

