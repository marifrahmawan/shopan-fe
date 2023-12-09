import * as z from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "Fullname minimum 3 characters in length" })
      .regex(new RegExp("^(?![ .]+$)[a-zA-Z .]*$"), {
        message: "Only Alphabet and dots(.) character",
      }),
    username: z
      .string()
      .min(3, { message: "Username minimum 3 characters in length" })
      .regex(new RegExp("^[a-zA-Z0-9_]+$"), {
        message: "Only Alphabetical, numbers and underscore (_) character",
      }),
    email: z.string().email({ message: "Must be a valid email" }),
    password: z
      .string()
      .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
      .regex(new RegExp(".*[a-z].*"), "One lowercase character")
      .regex(new RegExp(".*\\d.*"), "One number")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "One special character",
      )
      .min(8, "Must be at least 8 characters in length"),
    repassword: z
      .string()
      .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
      .regex(new RegExp(".*[a-z].*"), "One lowercase character")
      .regex(new RegExp(".*\\d.*"), "One number")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "One special character",
      )
      .min(8, "Must be at least 8 characters in length"),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Password don't match",
    path: ["repassword"],
  });

export type IRegister = z.infer<typeof registerSchema>;
