import {Command, Dispatcher} from '@colyseus/command';
import {Client, Room} from 'colyseus';

export const CommandRoutes = [];

export class ColyeusMessageRouter<T extends Room> {
    private room: T;
    private dispatcher: Dispatcher<T>

    constructor(room: T, dispatcher: Dispatcher<T>) {
        this.room = room;
        this.dispatcher = dispatcher
    }

    registerRoutes() {
        this.room.onMessage('*', async (client: Client, type: string, message: any) => {
            const command = this.getCommandFromRoute(type)
            this.dispatcher.dispatch(new command(message));
        });
    }

    getCommandFromRoute(route: string): any {
        return CommandRoutes.find((decoratedCommand) => {
            const route = Reflect.getMetadata('route', decoratedCommand) as RouteDefinition;
            return route.command
        });
    }
}


export const CommandMessageRoute = (message_key: string = '') => {
    return function(target: Object, context: any) {
        // Get the routes stored so far, extend it by the new route and re-set the metadata.
        Reflect.defineMetadata('routes', {
            key: message_key,
            command: target
        }, target);

        CommandRoutes.push({
            key: message_key,
            command: target
        })

        return target
    }
};

export interface RouteDefinition {
    key: string,
    command?: any
}
