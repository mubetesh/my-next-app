import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
    const session = await auth();
  
    return (
        <header className="bg-slate-300 py-3 px-5 shadow-lg font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={40} height={40} />
                </Link>
                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create"><span>Create</span></Link>
                            <form action={async() => {
                                'use server' 
                                await signOut({redirectTo: "/"});
                            }}>
                                <button type='submit'><span>Logout</span></button>
                            </form>
                            
                            <Link href={`/user/${session.user.id}`}><span>{session.user.name}</span></Link>
                        </>
                    ) : (
                        <form action={async() => {
                            'use server'
                            await signIn('github')
                        }}>
                            <button type='submit'>
                                <span>Login</span>
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;