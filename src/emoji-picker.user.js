
(function() {
	function check() {
		if (typeof API !== "undefined" && API.enabled)
			return run();
		else
			return setTimeout(check, 1e3);
	}

	function run () {
		var script = document.createElement("script");
			script.id = "emoji-picker";
			script.src = "<%= dist_url %>emoji-picker.min.js";

		script.onload = function() {
		    this.parentNode.removeChild(this);
		};

		(document.head || document.documentElement).appendChild(script);
	}

	check();
})();