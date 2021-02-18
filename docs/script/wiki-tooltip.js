var exists = false;
$('.reference').on('mouseover', function() {
	if (exists == false) {
		var tooltip = "<div class='tooltip'><span>" + this.attributes.alt.value + " <a href='"+ this.attributes.url.value +"' target='_blank'>"+ this.attributes.url.value +" <img src='img/Icon_External_Link.png'></a></span></div><div class='tooltipTail'> </div>";
		$('body').prepend(tooltip);
		$('.tooltip').css('top', Math.floor($(this).position().top) - 4 - $('.tooltip').outerHeight());
		$('.tooltip').css('left', Math.floor($(this).position().left) - 10);
		
		$('.tooltipTail').css('top', Math.floor($(this).position().top) - 9);
		$('.tooltipTail').css('left', Math.floor($(this).position().left) + 2);
		exists = true;
	};
	$('body').on('mousemove', function(event) {
		if (exists==true) {
			var mouseX = event.pageX; mouseY = event.pageY;
			if (mouseX > $('.tooltip').position().left + 320 || mouseX < $('.tooltip').position().left - 50 || mouseY > $('.tooltip').position().top + 100 || mouseY < $('.tooltip').position().top - 50) {
				$('.tooltip').remove();
				$('.tooltipTail').remove();
				exists=false;
			}
		}
	});
});