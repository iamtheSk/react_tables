"use client"
import React from 'react'
import App from './app'

    // 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

const page = () => {
  return (
    <NextUIProvider>
              <App/>
    </NextUIProvider>)
}

export default page