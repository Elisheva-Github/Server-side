
var MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017/mySchoolDB";

class PreviousLessons {
    TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

    generateAccessToken = (username) => {
        return jwt.sign({ username }, TOKEN_SECRET);
    };

    previousLessons = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
      //  const { id } = req.query;
        MongoClient.connect(url, async function (err, db) {
            if (err)
                return res.status(500).send(err);
            var dbo = db.db("mySchoolDB");
            try{
     //debugger
     //var query = { id};
     //let resultStudent
    // resultStudent = await dbo.collection("student").findOne(query)

            // let resultStudent =await  dbo.collection("student").find({student:req.params.id});
          //  console.log(resultStudent);
            // let resultTeacher =await  dbo.collection("teacher").findone({subject:resultStudent.subject});
           // let result =await  dbo.collection("lessons").find({subject:resultStudent.subject}).toArray();
            let result =await  dbo.collection("lessons").find().toArray();
            //console.log(result);
            db.close();
            return res.status(200).json(result);
            }catch(error){
          return  res.status(500).json({error:error})
        }
        });
    
        }
        }
    
    
module.exports = new PreviousLessons();

