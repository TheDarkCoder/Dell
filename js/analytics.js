var service = analytics.getService('Dell Rave');
var tracker = service.getTracker('UA-71617903-1');

tracker.sendAppView('MainView');

var COLOR_PICKED = analytics.EventBuilder.builder()
  .category('Color')
  .action('Choose')
  .dimension(12,'Color');

/*

syntax is... sendEvent(<category>,<action>,)
tracker.sendEvent('Flavor', 'Choose', 'Chocolate');

var FLAVOR_PICKED = analytics.EventBuilder.builder()
    .category('Flavor')
    .action('Choose')
    .dimension(12, 'Custard Based');

// elsewhere...
tracker.send(FLAVOR_PICKED.label('Chocolate'));

*/