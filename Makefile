start-prod:
	docker-compose -f ./.setup/production/docker-compose.yml up -d

stop-prod:
	docker-compose -f ./.setup/production/docker-compose.yml down

start-dev:
	docker-compose -f ./.setup/development/docker-compose.yml up -d

stop-dev:
	docker-compose -f ./.setup/development/docker-compose.yml down