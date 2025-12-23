import mongoose from "mongoose";
 const ownerSchema = new mongoose.Schema({
     fullname:{
         type: String,
         required: true
     },
     email:{
         type: String,
         required: true
     },
     password:{
         type: String,
         required: true     
     },
    
     
     products: {
         type: Array,
         default: []
     },
     
     picture:{
         type: String,
         default: ""
     },
     gstin:{
         type: String,
         default: ""
     }
 });
 const owner= mongoose.model("owner", ownerSchema);
 export default owner;