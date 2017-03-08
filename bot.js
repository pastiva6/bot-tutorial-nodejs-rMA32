var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/boot/;  botRegexDL = /^\/dl/i; botRegexSalt = /^\/fin/;botRegexRules = /^\/rules/
      botRegexAd=/^\/drunk/;botRegexGTA = /^\/bills/; botRegexSC = /^\/sch/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/ply/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/millen/; botRegexSh = /^\/s/; botRegexWk = /^\/vance/; botRegexCC = /^\/jeff/;
      botRegexBye = /^\/stan/; botRegexRip =/^\/tony/; botRegexCan =/^\/willie/; botRegexTy=/^\/eagles/; botRegexBlog=/^\/immy/; 
      botRegexL = /^\/frog/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.landaustore.co.uk/images/footwear/timberland/mens/timberland-mens-timberland-boots-mens-6-inch-boot-brown-37307.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexL.test(request.yext)) {
    this.res.writeHead(200);
    postMessage("https://i.ytimg.com/vi/OqhZWf9Aqkk/hqdefault.jpg")
    this.res.end();
  }
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/team/"+request.text.substring(4,7)+"/depthchart");
    this.res.end();
  }
  else if(request.text && botRegexTy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://assets.sbnation.com/assets/562635/eagles_fan.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.qnews.com.au/wp-content/uploads/2015/01/Hello-Sailor.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.huffpost.com/gen/1010833/thumbs/o-DESMOND-BRYANT-MUGSHOT-facebook.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/bless/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://t.fod4.com/t/2d1b424fa2/c640x360_20.jpg");
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
    postMessage("http://www.daddyleagues.com/bless/standings/league");
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
