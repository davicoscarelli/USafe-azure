// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {

            const input = JSON.parse(context.activity.text)
            let text = ''

            if (input[0] === 0){
                    if (input === [0,0]) text = "A vítima está com dificuldade para respirar?"
                    else if (input === [0,0,0]) text = "A vítima tem mais de 8 anos de idade?"
                    else if (input === [0,0,1]) text = "A vítima está consciente?"
                    else if (input === [0,0,1,0]) text = "A vítima tem mais de 8 anos de idade??"
                    else if (input === [0,0,1,1]) text = "A vítima tem mais de 8 anos de idade??"
                    else if (input === [0,0,0,1]) text = "ANSWER1"
                    else if (input === [0,0,0,0]) text = "ANSWER2"
                    else if (input === [0,0,1,0,0]) text = "ANSWER6"
                    else if (input === [0,0,1,0,1]) text = "ANSWER5"
                    else if (input === [0,0,1,1,0]) text = "ANSWER2"
                    else if (input === [0,0,1,1,1]) text = "A vítima é Grávida/Obesa?"
                    else if (input === [0,0,1,1,1,0]) text = "ANSWER3"
                    else if (input === [0,0,1,1,1,1]) text = "ANSWER4"

                    else if (input === [0,1]) text = "Você está com dificuldade para respirar?"
                    else if (input === [0,1,1,0]) text = "Você está sozinho(a)?"
                    else if (input === [0,1,1,0]) text = "ANSWER3.2"
                    else if (input === [0,1,0,1]) text = "ANSWER1"
                    else if (input === [0,1,0,0]) text = "ANSWER2+"
                    else if (input === [0,1,1,0,0]) text = "ANSWER2+"
                    else if (input === [0,1,1,0,1]) text = "CALL 911"
                
                }else if (input[0] === 1){
                    text = 'other.1'
                }

            
            
            await context.sendActivity(MessageFactory.text(text, text));
            

            //await context.sendActivity(MessageFactory.text(replyText, replyText));
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

module.exports.EchoBot = EchoBot;

