export default {
    routes: [
        {
            method: "POST",
            path: "/password",
            handler: "password.checkPassword",
            config: {
                auth: false,
            },
        },
    ],
};
