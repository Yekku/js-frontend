install: install-deps install-flow-typed

run-list:
	npx babel-node -- 'src/bin/list-task.js' 10

install-deps:
	npm install

install-flow-typed:
	npx flow-typed install

build:
	rm -rf dist
	npm run build

check-types:
	npx flow

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
