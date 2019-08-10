const { prefix, token, userID, ownerID } = require("./assets/vars/config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => { 
	client.user.setUsername("LunaBot");
	//client.user.setNickname("Luna");
	console.log("Conectado como " + client.user.tag);
});

client.on('message', message => { 
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const content = args.join(" ");

	if (message.author.bot) {
		return ;
	}

	if (!args) {
		return message.channel.send("El prefijo actual es: " + prefix);
	}

	if (command === "help") {

	}

	if (command === "ping") {
		message.channel.send("pong");
	}

	if (command === "say") {
		message.channel.send(content);
	}

	if (command === "nick") {
		message.guild.members.get(client.user.id).setNickname("Luna");
	}

	if (command === "kill") {
		client.destroy();
	}
})

client.login(token);
