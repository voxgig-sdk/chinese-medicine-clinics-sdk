"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'ChineseMedicineClinics',
        slug: "chinese-medicine-clinics",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://www.ha.org.hk/opendata",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            annual_attendances_en: {},
            annual_attendances_sc: {},
            annual_attendances_tc: {},
        }
    };
    entity = {
        "annual_attendances_en": {
            "fields": [
                {
                    "name": "attendances",
                    "short": "Number of attendances for the specified year",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "clinicName",
                    "short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
                    "type": "`$STRING`"
                },
                {
                    "name": "location",
                    "short": "Location or district of the clinic",
                    "type": "`$STRING`"
                },
                {
                    "name": "year",
                    "short": "Year of the attendance record",
                    "type": "`$STRING`"
                }
            ],
            "name": "annual_attendances_en",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cmctr/annual-attendances-en.json",
                            "segments": [
                                {
                                    "lit": "cmctr"
                                },
                                {
                                    "lit": "annual-attendances-en.json"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "cmctr",
                                "annual-attendances-en.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "annual_attendances_sc": {
            "fields": [
                {
                    "name": "attendances",
                    "short": "Number of attendances for the specified year",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "clinicName",
                    "short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
                    "type": "`$STRING`"
                },
                {
                    "name": "location",
                    "short": "Location or district of the clinic",
                    "type": "`$STRING`"
                },
                {
                    "name": "year",
                    "short": "Year of the attendance record",
                    "type": "`$STRING`"
                }
            ],
            "name": "annual_attendances_sc",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cmctr/annual-attendances-sc.json",
                            "segments": [
                                {
                                    "lit": "cmctr"
                                },
                                {
                                    "lit": "annual-attendances-sc.json"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "cmctr",
                                "annual-attendances-sc.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "annual_attendances_tc": {
            "fields": [
                {
                    "name": "attendances",
                    "short": "Number of attendances for the specified year",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "clinicName",
                    "short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
                    "type": "`$STRING`"
                },
                {
                    "name": "location",
                    "short": "Location or district of the clinic",
                    "type": "`$STRING`"
                },
                {
                    "name": "year",
                    "short": "Year of the attendance record",
                    "type": "`$STRING`"
                }
            ],
            "name": "annual_attendances_tc",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cmctr/annual-attendances-tc.json",
                            "segments": [
                                {
                                    "lit": "cmctr"
                                },
                                {
                                    "lit": "annual-attendances-tc.json"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "cmctr",
                                "annual-attendances-tc.json"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map