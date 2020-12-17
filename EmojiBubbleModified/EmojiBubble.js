on("ready",() => {
    state.emojibubble = state.emojibubble||{};
    state.emojibubble.registry = state.emojibubble.registry||{};
    const bubbleoffsetx=35, bubbleoffsety=-25, textoffsetx=bubbleoffsetx, textoffsety = bubbleoffsety - 4;
    var emojibubbleregister = function(token,emoji){
        let ser = state.emojibubble.registry;
        let tokenid = token.id;
        if(emoji === "clearemojibubble"){
            return emojibubblecheck(token);
        }
        if(ser[tokenid]){
            emojibubblecleanup(tokenid);
        }
        let emojiBubbleObj = createEmojiBubble(token, emoji);
        ser[tokenid] = emojiBubbleObj;

    }
    var emojibubblecheck = function(obj){
        let tokenid = obj.get("id");
        if(state.emojibubble.registry[tokenid]){
            emojibubblecleanup(tokenid);
        }
    }
    var emojibubblecleanup = function(tokenid){
        let ser = state.emojibubble.registry;
        if(ser[tokenid] && ser[tokenid].pathObj !== null){
            try{
                getObj("path",ser[tokenid].pathObj).remove();
                getObj("text",ser[tokenid].textObj).remove();
                ser[tokenid].pathObj = null;
                ser[tokenid].textObj = null;
            }catch(err){
                log("Emojibubble Error:" + err.message);
                log("Manual deletion may be necessary");
                ser[tokenid].pathObj = null;
                ser[tokenid].textObj = null;
            }
        }
    }
    var createEmojiBubble = function(token, emoji){
        let x = token.get("left");
        let y = token.get("top");
        let pathObj = createObj('path', {
            pageid: token.get("pageid"),
            left: x + bubbleoffsetx,
            top: y + bubbleoffsety,
            width: 35,
            height: 30,
            fill: "#ffffff",
            stroke: "#000000",
            stroke_width: 1,
            layer: 'objects',
            path: JSON.stringify([["M", 10, 20],["Q", 10, 10, 20, 10],["Q", 25, 10, 30, 10],[ "Q", 40, 10, 40, 20],["Q", 40, 30, 30, 30],[ "Q", 25, 30, 20, 30],[ "Q", 15, 30, 8, 34],["Z"]]),
            controlledby: "emoji"
        });
        let textObj = createObj('text', {
            pageid: token.get("pageid"),
            left: x + textoffsetx,
            top: y + textoffsety,
            width:30,
            height:30,
            font_size:12,
            layer:"objects",
            text: emojibuilder(emoji)
        });
        toFront(pathObj);
        toFront(textObj);
        return {"pathObj":pathObj.get("_id"),"textObj":textObj.get("_id")};
    }

    var emojiObj = {
        "longrest":[0x1F6CF,0xFE0F],
        "shortrest":0x1FA91,
        "rations":0x1F371,
        "tavern":0x1F37A,
        "camp":0x26FA,
        "inn":0x1F3E1,
        "nature":[0x1F3DE,0xFE0F],
        "meal":[0x1F37D,0xFE0F],
        "meat":0x1F356,
        "herb":0x1F33F,

        "hurt":0x1FA78,

        "search":0x1F50E,
        "interrogate":[0x1F441,0xFE0F,0x200D,0x1F5E8,0xFE0F],
        "investigate":[0x1F9E0],
        "look":[0x1F441,0xFE0F],
        "barter":[0x1F3F7,0xFE0F],

        "gamble":0x1F3B2,
        "door":0x1F6AA,
        "key":[0x1F5DD,0xFE0F],
        "deception":0x1F3AD,
        "hole":[0x1F573,0xFE0F],

        "archery":0x1F3F9,
        "duel":[0x2694,0xFE0F],
        "tracking":0x1F43E,
        "craft":0x1F528,

        "sleep":0x1F4A4,
        "waiting":0x23F3,
        "speaking":0x2026,
        "notes":0x1F3B6,
        "angry":0x1F4A2,
        "justice":[0x2696,0xFE0F],
        "sweat":0x1F4A7,

        "strange":0x1F773,
        "demon":0x1F479,
        "dragon":0x1F432,

        "scroll":0x1F4DC,
        "alchemy":[0x2697, 0xFE0F],
        "arcana":0x2728,
        "temple":[0x1F3DB,0xFE0F],
        "castle":0x1F3F0,

        "dead":[0x26B0,0xFE0F],
        "death":[0x2620,0xFE0F],

        "quest":0x2757,
        "question":0x2753,
        "no":0x1F44E,
        "yes":0x1F44D,

        "gem":0x1F48E,
        "candle":[0x1F56F,0xFE0F],
        "cleric":0x1F4FF,
        "shield":[0x1F6E1,0xFE0F],

        "owl":0x1F989,
        "fox":0x1F98A,
        "bear":0x1F43B,
        "bull":0x1F42E,
        "eagle":0x1F414,
        "cat":0x1F431,

        "fire":0x1F525,
        "water":0x1F30A,
        "earth":[0x26F0,0xFE0F],
        "wind":0x1F4A8,

        "heart":[0x2764,0xFE0F],
        "smile":0x1F642,
        "hearteyes":0x1F60D,
        "rofl":0x1F923,

        "sus":0x1F928,
        "neutral":0x1F610,
        "pensive":0x1F614,
        "sad":0x1F61F,

        "mad":0x1F620,
        "cursing":0x1F92C,
        "sick":0x1F922,
        "poo":'0x1F4A9'


    };

    var initializeemoji = function(){
        log('in initializeemoji');
        let emojilibrary = {},
        dupArray = function(arr){
            let dup = [], iterator=0;
                _.each(arr,function(a){
                    dup[iterator++]=a;
                })
            return dup;
        };
         _.each(emojiObj, function(emobj,key){
            emojilibrary[key] = (Array.isArray(emobj))?dupArray(emobj):emobj;

        });
        return emojilibrary;
    }

    state.emojibubble.customemoji = state.emojibubble.customemoji||initializeemoji();

    var digestEmoji = function(emoji){
        var sliceEmoji = function(str) {
            let res = ['', ''];

            for (let c of str) {
                let n = c.codePointAt(0);
                let isEmoji = n > 0xfff || n === 0x200d || (0xfe00 <= n && n <= 0xfeff);
                res[1 - isEmoji] += c;
            }
            return res;
        }

        var hex = function(str) {
            return [...str].map(x => x.codePointAt(0).toString(16))
        }

        return sliceEmoji(emoji).map(hex)[0];


    }

    var emojibuilder = (numref) => {
        let results = "",emoji=state.emojibubble.customemoji[numref];
        if(Array.isArray(emoji)){
            _.each(emoji, function(ref){
                try{
                results += emojiFromCodePoint(ref);
                }catch(err){log(err.message)}
            });
        }else{
            try{
            results += emojiFromCodePoint(emoji);
            }catch(err){log(err.message)}
        }
        return results;
    }
    var emojiFromCodePoint = function(num){
        if(typeof num === "string"){
            if(num.indexOf("0x") === -1){
                num = "0x" + num;
            }
        }
        return String.fromCodePoint(num);
    }

    var emojilistHTML = function(){
        let list = '',count=0;
        list += '<p style="width:100%;text-align:center;"><a style="border: 2px solid black ; font-size: 14pt ; height: 25px ; display: inline-block ; margin: 2px ; border-radius: 5px;padding:5px 2px 0 2px;color:#000;" href="!emojibubble|clearemojibubble">Clear Emoji Bubble</a></p>';
        _.each(state.emojibubble.customemoji, function(emobj,key){
            list+= '<a style="border:2px solid black;font-size:14pt;width:25px;height:25px;display:inline-block;margin:2px;border-radius:5px;text-align:center;" title="' + key + '" href="!emojibubble|' + key + '">' +  emojibuilder(key) + '</a>';
            count++;
            if(count%12===0){
                list+='<hr />';
            }else if(count%4===0){
                list+='<span style="font-size:14pt;margin:0 8pt 0 8pt;"> | </span>';
            }
        });
        return list;
    }
    var buttonstyle = 'border: 2px solid black ; font-size: 14pt ; height: 25px ; display: inline-block ; margin: 2px ; border-radius: 5px;padding:5px 2px 0 2px;color:#000;';
    var emojicontrollistHTML = function(){
        let list = '',count=0;
        list += '<p style="width:100%;text-align:center;">';
        list += '<a style="' + buttonstyle + '" href="!emojibubble --addemoji|?{Emoji}|?{Name}">Add Emoji</a>';
        list += '<a style="' + buttonstyle + '" href="!emojibubble --resetemoji">Reset Emoji</a>';
        list += '</p>';
        list += '<p>You can find new emoji to copy-paste at <a href="https://emojipedia.org/">Emojipedia</a> among other places.</p>';
         list+= '<hr /><p>Currently, to update the gmnotes portion of the handout after a change (add, delete, or reset), close and re-open the handout.</p>';
        list += '<div style="position:inline-block;width:100%;outline:2px solid white;text-align:center;'+ buttonstyle+'">Click on Gray Emoji to Delete</div>';
        _.each(state.emojibubble.customemoji, function(emobj,key){
            list+= '<a style="border:2px solid black;font-size:14pt;width:25px;height:25px;display:inline-block;margin:2px;border-radius:5px;text-align:center;background-color:#999;" title="' + key + '" href="!emojibubble --deleteemoji|' + key + '">' +  emojibuilder(key) + '</a>';
            count++;
            if(count%12===0){
                list+='<hr />';
            }else if(count%4===0){
                list+='<span style="font-size:14pt;margin:0 8pt 0 8pt;"> | </span>';
            }
        });

        return list;
    }

    var outputToChat = function(msg,tgt){
        if(tgt==="all"){
            sendChat("Emojibubble", msg);
        }else{
            tgt = (tgt !== undefined && tgt !== null)?tgt:"gm";
            sendChat("Emojibubble","/w \"" + tgt + "\" " + msg,null,{noarchive:true});
        }

    }
    var msgHandler = function(msg){
        if(msg.type === "api" && msg.content.indexOf("!emojibubble") === 0 ){
            let who = (playerIsGM(msg.playerid))?"gm":msg.who;
            let emoji = msg.content.split("|")[1];
            if(msg.content.indexOf("--addemoji") !== -1){
                let digested =  digestEmoji(emoji);
                let key = msg.content.split("|")[2];
                state.emojibubble.customemoji[key] = digested;
                log(key + ":" + state.emojibubble.customemoji[key]);
                //return outputToChat("Emoji Digested:{" + digested + ") converted to hex (" + digested + ") and Emoji Reconstituted:(" + digested + ")" );
                rebuildhandoutcontent();
                return;
            }
            if(msg.content.indexOf("--resetemoji") !== -1){
                state.emojibubble.customemoji = initializeemoji();
                rebuildhandoutcontent();
                return;
            }
            if(msg.content.indexOf("--deleteemoji")!== -1){
                if(who==="gm"){
                    delete state.emojibubble.customemoji[emoji];
                    rebuildhandoutcontent();
                    return false;
                }
            }

            if(typeof msg.selected ==="undefined"){
                return outputToChat("Select a token to say your emoji.",who);
            }
            let token = getObj("graphic",msg.selected[0]._id);
            if(typeof token ==="undefined"){
                return outputToChat("Only graphic tokens can emote.",who);
            }
            if(token.get("_subtype") !== "token"){
                return outputToChat("Select a target that is a token.",who);
            }
            emojibubbleregister(token,emoji);
        }
    }

    var rebuildhandoutcontent = function(){
        let handout = getObj("handout",state.emojibubble.help),
        content = helpDisplay(),
        gmcontent = controlsDisplay();
        if(handout){
          setTimeout(function(){
            // handout.set("notes",content);
            handout.set("gmnotes", gmcontent);
          },0);
            setTimeout(function(){
                handout.set("notes",content);
            },10);
        }
    }
    // creatEmojiBubble(tokenreference,"key");
    on("chat:message", msgHandler);
    on("change:graphic", emojibubblecheck);
    var helpDisplay = function(){
        return emojilistHTML();
    }
    var controlsDisplay = function(){
        return emojicontrollistHTML();
    }
    var helpoutput = "";
    if(!state.emojibubble.help || !getObj("handout",state.emojibubble.help)){
        if(findObjs({type:"handout",name:"Emojibubble Console"})[0]){
            state.emojibubble.help = findObjs({type:"handout",name:"Emojibubble Console"})[0].get("_id");
        }else{
            let content = helpDisplay(),
            gmcontent = controlsDisplay(),
            handout = createObj("handout",{
                name: "Emojibubble Console",
                inplayerjournals: "all"
            });
            state.emojibubble.help = handout.get("_id");
            handout.set("gmnotes", gmcontent);
            setTimeout(function(){
              handout.set("notes",content);
            },0);

            // have to add chat call here to point to API handout instead of giant blob help.
        }
    }
    helpoutput += '<p>' + '<a href="http://journal.roll20.net/handout/' + state.emojibubble.help + '">Emojibubble Console</a></p>';
    setTimeout(() => outputToChat(helpoutput,"all"),0);

});
