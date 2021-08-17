const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://tinyurl.com/ykxwd25q";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater JADUBot*

*Bgm updation💘*

*Owner number wa.me/918943562401*

*githublink       https://github.com/Ameen-ahd/JADUmon*

*audio commads    https://github.com/Ameen-ahd/JADUmon/tree/master/uploads*

*sticker commads  https://github.com/Ameen-ahd/JADUmon/tree/master/stickers*

*support group    https://chat.whatsapp.com/J78xo5swpSp8k8MrSrdzDN*
`}) 

}));
