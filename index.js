
const wdio = require("webdriverio");

const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "4.4.2",
    deviceName: "Lenovo A7600-H",
    app: "./app-debug.apk",
    automationName: "UiAutomator2"
  }
};

const test = async function() {
    const client = wdio.remote(opts);

    const elementId = await client.findElement("accessibility id","TextField1"); 
    client.elementSendKeys(elementId.ELEMENT, "Hello World!");
    const elementValue = await client.findElement("accessibility id","TextField1");
    await client.getElementAttribute(elementValue.ELEMENT,"value").then((attr) => {
        assert.equal(attr,"Hello World!");
    });
}
test();