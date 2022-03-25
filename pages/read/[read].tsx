import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import { client } from '../index'
import * as contentful from 'contentful'

function Read({ otherQrCodes, comments }) {

    const myQr = otherQrCodes[0]

    // const myQr = otherQrCodes.find(qrCode => qrCode.)
    

    return (
        <div className={styles.readContainer}>

            <div className={styles.readHeader}>
                <span className={styles.header1}>Noorderpark</span>
                <span className={styles.header2}>De leukste-plekje-van-het-park</span>
                <span className={styles.header3}>verkiezing 2022</span>
            </div>

            <div className={styles.readImageContainer}>
             
                <img src="../images/park.png" className={styles.readBackImage}/>
             
                <div className={styles.readImageHeart}>
                    <img src="../images/heart.png"/ >
                </div>
            </div>
            <h1 className={styles.readTitle}>{myQr.fields.title}</h1>
            <p className={styles.readDescription}>
                {myQr.fields.content}
            </p>
            <p style={{ fontSize: '14px' }}>Dit is de tussenstand:</p>
            {otherQrCodes.map((item: any, index: number) => {
                return (
                    <div key={index} style={index === 0 && otherQrCodes.length > 1 ? { borderTop: '1px solid black' } : undefined}>
                        {renderCard(index + 1, item.fields?.title, item.fields?.votes)}
                    </div>
                )
            })}
            <div className={styles.commentSection}>
                <div className={styles.commentHeader}>
                    <span>{comments.length + ' reacties'}</span>
                    <button>Reageer</button>
                </div>
                {renderComments()}
            </div>
        </div>
    )

    function renderComments() {
        return comments.map((comment: any, index: number) => {
            comment = comment.fields
            return (
                <div className={styles.comment} key={index} style={{ marginTop: '10px' }}>
                    <h3>{comment.author}</h3>
                    <p>{comment.description}</p>
                </div>
            )
        })
    }


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
                    <div>
                        <span>{votes} stemmen</span>
                        <div className={styles.voteBar}>
                            <div className={styles.innerBar} style={{
                                width: ((votes / 10) * 100).toString() + '%',
                            }}>

                            </div>
                        </div>
                    </div>
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
    const qrCodes = await client.getEntries({
        content_type: 'qrcode'
    })

    const comments = await client.getEntries({
        content_type: 'comment'
    })

    // console.log(qrCodes, comments)

        // const items = entries.items
        // console.log(items)
    // }

    // doQrCodesCall()

    return { props: { otherQrCodes: qrCodes.items, comments: comments.items } }
}
