let port = browser.runtime.connectNative("material_fox");

port.postMessage({ text: "Hello from Firefox!" });

port.onMessage.addListener((response) => {
  console.log("Received response:", response);
});

port.onDisconnect.addListener(() => {
  console.log("Disconnected from the messenger.");
});
