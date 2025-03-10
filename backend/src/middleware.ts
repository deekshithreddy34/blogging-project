import { verify } from "hono/jwt";
// @ts-ignore
export function initMiddleware(app) {
  // @ts-ignore
  
    app.use('/api/v1/blog/*', async (c, next) => {
        try {
            const header = c.req.header("authorization") || "";
            const token = header.split(" ")[1];

            if (!token) {
                c.status(403);
                return c.json({ error: "unauthorized" });
            }

            // @ts-ignore
            const response = await verify(token, c.env.JWT_SECRET);

            if (!response || !response.id) {
                c.status(403);
                return c.json({ error: "unauthorized" });
            }

            return next(); // Ensure middleware continues execution
        } catch (error) {
            c.status(403);
            return c.json({ error: "invalid token" });
        }
    });
}
