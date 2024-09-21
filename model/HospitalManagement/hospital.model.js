const mongoose=require('mongoose');
const hospitalSchema=new mongoose.Schema({
      name:{
            type:String,
            required:true,
      },
      address:{
            type:String,
            required:true,
      },
      contact:{
            type:String,
            required:true,
      },
      email:{
            type:String,
            required:true,
      },
      website:{
            type:String,
            required:true,
      },
      services:{
            type:String,
            required:true,
      },
      doctors:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Doctor',
            required:true,
      },
      patients:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Patient',
            required:true,
      },
      medicalRecords:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'MedicalRecord',
            required:true,
      },
      appointments:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Appointment',
            required:true,
      },
      billing:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Billing',
            required:true,
      },
      inventory:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Inventory',
            required:true,
      },
      staff:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Staff',
            required:true,
      },
      feedback:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Feedback',
            required:true,
      },
      events:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Event',
            required:true,
      },
      news:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'News',
            required:true,
      },
      announcements:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Announcement',
            required:true,
      },
      reports:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Report',
            required:true,
      },
      





},{




      timestamps:true,
});
export const Hospital=mongoose.model('Hospital',hospitalSchema);