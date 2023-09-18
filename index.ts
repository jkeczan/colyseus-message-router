import 'reflect-metadata';
import {Client, Room} from 'colyseus';


class BattleRoom extends Room {
    onCreate(options) {
        if (options.mode === "duo") {
            // do something!
        }
    }
    onJoin(client, options) {
        if (options.mode === "duo") {
            // put this player into a team!
        }
    }
}




// Colyseus (barebones)
import { Server } from "colyseus";
const port = 3001;

const gameServer = new Server({

});
gameServer.listen(port);
gameServer.define('battle', BattleRoom)


