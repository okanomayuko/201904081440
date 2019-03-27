$(function () {
	var flexCards = $(".flex_cards");
	flexCards.each(function () {
		var flexCard = $(this).children('li');
		var colNum = parseInt($(this).width() / flexCard.width());
		for (var i = 0; i < colNum – 1; i++) {
		var fillElement = $("<li>", {
			class: "fill_element"
		});
		fillElement.css({
			height: "0",
			margin: "0",
			width: flexCard.width() + "px",
			padding: "0"
		});
		$(this).append(fillElement);
		}
		$(window).resize(function () {
			fillElements = $(".fill_element");
			fillElements.width(flexCard.width());
		});
	});
});