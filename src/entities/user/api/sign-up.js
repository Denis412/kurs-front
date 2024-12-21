import { api } from "src/boot/axios";

export default function SignUp(data) {
  return api.post("auth/register", {
    email: data.email,
    password: data.password,
  });
}
