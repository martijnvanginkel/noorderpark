import type { NextPage } from 'next'
import Link from 'next/link'
import { QRCode } from 'react-qrcode-logo';
import styles from '../styles/Home.module.css'
import * as contentful from 'contentful'


export const client = contentful.createClient({
	space: 'to0ezlabe26l',
	accessToken: 'tCAPQQj2N9EQ5xHZi3Rue3wnp1uob_Zec1xj63AmEEg',
});


const Home: NextPage = (entries) => {

	return (
		<div className={styles.indexContainer}>
			<div className={styles.qrContainer}>
				<QRCode value="google.com" />
				<Link href="/read/5">
					<a>Scan</a>
				</Link>
			</div>
		</div>
	)
  
}

export default Home

export async function getServerSideProps() {
	const entries = await client.getEntries()

	const items = entries.items

    return { props: { items: items } }
}
