import Link from "next/link";

export default function Custom404() {
    return <section className='notfound'>
        <h1>404 - Page Not Found</h1>
        <Link href='/'>Go back to the Homepage</Link>
    </section>
}