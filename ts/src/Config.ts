
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ChineseMedicineClinics',
        slug: "chinese-medicine-clinics",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://www.ha.org.hk/opendata",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      annual_attendances_en: {
      },

      annual_attendances_sc: {
      },

      annual_attendances_tc: {
      },

    }
  }


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
              "parts": [
                "cmctr",
                "annual-attendances-en.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "cmctr",
                "annual-attendances-sc.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "cmctr",
                "annual-attendances-tc.json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

