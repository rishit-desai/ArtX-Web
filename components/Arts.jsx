import React, { useState } from 'react'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap';
import { db, auth, storage } from '../scripts/firebase'

export default function Arts()
{
    const pic = 'https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/users%2Fpicasso%2Fimages%2F1.png?alt=media&token=19ca03eb-40a7-475e-abbc-ba8a88230998'
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) =>
    {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image
                    layout='fill'
                    className="d-block w-100"
                    src={'https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/users%2Fpicasso%2Fimages%2F1.png?alt=media&token=19ca03eb-40a7-475e-abbc-ba8a88230998'}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    layout='fill'
                    className="d-block w-100"
                    src={'https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/users%2Fpicasso%2Fimages%2F1.png?alt=media&token=19ca03eb-40a7-475e-abbc-ba8a88230998'}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    layout='fill'
                    className="d-block w-100"
                    src={'https://firebasestorage.googleapis.com/v0/b/artx-in.appspot.com/o/users%2Fpicasso%2Fimages%2F1.png?alt=media&token=19ca03eb-40a7-475e-abbc-ba8a88230998'}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
