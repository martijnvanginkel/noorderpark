import type { NextPage } from 'next'
import Link from 'next/link'
import { QRCode } from 'react-qrcode-logo';
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  // const generateCode = () => {
  //   new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
  // }
  
	return (
		<div className={styles.container}>

			<Link href="/read/5">
				<a>Go to id</a>
			</Link>

			<QRCode value="google.com" />
		</div>
	)

  function buildLinkHref() {

    // const content: PageContent = {
    //   id: '5',
    //   title: 'title',
    //   content: 'this is some content',
    //   comments: []
    // }
  }
}

export default Home
