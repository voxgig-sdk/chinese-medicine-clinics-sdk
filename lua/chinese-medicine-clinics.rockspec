package = "voxgig-sdk-chinese-medicine-clinics"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/chinese-medicine-clinics-sdk.git"
}
description = {
  summary = "ChineseMedicineClinics SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["chinese-medicine-clinics_sdk"] = "chinese-medicine-clinics_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
