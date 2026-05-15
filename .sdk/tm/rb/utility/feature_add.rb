# ChineseMedicineClinics SDK utility: feature_add
module ChineseMedicineClinicsUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
