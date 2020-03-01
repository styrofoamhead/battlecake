$(function() {
	$("#reserveButton").click(function() {
		$("#reserveModal").modal("show");
	});
	$("#loginButton").click(function() {
		$("#loginModal").modal("show");
	});
});

setTimeout(function() {
	$("#subscribeModal").modal("show");
}, 2000);

// battle plan toggle
$(function() {
	$("#cakeOptBtn").click(function() {
		$("#cakeOpts").collapse("show");
	});
	$("#cakeOptBtn").click(function() {
		$("#cakeOpts").collapse("hide");
	});
});

$("a.nav-link").click(function() {
	$(".tab-pane").hide();
	$($(this).attr("href")).show();
});

$(document).ready(function() {
	const tab = window.location.hash;
	if (tab != "") {
		$('.nav-tabs a[href="' + tab + '"]').tab("show");
		window.scrollTo(0, 0);
	}
});
