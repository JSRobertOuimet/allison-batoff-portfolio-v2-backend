/**
 * case-study router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
    "api::case-study.case-study",
    {
        config: {
            find: {
                middlewares: [
                    async (ctx, next) => {
                        if (ctx.path.startsWith("/api/case-studies")) {
                            const headerPassword =
                                ctx.request.headers["x-page-password"];

                            if (
                                headerPassword !==
                                process.env.PAGE_PASSWORD
                            ) {
                                return ctx.unauthorized(
                                    "Invalid or missing password."
                                );
                            }
                        }

                        return next();
                    },
                ],
            },
        },
    }
);
