-- ChineseMedicineClinics SDK exists test

local sdk = require("chinese-medicine-clinics_sdk")

describe("ChineseMedicineClinicsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
