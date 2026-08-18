# ChineseMedicineClinics SDK configuration

module ChineseMedicineClinicsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ChineseMedicineClinics",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://www.ha.org.hk/opendata",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "annual_attendances_en" => {},
          "annual_attendances_sc" => {},
          "annual_attendances_tc" => {},
        },
      },
      "entity" => {
        "annual_attendances_en" => {
          "fields" => [
            {
              "name" => "attendances",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "clinicName",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "type" => "`$STRING`",
            },
            {
              "name" => "year",
              "type" => "`$STRING`",
            },
          ],
          "name" => "annual_attendances_en",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/cmctr/annual-attendances-en.json",
                  "parts" => [
                    "cmctr",
                    "annual-attendances-en.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "annual_attendances_sc" => {
          "fields" => [
            {
              "name" => "attendances",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "clinicName",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "type" => "`$STRING`",
            },
            {
              "name" => "year",
              "type" => "`$STRING`",
            },
          ],
          "name" => "annual_attendances_sc",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/cmctr/annual-attendances-sc.json",
                  "parts" => [
                    "cmctr",
                    "annual-attendances-sc.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "annual_attendances_tc" => {
          "fields" => [
            {
              "name" => "attendances",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "clinicName",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "type" => "`$STRING`",
            },
            {
              "name" => "year",
              "type" => "`$STRING`",
            },
          ],
          "name" => "annual_attendances_tc",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/cmctr/annual-attendances-tc.json",
                  "parts" => [
                    "cmctr",
                    "annual-attendances-tc.json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ChineseMedicineClinicsFeatures.make_feature(name)
  end
end
