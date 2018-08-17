var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/boot/;  botRegexDL = /^\/dl/i; botRegexSalt = /^\/jlo/;botRegexRules = /^\/rules/
      botRegexAd=/^\/kendrick/;botRegexGTA = /^\/klampz/; botRegexSC = /^\/sch/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/ply/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/millen/; botRegexSh = /^\/s/; botRegexWk = /^\/vance/; botRegexCC = /^\/jeff/;
      botRegexBye = /^\/puff/; botRegexRip =/^\/tony/; botRegexCan =/^\/willie/; botRegexMcg=/^\/mcguffy/; botRegexBlog=/^\/immy/; 
      botRegexL = /^\/teddy/; botRegexBtg = /^\/btg/; botRegexRtro = /^\/steve/; botRegexKab = /^\/top10/; botRegexQueso = /^\/cheese/;
      botRegexColts = /^\/coltsmedia/; botRegexBanner = /^\/bless/; botRegexBlake = /^\/ace/; botRegexBilly = /^\/billy/; botRegexTrade = /^\/trade/;
      botRegexJres = /^\/falconsmedia/; botRegexDom = /^\/doom/; botRegexSteph = /^\/steph/; botRegexAc = /^\/ac/; botRegexYoni = /^\/yoni/;
      botRegexBmanz = /^\/worldcup/;botRegexNewz = /^\/illustrated/;botRegexMax = /^\/max/;botRegexSav = /^\/smokeNsavage/;botRegexKum = /^\/kumar/; botRegexJlo = /^\/cardsmedia/;
      botRegexSaintz = /^\/saintsmedia/; botRegexBrent = /^\/chargersmedia/; botRegexDclipz = /^\/nba/; botRegexBtgb = /^\/jetsnews/; botRegexCab = /^\/patsmedia/; botRegexAw = /^\/afcwest/;botRegexAn = /^\/afcnorth/; botRegexAs = /^\/afcsouth/;
      botRegexAe = /^\/afceast/; botRegexNn = /^\/nfcnorth/; botRegexNe = /^\/nfceast/; botRegexNw = /^\/nfcwest/; botRegexNs = /^\/nfcsouth/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.landaustore.co.uk/images/footwear/timberland/mens/timberland-mens-timberland-boots-mens-6-inch-boot-brown-37307.jpg");
    this.res.end();
  }
            else if(request.text && botRegexNewz.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/qlnS4Va.jpg")
    this.res.end();
  } 
          else if(request.text && botRegexBmanz.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1X9bAHEYjpvj20Qohf3oUZjs1Xi0s7P6q4rl1HEmm2EU/edit?usp=sharing")
    this.res.end();
  }
              else if(request.text && botRegexAn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/4u51I2z.jpg")
    this.res.end();
  }   
              else if(request.text && botRegexAs.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/cZXNQYJ.jpg")
    this.res.end();
  }     
              else if(request.text && botRegexAw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/e980sJE.jpg")
    this.res.end();
  }     
               else if(request.text && botRegexAe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("gRiFf")
    this.res.end();
  }     
              else if(request.text && botRegexNs.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/bv1c2il.jpg")
    this.res.end();
  }     
              else if(request.text && botRegexNn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/OpSEeUV.jpg")
    this.res.end();
  }
              else if(request.text && botRegexNe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/gszy3az.jpg")
    this.res.end();
  }     
              else if(request.text && botRegexNw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/K8hPQQl.jpg")
    this.res.end();
  }     
              else if(request.text && botRegexDclipz.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/nbastreams/")
    this.res.end();
  } 
            else if(request.text && botRegexBtgb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/NYJ")
    this.res.end();
  }   
            else if(request.text && botRegexCab.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/NE")
    this.res.end();
  }   
            else if(request.text && botRegexBrent.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/LAC")
    this.res.end();
  } 
            else if(request.text && botRegexJlo.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/ARI")
    this.res.end();
  } 
              else if(request.text && botRegexSav.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://vimeo.com/241647090")
    this.res.end();
  } 
          else if(request.text && botRegexMax.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://images-na.ssl-images-amazon.com/images/I/41U9MTJDaBL._SY355_.jpg")
    this.res.end();
  } 
        else if(request.text && botRegexKum.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/n2RHd5J.jpg")
    this.res.end();
  } 
        else if(request.text && botRegexYoni.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1380.photobucket.com/albums/ah170/Stephane_Baganizi/d609d6bc30394aad98db62f409a50c49_zpsco6j4tck.jpeg")
    this.res.end();
  } 
       else if(request.text && botRegexSaintz.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/NO")
    this.res.end();
  } 
      else if(request.text && botRegexAc.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/sIFcFhO.jpg")
    this.res.end();
  }
      else if(request.text && botRegexSteph.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/D1SBnJEaUdZIc/giphy.gif")
    this.res.end();
  }
      else if(request.text && botRegexDom.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/2mqr2V0.png")
    this.res.end();
  }  
      else if(request.text && botRegexJres.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/ATL")
    this.res.end();
  }  
      else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/bless/forum")
    this.res.end();
  }
                else if(request.text && botRegexBilly.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://static.tumblr.com/47b7ec0e730baca2b6408e1c9efe7661/jikyzdc/gVboawmm5/tumblr_static_ajzyal63zzcokg04gwckk80ko.jpg")
    this.res.end();
  }
              else if(request.text && botRegexBlake.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i2.cdn.cnn.com/cnnnext/dam/assets/170704145417-urkel-1.jpg")
    this.res.end();
  }
            else if(request.text && botRegexBanner.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B8Pnuvy.jpg")
    this.res.end();
  }
          else if(request.text && botRegexColts.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/IND")
    this.res.end();
  }
        else if(request.text && botRegexQueso.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/PwzZ5gFA8KGv6/giphy.gif")
    this.res.end();
  }
      else if(request.text && botRegexKab.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://streamable.com/a6o77")
    this.res.end();
  }
    else if(request.text && botRegexRtro.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1380.photobucket.com/albums/ah170/Stephane_Baganizi/abdb3734f6784038b0a801ca28c120a7_zpsdga9x9br.jpeg")
    this.res.end();
  }
    else if(request.text && botRegexL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/4b/34/ee/4b34ee4daa6466f310debaf771fbc8dc.jpg")
    this.res.end();
  }
    else if(request.text && botRegexBtg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://vignette4.wikia.nocookie.net/candy-crush-saga/images/e/e4/Troll_dad_by_rober_raik-d4cxnq8.png")
    this.res.end();
  }
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/"+request.text.substring(4,7)+"/depthchart");
    this.res.end();
  }
  else if(request.text && botRegexMcg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/ufyZw2d.png");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.wennermedia.com/620-width/1437672262_jenny-from-the-block-zoom.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/TdtUlu9.gif");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://toolguyd.com/blog/wp-content/uploads/2014/07/Tekton-3-Inch-C-Clamp.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/bless/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=Lb9q1ScC4cg");
    this.res.end();
  }  
  else if(request.text && botRegexRip.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=ZVUyyHYkBHk");
    this.res.end();
  }
  else if(request.text && botRegexBye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/JS8cBi1.png");
    this.res.end();
  }
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn0.vox-cdn.com/thumbor/V1yQLz2DcbjHg8vpopX0TDtYDW0=/10x0:4312x2868/730x487/cdn0.vox-cdn.com/uploads/chorus_image/image/44214886/180902191.0.jpg");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://3.bp.blogspot.com/-Hhc6h-HCu8w/UVRXYB6-w8I/AAAAAAAAa0A/LJghsvEd-Pw/s1600/Cheese_205.jpg");
    this.res.end();
  }
  else if(request.text && botRegexCan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://edition.cnn.com/2009/US/11/03/black.cowboys/t1larg.black.cowboys.jpg");
    this.res.end();
  }
  else if(request.text && botRegexBlog.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://photography.ratishnaroor.com/images/indian-kids-pictures/cute-indian-kid-pictures-photography.jpg");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
