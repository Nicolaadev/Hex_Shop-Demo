const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const ms = require('ms');

module.exports = {
    name: "unmute",
    description: "unmutes the target member",
    userPermissions: ("BAN_MEMBERS"),
    options: [
        {
            name: "target",
            description: "select a target",
            type: "USER",
            required: true,
        }
    ],
    /**
     * 
     * @param {*} client 
     * @param {*} interaction 
     * @param {*} args 
     */
    run: async (client, interaction, args) => {
        const Target = interaction.options.getMember("target");
        
        if(!Target.roles.cache.get("949937096297168936")) 
        return interaction.followUp({ content: "The member is not muted"})

        Target.roles.remove("949937096297168936").catch(error=>{ interaction.editReply({ content: "Missing Permissions" }) })

        interaction.followUp({ content: `${Target} has been unmuted`})
    }
}