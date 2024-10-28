import { Schema } from "zod";
import { PublicError } from "./errors";

export const ZodValidator = <T>(schema: Schema, data: T): T => {
  const res = schema.safeParse(data);
  if (!res.success) throw new PublicError(res.error.message);
  return res.data;
};
