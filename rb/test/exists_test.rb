# ChineseMedicineClinics SDK exists test

require "minitest/autorun"
require_relative "../ChineseMedicineClinics_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ChineseMedicineClinicsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
