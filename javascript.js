function calculate(h, w, d) {
	var result = h * w * d;
	return result;
};

function execute() {
	var itemHeight = document.getElementById('item-height').value;
	var itemWidth = document.getElementById('item-width').value;
	var itemDepth = document.getElementById('item-depth').value;

	var binHeight = document.getElementById('bin-height').value;
	var binWidth = document.getElementById('bin-width').value;
	var binDepth = document.getElementById('bin-depth').value;

	var quantityHigh = Math.ceil(binHeight / itemHeight);
	var quantityWide = Math.floor(binWidth / itemWidth);
	var quantityDeep = Math.floor(binDepth / itemDepth);

	total = calculate(quantityHigh, quantityWide, quantityDeep);

	if (isNaN(total) 
	|| !isFinite(total) 
	|| (total == false)
	) {
		errorMessage();
	}
	else {
		successMessage();
	};

	window.scrollTo(0,0);
};

var alert = document.getElementById('alert');

function errorMessage() {
	alert.className += 'alert alert-danger';
	alert.innerHTML = "<h3>Did you fill everything out right? Something seems incorrect...</h3>";
};

function successMessage() {
	alert.className += 'alert alert-success';
	alert.innerHTML = '<h3>You will need <strong>' + total + '</strong> items to fill the bin.</h3>';
};

function reset() {
	document.getElementById('item-height').value = '';
	document.getElementById('item-width').value = '';
	document.getElementById('item-depth').value = '';

	document.getElementById('bin-height').value = '';
	document.getElementById('bin-width').value = '';
	document.getElementById('bin-depth').value = '';
};