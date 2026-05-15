<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ChineseMedicineClinicsUtility::setRegistrar(function (ChineseMedicineClinicsUtility $u): void {
    $u->clean = [ChineseMedicineClinicsClean::class, 'call'];
    $u->done = [ChineseMedicineClinicsDone::class, 'call'];
    $u->make_error = [ChineseMedicineClinicsMakeError::class, 'call'];
    $u->feature_add = [ChineseMedicineClinicsFeatureAdd::class, 'call'];
    $u->feature_hook = [ChineseMedicineClinicsFeatureHook::class, 'call'];
    $u->feature_init = [ChineseMedicineClinicsFeatureInit::class, 'call'];
    $u->fetcher = [ChineseMedicineClinicsFetcher::class, 'call'];
    $u->make_fetch_def = [ChineseMedicineClinicsMakeFetchDef::class, 'call'];
    $u->make_context = [ChineseMedicineClinicsMakeContext::class, 'call'];
    $u->make_options = [ChineseMedicineClinicsMakeOptions::class, 'call'];
    $u->make_request = [ChineseMedicineClinicsMakeRequest::class, 'call'];
    $u->make_response = [ChineseMedicineClinicsMakeResponse::class, 'call'];
    $u->make_result = [ChineseMedicineClinicsMakeResult::class, 'call'];
    $u->make_point = [ChineseMedicineClinicsMakePoint::class, 'call'];
    $u->make_spec = [ChineseMedicineClinicsMakeSpec::class, 'call'];
    $u->make_url = [ChineseMedicineClinicsMakeUrl::class, 'call'];
    $u->param = [ChineseMedicineClinicsParam::class, 'call'];
    $u->prepare_auth = [ChineseMedicineClinicsPrepareAuth::class, 'call'];
    $u->prepare_body = [ChineseMedicineClinicsPrepareBody::class, 'call'];
    $u->prepare_headers = [ChineseMedicineClinicsPrepareHeaders::class, 'call'];
    $u->prepare_method = [ChineseMedicineClinicsPrepareMethod::class, 'call'];
    $u->prepare_params = [ChineseMedicineClinicsPrepareParams::class, 'call'];
    $u->prepare_path = [ChineseMedicineClinicsPreparePath::class, 'call'];
    $u->prepare_query = [ChineseMedicineClinicsPrepareQuery::class, 'call'];
    $u->result_basic = [ChineseMedicineClinicsResultBasic::class, 'call'];
    $u->result_body = [ChineseMedicineClinicsResultBody::class, 'call'];
    $u->result_headers = [ChineseMedicineClinicsResultHeaders::class, 'call'];
    $u->transform_request = [ChineseMedicineClinicsTransformRequest::class, 'call'];
    $u->transform_response = [ChineseMedicineClinicsTransformResponse::class, 'call'];
});
