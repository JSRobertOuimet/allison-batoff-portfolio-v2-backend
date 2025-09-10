export default {
    async checkPassword(ctx) {
        const { password } = ctx.request.body;
        if (password === process.env.PAGE_PASSWORD) {
            ctx.send({ success: true });
        } else {
            ctx.unauthorized("Invalid password.");
        }
    },
};
