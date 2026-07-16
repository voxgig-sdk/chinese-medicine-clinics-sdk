<?php
declare(strict_types=1);

// ChineseMedicineClinics SDK base feature

class ChineseMedicineClinicsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ChineseMedicineClinicsContext $ctx, array $options): void {}
    public function PostConstruct(ChineseMedicineClinicsContext $ctx): void {}
    public function PostConstructEntity(ChineseMedicineClinicsContext $ctx): void {}
    public function SetData(ChineseMedicineClinicsContext $ctx): void {}
    public function GetData(ChineseMedicineClinicsContext $ctx): void {}
    public function GetMatch(ChineseMedicineClinicsContext $ctx): void {}
    public function SetMatch(ChineseMedicineClinicsContext $ctx): void {}
    public function PrePoint(ChineseMedicineClinicsContext $ctx): void {}
    public function PreSpec(ChineseMedicineClinicsContext $ctx): void {}
    public function PreRequest(ChineseMedicineClinicsContext $ctx): void {}
    public function PreResponse(ChineseMedicineClinicsContext $ctx): void {}
    public function PreResult(ChineseMedicineClinicsContext $ctx): void {}
    public function PreDone(ChineseMedicineClinicsContext $ctx): void {}
    public function PreUnexpected(ChineseMedicineClinicsContext $ctx): void {}
}
