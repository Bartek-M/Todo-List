# Todo List - API

Base URL: `http://127.0.0.1:8000/api/`

Authentication is **session** based, which is set at `auth/login/`.

When accessing **API** from another site, use **CSRF** cookie from `auth/csrf/` and make sure *CSRF_TRUSTED_ORIGINS* in settings are set properly.

### Response codes
- 200 OK

- 400 Bad Request

- 401 Unauthorized

- 403 Forbidden

- 404 Not Found

- 405 Method Not Allowed

- 429 Too Many Requests

- 500 Internal Server Error

<br/>

## Authentication 

Base URL: `auth/`

---
### `POST login/`
- Body: `JSON`
```py
{
    "login_data"    : str,
    "password"      : str
}
```
- Response: `200 OK`
---

### `POST register/`
- Body: `JSON`
```py
{
    "username"  : str,
    "email"     : str,
    "password"  : str
}
```
- Response: `200 OK`
---

### `GET logout/` 
- Response: `200 OK`
---

### `GET csrf/`
- Response: `200 OK + JSON`
```py
{ "message": "CSRF cookie set"  }
```
---


## User

Base URL: `user/`

All endpoints require being logged in

---
### `GET me/`
- Response: `200 OK + JSON`
```py
{
    "id"        : str,
    "username"  : str,
    "email"     : str,
    "avatar"    : int,
    "lists"     : [TodoList, ...]
}
```
---

### `GET avatar`

### `POST set-avatar/`

### `PATCH theme/`
- Body: `JSON`
```py
{ "theme": 0 | 1 | 2 } // auto | dark | light
```
- Response: `200 OK + JSON`
```py
{ "theme": 0 | 1 | 2 } // auto | dark | light
```

### `PATCH password/`

### `DELETE delete/`
- Response: `200 OK`
---


## List

Base URL: `list/`

All endpoints require being logged in

---
### `POST create/`
- Body: `JSON`
```py
{
    "name"  : str,
    "type"  : int
}
```
- Response: `200 OK + JSON`
```py
{
    "id"            : str,
    "name"          : str,
    "type"          : int,
    "index"         : int,
    "create_date"   : int
}
```
---

### `PATCH reorder/`
- Body: `JSON`
```py
{
    "updated_items": {
        (id: str): (new_index: int),
        ...
    }
}
```
- Response: `200 OK`
---

### `PATCH <int:list_id>/edit`
- Body: `JSON`
```py
{

}
```
- Response: `200 OK + JSON`
```py
{
    
}
```
---

### `DELETE <int:list_id>/delete`
- Response: `200 OK`
---


## Items

Base URL: `list/<int:list_id>/items/`

All endpoints require being logged in

---
### `GET`
- Response: `200 OK + JSON`
```py
[ Item, ... ]
```
---

### `POST add/`
- Response: `200 OK + JSON`
```py
{
    "id"            : str,
    "text"          : str,
    "notes"         : str,
    "ticked"        : bool,
    "deadline_date" : int,
    "create_date"   : int,
    "deleted"       : bool
}
```
---

### `PATCH <int:item_id>/tick/`
- Response: `200 OK + JSON`
```py
{ "ticked"  : bool }
```
---

### `PATCH <int:item_id>/edit/`
- Body: `JSON`
```py
{

}
```
- Response: `200 OK + JSON`
```py
{

}
```
---

### `DELETE <int:item_id>/delete/`
- Response: `200 OK`
