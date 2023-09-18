import {Command} from '@colyseus/command';
import {CommandMessageRoute} from '../command-message-route';

@CommandMessageRoute('end_game')
export class EndGameCommand extends Command {
    validate(payload: this['payload']): boolean {
        console.log('Validate');
        return super.validate(payload);
    }

    execute(payload: this["payload"]): Array<Command> | Command | void | Promise<Array<Command>> | Promise<Command> | Promise<unknown> {
        console.log('Execute');
        return undefined;
    }
}
