# ChineseMedicineClinics Python SDK Reference

Complete API reference for the ChineseMedicineClinics Python SDK.


## ChineseMedicineClinicsSDK

### Constructor

```python
from chinese-medicine-clinics_sdk import ChineseMedicineClinicsSDK

client = ChineseMedicineClinicsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ChineseMedicineClinicsSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ChineseMedicineClinicsSDK.test()
```


### Instance Methods

#### `AnnualAttendancesEn(data=None)`

Create a new `AnnualAttendancesEnEntity` instance. Pass `None` for no initial data.

#### `AnnualAttendancesSc(data=None)`

Create a new `AnnualAttendancesScEntity` instance. Pass `None` for no initial data.

#### `AnnualAttendancesTc(data=None)`

Create a new `AnnualAttendancesTcEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## AnnualAttendancesEnEntity

```python
annual_attendances_en = client.AnnualAttendancesEn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attendance` | ``$INTEGER`` | No |  |
| `clinic_name` | ``$STRING`` | No |  |
| `location` | ``$STRING`` | No |  |
| `year` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.AnnualAttendancesEn().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnnualAttendancesEnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnnualAttendancesScEntity

```python
annual_attendances_sc = client.AnnualAttendancesSc()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attendance` | ``$INTEGER`` | No |  |
| `clinic_name` | ``$STRING`` | No |  |
| `location` | ``$STRING`` | No |  |
| `year` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.AnnualAttendancesSc().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnnualAttendancesScEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnnualAttendancesTcEntity

```python
annual_attendances_tc = client.AnnualAttendancesTc()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attendance` | ``$INTEGER`` | No |  |
| `clinic_name` | ``$STRING`` | No |  |
| `location` | ``$STRING`` | No |  |
| `year` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.AnnualAttendancesTc().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnnualAttendancesTcEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = ChineseMedicineClinicsSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

