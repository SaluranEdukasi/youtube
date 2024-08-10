db.createUser({
  user: "<YOUR_USERNAME>",
  pwd: "<YOUR_PASSWORD>",
  roles: [
    {
      role: "userAdminAnyDatabase",
      db: "admin",
    },
    "readWriteAnyDatabase",
  ],
});
