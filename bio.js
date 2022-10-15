// Declarando as bibliotecas que vamos utilizar
const Insta = require('./insta.js');
const moment = require('moment');
const client = new Insta.Client();


client.on('connected', () => {
	console.log('mudando bio ')
});

client.on('messageCreate', async ayu => {

async function bio () {
	
	
		// Isso é opcional, foi feito para subtrair as horas de acordo com o horario aqui em São Paulo, já que esse sistema está rodando numa máquina no exterior (o meu sistema no caso, o seu provavelmente está em um fuso-horário diferente), caso queira remover deixe apenas a função format
		data_display = moment().subtract(3, 'hours').format('lll');

		// Mudando sua bio
		// Caso ocorra algum erro, tente modificar a bio para que não ultrapasse 150 caracteres e não modifique o tempo no loop, deixe em 30min mesmo
bior = `Your Body Language...
@biaahxzs
Pᴇssᴏᴀs Tʀ¡sᴛᴇs Mᴏππᴇᴍ † † † † †. ..
${data_display}`
ayu.client.ig.account.setBiography(bior)
console.log(`Bio atualizada com sucesso (${data_display})`);
	
}

// Adicionando um loop para mudar a bio de 30 em 30 min
setInterval(async () => bio(), 1 * 60000);

//  Mudando a bio assim que iniciar

})
bio();
// Feito por @eiandremoreira - 2022
