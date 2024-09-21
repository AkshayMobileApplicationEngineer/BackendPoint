const mongoose=require('mongoose');

const hospitalInHrsSchema=new mongoose.Schema({
      name:{
            type:String,
            required:true,
      },
      workingHours:{
            type:String,
            required:true,
      },
      addressLine1:{
            type:String,
            required:true,
      },
      addressLine2:{
            type:String,
            required:true,
      },
      city:{
            type:String,
            required:true,
      },
      state:{
            type:String,
            required:true,
      },
      pinCode:{
            type:String,
            required:true,

      },
      specializationIn:[
            {
                  type:String,
                  required:true,
            },
      ],


});
      
const doctorSchema=new mongoose.Schema({


      name:{
            type:String,
            required:true,
      },
      specialization:{
            type:String,
            required:true,
      },
      experienceInYears:{
            type:Number,
            required:true,
            default:0,
      },
      contact:{
            type:Number,
            required:true,
      },

      email:{
            type:String,
            required:true,
      },
      address:{
            type:String,
            required:true,
      },
      salary:{
            type:Number,
            required:true,
      },
      workingHours:{
            type:String,
            required:true,
      },
      appointments:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Appointment',
      },
      qualifications:{
            type:String,
            required:true,
      },
      patients:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Patient',
      },
      WorksInHospital:[
            {
                  type:mongoose.Schema.Types.ObjectId,
                  ref:'Hospital',
            },
      ]

      
      

});





export const Doctor=mongoose.model('Doctor',doctorSchema);