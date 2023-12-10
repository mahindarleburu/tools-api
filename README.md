# API Docs

Api documentation based on modules





## Tech Stack

**Server:** Node, Express

## Postman collection 

```http
  https://api.postman.com/collections/22449447-f48c1d44-806d-4576-b6ee-f369a2315817?access_key=PMAT-01GS9NK4SDM966FQPYFW4T00YT
```

## Environment Variables

To run this project, you will need to add the following environment variables to your postman.

`baseurl : https://carso.me`

`token : You need to get your API token from my profile page from Martech tools platform (https://carsome-martech-tools.web.app/)`

`platform : From which platform you are calling this API`


## Modules

- 1 - Shorten URL
- 2 - QR Code



## 1 - Shorten URL module

#### 1.1 - Create Shorten URL

```http
  POST {{baseurl}}/api/onelink/create
```
Header Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `martech_token` | `string` | **Required**. Token needs to authenticate the api  |
| `platform` | `string` | **Required**. tools (or) cap  |

Body Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `long_url` | `string` | **Required**. Valid url |
| `user_id` | `string` | **Required**. MarTech Tools User id |
| `name` | `string` | **Required**. Name for Shorten URL |
| `type` | `string` | **Required**. shorten_url |
| `user_name` | `string` | **Required**. First_Name Last_Name |
| `user_email` | `string` | **Required**. name@domain.com |

CURL 
```javascript
curl --location --request POST 'https://carso.me/api/onelink/create' \
--header 'martech_token: <<API key>>' \
--header 'platform: tools' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'long_url=https://www.carsome.my/buy-car/mercedes-benz/e250/2016-mercedes-benz-e250--2.0/czf6000' \
--data-urlencode 'user_id= <<Martech Tools User id>>' \
--data-urlencode 'name=<<your_shorten_url_name_here>>' \
--data-urlencode 'type=shorten_url' \
```

#### 1.2 - Edit Shorten URL

```http
  PUT {{baseurl}}/api/onelink/update
```
Header Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `martech_token` | `string` | **Required**. Token needs to authenticate the api  |
| `platform` | `string` | **Required**. tools (or) cap  |

Body Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `long_url` | `string` | **Required**. valid url |
| `user_id` | `string` | **Required**. Martech Tools User id |
| `onelink_code` | `string` | **Required**. SHORTEN Code |
| `name` | `string` | **Required**. name for shorturl |
| `type` | `string` | **Required**. shorten_url|


CURL 
```javascript
curl --location --request PUT 'https://carso.me/api/onelink/update' \
--header 'martech_token: <<API Key>>' \
--header 'platform: tools' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'long_url=https://www.carsome.my/buy-car/mercedes-benz/e250/2016-mercedes-benz-e250--2.0/czf6000' \
--data-urlencode 'user_id= <<Martech Tools User id>>' \
--data-urlencode 'onelink_code=<<shorten_code_id>>'
--data-urlencode 'type=shorten_url' \
```

#### 1.4 - Delete Shorten URL

```http
  POST {{baseurl}}/api/onelink/create
```
Header Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `martech_token` | `string` | **Required**. Token needs to authenticate the api  |
| `platform` | `string` | **Required**. tools (or) cap  |

Body Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `onelink_code` | `string` | **Required**. SHORTEN CODE |
| `user_id` | `string` | **Required**. Martech Tools User id |


CURL 
```javascript
curl --location --request PUT 'https://carso.me/api/onelink/update' \
--header 'martech_token: <<API Key>>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'long_url=https://www.carsome.my/buy-car/mercedes-benz/e250/2016-mercedes-benz-e250--2.0/czf6000' \
--data-urlencode 'user_id= <<Martech Tools User id>>' \
--data-urlencode 'onelink_code=<<SHORTEN CODE>>'
```

#### 1.5 - Get Shorten URL by user_id

```http
  GET {{baseurl}}/api/onelink/get_all/<<USER_ID>>
```
Header Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `martech_token` | `string` | **Required**. Token needs to authenticate the api  |
| `platform` | `string` | **Required**. tools (or) cap  |

Body Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |

CURL 
```javascript
curl --location --request GET 'https://carso.me/api/onelink/get_all/<<USER_ID>>' \
--header 'martech_token: <<API Key>>' \
--header 'platform: tools'
```

#### 1.6 - Get Shorten URL by Shorten Code

```http
  GET {{baseurl}}/api/onelink/get/<<SHORTEN CODE>>
```
Header Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `martech_token` | `string` | **Required**. Token needs to authenticate the api  |
| `platform` | `string` | **Required**. tools (or) cap  |

Body Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |

CURL 
```javascript
curl --location --request GET 'https://carso.me/api/onelink/get/<<SHORTEN CODE>>' \
--header 'martech_token: <<API Key>>' \
--header 'platform: tools'
```



## 2 - QR Code module

#### 2.1 - Create QR Code

```http
  POST {{baseurl}}/api/qrcode
```
Header Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `martech_token` | `string` | **Required**. Token needs to authenticate the api  |
| `platform` | `string` | **Required**. tools (or) cap  |

Body Params
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `long_url` | `string` | **Required**. valid url |


CURL 
```javascript
curl --location --request POST 'https://carso.me/api/qrcode' \
--header 'martech_token: <<API Key>>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'long_url=https://www.carsome.my/'
```
