IMAGE := ${DOCKER_USERNAME}/locations-api


build:
	npm install

image:
	docker build -t $(IMAGE) .

push-image:
	docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
	docker push $(IMAGE):latest
