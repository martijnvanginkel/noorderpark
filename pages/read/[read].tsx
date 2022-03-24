import Link from 'next/link'
import { GetStaticPaths } from 'next/types'
import { useEffect } from 'react'
import { QRCode } from 'react-qrcode-logo'

interface QRCodeData {
    id: string
    title: string
    content: string
    comments: string[]
}
    

function Read(qrCodeData: any) {

    return (
        <>
            <h1>{qrCodeData.qrCodeData.title}</h1>
            <p>{qrCodeData.qrCodeData.content}</p>
            <div>
                read page { qrCodeData.qrCodeData.id }
            </div>

            <Link href="/">
                <a>back</a>
            </Link>
        </>
    )
}

export default Read


// This also gets called at build time
export async function getServerSideProps({ params }) {
    const readId = params.read

    const res = await fetch(`http://localhost:3000/api/qrcode?id=${readId}`)
    const qrCodeData = await res.json()

    return { props: { qrCodeData: qrCodeData } }
}

// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
//     return {
//         paths: [], //indicates that no page needs be created at build time
//         fallback: 'blocking' //indicates the type of fallback
//     }
// }

