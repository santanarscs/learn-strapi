'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
// const stripe = require("stripe")("sk_test_51GyNHPIgB30HSbmOPh8FwPPEg127XLohwFKwpIYlr9aY9t59EjNkfN7lY4ILG1tHxrfAGOOVdlc7yXrRKn615dY400ZqUgngSj")

module.exports = {
  // /**
  //  * Retrieve order records.
  //  *
  //  * @return {Object|Array}
  //  */

  // find: async ctx => {
  //   if (ctx.query._q) {
  //     return strapi.services.order.search(ctx.query);
  //   } else {
  //     return strapi.services.order.fetchAll(ctx.query);
  //   }
  // },

  // /**
  //  * Retrieve a order record.
  //  *
  //  * @return {Object}
  //  */

  // findOne: async ctx => {
  //   if (!ctx.params.id.match(/^[0-9a-fA-F]{24}$/)) {
  //     return ctx.notFound();
  //   }

  //   return strapi.services.order.fetch(ctx.params);
  // },

  // /**
  //  * Count order records.
  //  *
  //  * @return {Number}
  //  */

  // count: async ctx => {
  //   return strapi.services.order.count(ctx.query);
  // },

  // /**
  //  * Create a/an order record.
  //  *
  //  * @return {Object}
  //  */

  // create: async ctx => {
  //   const { address, amount, dishes, token, city, state } = ctx.request.body;

  //   const charge = await stripe.charges.create({
  //     // Transform cents to dollars.
  //     amount: amount * 100,
  //     currency: "usd",
  //     description: `Order ${new Date()} by ${ctx.state.user.id}`,
  //     source: token
  //   });

  //   // Register the order in the database
  //   const order = await strapi.services.order.add({
  //     user: ctx.state.user.id,
  //     address,
  //     amount,
  //     dishes,
  //     city,
  //     state
  //   });

  //   return order;
  // },

  // /**
  //  * Update a/an order record.
  //  *
  //  * @return {Object}
  //  */

  // update: async (ctx, next) => {
  //   return strapi.services.order.edit(ctx.params, ctx.request.body);
  // },

  // /**
  //  * Destroy a/an order record.
  //  *
  //  * @return {Object}
  //  */

  // destroy: async (ctx, next) => {
  //   return strapi.services.order.remove(ctx.params);
  // }
};
