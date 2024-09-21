const mongoose=require('mongoose');
const medicalRecordSchema=new mongoose.Schema({
      patientId:{ 
            type:mongoose.Schema.Types.ObjectId,
            ref:'Patient',
            required:true,
      },
      doctorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Doctor',
            required:true,
      },
      diagnosis:{ 
            type:String,
            required:true,
      },
      treatment:{
            type:String,
            required:true,
      },
      date:{
            type:Date,
            required:true,
      },
      prescription:{
            type:String,
            required:true,
      },
      notes:{
            type:String,
            required:true,
      },
      
      
      

});

export const Medical=mongoose.model('MedicalRecord',medicalRecordSchema);


