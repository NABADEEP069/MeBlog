import { Hono } from "hono";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();


blogRouter.post('/', (c) => {
    return c.text('Hello, World!')
})

blogRouter.put('/', (c) => {
    return c.text('Hello, World!')
})

blogRouter.get('/', (c) => {
    return c.text('Hello, World!')
})

blogRouter.get('/bulk', (c) => {
    return c.text('Hello, World!')
})