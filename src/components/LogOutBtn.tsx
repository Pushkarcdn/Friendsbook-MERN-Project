"use client"

import logOut from '@/lib/logout'
import React from 'react'

function LogOutBtn() {
    return (
        <button onClick={() => logOut()}>Logout</button>
    )
}

export default LogOutBtn