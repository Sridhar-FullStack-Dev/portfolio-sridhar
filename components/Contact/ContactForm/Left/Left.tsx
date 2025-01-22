import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useState } from "react";
import { toast } from "sonner";
import { servicesItems } from "@/lib/const";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  hcwh: z.string().optional(),
  services: z.array(z.string()).nonempty({
    message: "Please select at least one service.",
  }),
});

export default function Left() {
  const [isContactLoading, setIsContactLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      hcwh: "",
      services: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsContactLoading(true);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsContactLoading(false);
    }
  }

  return (
    <div className="w-1/2 flex flex-col justify-center items-start px-32 py-12">
      <h1 className="tracking-wide capitalize text-center text-6xl">
        Let&apos;s chat about your dream & wild ideas
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

          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem className="flex items-center justify-between gap-2 text-xs">
                {servicesItems.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="services"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...(field.value || []),
                                      item.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: string) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isContactLoading ? "Sending..." : "Send"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
