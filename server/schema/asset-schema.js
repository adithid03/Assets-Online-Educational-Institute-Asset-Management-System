import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';

const assetSchema = mongoose.Schema({
    AssetID : Number,
    Name : String,
    AssetType: String,
    Description: String,
    Area:String,
    YearofConstruction:Number,
    Capacity:Number,
    NumRooms:Number,
    MaintanceReq:String,
    Owner:String,
    UserID: mongoose.Schema.Types.ObjectId
})

autoIncrement.initialize(mongoose.connection);
assetSchema.plugin(autoIncrement.plugin,'asset')

const asset = mongoose.model('asset',assetSchema);

export default asset;