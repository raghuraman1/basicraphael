function useThis(c){
	var paper = Raphael(c, 500, 500);

	var rect = paper
		.rect(200, 200, 100, 100)
		.attr('fill', '#f00');

	// Add freeTransform
	var ft = paper.freeTransform(rect);

	// Hide freeTransform handles
	ft.hideHandles();

	// Show hidden freeTransform handles
	ft.showHandles();

	// Apply transformations programmatically
	ft.attrs.rotate = 45;

	ft.apply();

	// Remove freeTransform completely
	ft.unplug();

	// Add freeTransform with options and callback
	ft = paper.freeTransform(rect, { keepRatio: true }, function(ft, events) {
		console.log(ft.attrs);
	});

	// Change options on the fly
	ft.setOpts({ keepRatio: false });
}