# Tiimipäivän CRUD harjoitus

## Käyttö

npm install
npm start

``` bash
curl --location --request GET 'http://localhost:7071/api/readResource?name=Jussi'

curl --location --request POST 'http://localhost:7071/api/createResource' \
--header 'Content-Type: application/json' \
--data-raw '{ "name": "Jussi" }'

curl --location --request POST 'http://localhost:7071/api/updateResource' \
--header 'Content-Type: application/json' \
--data-raw '{ "name": "Jussi", "new_name": "John" }'

curl --location --request DELETE 'http://localhost:7071/api/deleteResource' \
--header 'Content-Type: application/json' \
--data-raw '{ "name": "John" }'
```