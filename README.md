# Sıfır v13 Altyapı
İçerisin de Talent Perm sistemi mevcuttur.

taslak içinde permissions içine "OWNER" olarak girerseniz sadece bot sahibi kullanır ve tek tek id girerseniz belirlediğiniz id, sunucu yöneticisi ve bot sahipleri kullanabilir
_channels.js içinde ise sadece o komut kanallarında kullandırılabilmek için oraya kanal idsi girmeniz yeterlidir girmezseniz tüm kanallar da kullanıma açılır işte kullanın amk 

talentPerms.json da ise .vip, .elite gibi komutlar ekleyebilirsiniz. 
kendinize göre geliştirin.

# KOMUT TASLAĞI
```
module.exports = {
    name: "",
    aliases: [],
    description: "",
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
    
    }
};
```
