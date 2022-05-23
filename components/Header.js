import Link from 'next/link'

export default function Header() {
    return (
        <header>
        <title>Marketing - Vertrieb und Absatz</title>
            <div className='container'>
                <Link href='/' passHref>
                    <h1>Marketing - Vertrieb und Absatz</h1>
                </Link>
            </div>
        </header>
    )
}
