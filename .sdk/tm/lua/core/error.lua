-- ChineseMedicineClinics SDK error

local ChineseMedicineClinicsError = {}
ChineseMedicineClinicsError.__index = ChineseMedicineClinicsError


function ChineseMedicineClinicsError.new(code, msg, ctx)
  local self = setmetatable({}, ChineseMedicineClinicsError)
  self.is_sdk_error = true
  self.sdk = "ChineseMedicineClinics"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ChineseMedicineClinicsError:error()
  return self.msg
end


function ChineseMedicineClinicsError:__tostring()
  return self.msg
end


return ChineseMedicineClinicsError
