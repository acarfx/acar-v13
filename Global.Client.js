const { Client, Collection } = require('discord.js')
const fs = require('fs')


class acar extends Client {
    constructor(options) {
        super(options);

        // Gerekli
        
        this.sistem = global.sistem = require('./Main.Settings/_settings');
        this.reply = global.reply = require('./Main.Settings/_reply');
        this._channels = global._channels = require('./Main.Settings/_channels.json');
        this.commands = new Collection()
        this.aliases = new Collection()

        // Gerekli

        this.on("ready", () => { console.log(`${client.user.username} bot aktif.`) })
        
    }



    async fetchCommands() {
        let dirs = fs.readdirSync("./Main.Commands", { encoding: "utf8" });
        dirs.forEach(dir => {
            let files = fs.readdirSync(`./Main.Commands/${dir}`, { encoding: "utf8" }).filter(file => file.endsWith(".js"));
            files.forEach(file => {
                let reference = require(`./Main.Commands/${dir}/${file}`);
                if(reference.onLoad != undefined && typeof reference.onLoad == "function") reference.onLoad(this);
                if(!reference.active) return;
                this.commands.set(reference.name, reference);
                if (reference.aliases) reference.aliases.forEach(alias => this.aliases.set(alias, reference));
            });
        });
    }

    async fetchEvents() {
        let dirs = fs.readdirSync("./Main.Events", { encoding: "utf8" });
        dirs.forEach(dir => {
            let files = fs.readdirSync(`./Main.Events/${dir}`, { encoding: "utf8" }).filter(file => file.endsWith(".js"));
            files.forEach(file => {
                let reference = require(`./Main.Events/${dir}/${file}`);
                if(!reference.Options.active) return;
                this.on(reference.Options.name, reference);
            });
        });
    }
}

module.exports = { acar }