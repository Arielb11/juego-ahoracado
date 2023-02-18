const webdriver = require('selenium-webdriver');

// Crear una instancia del controlador de Chrome
const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// Navegar a una página web
driver.get('http://127.0.0.1:5500/src/index.html');

// Buscar un elemento por su ID y hacer clic en él
const element = driver.findElement(webdriver.By.id('arriesgarButton'));
element.click();

// Esperar 3 segundos
driver.sleep(3000);

// Cerrar el navegador
driver.quit();
