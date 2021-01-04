# linetv_shorturl
## Installation
1. clone this repo to your local
2. Run `npm start`

## API Endpoint
1. POST `/` -> Input desired long url to short url.
    - body: {"url": "***YOUR_LONG_URL***"}
   Response: {"short_url": "RETURN_SHORU_URL"}
2. Get `/:id` -> Redirect to registered url.
    - parameter: id

## Database
Use sqlite3 for demo easily
