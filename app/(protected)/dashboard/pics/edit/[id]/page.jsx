"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"
import Link from "next/link"
// import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { getPicById } from "@/data/pics"

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
})

const EditPicPage = ({ params }) => {
  const [pic, setPic] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const picData = await getPicById(params.id)
      setPic(picData)
    }

    fetchData()
  }, [params.id])

  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (pic) {
      form.reset({
        title: pic.title,
        description: pic.description,
      })
    }
  }, [pic])

  const handleSubmit = (data) => {
    console.log("login validation passed data:", data)
  }

  const toastSave = () => toast("Button save clicked.")

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Edit Pic</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titel</FormLabel>
                    <FormControl>
                      <Input placeholder="title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Save</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <Button asChild variant="outline" size="sm" onClick={toastSave}>
            toastSave
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
export default EditPicPage
