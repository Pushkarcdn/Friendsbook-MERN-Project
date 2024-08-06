"use client"

import LogOut from '@/lib/logout'
import React from 'react'

function LogOutBtn() {

    return (
        <button onClick={() => LogOut()}>Logout</button>
    )
}

export default LogOutBtn