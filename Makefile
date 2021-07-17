APP_IMAGE=app
APP_CONTAINER=app

rm.image:
	rm.container
	docker rmi ${APP_IMAGE}

rm.container:
	docker rm -f ${APP_CONTAINER}

up:
	docker compose up -d

build:
	docker compose build

build.no-cache:
	docker compose build --no-cache

down:
	docker compose down
