import Link from "next/link"

const page = () => {
    return(
        <div> 
            <h1>Users</h1>
            <ul>
                <li><Link href="/dashboard/users/1">User1</Link></li>
                <li><Link href="/dashboard/users/2">User2</Link></li>
                <li><Link href="/dashboard/users/3">User3</Link></li>
                <li><Link href="/dashboard/users/4">User4</Link></li>
            </ul>
        </div>
        
    )
}

export default page