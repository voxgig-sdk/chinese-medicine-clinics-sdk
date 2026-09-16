# ChineseMedicineClinics SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
                "segments": [
                  {
                    "lit": "cmctr",
                  },
                  {
                    "lit": "annual-attendances-en.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "cmctr",
                  "annual-attendances-en.json",
                ],
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
                "segments": [
                  {
                    "lit": "cmctr",
                  },
                  {
                    "lit": "annual-attendances-sc.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "cmctr",
                  "annual-attendances-sc.json",
                ],
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
                "segments": [
                  {
                    "lit": "cmctr",
                  },
                  {
                    "lit": "annual-attendances-tc.json",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "cmctr",
                  "annual-attendances-tc.json",
                ],
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
