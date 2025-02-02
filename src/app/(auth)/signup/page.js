import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignupPage  from '@/template/SignupPage'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function app() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/")
    console.log(session)
  return <SignupPage/>
  }

export default app

