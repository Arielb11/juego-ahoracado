const chrome = require('selenium-webdriver/chrome');
const path = require('path');

let service = new chrome.ServiceBuilder()
         .loggingTo('C:\\Users\\Usuario\\OneDrive\\Escritorio\\chromedriver\\chromedriver')
         .enableVerboseLogging()
         .build();

     let options = new chrome.Options();

     let driver = chrome.Driver.createSession(options, service);
   


async function example() {
 // let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to website
    const file = path.join(__dirname, '../src', 'index.html');
    await driver.get(`file://${file}`);
    await driver.sleep(1000);
    const startButton = driver.findElement({id:'startButton'});
    startButton.click();
    await driver.sleep(1000);
    const wordContainer = driver.findElement({id:'body'});
    wordContainer.sendKeys('i');
    await driver.sleep(1000);
    wordContainer.sendKeys('n');
    await driver.sleep(1000);
    wordContainer.sendKeys('a');
    await driver.sleep(2000);

} finally {
  await driver.quit();
  }
}

example();