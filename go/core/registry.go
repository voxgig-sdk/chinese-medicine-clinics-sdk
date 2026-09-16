package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAnnualAttendancesEnEntityFunc func(client *ChineseMedicineClinicsSDK, entopts map[string]any) ChineseMedicineClinicsEntity

var NewAnnualAttendancesScEntityFunc func(client *ChineseMedicineClinicsSDK, entopts map[string]any) ChineseMedicineClinicsEntity

var NewAnnualAttendancesTcEntityFunc func(client *ChineseMedicineClinicsSDK, entopts map[string]any) ChineseMedicineClinicsEntity

