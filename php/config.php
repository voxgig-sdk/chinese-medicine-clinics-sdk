<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK configuration

class ChineseMedicineClinicsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ChineseMedicineClinics",
                "slug" => "chinese-medicine-clinics",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://www.ha.org.hk/opendata",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "annual_attendances_en" => [],
                    "annual_attendances_sc" => [],
                    "annual_attendances_tc" => [],
                ],
            ],
            "entity" => [
        'annual_attendances_en' => [
          'fields' => [
            [
              'name' => 'attendances',
              'short' => 'Number of attendances for the specified year',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'clinicName',
              'short' => 'Name of the Chinese Medicine Clinic cum Training and Research Centre',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'short' => 'Location or district of the clinic',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'year',
              'short' => 'Year of the attendance record',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'annual_attendances_en',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cmctr/annual-attendances-en.json',
                  'segments' => [
                    [
                      'lit' => 'cmctr',
                    ],
                    [
                      'lit' => 'annual-attendances-en.json',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'cmctr',
                    'annual-attendances-en.json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'annual_attendances_sc' => [
          'fields' => [
            [
              'name' => 'attendances',
              'short' => 'Number of attendances for the specified year',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'clinicName',
              'short' => 'Name of the Chinese Medicine Clinic cum Training and Research Centre',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'short' => 'Location or district of the clinic',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'year',
              'short' => 'Year of the attendance record',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'annual_attendances_sc',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cmctr/annual-attendances-sc.json',
                  'segments' => [
                    [
                      'lit' => 'cmctr',
                    ],
                    [
                      'lit' => 'annual-attendances-sc.json',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'cmctr',
                    'annual-attendances-sc.json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'annual_attendances_tc' => [
          'fields' => [
            [
              'name' => 'attendances',
              'short' => 'Number of attendances for the specified year',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'clinicName',
              'short' => 'Name of the Chinese Medicine Clinic cum Training and Research Centre',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'short' => 'Location or district of the clinic',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'year',
              'short' => 'Year of the attendance record',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'annual_attendances_tc',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/cmctr/annual-attendances-tc.json',
                  'segments' => [
                    [
                      'lit' => 'cmctr',
                    ],
                    [
                      'lit' => 'annual-attendances-tc.json',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'cmctr',
                    'annual-attendances-tc.json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ChineseMedicineClinicsFeatures::make_feature($name);
    }
}
