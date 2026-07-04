# ChineseMedicineClinics TypeScript SDK Reference

Complete API reference for the ChineseMedicineClinics TypeScript SDK.


## ChineseMedicineClinicsSDK

### Constructor

```ts
new ChineseMedicineClinicsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ChineseMedicineClinicsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ChineseMedicineClinicsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ChineseMedicineClinicsSDK` instance in test mode.


### Instance Methods

#### `AnnualAttendancesEn(data?: object)`

Create a new `AnnualAttendancesEn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnnualAttendancesEnEntity` instance.

#### `AnnualAttendancesSc(data?: object)`

Create a new `AnnualAttendancesSc` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnnualAttendancesScEntity` instance.

#### `AnnualAttendancesTc(data?: object)`

Create a new `AnnualAttendancesTc` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnnualAttendancesTcEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ChineseMedicineClinicsSDK.test()`.

**Returns:** `ChineseMedicineClinicsSDK` instance in test mode.


---

## AnnualAttendancesEnEntity

```ts
const annual_attendances_en = client.AnnualAttendancesEn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attendance` | ``$INTEGER`` | No |  |
| `clinic_name` | ``$STRING`` | No |  |
| `location` | ``$STRING`` | No |  |
| `year` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AnnualAttendancesEn().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnnualAttendancesEnEntity` instance with the same client and
options.

#### `client()`

Return the parent `ChineseMedicineClinicsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnnualAttendancesScEntity

```ts
const annual_attendances_sc = client.AnnualAttendancesSc()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attendance` | ``$INTEGER`` | No |  |
| `clinic_name` | ``$STRING`` | No |  |
| `location` | ``$STRING`` | No |  |
| `year` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AnnualAttendancesSc().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnnualAttendancesScEntity` instance with the same client and
options.

#### `client()`

Return the parent `ChineseMedicineClinicsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnnualAttendancesTcEntity

```ts
const annual_attendances_tc = client.AnnualAttendancesTc()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attendance` | ``$INTEGER`` | No |  |
| `clinic_name` | ``$STRING`` | No |  |
| `location` | ``$STRING`` | No |  |
| `year` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AnnualAttendancesTc().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnnualAttendancesTcEntity` instance with the same client and
options.

#### `client()`

Return the parent `ChineseMedicineClinicsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new ChineseMedicineClinicsSDK({
  feature: {
    test: { active: true },
  }
})
```

