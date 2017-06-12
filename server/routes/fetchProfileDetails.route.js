const profileStats = require('express').Router()
      //neo connections
      ,neodb = require('./../connections/db.neo4j.js');


profileStats.post('/profileStats',(req,res)=>{
  neodb.cypher({
    query:"match (id:users {userId:{adid}}) return *",
    params:{
      adid:req.body.uid,
    }
  },function(err,result){
      if(err)
        console.log(err);
      else
        res.send(JSON.stringify(result[0]));
  })
})

module.exports = profileStats;
