
window.chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
  const activeTab = arrayOfTabs[0];
  if(activeTab.url.match(/www.tsrtconline.in\/oprs-web\//g)) {
  	var sourceElement = document.getElementsByClassName("body-style")[0];
	sourceElement.classList.remove("hide");
  	
  	document.getElementsByClassName("source-save-button")[0].addEventListener("click", function(){
	    var source = document.getElementsByClassName('source')[0].value;
	    if(!source)
	    	return;
	    chrome.storage.sync.set({'source': source}, function() {
	    	console.log(source);
	    	var sourceElement = document.getElementsByClassName("source-container")[0];
			sourceElement.classList.add("hide");
			var destinationElement = document.getElementsByClassName("destination-container")[0];
			destinationElement.classList.remove("hide");
	    });
	});


	document.getElementsByClassName("destination-save-button")[0].addEventListener("click", function(){
	    var destination = document.getElementsByClassName('destination')[0].value;
	    if(!destination)
	    	return;
	    chrome.storage.sync.set({'destination': destination}, function() {
	    	console.log(destination);
	    	var destinationElement = document.getElementsByClassName("destination-container")[0];
			destinationElement.classList.add("hide");
			var dateElement = document.getElementsByClassName("date-container")[0];
			dateElement.classList.remove("hide");
	    });
	});


	document.getElementsByClassName("date-save-button")[0].addEventListener("click", function(){
	    var journeyDate = document.getElementsByClassName('journey-date')[0].value;
	    if(!journeyDate)
	    	return;
	    chrome.storage.sync.set({'journeyDate': journeyDate}, function() {
	    	console.log(journeyDate);
	    	var dateElement = document.getElementsByClassName("date-container")[0];
			dateElement.classList.add("hide");
			var dateElement = document.getElementsByClassName("booking-progress-container")[0];
			dateElement.classList.remove("hide");
	    });
	});
  }
});
