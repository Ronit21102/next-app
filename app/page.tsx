import Image from 'next/image'
import Link from 'next/link'
import ProductPage from './Components/ProductPage'

export default function Home() {
  return (
    <main >
     <h1>Hello world</h1>
     <Link href="/users">users</Link>
     <ProductPage/>
    </main>
  )
}
