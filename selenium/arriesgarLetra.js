const chrome = require('selenium-webdriver/chrome');
const path = require('path');

let service = new chrome.ServiceBuilder()
         .loggingTo('C:\\Users\\Usuario\\OneDrive\\Escritorio\\chromedriver\\chromedriver')
         .enableVerboseLogging()
         .build();

     let options = new chrome.Options();

     let driver = chrome.Driver.createSession(options, service);


async function example() {
  try {
    // Navigate to website
    const file = path.join(__dirname, '../src', 'index.html');
    await driver.get(`file://${file}`);
    await driver.sleep(2000);    
    const startButton = driver.findElement({id:'startButton'});
    startButton.click();
    await driver.sleep(2000);
    const wordContainer = driver.findElement({id:'body'});
    wordContainer.sendKeys('i');
    await driver.sleep(2000);
   
} finally {
    await driver.quit();
  }
}

example();