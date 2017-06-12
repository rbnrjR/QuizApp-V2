const leaderboard = require('express').Router()
      , neodb = require('./../connections/db.neo4j.js');

leaderboard.get('/fetchleaders',function(req,res){
  // Match userID and orderby in DESC
  neodb.cypher({
    query:"match (id:users) return id order by id.totalScore desc",
  },(err,result)=>{
    if(err)
      console.log(err);
    else{
      res.send(JSON.stringify(result))
    }
  })
});

module.exports = leaderboard;
