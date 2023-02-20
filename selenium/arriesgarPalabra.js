const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

let service = new chrome.ServiceBuilder()
         .loggingTo('C:\\Users\\Usuario\\OneDrive\\Escritorio\\chromedriver\\chromedriver')
         .enableVerboseLogging()
         .build();

     let options = new chrome.Options();
     // configure browser options ...

     let driver = chrome.Driver.createSession(options, service);
   


async function example() {
 // let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to website
    const file = path.join(__dirname, '../src', 'index.html');
    await driver.get(`file://${file}`);

    const element = driver.findElement({id:'startButton'});
    const elementArriesgar = driver.findElement({id:'arriesgarButton'});
    const palabraArriesgada = driver.findElement({id:'palabraArriesgada'});
    const listoButton = driver.findElement({id:'listoButton'});
    await driver.sleep(1000);

    element.click();
    await driver.sleep(1000);
    elementArriesgar.click();
    await driver.sleep(1000);
    palabraArriesgada.sendKeys('invierno');
    await driver.sleep(1000);
    listoButton.click();
    await driver.sleep(2000);

   
} finally {
    await driver.quit();
  }
}

example();
