# but-devvy-said
Devvy Cho is a smart bot that you can query for resources that have been useful to past or current DevLeague students. The resources available include notes, applicable examples, and external links. Devvy has the ability to display these resources in both the Web application version and the Slack implementation.

## How It Works
At her core, Devvy relies on a natural language processor (NLP) called [Wit.ai](https://wit.ai). Messages sent to Devvy are turned into actionable commands through Wit. These commands are then used to perform specific bot-related tasks.

We used [Botkit](https://www.botkit.ai/) to build Devvy a body and integrate her in Slack and the browser.

The original inspiration for Devvy is [here](https://github.com/devleague/Devvy-Cho).

## See Her In Action
<!-- Need to add website link -->
Check Devvy out [here](http://devvycho.com/)!

## Contribute
### Local Installation
To use all of Devvy's features on your local machine, you will also need a .env file that includes tokens (see the sample.env file for an example). You will need to create a database for the Express server to connect to.

1. Fork and clone this project
2. Change your directory to the project folder
3. Run
   ```bash
    npm install
   ```
4. Run
   ```bash
    cp .env-sample .env
   ```
5. Edit .env
6. Run
   ```bash
    npm start
   ```
   ```bash
    npm run devvy
   ```
   ```bash
    npm run nigel
   ```

## License
Usage is provided under the [MIT License](http://http//opensource.org/licenses/mit-license.php). See LICENSE for the full details.