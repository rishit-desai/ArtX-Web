import React, { useState } from 'react'
import NavCustom from '../components/NavCustom';
import Arts from '../components/Arts';

export default function Bio({ userId, currentUser })
{
    return (
        <>
            <NavCustom />
            <div style={{ background: "black" }}>
                <Arts />
            </div>
        </>
    )
}
