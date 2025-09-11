export default {
    async login(ctx) {
        const { password } = ctx.request.body;

        if (password === process.env.PAGE_PASSWORD) {
            ctx.cookies.set("auth", "true", {
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
            });
            ctx.send({ success: true });
        } else {
            ctx.status = 401;
            ctx.send({ error: "Invalid password." });
        }
    },

    async check(ctx) {
        const auth = ctx.cookies.get("auth");
        if (auth === "true") {
            ctx.send({ authorized: true });
        } else {
            ctx.status = 401;
            ctx.send({ error: "Unauthorized." });
        }
    },

    async logout(ctx) {
        ctx.cookies.set("auth", null, { maxAge: 0 });
        ctx.send({ success: true });
    },
};
