import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  hcwh: z.string().optional(),
});

export default function Left() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-1/2 flex flex-col justify-center items-start p-32 ">
      <h1 className="tracking-wide capitalize text-center text-6xl">
        Let's chat about your dream & wild ideas
      </h1>
      <br />
      <br />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 font-sans w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    {...field}
                    className="bg-transparent !border-b border-black outline-none"
                  />
                </FormControl>
                <FormDescription>Let me know your name.</FormDescription>
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
                  <Input
                    placeholder="Your Email"
                    {...field}
                    className="bg-transparent !border-b border-black outline-none"
                  />
                </FormControl>
                <FormDescription>Email for reply back.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hcwh"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How can we help?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tell me more about your project"
                    {...field}
                    className="bg-transparent !border-b border-black outline-none"
                  />
                </FormControl>
                <FormDescription>For better understanding.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
