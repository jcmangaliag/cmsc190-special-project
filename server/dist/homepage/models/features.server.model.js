'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _mongoose=require('mongoose'),_mongoose2=_interopRequireDefault(_mongoose);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var FeatureSchema=new _mongoose2.default.Schema({title:{type:String,required:!0},icon:{type:String},points:{type:Array,required:!0}});exports.default=_mongoose2.default.model('Feature',FeatureSchema);
//# sourceMappingURL=features.server.model.js.map