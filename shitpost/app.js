require('dotenv').config();
const { Client } = require('discord.js')

const bot = new Client();

var copypasta = [];

var interval = 50;

bot.on('ready', () => {
    bot.user.setActivity('castyte suck furry cock', {type:'WATCHING'})
    const c = bot.guilds.get('606091562774167562').channels.get('634886435282878513');
    c.fetchMessages({limit: 100}).then(m => m.forEach(m => {
        if(m.pinned){
            copypasta.push(m.content);
        } else {
            m.delete();
        }
    }))

    console.info(`ready as ${bot.user.tag}`)


setInterval(()=>{
copypasta = []
c.fetchMessages({limit: 100}).then(m => m.forEach(m => {
        if(m.pinned){
            copypasta.push(m.content);
        } else {
            m.delete();
        }
    }))
},3600000)

})

bot.on('message', async (m) => {
    if(m.channel.id!='637130238815502336' || m.author.bot) return;
    interval--
    if(interval===0){
        m.channel.send(copypasta[Math.floor(Math.random()*copypasta.length)]);
        interval = 50;
    }
    if(m.isMemberMentioned(bot.user)){
	const arguments = m.content.split(/ +/g);
	if(arguments[1] == "set"){
	    m.delete()
	    bot.user.setAvatar(arguments[2]).catch(() =>{m.channel.send("that didn't work"); return 0;}).then(m.channel.send("ok"));
	} else if(arguments[1] == "refresh"){
	    m.delete()
	    copypasta = []
	    c.fetchMessages({limit: 100}).then(m => m.forEach(m => {
		if(m.pinned){
		    copypasta.push(m.content);
		} else {
		    m.delete();
		}
	    }))
	} else {
	    m.channel.send(copypasta[Math.floor(Math.random()*copypasta.length)]);
	}
    }
})



bot.login(process.env.TOKEN)
