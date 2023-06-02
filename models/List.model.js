const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    
    
    Name: {
      type: String,
      required:true

    },
    
    Number: {
      type: String,
      required:true
 
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const List = mongoose.model("ContactList", ListSchema);
module.exports=List;