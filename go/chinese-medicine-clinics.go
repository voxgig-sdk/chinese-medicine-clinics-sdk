package voxgigchinesemedicineclinicssdk

import (
	"github.com/voxgig-sdk/chinese-medicine-clinics-sdk/go/core"
	"github.com/voxgig-sdk/chinese-medicine-clinics-sdk/go/entity"
	"github.com/voxgig-sdk/chinese-medicine-clinics-sdk/go/feature"
	_ "github.com/voxgig-sdk/chinese-medicine-clinics-sdk/go/utility"
)

// Type aliases preserve external API.
type ChineseMedicineClinicsSDK = core.ChineseMedicineClinicsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ChineseMedicineClinicsEntity = core.ChineseMedicineClinicsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ChineseMedicineClinicsError = core.ChineseMedicineClinicsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAnnualAttendancesEnEntityFunc = func(client *core.ChineseMedicineClinicsSDK, entopts map[string]any) core.ChineseMedicineClinicsEntity {
		return entity.NewAnnualAttendancesEnEntity(client, entopts)
	}
	core.NewAnnualAttendancesScEntityFunc = func(client *core.ChineseMedicineClinicsSDK, entopts map[string]any) core.ChineseMedicineClinicsEntity {
		return entity.NewAnnualAttendancesScEntity(client, entopts)
	}
	core.NewAnnualAttendancesTcEntityFunc = func(client *core.ChineseMedicineClinicsSDK, entopts map[string]any) core.ChineseMedicineClinicsEntity {
		return entity.NewAnnualAttendancesTcEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewChineseMedicineClinicsSDK = core.NewChineseMedicineClinicsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewChineseMedicineClinicsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ChineseMedicineClinicsSDK  { return NewChineseMedicineClinicsSDK(nil) }
func Test() *ChineseMedicineClinicsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
