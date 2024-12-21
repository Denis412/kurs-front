import { api } from "src/boot/axios";

export default function SignIn(data) {
  return api.post("auth/login", { email: data.email, password: data.password });
}
