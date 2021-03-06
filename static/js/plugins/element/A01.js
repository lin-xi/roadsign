app.plugin('element/a01', 'plugins/elementBase', function(ElementBase){
	
	var A01 = ElementBase.derive({
		type: 'A01'
	}, 
	//构造函数
	function(){
	}, 
	//prototype
	{
		create: function(){
			var html = "<g type=\"A01\">\n  <polygon transform=\"scale(5, 5)\" fill=\"#FEFEFE\" stroke=\"#FEFEFE\" stroke-width=\"0.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"19.9161,0.1386 18.683,1.2419 18.7479,7.9915 17.6446,9.1597 1.6143,9.1597 0.5759,10.263 1.7441,11.1067 17.7095,11.1716 18.7479,12.1451 18.7479,16.3636 21.3439,16.3636 21.3439,12.0802 22.7717,11.1716 38.6722,11.1067 39.3861,10.0683 38.2828,9.1597 22.577,9.2246 21.1492,7.8617 21.2141,1.1121 \"/>\n</g>\n\n";
			return html;
		},
		getTemplate: function(){
			return this.create();
		}
	});
	
	return A01;
});