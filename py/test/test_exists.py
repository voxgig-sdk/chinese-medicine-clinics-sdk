# ProjectName SDK exists test

import pytest
from chinesemedicineclinics_sdk import ChineseMedicineClinicsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ChineseMedicineClinicsSDK.test(None, None)
        assert testsdk is not None
