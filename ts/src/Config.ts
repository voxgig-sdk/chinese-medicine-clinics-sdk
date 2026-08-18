
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


  main = {
    name: 'ChineseMedicineClinics',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "clinicName",
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "type": "`$STRING`"
        },
        {
          "name": "year",
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
          "type": "`$INTEGER`"
        },
        {
          "name": "clinicName",
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "type": "`$STRING`"
        },
        {
          "name": "year",
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
          "type": "`$INTEGER`"
        },
        {
          "name": "clinicName",
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "type": "`$STRING`"
        },
        {
          "name": "year",
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

