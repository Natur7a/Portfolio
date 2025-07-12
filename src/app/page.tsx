import { redirect } from "next/navigation"

export default function RootPage() {
  // any visit to “/” will immediately redirect to “/explore”
  redirect("/Explore")
}