let $navIcon = $(".nav-icon");
let $nav = $(".nav ul");
let $li = $(".nav-ul li");

$navIcon.on("click", function() {
	if ($nav.css("display") == "none")
		$nav.css("display", "flex");
	else
		$nav.css("display", "none");
});

$li.on("click", function() {
	if ($(window).width() < 700) {
		if ($nav.css("display") == "flex")
			$nav.css("display", "none");
	}
});
