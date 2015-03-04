all:
	gulp
selenium:
	sudo webdriver-manager start
test:
	npm test
install:
	npm i && \
	sudo npm i -g gulp && \
	sudo npm i -g protractor && \
	bower i && \
	sudo webdriver-manager update --standalone
