"use server";

import { auth } from "@/app/auth";

export const SignInAction = async () => {
  const session = await auth();
  
  if (session) {
    return { user: session.user };
  }

  throw new Error("Authentication failed");
};
