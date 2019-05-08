chrome.app.runtime.onLaunched.addListener(function() {
  var window = chrome.app.window.create("index.html",
    {
      id: "Main",
      outerBounds: {
        width: 275, minWidth: 275, maxWidth: 275,
        height: 180, minHeight: 180, maxHeight: 180
      },
      frame: "none",
      type: "panel",
      resizable: false
    });
    //AddListeners("Main");
});