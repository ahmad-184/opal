"use server";

import { db } from "@/lib/db";
import { returnError } from "@/lib/errors";
import { SafeAction } from "@/lib/safe-action";
import { z } from "zod";

export const getUserByClerkId = SafeAction(
  z.object({ id: z.string() }),
  async ({ id }) => {
    try {
      const res = await db.user.findUnique({
        where: {
          clerkId: id,
        },
        select: {
          id: true,
          clerkId: true,
          email: true,
          firstname: true,
          image: true,
          lastname: true,
          createdAt: true,
          trial: true,
        },
      });

      return res;
    } catch (err) {
      returnError(err as Error);
    }
  }
);
