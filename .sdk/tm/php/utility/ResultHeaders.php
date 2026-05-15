<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK utility: result_headers

class ChineseMedicineClinicsResultHeaders
{
    public static function call(ChineseMedicineClinicsContext $ctx): ?ChineseMedicineClinicsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
