import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi"
import { ContentDispositionValidator } from "@uploadthing/validators"
import { handle } from "hono/vercel"

const app = new OpenAPIHono().basePath('/api')

app.use(async (c, next) => {
  console.log('hello', c.req)
  await next()
})

app.notFound((c) => c.json({ message: 'Custom Not Found' }))

app.doc("/openapi-spec.json", {
  openapi: "3.0.0",
  info: {
    version: "6.4.0",
    title: "UploadThing REST API",
  },
  servers: [
    { url: "https://api.uploadthing.com", description: "Production" },
  ],
});


const route = createRoute({
  method: "get",
  path: "/v1/ping",
  description:
    "Ping the server to check if it's up and running.",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            contentDisposition: ContentDispositionValidator.openapi({
              description: "The content-disposition header to use for the file.",
            })
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Successfully aborted or marked upload as failed.",
      content: {
        "application/json": {
          schema: z.object({
            ping: z.string(),
          }),
        },
      },
    },
  },
});

app.openapi(route, (c) => c.json({ ping: 'pong' }))

export const handler = handle(app)
