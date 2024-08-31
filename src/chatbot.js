const yargs = require('yargs');

// Define the chatbot logic
const chatbot = function() {
    yargs.version('1.0.0');

    // "greet" command
    yargs.command({
        command: 'greet',
        describe: 'Greet the user',
        builder: {
            name: {
                describe: 'Your name',
                demandOption: true, // Required
                type: 'string'
            }
        },
        handler: function(argv) {
            console.log(`Hello, ${argv.name}! How can I assist you today?`);
        }
    });

    // "ask" command
    yargs.command({
        command: 'ask',
        describe: 'Ask the chatbot a question',
        builder: {
            question: {
                describe: 'Your question',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            if (argv.question.includes('weather')) {
                console.log('The weather is sunny today!');
            } else if (argv.question.includes('time')) {
                console.log(`The current time is ${new Date().toLocaleTimeString()}.`);
            } else {
                console.log("I'm sorry, I don't have an answer to that.");
            }
        }
    });

    // "exit" command
    yargs.command({
        command: 'exit',
        describe: 'Exit the chatbot',
        handler: function() {
            console.log('Goodbye!');
            process.exit();
        }
    });

    // Parse the command line arguments
    yargs.parse();
}

// Export the chatbot module
module.exports = chatbot;
