import axios from "axios";
import logo from "@/assets/logo.jpg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";

const formSchema = z.object({
  username: z.string(),
  email: z.string().email("This is not a valid email."),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
  rePassword: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

export default function Register() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Submit form data to backend (e.g., using a fetch API call)
    if (values.password !== values.rePassword)
      return alert("Password and Password Confirmation is not equal");
    axios
      .post("/api/auth/register", values, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/Login");
      })
      .catch(() => alert("Authentication failed"));
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <Card className="w-80">
        <img className="rounded-full w-36 mx-auto" src={logo} />
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mb-4"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Name</FormLabel>
                    <FormControl>
                      <Input placeholder="blabla" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="123@12323.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rePassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter the Password again</FormLabel>
                    <FormControl>
                      <Input placeholder="****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
            <Link className="text-blue-600 underline " to="/Login">
              Login
            </Link>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
