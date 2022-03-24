import type { NextPage } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { generateQrCode } from './utils/generateQrCode'
import { QRCode } from 'react-qrcode-logo';

import styles from '../styles/Home.module.css'



const url = 'localhost:3000/pages/'

const Home: NextPage = () => {

  // const generateCode = () => {
  //   new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
  // }
  
  return (
    <div className={styles.container}>


      <Link href="/post/abc">
          <a>Go to pages/post/[pid].js</a>
        </Link>

      <QRCode value="google.com" />

      {/* <button onClick={() => generateCode()}>generate qr code</button> */}

      
{/* 
    <Script
      src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
      strategy="lazyOnload"
      onLoad={() =>
        console.log(`script is loaded`)
        // generateQrCode
      }
    /> */}

{/* <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script> */}
      
      <Link href="/create/create">
        <a>this page!</a>
      </Link>
    </div>
  )




  const generateQRCode = () => {
    console.log('generate qr code')
    // let website = document.getElementById("website").value;
    // if (website) {
    //   let qrcodeContainer = document.getElementById("qrcode");
    //   qrcodeContainer.innerHTML = "";
    //   new QRCode(qrcodeContainer, website);
    //   /*With some styles*/
    //   let qrcodeContainer2 = document.getElementById("qrcode-2");
    //   qrcodeContainer2.innerHTML = "";
    //   new QRCode(qrcodeContainer2, {
    //     text: website,
    //     width: 128,
    //     height: 128,
    //     colorDark: "#5868bf",
    //     colorLight: "#ffffff",
    //     correctLevel: QRCode.CorrectLevel.H
    //   });
    //   document.getElementById("qrcode-container").style.display = "block";
    // } else {
    //   alert("Please enter a valid URL");
    // }
  }
}

export default Home
