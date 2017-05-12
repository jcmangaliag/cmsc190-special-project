'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _mongoose=require('mongoose'),_mongoose2=_interopRequireDefault(_mongoose),_crypto=require('crypto'),_crypto2=_interopRequireDefault(_crypto),_jsonwebtoken=require('jsonwebtoken'),_jsonwebtoken2=_interopRequireDefault(_jsonwebtoken);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var UserSchema=_mongoose2.default.Schema({email:{type:String,unique:!0,required:!0},hash:String,salt:String,name:{type:Object,required:!0},isAdmin:{type:Boolean,required:!0},photo:Object,dateJoined:{type:String,required:!0},sex:{type:String,required:!0},birthdate:{type:String,required:!0},contactNumber:String,country:{type:String,required:!0},location:{type:String,required:!0},about:String,groupsJoined:Array});UserSchema.methods.setPassword=function(a){this.salt=_crypto2.default.randomBytes(16).toString('hex'),this.hash=_crypto2.default.pbkdf2Sync(a,this.salt,1e3,64).toString('hex')},UserSchema.methods.validPassword=function(a){var b=_crypto2.default.pbkdf2Sync(a,this.salt,1e3,64).toString('hex');return this.hash===b},UserSchema.methods.generateJwt=function(){var a=new Date;return a.setDate(a.getDate()+7),_jsonwebtoken2.default.sign({_id:this._id,email:this.email,name:this.name,isAdmin:this.isAdmin,exp:parseInt(a.getTime()/1e3)},'MY_SECRET')},exports.default=_mongoose2.default.model('User',UserSchema);
//# sourceMappingURL=users.server.model.js.map