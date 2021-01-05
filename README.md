# linetv_shorturl
## Installation
1. clone this repo to your local
2. Run `npm start`

## API Endpoint
1. POST `/` -> Input desired long url to short url.
    - body: {"url": "***YOUR_LONG_URL***"}
    - response: {"short_url": "RETURN_SHORT_URL"}
2. Get `/:id` -> Redirect to registered url.
    - parameter: id

## Database
Use sqlite3 for demo easily


## TODO
1. Use postgresQL as database, and implement `docker-compose` to run all services.
2. Write `unit test` for all endpoints.
