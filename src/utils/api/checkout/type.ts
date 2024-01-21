import * as z from "zod";

export const userCheckoutSchema = z.object({
  fullName: z.string().min(1, { message: "Enter your Full Name" }),
  phoneNumber: z
    .string()
    .min(1, { message: "Enter your Phone Number" })
    .regex(new RegExp(/^\d*[1-9]\d*$/), "Enter valid Phone Number"),
  streetAddress: z.string().min(1, { message: "Enter your Address" }),
  city: z.string().min(1, { message: "Enter your City" }),
  province: z.string().min(1, { message: "Enter your Province" }),
  zipCode: z.string().min(1, { message: "Enter your Zipcode" }),
});

export type UserCheckoutType = z.infer<typeof userCheckoutSchema>;
