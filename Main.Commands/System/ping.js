module.exports = {
    
    name: "ping",
    aliases: ["acar"],
    description: "acar",
    permissions: [],
    category: [],
    active: true,

    /**
    * @param {Client} client 
    */
   
    onLoad: function (client) {

    },

    /**
    * @param {Client} client 
    * @param {Message} message 
    * @param {Array<String>} args 
    */

    onRequest: async function (client, message, args) {
      message.channel.send({content: "Pong!"})
    }
};