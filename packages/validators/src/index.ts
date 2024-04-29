import { z } from "@hono/zod-openapi";

import type { ACL, ContentDisposition } from "@uploadthing/shared";

export const ContentDispositionValidator = z.enum(["inline", "attachment"]);
ContentDispositionValidator._type satisfies ContentDisposition;

export const ACL_OPTIONS = ["public-read", "private"] as const;
export const ACLValidator = z.enum(ACL_OPTIONS);
ACLValidator._type satisfies ACL; // Ensure we cover all the cases from the type
