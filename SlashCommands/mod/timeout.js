const { Command } = require("reconlx");
const ms = require('ms')
const { MessageEmbed } = require('discord.js');


module.exports = {
  name: 'timeout',
  description: 'timeout a member',
  // user, length (Timeout duration), reason
  options:[
    {
      name:'user',
      description:'user to timeout',
      type:'USER',
      required:true,
  },
  {
      name:'duration',
      description:'timeout duration',
      type:'STRING',
      required:true,
  },
  {
      name:'reason',
      description:'reason for timeout',
      type:'STRING',
      required:true,
  },
  ],
  run: async ( client, interaction, args ) => {

    const user = interaction.options.getUser('user')
    const length = interaction.options.getString('duration')
    const reason = interaction.options.getString('reason')
    const member = interaction.guild.members.cache.get(user.id)
    const timeInms  = ms(length);
    if(!timeInms) return interaction.followUp("Time") 
    member.timeout(timeInms, reason).catch(error=>{ interaction.editReply({ content: "Missing Permissions" }) })
    interaction.followUp(`${user} has been timeout-ed for ${length}!`)
  }
}