# ChineseMedicineClinics SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ChineseMedicineClinicsFeatures
  def self.make_feature(name)
    case name
    when "base"
      ChineseMedicineClinicsBaseFeature.new
    when "test"
      ChineseMedicineClinicsTestFeature.new
    else
      ChineseMedicineClinicsBaseFeature.new
    end
  end
end
