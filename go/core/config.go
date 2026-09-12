package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ChineseMedicineClinics",
			"slug": "chinese-medicine-clinics",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.ha.org.hk/opendata",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"annual_attendances_en": map[string]any{},
				"annual_attendances_sc": map[string]any{},
				"annual_attendances_tc": map[string]any{},
			},
		},
		"entity": map[string]any{
			"annual_attendances_en": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attendances",
						"short": "Number of attendances for the specified year",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "clinicName",
						"short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"short": "Location or district of the clinic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"short": "Year of the attendance record",
						"type": "`$STRING`",
					},
				},
				"name": "annual_attendances_en",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/cmctr/annual-attendances-en.json",
								"segments": []any{
									map[string]any{
										"lit": "cmctr",
									},
									map[string]any{
										"lit": "annual-attendances-en.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cmctr",
									"annual-attendances-en.json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"annual_attendances_sc": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attendances",
						"short": "Number of attendances for the specified year",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "clinicName",
						"short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"short": "Location or district of the clinic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"short": "Year of the attendance record",
						"type": "`$STRING`",
					},
				},
				"name": "annual_attendances_sc",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/cmctr/annual-attendances-sc.json",
								"segments": []any{
									map[string]any{
										"lit": "cmctr",
									},
									map[string]any{
										"lit": "annual-attendances-sc.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cmctr",
									"annual-attendances-sc.json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"annual_attendances_tc": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attendances",
						"short": "Number of attendances for the specified year",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "clinicName",
						"short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"short": "Location or district of the clinic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "year",
						"short": "Year of the attendance record",
						"type": "`$STRING`",
					},
				},
				"name": "annual_attendances_tc",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/cmctr/annual-attendances-tc.json",
								"segments": []any{
									map[string]any{
										"lit": "cmctr",
									},
									map[string]any{
										"lit": "annual-attendances-tc.json",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cmctr",
									"annual-attendances-tc.json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
