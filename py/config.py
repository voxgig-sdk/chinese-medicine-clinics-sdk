# ChineseMedicineClinics SDK configuration


def make_config():
    return {
        "main": {
            "name": "ChineseMedicineClinics",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.ha.org.hk/opendata",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "annual_attendances_en": {},
                "annual_attendances_sc": {},
                "annual_attendances_tc": {},
            },
        },
        "entity": {
      "annual_attendances_en": {
        "fields": [
          {
            "active": True,
            "name": "attendance",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "clinic_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "location",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "year",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "annual_attendances_en",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/cmctr/annual-attendances-en.json",
                "parts": [
                  "cmctr",
                  "annual-attendances-en.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "annual_attendances_sc": {
        "fields": [
          {
            "active": True,
            "name": "attendance",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "clinic_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "location",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "year",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "annual_attendances_sc",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/cmctr/annual-attendances-sc.json",
                "parts": [
                  "cmctr",
                  "annual-attendances-sc.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "annual_attendances_tc": {
        "fields": [
          {
            "active": True,
            "name": "attendance",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "clinic_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "location",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "year",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "annual_attendances_tc",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/cmctr/annual-attendances-tc.json",
                "parts": [
                  "cmctr",
                  "annual-attendances-tc.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
