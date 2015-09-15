$(window).scroll(function()
{
	$(".category-header").each(function(){
        var topMargin = 0;
        var parentY = $(this).parent().offset().top;
        var parentH = $(this).parent().height();
        var targetScrollValue = parentY - topMargin;
        var wScrollvalue = $(window).scrollTop();
        var obj = {};

		if(wScrollvalue > targetScrollValue)
		{
			if(wScrollvalue > (parentY + parentH) - (topMargin +$(this).height()))
			{
				obj = {
					"position": "absolute",
					"top": parentH - $(this).height()
				};
			}
			else
			{
				obj = {
					"position": "fixed",
					"top": topMargin
				};
			}
		}
		else
		{
			obj = {
				position: "absolute",
				top: "0"
			};
		}
		$(this).css(obj);
	})
});