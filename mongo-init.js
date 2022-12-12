var db = connect("mongodb://admin:14292@127.0.0.1:27017/admin");

db =
  db.getSiblingDB(
    "series-dev-mongo"
  );

db.createUser({
  user: "user-series-mongo",
  pwd: "pwd-series-mongo",
  roles: [
    {
      role: "readWrite",
      db: "series-dev-mongo",
    },
  ],
});

db.createCollection("Series");
;
