if [ "$MONGO_USERNAME" ] && [ "$MONGO_PASSWORD" ]; then
    "${mongo[@]}" "$MONGO_INITDB_DATABASE" <<-EOJS
    db.createUser({
        user: $(_js_escape "$MONGO_USERNAME"),
        pwd: $(_js_escape "$MONGO_PASSWORD"),
        roles: [ { role: "readWrite", db: $(_js_escape "$MONGO_INITDB_DATABASE") },
                 { role: "dbAdmin", db: $(_js_escape "$MONGO_INITDB_DATABASE") } ]
    })
EOJS
fi
