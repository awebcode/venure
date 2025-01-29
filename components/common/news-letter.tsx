"use client";
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

// Define the Zod schema for form validation
const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

export function Newsletter() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode:"all"
  });

  // Form submit handler
  const onSubmit = (data: FormData) => {
    // Close the form and open the dialog on success
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Receive the latest update on
          <br />
          the best offers!
        </h2>
        <p className="text-gray-600">
          Join our newsletter, and receive the latest news on
          <br />
          the best deals on Evenure
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-center  sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="flex flex-col ">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-sm"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <Button type="submit" className="rounded-sm">
            Submit
          </Button>
        </form>
      </div>

      {/* ShadCN Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Success!</DialogTitle>
          <DialogDescription>
            <Check className="mx-auto h-16 w-16 text-green-600" />
            <p className="text-center">
              You have successfully subscribed with your email address.
            </p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose>
              <Button onClick={() => setIsDialogOpen(false)} className="mt-4 w-full">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
