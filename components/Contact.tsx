"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    Name: z.string(),
    Email: z.string(),
    Message: z.string()
  })

export function Contact()
{

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          Name: "",
        },
      })
     
    function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    }

    return(
        <div className='flex-center text-pearl gap-2'>
            <Card className="h-[470px] ">
                <CardHeader>
                    <CardTitle>
                        Links
                    </CardTitle>
                </CardHeader>

                <CardContent className='flex-center pb-10 '>
                    <div className='grid grid-flow-row grid-row-3 gap-y-[3rem]'>
                        <Image src={'/github.svg'} alt='github' width={50} height={50}/>
                        <Image src={'/twitter.png'} alt='twitter' width={50} height={50}/>
                        <Image src={'/linkedin.png'} alt='linkedin' width={50} height={50}/>
                        <Image src={'/cv.png'} alt='resume' width={50} height={50}/>
                    </div>
                </CardContent>
            </Card>

            <Card className="min-w-[290px] w-full max-w-[500px] h-[470px]">
                <CardHeader>
                    <CardTitle>Contact Me Directly</CardTitle>
                </CardHeader>

                <CardContent className='flex-start'>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                    <Input placeholder="Your Name" {...field} className="w-[450px]"/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="Email"
                    render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="Your Email" {...field}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="Message"
                    render={({ field }) => (
                    <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                    <Input placeholder="Your Message" {...field}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    )}
                    />
                    
                    <Button type="submit" className="mb-2">Submit</Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
            </div>
    )
}