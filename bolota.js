// Importando a biblioteca discord.js
const Discord = require("discord.js")
// Criando cliente no discord
const bolotinha = new Discord.Client()

// Quando o nosso cliente estiver ativo:
bolotinha.on("ready", () => {
  // Enviar mensagem abaixo:
  console.log(`E nasceu das cinzas, o ${bolotinha.user.tag}!`)
})


// Quando o usuario enviar uma mensagem:
bolotinha.on("message", message => {
 if (message.content === "+server"){
     message.reply("O melhor server!");
    message.reply("jogar.craftit.com.br");
 }
 

    if (message.content === "+bencao") {
      message.reply("Bolotinha te abencoe!");
  }

  // Se o conteudo da mensagem for "ping":
  if (message.content === "ping") { 
    // Responder com "pong"
    message.reply("pong");
  }
})

bolotinha.login("")
