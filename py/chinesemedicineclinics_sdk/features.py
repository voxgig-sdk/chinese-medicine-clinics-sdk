# ChineseMedicineClinics SDK feature factory

from chinesemedicineclinics_sdk.feature.base_feature import ChineseMedicineClinicsBaseFeature
from chinesemedicineclinics_sdk.feature.test_feature import ChineseMedicineClinicsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ChineseMedicineClinicsBaseFeature(),
        "test": lambda: ChineseMedicineClinicsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
