const authenticate = require('express').Router();
const redirectPage = 'http://localhost:3000/#/dashboard';

//neo4j connection
const neodb = require('./../connections/db.neo4j.js');
//avatars
const imageNames = ['photo_aancfg.png','images_u6emeq.jpg','avatars-000280483895-1lyy0b-t500x500_vwhjgl.jpg','photo_jricth.jpg','billy_heat_face-512_afxl1e.png','WU7DsCBC_rzk4vp.png','pickaface_char4_hlcmru.png','doc_vmag2m.png','3_vrabfq.png','n_oopmfe.jpg','pic_ksj3dp.png','specs_a5rnsi.jpg','cap_xfmnh2.png','slide2_awn3ag.png','avatar_mhrd00.png','andrew_n5u1si.png','hepdiyorumki_hr33uz.png','photo_sag2in.png','t4_ag6adv.jpg','6580243_itbkzr.png'];

//router
authenticate.post('/authenticate',(req,res)=>{
  neodb.cypher({
    query:"match (id:users {userId:{adid}}) return *",
    params:{
      adid:req.body.adid,
    }
  },function(err,result){
    if(result=='')
    {
      neodb.cypher({
          query:"create (id:users {userId:{adid},image:{imageName},rank:{Prank},totalScore:{score},hostedQuiz:{hQuiz},attendedQuiz:{aQuiz}}) return *",
          params:{
            imageName:imageNames[Math.floor(Math.random() * (19 - 0)) + 0],
            adid:req.body.adid,
            Prank:0,
            score:0,
            hQuiz:0,
            aQuiz:0
          }
      },function(err,result){
          res.send(redirectPage+'/'+result[0].id.properties.userId);
      })
    }
    else {
      res.send(redirectPage+'/'+result[0].id.properties.userId);
    }
  })

});

module.exports = authenticate;
