// Declarando as bibliotecas que vamos utilizar
const Insta = require('./insta.js');
const moment = require('moment');
const time = moment().format('DD/MM HH:mm:ss')
const client = new Insta.Client();


client.on('connected', () => {
	console.log('mudando bio ')
});

client.on('messageCreate', async ayu => {
	

let bio = 
`Your Body Language...
@biaahxzs
Pᴇssᴏᴀs Tʀ¡sᴛᴇs Mᴏππᴇᴍ † † † † †. ..
${time.replace(' ', `\n`).replace(':', ' ')} ⏰`
setInterval(async () => {	
ayu.client.ig.account.setBiography(bio)
	
console.log(`Bio atualizada com sucesso (${data_display})`);
	
}, 1 * 60000);


})

client.login('_breno.js', '34615194');
