var htmlString = '<body style="margin: 0 auto;overflow: hidden;text-align: center;margin-top:5px"><script type="text/javascript">var _ase  = _ase || [];_ase.push(["1536895172","1566207922"]);<script src="https://gamma.cachefly.net/js/ad-exchange.js" type="text/javascript"></script><\/script></body>';
var sHeight = screen.height, html = '';
if (jQuery(window).width() > jQuery(window).height()) {
	html = '<div id="ad_inpage_container" style="width: 100%; max-width: 100%; overflow: hidden; text-align: center; position: relative; visibility: visible; display: block; height: ' + sHeight + 'px; background: transparent;clip-path: inset(1px);-webkit-clip-path:inset(1px);margin-bottom: -1px;">' +
		'<div id="ad_inpage_banner" style="display: none; position: fixed; top: 0px; margin: 0px auto;">' +
		'<iframe id="vmc_ad_x_frame" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" style="width: 100% !important;height: 100% !important ; position: absolute; left: 0px;" width="100%" height="100%"></iframe>' +
		'</div></div>';
}
else {
	html = '<div id="ad_inpage_container" style="width: 100%; max-width: 100%; overflow: hidden; text-align: center; position: relative; visibility: visible; display: block; height: ' + sHeight + 'px; background: transparent;clip-path: inset(1px);-webkit-clip-path:inset(1px);margin-bottom: -1px;">' +
		'<div id="ad_inpage_banner" style="display: none; position: fixed; top: 0px; margin: 0px auto;">' +
		'<iframe id="vmc_ad_y_frame" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" style="width: 100% !important;height: 100% !important; position: absolute; left: 0px;" width="100%" height="100%" ></iframe>' +
		'</div></div>';
}
jQuery('#vmcbackground').html(html);
jQuery('#ad_inpage_banner').css({ width: jQuery(window).width()-20, height: jQuery(window).height() });
jQuery('#divfirst').css({ 'z-index': 5, position: 'relative' });
jQuery('#vmcbackground').css({ 'z-index': 3, position: 'relative' });
jQuery('#divend').css({ 'z-index': 5, position: 'relative' });
//add ads content
var myIFrameW = document.getElementById('vmc_ad_x_frame');
if(myIFrameW!=null) myIFrameW.src = "javascript:'" + htmlString + "'";
var myIFrameH = document.getElementById('vmc_ad_y_frame');
if(myIFrameH!=null)  myIFrameH.src = "javascript:'" + htmlString + "'";
//fire scoll event
jQuery(window).scroll(function () {
	var el_offset = jQuery('#ad_inpage_container').offset();
	var wd_top = jQuery(window).scrollTop();
	var el_height = jQuery('#ad_inpage_container').height();
	var min_top = el_offset.top - el_height;
	var max_top = el_offset.top + el_height;
	if (typeof el_offset != "undefined") {
		if (min_top < wd_top && wd_top < max_top) {
			jQuery('#ad_inpage_banner').css('display', 'block');
		}
		else {
			jQuery('#ad_inpage_banner').css('display', 'none');
		}
	}
});


