const { string } = require('joi');
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle:{
        type:String,
        required: [true, "Must provide Job Title"],
        maxlength:50
    },
    position:{
        type:String,
        required: [true, "Must provide position"],
        maxlength:50
    },
    status:{
        type:String,
        enum:['Interview','Decline','pending'],
        default:'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        req:[true, "Must provide User"],
    }


},{timestamps:true})

module.exports = mongoose.model("Job",jobSchema);