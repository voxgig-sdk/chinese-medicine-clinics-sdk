<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK utility: result_body

class ChineseMedicineClinicsResultBody
{
    public static function call(ChineseMedicineClinicsContext $ctx): ?ChineseMedicineClinicsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
