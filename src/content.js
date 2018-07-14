console.log('testing');

var webUrl = location.href;

if(webUrl.match(/www.tsrtconline.in/g)) {
	$('<div id="chrom-nav-step-1-container" style="width: 400px; height: 170px;position: absolute;margin-top: 10px;margin-left: 500px;background-color: #dce2ed; z-index: 1;"> <h2 style="background-color: #3e83f2; height: 40px; text-align: center; color: white;"> Welcome to TSRTC <span id="chrome-close-nav" style="float: right; margin-right: 10px;"> &times; </span> </h2> <div style="width: 100px;height: 50px;margin-top: 40px;"> <hr/> </div> <div style="margin-left: 300px;"> <button id="chrom-nav-step-1-botton" style="background-color: #2f72ed;height: 30px;width: 80px;"> Next</button></div></div>').insertBefore( ".base" );

	$('html').on('click', '#chrom-nav-step-1-botton', function () {
		$("#chrom-nav-step-1-container").remove();
		$('<div id="chrom-nav-step-2-container" style="width: 400px; height: 170px;position: absolute;margin-top: 100px;margin-left: 500px;background-color: #dce2ed; z-index: 1;"> <h2 style="background-color: #3e83f2; height: 40px; text-align: center; color: white;"> Enter Your Source Place <span id="chrome-close-nav" style="float: right; margin-right: 10px;"> &times; </span> </h2> <div style="width: 200px;height: 50px;margin-top: 40px;"> <hr/> </div> <div style="margin-left: 300px;"> <button id="chrom-nav-step-2-botton" style="background-color: #2f72ed;height: 30px;width: 80px;"> Next</button></div></div>').insertBefore( ".base" );
	});

	$('html').on('click', '#chrom-nav-step-2-botton', function () {
		$("#chrom-nav-step-2-container").remove();
		$('<div id="chrom-nav-step-3-container" style="width: 400px; height: 170px;position: absolute;margin-top: 150px;margin-left: 500px;background-color: #dce2ed; z-index: 1;"> <h2 style="background-color: #3e83f2; height: 40px; text-align: center; color: white;"> Enter Your Destination Place <span id="chrome-close-nav" style="float: right; margin-right: 10px;"> &times; </span> </h2> <div style="width: 300px;height: 50px;margin-top: 40px;"> <hr/> </div> <div style="margin-left: 300px;"> <button id="chrom-nav-step-3-botton" style="background-color: #2f72ed;height: 30px;width: 80px;"> Next</button></div></div>').insertBefore( ".base" );
	});

	$('html').on('click', '#chrom-nav-step-3-botton', function () {
		$("#chrom-nav-step-3-container").remove();
		$('<div id="chrom-nav-step-4-container" style="width: 400px; height: 170px;position: absolute;margin-top: 200px;margin-left: 500px;background-color: #dce2ed; z-index: 1;"> <h2 style="background-color: #3e83f2; height: 40px; text-align: center; color: white;"> Select Date <span id="chrome-close-nav" style="float: right; margin-right: 10px;"> &times; </span> </h2> <div style="width: 400px;height: 50px;margin-top: 40px;"> <hr/> </div> <div style="margin-left: 300px;"> <button id="chrom-nav-step-4-botton" style="background-color: #2f72ed;height: 30px;width: 80px;"> Next</button></div></div>').insertBefore( ".base" );
	});

	$('html').on('click', '#chrom-nav-step-4-botton', function () {
		$("#chrom-nav-step-4-container").remove();
		$('<div id="chrom-nav-step-5-container" style="width: 400px; height: 170px;position: absolute;margin-top: 200px;margin-left: 500px;background-color: #dce2ed; z-index: 1;"> <h2 style="background-color: #3e83f2; height: 40px; text-align: center; color: white;"> Success!!! </h2> <div style="width: 400px;height: 50px;margin-top: 40px;"> You have successfully complete the flow. </div> <div style="margin-left: 300px;"> <button id="chrom-nav-step-5-botton" style="background-color: #2f72ed;height: 30px;width: 80px;"> Done</button></div></div>').insertBefore( ".base" );
	});

	$('html').on('click', '#chrom-nav-step-5-botton', function () {
		$("#chrom-nav-step-5-container").remove();
	});

	$('html').on('click', '#chrome-close-nav', function () {
		showNavigation = false;
		$("#chrom-nav-step-1-container").remove();
		$("#chrom-nav-step-2-container").remove();
		$("#chrom-nav-step-3-container").remove();
		$("#chrom-nav-step-4-container").remove();
		$("#chrom-nav-step-5-container").remove();
	});
}