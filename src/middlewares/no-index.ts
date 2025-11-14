export default (_config, _ctx) => {
    return async (ctx, next) => {
        await next();
        ctx.set("X-Robots-Tag", "noindex, nofollow");
    };
};
