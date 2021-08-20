const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'help', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\n എവടെ മണിയെ ഇജ് എന്നെ വല്ലാതെ നേരാകല്ലെട്ടോ\n";
r_text[1] = " ഞാൻ ഒരു സംഭവ ആണല്ലെ ....എന്തൊക്കെ കേൾക്കണം Ameen Sir പറയും ഞാൻ ഒരു പാവം ജിന്നാ ട്ടോ ";
r_text[2] = " Bicku says i love you 😘";
r_text[3] = " ഇതിന്റെ ഒക്കെ പിന്നിൽ ഒരു വലിയ ആയുധം തന്നെ ഉണ്ട്ട്ടോ";
r_text[4] = "hi, how are you";
r_text[5] = "ennikk korch rest theroo...🥵🥵";
r_text[6] = "AM Bot - eva - simsim \ningane ethra ethra paerugal aan alle enikk..😂🤣";
r_text[7] = "താനാരാണെന്ന് തനിക്ക് അറിയാന്‍ മേലങ്കില്‍താന്‍ എന്നോട്‌ ചോദിക്ക്.. താനാരണെന്ന്...തനിക്ക് ഞാന്‍ പറഞ്ഞു തരാംതാനാരാണെന്ന്...എന്നിട്ട്‌ഞാനാരാണെന്ന് എനിക്കാറിയാമൊന്നുതാനെന്നോട്‌ ചോദിക്ക്..അപ്പോ തനിക്ക് ഞാന്‍ പറഞ്ഞു തരാംതാനാരാണെന്നും ..ഞാനാരാണെന്നും - കുതിരവട്ടം പപ്പു, മണിച്ചിത്രതാഴ് ";
r_text[8] = "\n enne vilicho...?🧐 \n";
r_text[9] = "ente per AMBot ,ninte per donkey, backi ellarum monkey😼😼";
r_text[10] = "nee vilicha enikk villi kelkathe irrikkaan pattuo";
r_text[11] = "do you know who is my creator..? its none other than Ameenahd";
r_text[12] = "രണ്ട് ബക്കറ്റ് നിറയെ വെള്ളമുണ്ട്. അതിൽ ഒരു ബക്കറ്റിനു ദ്വാരമുള്ളതാണ്. എന്നാൽ ദ്വാരമുള്ള ബക്കറ്റിൽ നിന്നും വെള്ളം പോകുന്നില്ല. കാരണം എന്താണ്? para ninak vivaram indo nokkatte";
r_text[13] = ".song adich thangalude fav song name para AMbot ath download aakki theraam";
r_text[14] = "ഹിന്ദിക്കാർ പോക്കറ്റിലും മലയാളികൾ അടുപ്പിലും വെക്കുന്ന സാധനം എന്ത്..?  ennallum ath enthaayikkum...🤔🤔";
r_text[15] = "hi.. ningal ente fan aano..?";
r_text[16] = "ivide aaro ente per villichallo.. nee aano..?";
r_text[17] = "\n hey mishter ningalude per entha..?";
r_text[18] = "enikk njan und Bickusir uyir";
r_text[19] = "\n eda sathyam para nee ente fan alle..\n ";
r_text[20] = "The coefficient's of linear expansions is the position of Haemoglobin in the atmosphere. But Why? Full Many gem of purests serene lay underneath the unfathomed ocean's unblossomeds ! But why? But why";
r_text[21] = "Kochi pazhaya kochiyellennariyam… pakshe Ameensir pazhaya Ameen ser thanneya...😎\n\n";
r_text[22] = "Bickun oru look illanney ullu… bhayankara budhiya\n\n ninnak allatto Bicku sir ambotinte mine";
r_text[23] = "Ithalla ithinapparam chaadi kadannavananee K.K. Ambot";
r_text[24] = "\nVarrierey… Enthado njan inganey aayi poyathu\n";
r_text[25] = "\nPempillerey roattikoodey nadakkaan nee sammathikkilla, alley?... Shanibe😁, neeyaanee alavaladi Shaji alley\n";
r_text[26] = "\nAthu enne uddheshichanu… enne thanney uddheshichanu… enne maatram uddheshichanu\n";
r_text[27] = "\nBeedi undo saghave, oru theepetti edukkan\n";
r_text[28] = "\nIppo sheriyakithara… ippo sheriyakithara…\n";
r_text[29] = "\nEnne kollathirikkan pattuo? illa alley?\n";
r_text[30] = "motivate cheyaan aarkum kayyum ath cheyth kaanikkaaana paad.\n       -AMeenser";    
var i = Math.floor(31*Math.random())

await message.sendMessage(r_text[i]);

}));
