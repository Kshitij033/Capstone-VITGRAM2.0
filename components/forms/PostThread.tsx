"use client";
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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { usePathname, useRouter } from "next/navigation";
import { ThreadValidation } from "@/lib/validations/thread";
import { updateUser } from "@/lib/actions/user.actions";
import { createThread } from "@/lib/actions/thread.actions";


function PostThread({ userId }: { userId: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm({
    resolver: zodResolver(ThreadValidation), //for validation
    defaultValues: {
      thread:"",
      accountId:userId // coming from props
    },
  });

  const onSubmit= async(values:z.infer<typeof ThreadValidation>)=>{
    await createThread(
        {
            text:values.thread,
            author:userId,
            communityId:null,
            path:pathname

        }
    ) //backend actions
    router.push("/")
  }
  return (
    <Form {...form}>
    <form 
    onSubmit={form.handleSubmit(onSubmit)} 
    className=" mt-10 flex flex-col justify-start gap-10">
   <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3 ">
              <FormLabel className=" text-base-semibold text-light-2">
               Content
              </FormLabel>
              <FormControl className=" no-focus border border-dark-4 bg-dark-3 text-light-1" >
                <textarea
                rows={15}
               
                {...field}
              />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <Button type="submit" className=" bg-orange-500">
            Post your Thoughts
        </Button>
    </form>
    </Form>
    );
}

export default PostThread;
