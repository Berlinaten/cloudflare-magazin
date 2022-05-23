import Link from 'next/link'

export default function Header() {
    return (
        <header>
      
            <div className='container'>
                <Link href='/' passHref>
     
                    <h1>Marketing - Vertrieb und Absatz</h1>
                </Link>
            </div>
        </header>
    )
}
