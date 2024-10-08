# Simple CommandLine Chatbot

A command-line chatbot built using [Yargs](https://yargs.js.org/), designed to interact with users by recognizing and responding to various commands.

## Features

- **Greet Command**: The bot can greet users with a personalized message.
- **Ask Command**: The bot can respond to specific questions like the current weather or time.
- **Exit Command**: Users can gracefully exit the chatbot.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/osazedollar/Chatbot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Chatbot
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Usage

1. **Greet the Bot:**

   ```bash
   node app.js greet --name=YourName
   ```

   Example:
   
   ```bash
   node app.js greet --name=John
   ```

   Output: `Hello, John! How can I assist you today?`

2. **Ask a Question:**

   ```bash
   node app.js ask --question="Your question here"
   ```

   Example:

   ```bash
   node app.js ask --question="What is the weather?"
   ```

   Output: `The weather is sunny today!`

3. **Exit the Chatbot:**

   ```bash
   node app.js exit
   ```

   Output: `Goodbye!`

## Author

This project is maintained by [osazedollar](https://github.com/osazedollar).

## License

This project is licensed under the MIT License.

---

Feel free to update any sections of the code as needed!, it's opened to 
the community
