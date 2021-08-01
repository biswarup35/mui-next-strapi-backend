module.exports = ({ env }) => {
  if(env("NODE_ENV") === "production"){
   return { 
    host: env("HOST", "0.0.0.0"),
    port: env("PORT"),
    production: true,
    admin: {
      auth: {
        secret: env("ADMIN_JWT_SECRET", "2f95abc77e259aec889ac2974950607b"),
        },
    },
    }
  }
return {
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2f95abc77e259aec889ac2974950607b"),
    },
  },
}
};
