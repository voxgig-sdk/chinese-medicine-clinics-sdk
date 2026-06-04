# ChineseMedicineClinics SDK

Annual attendance figures for Hong Kong's Chinese medicine clinics and training & research centres

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Chinese Medicine Clinics

This SDK wraps the Chinese Medicine Clinics attendance feeds published by the [Hong Kong Hospital Authority](https://www.ha.org.hk/opendata). The Hospital Authority is the statutory body that manages Hong Kong's public hospitals and clinics, and it releases service statistics — including attendance counts for its Chinese medicine clinics and training & research centres (CMCTR) — as open JSON files.

What you get from the API:

- Annual attendance totals for Chinese medicine clinics and training & research centres operated under the Hospital Authority.
- Three parallel feeds covering the same data in English, Traditional Chinese, and Simplified Chinese.
- Static JSON documents served directly over HTTPS from `www.ha.org.hk/opendata`.

The endpoints are unauthenticated and CORS-enabled, so they can be called from browsers as well as servers. Because the feeds are flat JSON files refreshed by the publisher, there is no rate limit documented and no query parameters — clients fetch the whole document and read the language edition they need.

## Try it

**TypeScript**
```bash
npm install chinese-medicine-clinics
```

**Python**
```bash
pip install chinese-medicine-clinics-sdk
```

**PHP**
```bash
composer require voxgig/chinese-medicine-clinics-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/chinese-medicine-clinics-sdk/go
```

**Ruby**
```bash
gem install chinese-medicine-clinics-sdk
```

**Lua**
```bash
luarocks install chinese-medicine-clinics-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ChineseMedicineClinicsSDK } from 'chinese-medicine-clinics'

const client = new ChineseMedicineClinicsSDK({})

// List all annualattendancesens
const annualattendancesens = await client.AnnualAttendancesEn().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o chinese-medicine-clinics-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "chinese-medicine-clinics": {
      "command": "/abs/path/to/chinese-medicine-clinics-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **AnnualAttendancesEn** | Annual attendance figures for Chinese medicine clinics and training & research centres, English edition — served from `https://www.ha.org.hk/opendata/cmctr/cmctr-attnd-en.json`. | `/cmctr/annual-attendances-en.json` |
| **AnnualAttendancesSc** | The same annual attendance figures in Simplified Chinese — served from `https://www.ha.org.hk/opendata/cmctr/cmctr-attnd-sc.json`. | `/cmctr/annual-attendances-sc.json` |
| **AnnualAttendancesTc** | The same annual attendance figures in Traditional Chinese — served from `https://www.ha.org.hk/opendata/cmctr/cmctr-attnd-tc.json`. | `/cmctr/annual-attendances-tc.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from chinesemedicineclinics_sdk import ChineseMedicineClinicsSDK

client = ChineseMedicineClinicsSDK({})

# List all annualattendancesens
annualattendancesens, err = client.AnnualAttendancesEn(None).list(None, None)
```

### PHP

```php
<?php
require_once 'chinesemedicineclinics_sdk.php';

$client = new ChineseMedicineClinicsSDK([]);

// List all annualattendancesens
[$annualattendancesens, $err] = $client->AnnualAttendancesEn(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/chinese-medicine-clinics-sdk/go"

client := sdk.NewChineseMedicineClinicsSDK(map[string]any{})

// List all annualattendancesens
annualattendancesens, err := client.AnnualAttendancesEn(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "ChineseMedicineClinics_sdk"

client = ChineseMedicineClinicsSDK.new({})

# List all annualattendancesens
annualattendancesens, err = client.AnnualAttendancesEn(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("chinese-medicine-clinics_sdk")

local client = sdk.new({})

-- List all annualattendancesens
local annualattendancesens, err = client:AnnualAttendancesEn(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ChineseMedicineClinicsSDK.test()
const result = await client.AnnualAttendancesEn().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ChineseMedicineClinicsSDK.test(None, None)
result, err = client.AnnualAttendancesEn(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ChineseMedicineClinicsSDK::test(null, null);
[$result, $err] = $client->AnnualAttendancesEn(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.AnnualAttendancesEn(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ChineseMedicineClinicsSDK.test(nil, nil)
result, err = client.AnnualAttendancesEn(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:AnnualAttendancesEn(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Chinese Medicine Clinics

- Upstream: [https://www.ha.org.hk/opendata](https://www.ha.org.hk/opendata)
- API docs: [https://freepublicapis.com/chinese-medicine-clinics](https://freepublicapis.com/chinese-medicine-clinics)

- Data is published by the Hong Kong Hospital Authority as part of its open data programme.
- Refer to the Hospital Authority website (`ha.org.hk`) for the current terms of use and attribution requirements.
- The dataset is provided in three language editions (English, Traditional Chinese, Simplified Chinese) covering the same underlying figures.

---

Generated from the Chinese Medicine Clinics OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
