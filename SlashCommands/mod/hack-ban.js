const { MessageEmbed } = require("discord.js");

module.exports = {
        name: "hackban",
        description:"Force Ban a user with his/her ID",
        userPermissions: ['BAN_MEMBERS'],
        options: [
    {
        name: 'target',
        description: 'ID of the User to ban',
        type: 'STRING',
        required: true,
    },
    {
        name: 'reason',
        description: 'Reason to ban the user',
        type: 'STRING',
        required: false,
    },
  ],

        run: async(client, interaction, args) => {
        const target = args[0];
        const reason = interaction.options.getString('reason') || "No reason provided";
        try {
                interaction.guild.members.ban(target, {reason: reason.length < 1 ? 'No reason supplied.': reason});
                const embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription("**They were successfully banned. User was not notified!**");
                interaction.followUp({ embeds: [embed2] })
            } catch(err) {
                console.log(err)
            }

}
}