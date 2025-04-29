import {auth} from "@/app/auth";
import ClientPage from "@/app/components/ClientPage";

export default async function Page() {
  const session = await auth();

  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }
  console.log(session)
  return (
      <ClientPage session={session}  />
  )
}
