build:
	docker-compose up -d --build --remove-orphans

clean:
	rm -rf react_client/node_modules
	docker-compose stop
