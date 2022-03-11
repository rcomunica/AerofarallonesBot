
const discord = require('discord.js');
const intents = new discord.Intents(32767);
const client = new discord.Client(( { intents }));
const Voice = require('@discordjs/voice')
const config = require('./config.json');
const { VoiceConnection } = require('@discordjs/voice');
const VoiceClient = new Voice.AudioPlayer();



function presence(){
    client.user.setPresence({
        activities: [{name: 'AeroFarallones', type: 'WATCHING'}],
        status: 'online'  // 'dnd' 'online' 'invisible' 'idle'
          
    });
    
}

client.on('ready', () =>{
    console.log(`${client.user.tag} Esta listo!... A volar!`)
    presence();
    
})



client.on('messageCreate', async (message) => {
    //Comando 'af/'
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return

    let prefix = "af/"  // Modifica el prefix del bot

     if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase()

})

// Comandos Embed

client.on('messageCreate', async (message) =>{

    let prefix = "af/"

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase()
    








    if(command === "join"){      
       const JoinEmbed = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setDescription('Uniendose a canal de voz!')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
        

        message.channel.send({ embeds: [JoinEmbed] });   

        const { joinVoiceChannel } = require('@discordjs/voice');

        const connection = joinVoiceChannel({
            channelId: '910658096433627169',
            guildId: '910658096433627167',
            adapterCreator: null,
        });
        new Voice.createAudioPlayer({connection})
    }




    if(command === "leave"){
        const LeaveEmbed = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setDescription('Saliendo del canal de voz!... *Bye*')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})

        message.channel.send({ embeds: [LeaveEmbed] }); 
    }

    if(command === "stop"){
        const StopEmbed = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setDescription('Parando todos los audios!')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})

        message.channel.send({ embeds: [StopEmbed] });     
    }

    if(command === 'commands'){
        const HelpEmbed = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setTitle('Comandos')
        .setDescription('l')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
    }

const { MessageActionRow, MessageButton } = require('discord.js');
    if(command === 'prueba'){
        const row = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageButton()
            .setCustomId('primary')
            .setLabel('NO ABRIR!')
            .setStyle('PRIMARY')
        );
        const Prueba = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setDescription('Prueba 1\n*Bye*')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
        message.channel.send({ content: null, ephemeral: true, embeds: [Prueba], components: [row] });
    }
    
    if(command === '1','2','3'){
        const PlayAudio = new discord.MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
        .setDescription('Reproduciendo un audio!')
        .setColor('#4080ee')
        message.channel.send({ embeds: [PlayAudio] }); 
    }

});


    

client.login(config.token)