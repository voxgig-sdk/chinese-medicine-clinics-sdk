# ChineseMedicineClinics SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ChineseMedicineClinics",
            "slug": "chinese-medicine-clinics",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "name": "attendances",
            "short": "Number of attendances for the specified year",
            "type": "`$INTEGER`",
          },
          {
            "name": "clinicName",
            "short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "short": "Location or district of the clinic",
            "type": "`$STRING`",
          },
          {
            "name": "year",
            "short": "Year of the attendance record",
            "type": "`$STRING`",
          },
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
                  "annual-attendances-en.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "annual_attendances_sc": {
        "fields": [
          {
            "name": "attendances",
            "short": "Number of attendances for the specified year",
            "type": "`$INTEGER`",
          },
          {
            "name": "clinicName",
            "short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "short": "Location or district of the clinic",
            "type": "`$STRING`",
          },
          {
            "name": "year",
            "short": "Year of the attendance record",
            "type": "`$STRING`",
          },
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
                  "annual-attendances-sc.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "annual_attendances_tc": {
        "fields": [
          {
            "name": "attendances",
            "short": "Number of attendances for the specified year",
            "type": "`$INTEGER`",
          },
          {
            "name": "clinicName",
            "short": "Name of the Chinese Medicine Clinic cum Training and Research Centre",
            "type": "`$STRING`",
          },
          {
            "name": "location",
            "short": "Location or district of the clinic",
            "type": "`$STRING`",
          },
          {
            "name": "year",
            "short": "Year of the attendance record",
            "type": "`$STRING`",
          },
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
                  "annual-attendances-tc.json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
