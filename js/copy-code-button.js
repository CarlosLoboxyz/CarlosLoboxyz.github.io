function addCopyButtons(clipboard) {
	document.querySelectorAll('.code-block').forEach(function(codeblock) {
		var button = codeblock.querySelector('.copy-code-button');
		var code = codeblock.querySelector(':last-child > pre > code');

		button.addEventListener('click', function() {
			clipboard.writeText(code.textContent).then(function() {
				button.blur();
				button.innerText = 'Copied!';

				setTimeout(function() {
					button.innerText = 'Copy';
				}, 2000);
			}, function(error) {
				button.innerText = 'Error';
			});
		});
	});
}

addCopyButtons(navigator.clipboard);