install: 
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	node bin/brain-even.js
publish:
	npm publish --dry-run
brain-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-run
brain-gcd:
	node bin/brain-gcd.js
