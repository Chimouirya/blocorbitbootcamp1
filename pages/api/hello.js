// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../model/connect";
import user from "../../model/user";
export default function handler(req, res) {
  if(req.method =="POST"){
    connectMongo()
    .then (()=>{
      user.create({
        firstName:"Shyam",
      })
      .then(()=>{
        res.status(200).json({response: "Data Inserted Successfully " });
      })
      .catch((error) =>
      {
        res.status(301).json({response: "Data Failed To Inserted Successfully " });
      })
    })
    .catch((error) => {
      res.status(301).json({response:error});
    });
    
  }
  else{
    res.status(405).json({response: "Invalid" });
  }
 
}
