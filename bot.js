
const { ActivityHandler, MessageFactory } = require('botbuilder');
import choking from './messages/choking.json'

class USafe extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            
            let input = JSON.parse(context.activity.text)
            let text = ''

            if (input[0] === 0){
                if (input === [0,0]) text = choking.c0
                else if (input === [0,0,0]) text = choking.c00
                else if (input === [0,0,1]) text = choking.c01
                else if (input === [0,0,1,0]) text = choking.c010
                else if (input === [0,0,1,1]) text = choking.c011
                else if (input === [0,0,0,1]) text = choking.c001
                else if (input === [0,0,0,0]) text = choking.c000
                else if (input === [0,0,1,0,0]) text = choking.c0100
                else if (input === [0,0,1,0,1]) text = choking.c0101
                else if (input === [0,0,1,1,0]) text = choking.c0110
                else if (input === [0,0,1,1,1]) text = choking.c0111
                else if (input === [0,0,1,1,1,0]) text = choking.c01110
                else if (input === [0,0,1,1,1,1]) text = choking.c01111

                else if (input === [0,1]) text = choking.c1
                else if (input === [0,1,1,0]) text = choking.c110
                else if (input === [0,1,1,0]) text = choking.c111
                else if (input === [0,1,0,1]) text = choking.c101
                else if (input === [0,1,0,0]) text = choking.c100
                else if (input === [0,1,1,0,0]) text = choking.c1100
                else if (input === [0,1,1,0,1]) text = choking.c1101
            
            }else if (input[0] === 1){
                text = 'other.1'
            }

            await context.sendActivity(MessageFactory.text(text))

            await next();
        });


        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Olá, como posso te ajudar?';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.USafe = USafe;

