const mongoose=require('mongoose');

const Database=async (req,res) => {
  try {
    await mongoose.connect("mongodb+srv://mahnoorsarfraz23:k3Ni52ZakaWFzadV@cluster0.1k41g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true, }
    ).then(()=>{
      console.log("Connected")
    });   
   } catch (error) {
     res.status(400).json({message: "Not ConnectedD!"});
     console.log("Not connected",error)
   }
}
Database();
