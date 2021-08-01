module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2f95abc77e259aec889ac2974950607b"),
    },
  },
});
