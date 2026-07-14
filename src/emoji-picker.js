if (typeof window.ep != "undefined") window.ep.kill(window.jQuery);
(function($) {
	window.ep = {
		data: {
			// asian
			tone: 1,
			skinTones: "🏻,🏼,🏽,🏾,🏿",
			skinToneMojis: "🙌,👏,👋,👍,👎,👊,✊,✌️,👌,✋,👐,💪,🙏,☝️,👆,👇,👈,👉,🖕,🖐,🤘,🖖️,💅,👂,👃,👶,👦,👧,👨,👩,👱,👴,👵,👲,👳,👮,👷,💂,🎅,👼,👸,👰,🚶,🏃,💃,🙇,💁,🙅,🙆,🙋,🙎,🙍,💇,💆,🚣,🏊,🏄,🛀,⛹,🏋,🚴,🚵,🏇",
			categories: {
				"People": "😀,😬,😁,😂,😃,😄,😅,😆,😇,😉,😊,🙂,🙃,☺️,😋,😌,😍,😘,😗,😙,😚,😜,😝,😛,🤑,🤓,😎,🤗,😏,😶,😐,😑,😒,🙄,🤔,😳,😞,😟,😠,😡,😔,😕,🙁,☹️,😣,😖,😫,😩,😤,😮,😱,😨,😰,😯,😦,😧,😢,😥,😪,😓,😭,😵,😲,🤐,😷,🤒,🤕,😴,💤,💩,😈,👿,👹,👺,💀,👻,👽,🤖,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🙌,👏,👋,👍,👎,👊,✊,✌️,👌,✋,👐,💪,🙏,☝️,👆,👇,👈,👉,🖕,🖐,🤘,🖖,✍️,💅,👄,👅,👂,👃,👁,👀,👤,👥,🗣,👶,👦,👧,👨,👩,👱,👴,👵,👲,👳,👮,👷,💂,🕵,🎅,👼,👸,👰,🚶,🏃,💃,👯,👫,👬,👭,🙇,💁,🙅,🙆,🙋,🙎,🙍,💇,💆,💑,👩‍❤️‍👩,👨‍❤️‍👨,💏,👩‍❤️‍💋‍👩,👨‍❤️‍💋‍👨,👪,👨‍👩‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👩‍👧‍👧,👩‍👩‍👦,👩‍👩‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👩‍👩‍👧‍👧,👨‍👨‍👦,👨‍👨‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👨‍👨‍👧‍👧,👚,👕,👖,👔,👗,👙,👘,💄,💋,👣,👠,👡,👢,👞,👟,👒,🎩,⛑,🎓,👑,🎒,👝,👛,👜,💼,👓,🕶,💍,🌂",
				"Nature": "🐶,🐱,🐭,🐹,🐰,🐻,🐼,🐨,🐯,🦁,🐮,🐷,🐽,🐸,🐙,🐵,🙈,🙉,🙊,🐒,🐔,🐧,🐦,🐤,🐣,🐥,🐺,🐗,🐴,🦄,🐝,🐛,🐌,🐞,🐜,🕷,🦂,🦀,🐍,🐢,🐠,🐟,🐡,🐬,🐳,🐋,🐊,🐆,🐅,🐃,🐂,🐄,🐪,🐫,🐘,🐐,🐏,🐑,🐎,🐖,🐀,🐁,🐓,🦃,🕊,🐕,🐩,🐈,🐇,🐿,🐾,🐉,🐲,🌵,🎄,🌲,🌳,🌴,🌱,🌿,☘,🍀,🎍,🎋,🍃,🍂,🍁,🌾,🌺,🌻,🌹,🌷,🌼,🌸,💐,🍄,🌰,🎃,🐚,🕸,🌎,🌍,🌏,🌕,🌖,🌗,🌘,🌑,🌒,🌓,🌔,🌚,🌝,🌛,🌜,🌞,🌙,⭐️,🌟,💫,✨,☄️,☀️,🌤,⛅️,🌥,🌦,☁️,🌧,⛈,🌩,⚡️,🔥,💥,❄️,🌨,☃️,⛄️,🌬,💨,🌪,🌫,☂️,☔️,💧,💦,🌊",
				"Foods": "🍏,🍎,🍐,🍊,🍋,🍌,🍉,🍇,🍓,🍈,🍒,🍑,🍍,🍅,🍆,🌶,🌽,🍠,🍯,🍞,🧀,🍗,🍖,🍤,🍳,🍔,🍟,🌭,🍕,🍝,🌮,🌯,🍜,🍲,🍥,🍣,🍱,🍛,🍙,🍚,🍘,🍢,🍡,🍧,🍨,🍦,🍰,🎂,🍮,🍬,🍭,🍫,🍿,🍩,🍪,🍺,🍻,🍷,🍸,🍹,🍾,🍶,🍵,☕️,🍼,🍴,🍽",
				"Activity": "⚽️,🏀,🏈,⚾️,🎾,🏐,🏉,🎱,⛳️,🏌,🏓,🏸,🏒,🏑,🏏,🎿,⛷,🏂,⛸,🏹,🎣,🚣,🏊,🏄,🛀,⛹,🏋,🚴,🚵,🏇,🕴,🏆,🎽,🏅,🎖,🎗,🏵,🎫,🎟,🎭,🎨,🎪,🎤,🎧,🎼,🎹,🎷,🎺,🎸,🎻,🎬,🎮,👾,🎯,🎲,🎰,🎳",
				"Places": "🚗,🚕,🚙,🚌,🚎,🏎,🚓,🚑,🚒,🚐,🚚,🚛,🚜,🏍,🚲,🚨,🚔,🚍,🚘,🚖,🚡,🚠,🚟,🚃,🚋,🚝,🚄,🚅,🚈,🚞,🚂,🚆,🚇,🚊,🚉,🚁,🛩,✈️,🛫,🛬,⛵️,🛥,🚤,⛴,🛳,🚀,🛰,💺,⚓️,🚧,⛽️,🚏,🚦,🚥,🏁,🚢,🎡,🎢,🎠,🏗,🌁,🗼,🏭,⛲️,🎑,⛰,🏔,🗻,🌋,🗾,🏕,⛺️,🏞,🛣,🛤,🌅,🌄,🏜,🏖,🏝,🌇,🌆,🏙,🌃,🌉,🌌,🌠,🎇,🎆,🌈,🏘,🏰,🏯,🏟,🗽,🏠,🏡,🏚,🏢,🏬,🏣,🏤,🏥,🏦,🏨,🏪,🏫,🏩,💒,🏛,⛪️,🕌,🕍,🕋,⛩",
				"Objects": "⌚️,📱,📲,💻,⌨️,🖥,🖨,🖱,🖲,🕹,🗜,💽,💾,💿,📀,📼,📷,📸,📹,🎥,📽,🎞,📞,☎️,📟,📠,📺,📻,🎙,🎚,🎛,⏱,⏲,⏰,🕰,⏳,⌛️,📡,🔋,🔌,💡,🔦,🕯,🗑,🛢,💸,💵,💴,💶,💷,💰,💳,💎,⚖,🔧,🔨,⚒,🛠,⛏,🔩,⚙,⛓,🔫,💣,🔪,🗡,⚔,🛡,🚬,☠️,⚰,⚱,🏺,🔮,📿,💈,⚗,🔭,🔬,🕳,💊,💉,🌡,🏷,🔖,🚽,🚿,🛁,🔑,🗝,🛋,🛌,🛏,🚪,🛎,🖼,🗺,⛱,🗿,🛍,🎈,🎏,🎀,🎁,🎊,🎉,🎎,🎐,🎌,🏮,✉️,📩,📨,📧,💌,📮,📪,📫,📬,📭,📦,📯,📥,📤,📜,📃,📑,📊,📈,📉,📄,📅,📆,🗓,📇,🗃,🗳,🗄,📋,🗒,📁,📂,🗂,🗞,📰,📓,📕,📗,📘,📙,📔,📒,📚,📖,🔗,📎,🖇,✂️,📐,📏,📌,📍,🚩,🏳,🏴,🔐,🔒,🔓,🔏,🖊,🖋,✒️,📝,✏️,🖍,🖌,🔍,🔎",
				"Symbols": "❤️,💛,💚,💙,💜,💔,❣️,💕,💞,💓,💗,💖,💘,💝,💟,☮️,✝️,☪️,🕉,☸️,✡️,🔯,🕎,☯️,☦️,🛐,⛎,♈️,♉️,♊️,♋️,♌️,♍️,♎️,♏️,♐️,♑️,♒️,♓️,🆔,⚛,🈳,🈹,☢️,☣️,📴,📳,🈶,🈚️,🈸,🈺,🈷️,✴️,🆚,🉑,💮,🉐,㊙️,㊗️,🈴,🈵,🈲,🅰️,🅱️,🆎,🆑,🅾️,🆘,⛔️,📛,🚫,❌,⭕️,💢,♨️,🚷,🚯,🚳,🚱,🔞,📵,❗️,❕,❓,❔,‼️,⁉️,💯,🔅,🔆,🔱,⚜,〽️,⚠️,🚸,🔰,♻️,🈯️,💹,❇️,✳️,❎,✅,💠,🌀,➿,🌐,Ⓜ️,🏧,🈂️,🛂,🛃,🛄,🛅,♿️,🚭,🚾,🅿️,🚰,🚹,🚺,🚼,🚻,🚮,🎦,📶,🈁,🆖,🆗,🆙,🆒,🆕,🆓,0️⃣,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣,8️⃣,9️⃣,🔟,🔢,▶️,⏸,⏯,⏹,⏺,⏭,⏮,⏩,⏪,🔀,🔁,🔂,◀️,🔼,🔽,⏫,⏬,➡️,⬅️,⬆️,⬇️,↗️,↘️,↙️,↖️,↕️,↔️,🔄,↪️,↩️,⤴️,⤵️,#️⃣,*️⃣,ℹ️,🔤,🔡,🔠,🔣,🎵,🎶,〰️,➰,✔️,🔃,➕,➖,➗,✖️,💲,💱,©️,®️,™️,🔚,🔙,🔛,🔝,🔜,☑️,🔘,⚪️,⚫️,🔴,🔵,🔸,🔹,🔶,🔷,🔺,▪️,▫️,⬛️,⬜️,🔻,◼️,◻️,◾️,◽️,🔲,🔳,🔈,🔉,🔊,🔇,📣,📢,🔔,🔕,🃏,🀄️,♠️,♣️,♥️,♦️,🎴,👁‍🗨,💭,🗯,💬,🕐,🕑,🕒,🕓,🕔,🕕,🕖,🕗,🕘,🕙,🕚,🕛,🕜,🕝,🕞,🕟,🕠,🕡,🕢,🕣,🕤,🕥,🕦,🕧",
				"Flags": "🇦🇫,🇦🇽,🇦🇱,🇩🇿,🇦🇸,🇦🇩,🇦🇴,🇦🇮,🇦🇶,🇦🇬,🇦🇷,🇦🇲,🇦🇼,🇦🇺,🇦🇹,🇦🇿,🇧🇸,🇧🇭,🇧🇩,🇧🇧,🇧🇾,🇧🇪,🇧🇿,🇧🇯,🇧🇲,🇧🇹,🇧🇴,🇧🇶,🇧🇦,🇧🇼,🇧🇷,🇮🇴,🇻🇬,🇧🇳,🇧🇬,🇧🇫,🇧🇮,🇨🇻,🇰🇭,🇨🇲,🇨🇦,🇮🇨,🇰🇾,🇨🇫,🇹🇩,🇨🇱,🇨🇳,🇨🇽,🇨🇨,🇨🇴,🇰🇲,🇨🇬,🇨🇩,🇨🇰,🇨🇷,🇭🇷,🇨🇺,🇨🇼,🇨🇾,🇨🇿,🇩🇰,🇩🇯,🇩🇲,🇩🇴,🇪🇨,🇪🇬,🇸🇻,🇬🇶,🇪🇷,🇪🇪,🇪🇹,🇪🇺,🇫🇰,🇫🇴,🇫🇯,🇫🇮,🇫🇷,🇬🇫,🇵🇫,🇹🇫,🇬🇦,🇬🇲,🇬🇪,🇩🇪,🇬🇭,🇬🇮,🇬🇷,🇬🇱,🇬🇩,🇬🇵,🇬🇺,🇬🇹,🇬🇬,🇬🇳,🇬🇼,🇬🇾,🇭🇹,🇭🇳,🇭🇰,🇭🇺,🇮🇸,🇮🇳,🇮🇩,🇮🇷,🇮🇶,🇮🇪,🇮🇲,🇮🇱,🇮🇹,🇨🇮,🇯🇲,🇯🇵,🇯🇪,🇯🇴,🇰🇿,🇰🇪,🇰🇮,🇽🇰,🇰🇼,🇰🇬,🇱🇦,🇱🇻,🇱🇧,🇱🇸,🇱🇷,🇱🇾,🇱🇮,🇱🇹,🇱🇺,🇲🇴,🇲🇰,🇲🇬,🇲🇼,🇲🇾,🇲🇻,🇲🇱,🇲🇹,🇲🇭,🇲🇶,🇲🇷,🇲🇺,🇾🇹,🇲🇽,🇫🇲,🇲🇩,🇲🇨,🇲🇳,🇲🇪,🇲🇸,🇲🇦,🇲🇿,🇲🇲,🇳🇦,🇳🇷,🇳🇵,🇳🇱,🇳🇨,🇳🇿,🇳🇮,🇳🇪,🇳🇬,🇳🇺,🇳🇫,🇲🇵,🇰🇵,🇳🇴,🇴🇲,🇵🇰,🇵🇼,🇵🇸,🇵🇦,🇵🇬,🇵🇾,🇵🇪,🇵🇭,🇵🇳,🇵🇱,🇵🇹,🇵🇷,🇶🇦,🇷🇪,🇷🇴,🇷🇺,🇷🇼,🇧🇱,🇸🇭,🇰🇳,🇱🇨,🇵🇲,🇻🇨,🇼🇸,🇸🇲,🇸🇹,🇸🇦,🇸🇳,🇷🇸,🇸🇨,🇸🇱,🇸🇬,🇸🇽,🇸🇰,🇸🇮,🇸🇧,🇸🇴,🇿🇦,🇬🇸,🇰🇷,🇸🇸,🇪🇸,🇱🇰,🇸🇩,🇸🇷,🇸🇿,🇸🇪,🇨🇭,🇸🇾,🇹🇼,🇹🇯,🇹🇿,🇹🇭,🇹🇱,🇹🇬,🇹🇰,🇹🇴,🇹🇹,🇹🇳,🇹🇷,🇹🇲,🇹🇨,🇹🇻,🇺🇬,🇺🇦,🇦🇪,🇬🇧,🇺🇸,🇻🇮,🇺🇾,🇺🇿,🇻🇺,🇻🇦,🇻🇪,🇻🇳,🇼🇫,🇪🇭,🇾🇪,🇿🇲,🇿🇼"
			}	
		},
		ui: {
			css: [
				"#emoji-picker .header span.emoji-outer, #emoji-picker .header span.emoji-sizer {width: 32px; height: 32px; cursor: pointer}",
				"#emoji-picker .content span.emoji-outer, #emoji-picker .content span.emoji-sizer {width: 25px; height: 25px; padding: 5px; cursor: pointer}",
				"#emoji-picker {z-index: 99999; background: #0A0A0A; bottom: 59px; right: 350px; width: 345px; height: 300px; position: absolute; border-radius: 5px}",
				"#emoji-picker .content {overflow-y: auto; overflow-x: hidden; padding: 5px; height: 200px}",
				"#emoji-picker .header #emoji-search {margin-left: 3px; padding: 10px; width: 315px; border-radius: 10px; border: none; background-color: #1c1f25; color: #ccc}",
				"#emoji-picker .header .categories {height: 50px;}",
				"#emoji-picker .header .categories .category {width: 9%; padding: 3px; margin: 3px; display: inline-block; border-radius: 5px; -webkit-transition: background-color .2s; transition: background-color .2s;}",
				"#emoji-picker .header .categories .category.selected {background-color: #1c1f25}",
				"#emoji-picker .header .categories .category:not(.selected):hover {background-color: #1c1f25}",
				"#emoji-picker .content::-webkit-scrollbar {width: 8px}",
				"#emoji-picker .content::-webkit-scrollbar-track {background: #242424; border-radius: 5px}",
				"#emoji-picker .content::-webkit-scrollbar-thumb {background-color: #161616; border-radius: 5px}",
				"#mask {position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999}"
			],
			html: {
				main: '<div id="mask"></div><div id="emoji-picker"><div class="header"><div class="categories"></div><input id="emoji-search" type="text" placeholder="Search"></div><div class="content"></div></div>',
				categories: [
					{
						"name": "People",
						"emoji": "😄",
						onClick: function (e) {
							// empty the emoji div
							$("#emoji-picker .content").html("");
							// highlight the new selected category
							$("#emoji-picker .header .categories .category.selected").removeClass("selected");
							$(this).addClass("selected");
							// render the emotes from that category
							window.ep.ui.generateEmojis();
							// for some reason it wasn't scrolling on it's own
							$("#emoji-picker .content").scrollTop(0);
						},
						append: function () {
							var element = $('<div class="category ' + this.name + '">' + window.emoji.replace_unified(this.emoji) + '</div>');
								// add some data to it + make this one default, hook events
								element.addClass("selected").attr("data-name", this.name).on("click", this.onClick);
								element.on("mouseover", window.ep.ui.emojiOver).on("mouseout", window.ep.ui.emojiOut);
							$("#emoji-picker .header .categories").append(element);
						}
					},
					{
						"name": "Nature",
						"emoji": "🌍",
						onClick: function (e) {
							$("#emoji-picker .content").html("");
							$("#emoji-picker .header .categories .category.selected").removeClass("selected");
							$(this).addClass("selected");
							window.ep.ui.generateEmojis();
							$("#emoji-picker .content").scrollTop(0);
						},
						append: function () {
							var element = $('<div class="category ' + this.name + '">' + window.emoji.replace_unified(this.emoji) + '</div>');
								element.attr("data-name", this.name).on("click", this.onClick);
								element.on("mouseover", window.ep.ui.emojiOver).on("mouseout", window.ep.ui.emojiOut);
							$("#emoji-picker .header .categories").append(element);
						}
					},
					{
						"name": "Foods",
						"emoji": "🍔",
						onClick: function (e) {
							$("#emoji-picker .content").html("");
							$("#emoji-picker .header .categories .category.selected").removeClass("selected");
							$(this).addClass("selected");
							window.ep.ui.generateEmojis();
							$("#emoji-picker .content").scrollTop(0);
						},
						append: function () {
							var element = $('<div class="category ' + this.name + '">' + window.emoji.replace_unified(this.emoji) + '</div>');
								element.attr("data-name", this.name).on("click", this.onClick);
								element.on("mouseover", window.ep.ui.emojiOver).on("mouseout", window.ep.ui.emojiOut);
							$("#emoji-picker .header .categories").append(element);
						}
					},
					{
						"name": "Activity",
						"emoji": "🏈",
						onClick: function (e) {
							$("#emoji-picker .content").html("");
							$("#emoji-picker .header .categories .category.selected").removeClass("selected");
							$(this).addClass("selected");
							window.ep.ui.generateEmojis();
							$("#emoji-picker .content").scrollTop(0);
						},
						append: function () {
							var element = $('<div class="category ' + this.name + '">' + window.emoji.replace_unified(this.emoji) + '</div>');
								element.attr("data-name", this.name).on("click", this.onClick);
								element.on("mouseover", window.ep.ui.emojiOver).on("mouseout", window.ep.ui.emojiOut);
							$("#emoji-picker .header .categories").append(element);
						}
					},
					{
						"name": "Places",
						"emoji": "🚀",
						onClick: function (e) {
							$("#emoji-picker .content").html("");
							$("#emoji-picker .header .categories .category.selected").removeClass("selected");
							$(this).addClass("selected");
							window.ep.ui.generateEmojis();
							$("#emoji-picker .content").scrollTop(0);
						},
						append: function () {
							var element = $('<div class="category ' + this.name + '">' + window.emoji.replace_unified(this.emoji) + '</div>');
								element.attr("data-name", this.name).on("click", this.onClick);
								element.on("mouseover", window.ep.ui.emojiOver).on("mouseout", window.ep.ui.emojiOut);
							$("#emoji-picker .header .categories").append(element);
						}
					},
					{
						"name": "Objects",
						"emoji": "🔌",
						onClick: function (e) {
							$("#emoji-picker .content").html("");
							$("#emoji-picker .header .categories .category.selected").removeClass("selected");
							$(this).addClass("selected");
							window.ep.ui.generateEmojis();
							$("#emoji-picker .content").scrollTop(0);
						},
						append: function () {
							var element = $('<div class="category ' + this.name + '">' + window.emoji.replace_unified(this.emoji) + '</div>');
								element.attr("data-name", this.name).on("click", this.onClick);
								element.on("mouseover", window.ep.ui.emojiOver).on("mouseout", window.ep.ui.emojiOut);
							$("#emoji-picker .header .categories").append(element);
						}
					},
					{
						"name": "Symbols",
						"emoji": "❤️",
						onClick: function (e) {
							$("#emoji-picker .content").html("");
							$("#emoji-picker .header .categories .category.selected").removeClass("selected");
							$(this).addClass("selected");
							window.ep.ui.generateEmojis();
							$("#emoji-picker .content").scrollTop(0);
						},
						append: function () {
							var element = $('<div class="category ' + this.name + '">' + window.emoji.replace_unified(this.emoji) + '</div>');
								element.attr("data-name", this.name).on("click", this.onClick);
								element.on("mouseover", window.ep.ui.emojiOver).on("mouseout", window.ep.ui.emojiOut);
							$("#emoji-picker .header .categories").append(element);
						}
					},
					{
						"name": "Flags",
						"emoji": null,
						onClick: function (e) {
							$("#emoji-picker .content").html("");
							$("#emoji-picker .header .categories .category.selected").removeClass("selected");
							$(this).addClass("selected");
							window.ep.ui.generateEmojis();
							$("#emoji-picker .content").scrollTop(0);
						},
						append: function () {
							var randFlag = window.ep.data.categories.Flags.split(",")[Math.floor(Math.random() * window.ep.data.categories.Flags.split(",").length)];
							var element = $('<div class="category ' + this.name + '"> ' + window.emoji.replace_unified(randFlag) + '</div>');
								element.attr("data-name", this.name).on("click", this.onClick);
								element.on("mouseover", window.ep.ui.emojiOver).on("mouseout", window.ep.ui.emojiOut);
							$("#emoji-picker .header .categories").append(element);
						}
					}
				]
			},
			emojiOver: function (e) {
				window.ep.eventsModule.trigger("tooltip:show", $(this).attr("data-name"), $(this), true);
			},
			emojiOut: function () {
				window.ep.eventsModule.trigger("tooltip:hide");
			},
			emojiClick: function (e) {
				// emoji name in colons
				var text = $(this).attr("data-name"),
					input = $("#chat-input input");
				// if there's already text
				if (input.val()) {
					// if the user typing cursor is at the end of the input message
					if (input.getCursorPosition() === input.val().length)
						input.val(input.val().trim() + ' ' + text + ' '); // add the emoji at the end
					else {
						// if they're somewhere in between the message
						var untilPos = input.val().slice(0, input.getCursorPosition() - 1);
						var fromPos = input.val().slice(input.getCursorPosition(), input.val().length);
						// add it where he was typing
						input.val(untilPos + text + fromPos);
					}
				} else
				// no message typed? add it with a space
					input.val(text + ' ');
				// focus to start typing
				input.focus();
			},
			searchKeyDown: function (e) {
				$("#emoji-picker .content").html("");
				if (!$(this).val()) return window.ep.ui.generateEmojis();
				var regex = new RegExp($(this).val(), "gi"), unicodes = [];
				for (var i = 0; i < window.ep.data.searchData.length; i++)
					if (window.ep.data.searchData[i].n.match(regex))
						unicodes.push(window.ep.data.searchData[i].u);

				for (var i = 0; i < unicodes.length; i++) {
					// apply skintone if it's different than 1
					if (window.ep.data.tone > 1 && window.ep.data.skinToneMojis.includes(unicodes[i])) {
						unicodes[i] += window.ep.data.skinTones.split(",")[window.ep.data.tone - 2];
					}
	
					// get the emoji name, why not
					window.emoji.colons_mode = true;
					var name = window.emoji.replace_unified(unicodes[i]);
					window.emoji.colons_mode = false;
	
					// get the emoji html
					var element = $(window.emoji.replace_unified(unicodes[i]));
	
					// give the element the emoji name and emoji unicode attributes, why not
					element.attr("data-unicode", unicodes[i]).attr("data-name", name);
	
					// append it!
					$("#emoji-picker .content").append(element);
				}
			},
			generateEmojis: function () {
				var category = $("#emoji-picker .header .categories .category.selected").attr("data-name");
	
				var unicodes = window.ep.data.categories[category].split(",");
			
				for (var i = 0; i < unicodes.length; i++) {
					// apply skintone if it's different than 1;
					if (window.ep.data.tone > 1 && window.ep.data.skinToneMojis.includes(unicodes[i])) {
						unicodes[i] += window.ep.data.skinTones.split(",")[window.ep.data.tone - 2];
					}
	
					// get the emoji name, why not
					window.emoji.colons_mode = true;
					var name = window.emoji.replace_unified(unicodes[i]);
					window.emoji.colons_mode = false;
	
					// get the emoji html
					var element = $(window.emoji.replace_unified(unicodes[i]));
	
					// give the element the emoji name and emoji unicode attributes, why not
					element.attr("data-unicode", unicodes[i]).attr("data-name", name);
	
					// append it!
					$("#emoji-picker .content").append(element);
				}
			},
			init: function () {
				$("#room").append(this.html.main);
				this.html.categories.forEach(function (c) {
					c.append();
				});
				$("head").append('<style id="emoji-picker-css">' + this.css.join("") + '</style>');
				this.generateEmojis();
				$(document).on("click", "#emoji-picker .content span.emoji-outer", this.emojiClick);
				$(document).on("mouseover", "#emoji-picker .content span.emoji-outer", this.emojiOver).on("mouseout", "#emoji-picker .content span.emoji-outer", this.emojiOut);
				$("#emoji-picker .header #emoji-search").on("keydown", this.searchKeyDown).on("keyup", this.searchKeyDown);
			},
			kill: function () {
				$("#mask").remove();
				$("#emoji-picker").remove();
				$("#emoji-picker-css").remove();
				$(document).off("click", "#emoji-picker .content span.emoji-outer", this.emojiClick);
			}
		},
		exec: function () {
			if (typeof window.API === "undefined" || !window.API.enabled)
				return setTimeout(window.ep.exec, 1e3);
			try {
				this.data.tone = JSON.parse(window.localStorage.settings)[1][window.API.getUser().id].skinTone;
			} catch (e) {}

			this.eventsModule = window._.find(window.require.s.contexts._.defined,function(m){return m && m._events && m._events["chat:receive"];});

			this.data.searchData = [];
			for (var i in window.emoji.data)
				this.data.searchData.push({u: window.emoji.data[i][0][0], n: window.emoji.data[i][3][0]});

			$("#chat-input").append('<i class="icon icon-emoji-on" style="right: 5px;"></i>');
			$("#chat-input-field").css("width", "280px");
			$("#chat-input .icon.icon-emoji-on").on("click", $.proxy(this.ui.init, this.ui));
			$(document).on("click", "#mask", $.proxy(this.ui.kill, this.ui));
			
			// thanks @markb29 and @rob-w
			$.fn.getCursorPosition = function() {
				var input = this.get(0);
				if (!input) return; // No (input) element found
				if ('selectionStart' in input) {
					// Standard-compliant browsers
					return input.selectionStart;
				} else if (document.selection) {
					// IE
					input.focus();
					var sel = document.selection.createRange();
					var selLen = document.selection.createRange().text.length;
					sel.moveStart('character', -input.value.length);
					return sel.text.length - selLen;
				}
			};
		},
		kill: function () {
			this.ui.kill();
			$("#chat-input .icon.icon-emoji-on").remove();
			$("#chat-input-field").css("width", "305px");
			$(document).off("click", "#mask", this.ui.kill);
			window.ep = undefined;
		}
	};
	window.ep.exec();
})(window.jQuery);