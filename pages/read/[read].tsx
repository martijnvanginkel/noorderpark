import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import { client } from '../index'
import * as contentful from 'contentful'

function Read({ items }) {

    return (
        <div className={styles.readContainer}>
            <div className={styles.readImageContainer}>
                <img src="../images/park.png" className={styles.readBackImage}/>
                <div className={styles.readImageHeart}>

                    <img src="../images/heart.png"/ >
                </div>
            </div>
            <h1 className={styles.readTitle}>{}</h1>
            <p style={{ fontSize: '14px' }}>Dit is de tussenstand:</p>
            {/* <p>{qrCodeData.qrCodeData.content}</p> */}

            {/* {renderCards()} */}

            {items.map((item: any, index: number) => {
                return (
                    <div key={index} style={index === 0 && items.length > 1 ? { borderTop: '2px solid black' } : undefined}>
                        {renderCard(index + 1, item.fields?.title, item.fields?.votes)}
                    </div>
                )
            })}

        </div>
    )


    function renderCard(number: number, title: string, votes: number) {
        return (
            <div className={styles.readCard}>
                <div className={styles.readCardRank}>
                    <img src="../images/star.svg" className={styles.star}/>
                    <span>{number}</span>
                </div>
                <img src="../images/park.png" />
                <div className={styles.cardVote}>
                    <h2>
                        {title}
                    </h2>
                    <span>{votes} stemmen</span>
                </div>
            </div>
        )
    }
}

export default Read

export async function getServerSideProps({ params }) {
    // const readId = params.read

    // const res = await fetch(`http://localhost:3000/api/qrcode?id=${readId}`)
    // const qrCodeData = await res.json()

    const client = contentful.createClient({
        space: 'to0ezlabe26l',
        accessToken: 'tCAPQQj2N9EQ5xHZi3Rue3wnp1uob_Zec1xj63AmEEg',
    });

    // const doQrCodesCall = async () => {
    const items = await client.getEntries()

        // const items = entries.items
        // console.log(items)
    // }

    // doQrCodesCall()

    return { props: { items: items.items } }
}
