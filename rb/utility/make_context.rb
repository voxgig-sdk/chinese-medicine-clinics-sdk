# ChineseMedicineClinics SDK utility: make_context
require_relative '../core/context'
module ChineseMedicineClinicsUtilities
  MakeContext = ->(ctxmap, basectx) {
    ChineseMedicineClinicsContext.new(ctxmap, basectx)
  }
end
