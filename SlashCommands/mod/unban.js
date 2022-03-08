const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "unban",
    description: "unban a member",
    userPermissions: ("BAN_MEMBERS"),
    options: [
        {
             name: "userid",
             description: "user id that you want to unban",
             type: "STRING",
             required: true,
        },
    ],
    run: async (client, interaction, args) => {
        const userId = interaction.options.getString("userid");

            interaction.guild.members.unban(userId).then((user) => {
                interaction.followUp({ content: `${user.tag} is unbanned from this server!` })
            })
            .catch(() => {
                interaction.followUp({ content: "Please specify a valid banned member's id"})
            })
    },
};