# ChineseMedicineClinics SDK utility: make_context

from core.context import ChineseMedicineClinicsContext


def make_context_util(ctxmap, basectx):
    return ChineseMedicineClinicsContext(ctxmap, basectx)
