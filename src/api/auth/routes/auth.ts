export default {
    routes: [
        {
            method: "POST",
            path: "/login",
            handler: "auth.login",
            config: {
                auth: false,
            },
        },
        {
            method: "GET",
            path: "/cookies",
            handler: "auth.check",
            config: {
                auth: false,
            },
        },
        {
            method: "POST",
            path: "/logout",
            handler: "auth.logout",
            config: {
                auth: false,
            },
        },
    ],
};
