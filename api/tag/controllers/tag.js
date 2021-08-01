"use strict";
// const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  //   find() {
  //     console.log("Hi");
  //     return strapi
  //       .query("tag")
  //       .find({ _sort: "published_at:DESC", _limit: -1 }, ["articles"]);
  //   },
  //   async find(ctx) {
  //     let entities;
  //     if (ctx.query._q) {
  //       entities = await strapi.services.tag.search(ctx.query);
  //     } else {
  //       entities = await strapi.services.tag.find(ctx.query);
  //     }
  //     return entities
  //       .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
  //       .map((entity) => sanitizeEntity(entity, { model: strapi.models.tag }));
  //   },
};
