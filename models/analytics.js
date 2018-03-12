const mongoose = require('mongoose');

const AnalyticsSchema = mongoose.Schema({
    analytics_category:{type: String},
    analytics_title:{type: String, required:true},
    analytics_content:{type: String},
    analytics_img:{type: String}
});

const Analytics = module.exports = mongoose.model('Analytics', AnalyticsSchema);