const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "kick",
    description: "kick a member",
    userPermissions: ("KICK_MEMBERS"),
    options: [
        {
             name: 'target',
             description: 'target to kick',
             type: 'USER',
             required: true
        },
        {
             name: 'reason',
             description: 'reason for this kick',
             type: 'STRING',
             required: false
        }
    ],
    run: async (client, interaction, args) => {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason') || "No reason provided"

        if(
            target.roles.highest.position >= 
            interaction.member.roles.highest.position
            ) 
            return interaction.editReply({ 
            content: 
                "Missing Permissions"
            });

        target.send(`You have been kick from ${interaction.guild.name}, reason ${reason}`).catch(error=>{ interaction.followUp({ content: `${target}'s Dms is closed, I can't dms him / her!` }) })

        target.kick(reason);

        interaction.followUp({ content: `kicked ${target.user.tag} successfully! reason: ${reason}`})
    }
};