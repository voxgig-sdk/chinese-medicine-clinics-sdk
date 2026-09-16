# ChineseMedicineClinics SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ChineseMedicineClinicsFeatures
  def self.make_feature(name)
    case name
    when "base"
      ChineseMedicineClinicsBaseFeature.new
    when "ratelimit"
      ChineseMedicineClinicsRatelimitFeature.new
    when "retry"
      ChineseMedicineClinicsRetryFeature.new
    when "test"
      ChineseMedicineClinicsTestFeature.new
    when "timeout"
      ChineseMedicineClinicsTimeoutFeature.new
    else
      ChineseMedicineClinicsBaseFeature.new
    end
  end
end
