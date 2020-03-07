## Base URL
- https://disneyparent-backend.herokuapp.com
### Register a Parent
_Method URL: /auth/parents/register_
_HTTP method: [POST]_
### Body
| name        | type   | required | description    |
| ----------- | ------ | -------- | -------------- |
| username    | String | Yes      | Must be unique |
| email       | String | Yes      | Must be unique |
| password    | String | Yes      |                |
| accountType | String | Yes      |                |
_example:_
```
{
  username: "john doe",
  password: "password123",
  email: "johndoe@email.com",
  accountType: "parent"
}
```
### Response
**200**
```
{
"username": "example",
 "password": "example",
 "email": "example@gmail.com", "accountType": "parent",
}
```
---
### Parent Login
_Method URL: /auth/parents/login_
_HTTP method: [POST]_
### Body
| name        | type   | required | description    |
| ----------- | ------ | -------- | -------------- |
| username    | String | Yes      | Must be unique |
| email       | String | Yes      | Must be unique |
| password    | String | Yes      |                |
| accountType | String | Yes      |                |
_example:_
```
{
  username: "john doe",
  password: "password123",
  email: "johndoe@email.com",
  accountType: "parent"
}
```
---
### Parent Post a Request
_Method URL: /posts_
_HTTP method: [POST]_
### Body
| name      | type   | required | description |
| --------- | ------ | -------- | ----------- |
| username  | String | Yes      |             |
| comment   | String | Yes      |             |
| time      | String | Yes      |             |
| parent_id | ID     | Yes      |             |
_example:_
```
{
  "title": "Reqesting Assistance",
  "attraction": "Tornado Ball",
  "children": 5,
  "time": "10 a.m EST",
  "parent_id": 8
}
```
---
### Parent Post a Comment
_Method URL: /comments_
_HTTP method: [POST]_
### Body
| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | String | Yes      |             |
| comment  | String | Yes      |             |
| post_id  | ID     | Yes      |             |
_example:_
```
{
  "username": "user",
  "comment": "Hello, this is Tony a Cast Member",
  "post_id": 1
}
```

---
### Get List of Parents 


_Method URL: /parents_

_HTTP method: [GET]_

_Response example:_

```
{
    "id": 1,
    "username": "Alan",
    "password": "$2a$08$wJrpp6dAMt6v.FvnoqHK7OzehioQPhsi.SA1Zx9HPlMh2uaGCm.ni",
    "email": "123@gmail.com",
    "accountType": "parent"
  },
  {
    "id": 2,
    "username": "John",
    "password": "$2a$08$tTRISXNpJKv3EA4s4/Aok.H1esgDdMSUS7lrQ3/PP9Yn4Xkgtf6QO",
    "email": "terry123@gmail.com",
    "accountType": "parent"
  },
  {
    "id": 3,
    "username": "Terry",
    "password": "$2a$08$of6AnGiawnkl7lVIoOeideOVD8qfBuvk4IT09gp.KgLTegAD79LBu",
    "email": "john123@gmail.com",
    "accountType": "parent"
  }
```
---
### Get List of Posts 


_Method URL: /posts_

_HTTP method: [GET]_

_Response example:_

```
{
    "id": 1,
    "title": "Need Help!",
    "attraction": "Space Mountain",
    "children": 5,
    "time": "May 22, 2019 at  9 AM EST",
    "parent_id": 1,
    "created_at": "2019-05-21 18:03:53",
    "updated_at": "2019-05-21 18:03:53"
  },
  {
    "id": 2,
    "title": "Help Needed",
    "attraction": "The Barnstormer",
    "children": 5,
    "time": "May 23, 2019 at  10:30 AM EST",
    "parent_id": 2,
    "created_at": "2019-05-21 18:03:53",
    "updated_at": "2019-05-21 18:03:53"
  },
  {
    "id": 3,
    "title": "Take Turns?",
    "attraction": "Seven Dwarfs Mine Train",
    "children": 5,
    "time": "May 24, 2019 at  11 AM EST",
    "parent_id": 3,
    "created_at": "2019-05-21 18:03:53",
    "updated_at": "2019-05-21 18:03:53"
  }
```

---
### Get List of Comments 


_Method URL: /comments_

_HTTP method: [GET]_

_Response example:_

```
{
    "id": 1,
    "username": "Jane",
    "comment": "Hello I can help!",
    "post_id": 1,
    "created_at": "2019-05-21 18:03:53",
    "updated_at": "2019-05-21 18:03:53"
  },
  {
    "id": 2,
    "username": "Bob",
    "comment": "I can take care of them while you enjoy yourself",
    "post_id": 2,
    "created_at": "2019-05-21 18:03:53",
    "updated_at": "2019-05-21 18:03:53"
  },
  {
    "id": 3,
    "username": "Terry",
    "comment": "We can take turns watching each others children while so we can get on rides",
    "post_id": 3,
    "created_at": "2019-05-21 18:03:53",
    "updated_at": "2019-05-21 18:03:53"
  }
```

---