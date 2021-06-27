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
