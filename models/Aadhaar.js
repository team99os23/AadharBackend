const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Aadhaar = new Schema({
    AadhaarNumber:{
        type:String,
        required:true,
        unique:true
    },
    VID : {
        type:String,
        required:true,
        unique:true
    },
    Name : {
        type:String,
        required:true,
    },
    Address : {
        type : String,
        required:true,
    },
    IrisScanCode:{
        type:String,
        required:true,
        unique:true
    },
    FingerPrintCode:{
        type:String,
        required:true,
        unique:true
    },
    PhoneNumber:{
        type:String,
        required:true,
    }
    } , {timestamps : true});

const aadhaar = mongoose.model('aadhaar', Aadhaar);
module.exports = aadhaar;