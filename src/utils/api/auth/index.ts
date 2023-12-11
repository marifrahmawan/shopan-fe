import {
  registerSchema,
  loginSchema,
  IRegister,
  ILogin,
  IRegisterResponse,
  ILoginResponse,
} from "./type";

import { registerUser, loginUser } from "./api";

export type { IRegister, ILogin, IRegisterResponse, ILoginResponse };
export { registerSchema, loginSchema, registerUser, loginUser };
