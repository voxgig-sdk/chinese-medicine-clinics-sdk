-- ChineseMedicineClinics SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ChineseMedicineClinics",
      slug = "chinese-medicine-clinics",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://www.ha.org.hk/opendata",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["annual_attendances_en"] = {},
        ["annual_attendances_sc"] = {},
        ["annual_attendances_tc"] = {},
      },
    },
    entity = {
      ["annual_attendances_en"] = {
        ["fields"] = {
          {
            ["name"] = "attendances",
            ["short"] = "Number of attendances for the specified year",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "clinicName",
            ["short"] = "Name of the Chinese Medicine Clinic cum Training and Research Centre",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["short"] = "Location or district of the clinic",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "year",
            ["short"] = "Year of the attendance record",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "annual_attendances_en",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cmctr/annual-attendances-en.json",
                ["segments"] = {
                  {
                    ["lit"] = "cmctr",
                  },
                  {
                    ["lit"] = "annual-attendances-en.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "cmctr",
                  "annual-attendances-en.json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["annual_attendances_sc"] = {
        ["fields"] = {
          {
            ["name"] = "attendances",
            ["short"] = "Number of attendances for the specified year",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "clinicName",
            ["short"] = "Name of the Chinese Medicine Clinic cum Training and Research Centre",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["short"] = "Location or district of the clinic",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "year",
            ["short"] = "Year of the attendance record",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "annual_attendances_sc",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cmctr/annual-attendances-sc.json",
                ["segments"] = {
                  {
                    ["lit"] = "cmctr",
                  },
                  {
                    ["lit"] = "annual-attendances-sc.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "cmctr",
                  "annual-attendances-sc.json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["annual_attendances_tc"] = {
        ["fields"] = {
          {
            ["name"] = "attendances",
            ["short"] = "Number of attendances for the specified year",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "clinicName",
            ["short"] = "Name of the Chinese Medicine Clinic cum Training and Research Centre",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["short"] = "Location or district of the clinic",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "year",
            ["short"] = "Year of the attendance record",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "annual_attendances_tc",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cmctr/annual-attendances-tc.json",
                ["segments"] = {
                  {
                    ["lit"] = "cmctr",
                  },
                  {
                    ["lit"] = "annual-attendances-tc.json",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "cmctr",
                  "annual-attendances-tc.json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
