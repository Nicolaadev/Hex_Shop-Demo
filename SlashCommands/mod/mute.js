const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const ms = require('ms');

module.exports = {
    name: "mute",
    description: "mutes the target member",
    userPermissions: ("BAN_MEMBERS"),
    options: [
        {
            name: "target",
            description: "select a target",
            type: "USER",
            required: true,
        },
        {
            name: "reason",
            description: "provide a reason",
            type: "STRING",
            required: true,
        },
        {
            name: "preset-time",
            description: "select a pre set time.",
            type: "STRING",
            required: false,
            choices: [
                {
                    name: "1 Hour",
                    value: "1h"
                },
                {
                    name: "1 Day",
                    value: "1d"
                },
                {
                    name: "5 seconds",
                    value: "5s"
                },
        ],
    },
        {
            name: "custom",
            description: "Provide a custom time (1s/1h/1d)",
            type: "STRING",
            required: false
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
        const Reason = interaction.options.getString("reason") || "No reason specifies."
        const Time = interaction.options.getString("preset-time") || interaction.options.getString("custom") || "14d"

        if(!interaction.guild.roles.cache.get("949937096297168936"))
        return interaction.followUp({ content: "The mute role does not exist."})

        await Target.roles.add('949937096297168936').catch(error=>{ interaction.editReply({ content: "Missing Permissions" }) })
        setTimeout(async () => {
            if(!Target.roles.cache.has("949937096297168936")) return;
            await Target.roles.remove("949937096297168936")

        }, (ms(Time)))

        interaction.followUp({ content: `${Target} has been muted for ${Time} ${Target.id}`})
    }
}