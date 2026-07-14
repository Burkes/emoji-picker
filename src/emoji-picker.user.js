
(function() {
	var script = document.createElement("script");
		script.id = "emoji-picker";
		script.src = "<%= dist_url %>emoji-picker.min.js";

	script.onload = function() {
	    this.parentNode.removeChild(this);
	};

	(document.head || document.documentElement).appendChild(script);
})();