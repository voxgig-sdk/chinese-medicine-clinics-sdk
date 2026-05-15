# ChineseMedicineClinics SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ChineseMedicineClinicsUtility.registrar = ->(u) {
  u.clean = ChineseMedicineClinicsUtilities::Clean
  u.done = ChineseMedicineClinicsUtilities::Done
  u.make_error = ChineseMedicineClinicsUtilities::MakeError
  u.feature_add = ChineseMedicineClinicsUtilities::FeatureAdd
  u.feature_hook = ChineseMedicineClinicsUtilities::FeatureHook
  u.feature_init = ChineseMedicineClinicsUtilities::FeatureInit
  u.fetcher = ChineseMedicineClinicsUtilities::Fetcher
  u.make_fetch_def = ChineseMedicineClinicsUtilities::MakeFetchDef
  u.make_context = ChineseMedicineClinicsUtilities::MakeContext
  u.make_options = ChineseMedicineClinicsUtilities::MakeOptions
  u.make_request = ChineseMedicineClinicsUtilities::MakeRequest
  u.make_response = ChineseMedicineClinicsUtilities::MakeResponse
  u.make_result = ChineseMedicineClinicsUtilities::MakeResult
  u.make_point = ChineseMedicineClinicsUtilities::MakePoint
  u.make_spec = ChineseMedicineClinicsUtilities::MakeSpec
  u.make_url = ChineseMedicineClinicsUtilities::MakeUrl
  u.param = ChineseMedicineClinicsUtilities::Param
  u.prepare_auth = ChineseMedicineClinicsUtilities::PrepareAuth
  u.prepare_body = ChineseMedicineClinicsUtilities::PrepareBody
  u.prepare_headers = ChineseMedicineClinicsUtilities::PrepareHeaders
  u.prepare_method = ChineseMedicineClinicsUtilities::PrepareMethod
  u.prepare_params = ChineseMedicineClinicsUtilities::PrepareParams
  u.prepare_path = ChineseMedicineClinicsUtilities::PreparePath
  u.prepare_query = ChineseMedicineClinicsUtilities::PrepareQuery
  u.result_basic = ChineseMedicineClinicsUtilities::ResultBasic
  u.result_body = ChineseMedicineClinicsUtilities::ResultBody
  u.result_headers = ChineseMedicineClinicsUtilities::ResultHeaders
  u.transform_request = ChineseMedicineClinicsUtilities::TransformRequest
  u.transform_response = ChineseMedicineClinicsUtilities::TransformResponse
}
