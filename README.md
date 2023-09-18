# colyseus-message-router
A new idea to route Colyeus Messages from Clientbased on a decorator pattern. 

The idea would be

```typescript
@CommandRoute('player_enter')
export class PlayerEnteredCommand extends Command {

  execute(...) {
    console.log('Fired without creating any nasty this.onMessage handlers')
  }

}
```
