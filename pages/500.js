import Link from "next/link";

export default function Custom500() {
    return <section className='notfound'>
        <h1>500 - Server Side Error</h1>
        <Link href='/'>Go back to the Homepage</Link>
    </section>
}