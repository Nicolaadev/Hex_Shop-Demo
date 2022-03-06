const { MessageActionRow, MessageButton, MessageEmbed} = require('discord.js');

module.exports = {
    name: "shop",
    description: "Shop",

  run: async (client, interaction, args) => {

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId("shop")
            .setLabel("BUY")
            .setStyle("PRIMARY")
            .setEmoji("<a:GRT_Money:949901850008748032>"),
    );

    const embed = new MessageEmbed()
    .setTitle('HEX | Support')
    .setDescription('**Press BUY to view products and place an order.**\n(after-sales service for everything)')
    .setFooter("\nHEX l Support Create By. Sarnax")
    .setThumbnail('https://cdn.discordapp.com/attachments/944590600806735922/949899379798573056/1cdb724a-a282-46b6-a126-51ccc07849f2-removebg-preview.png')
    .setColor("00FF00");

    const checkdm = new MessageEmbed()
    .setTitle("Check dm")
    .setColor("FF0000")
    .setDescription("Look at your DM\n\n✅ See Message")
    .setThumbnail('https://cdn.discordapp.com/attachments/944590600806735922/949899379798573056/1cdb724a-a282-46b6-a126-51ccc07849f2-removebg-preview.png')
    .setFooter("HEX l Support Create By. Sarnax");

    const embed1 = new MessageEmbed()
    .setAuthor({ name: 'Sarnax#9999', iconURL: 'https://cdn.discordapp.com/avatars/582142955742298132/7e49283b0458d0b8ac0c64b138919001.webp?size=96'})
    .setTitle("Cheating Private")
.addFields(
    { name: '\u200B', value: 'Website: https://sarnax.is-a.dev/ Contact to order, DM <@582142955742298132>'},
    { name: '\u200B', value: 'Our cheats are permanent and do not have daily or monthly sales / We provide warranty & support, available at Services.'},
    { name: '\u200B', value: '**Payment : Paypal<:Paypal:949257511976980530> / BTC <:BTC:949257513822482472> / ETH <:ETH:949257511792414790> / USDT <:USDT:949257511951818792>**'},

    { name: '**<:buy:949634013902024744> Cheating Private**', value: '```PUBG / MB  ► 70$\nVALORANT   ► 70$\nRUST       ► 60$\nRAINBOW6   ► 50$\nFIVEM EXEC ► 60$\nWARZONE    ► 80$\nFORTNITE   ► 100$\nEscape     ► 80$```', inline: true},


    { name: '**<:source:949634013545512970> Source Code**', value: '```FIVEM     ► 100 $\nFORTNITE  ► 130 $\nSPOOFER   ► 80 $\nWARZONE   ► 100 $\nRust      ► 80 $\nDRIVER    ► 90 $\nINJECTOR  ► 80 $\nVALORANT  ► 140 $```', inline: true},


    { name: '**<:spoofer:949634013507747870> SPOOFER**', value: '```FORTNITE ► 80$\nAPEX     ► 60$\nVALORANT ► 70$\nFIVEM    ► 60$\nWARZONE  ► 50$\nHWID     ► 60$\nEAC/BE   ► 50$\nOTHER    ► DM```', inline: true},


    { name: '**<:Lock:949260079243337789> Please read before placing an order.**', value: '```All items sold here are permanent, we do not sell  monthly.\n===========================================================\n    If Banned & Not Working = Refund / 24 Hours Support```', inline: true},

)
.setFooter({ text: "HEX l Support  Create By. Sarnax", iconURL: 'https://images-ext-2.discordapp.net/external/n48Orra5zKuwOVcfj9-RWxUth73MuZwjjfuYupGvG-4/https/www.img.in.th/images/34d7eb6361445668e7e307761bf469c3.md.jpg' })

.setColor("FF0000")

.setTimestamp()

const errormsg = new MessageEmbed()
.setTitle("Error")
.setColor("FF0000")
.setDescription("**Please enable your dms**\nto continue this command")
.setThumbnail('https://cdn.discordapp.com/attachments/944590600806735922/949899379798573056/1cdb724a-a282-46b6-a126-51ccc07849f2-removebg-preview.png')
.setFooter("HEX l Support Create By. Sarnax");

    await interaction.followUp({ embeds: [embed], components: [row], fetchReply: true});

    client.on('interactionCreate', async i => {

        if (i.customId === 'shop') {
            await i.reply({ embeds: [checkdm], ephemeral: true }).then(i.user.send({ embeds: [embed1]}).catch(error=>
                { 
                    interaction.followUp({ embeds: [errormsg], ephemeral: true})
                }))
        }
    })

  },
};