/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {
    "sanctum.csrf-cookie": [],
    "dashboard": [],
    "profile.edit": [],
    "profile.update": [],
    "profile.destroy": [],
    "roles.index": [],
    "roles.create": [],
    "roles.store": [],
    "roles.show": [
        {
            "name": "role",
            "required": true
        }
    ],
    "roles.edit": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "roles.update": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "roles.destroy": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "users.index": [],
    "users.create": [],
    "users.store": [],
    "users.show": [
        {
            "name": "user",
            "required": true
        }
    ],
    "users.edit": [
        {
            "name": "user",
            "required": true,
            "binding": "id"
        }
    ],
    "users.update": [
        {
            "name": "user",
            "required": true,
            "binding": "id"
        }
    ],
    "users.destroy": [
        {
            "name": "user",
            "required": true,
            "binding": "id"
        }
    ],
    "settings.index": [],
    "register": [],
    "login": [],
    "password.request": [],
    "password.email": [],
    "password.reset": [
        {
            "name": "token",
            "required": true
        }
    ],
    "password.store": [],
    "verification.notice": [],
    "verification.verify": [
        {
            "name": "id",
            "required": true
        },
        {
            "name": "hash",
            "required": true
        }
    ],
    "verification.send": [],
    "password.confirm": [],
    "password.update": [],
    "logout": [],
    "storage.local": [
        {
            "name": "path",
            "required": true
        }
    ]
}
}
export {};