"use client"
import React,{useState,useContext} from 'react'
import Example from './example'
import MakeData from './makeData'
import { MantineProvider } from "@mantine/core";

import { ActionIcon } from "@mantine/core";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import ColorSchemeContext from "./ColorSchemeContext";

const page = () => {
const [colorScheme, setColorScheme] = useState("light");
const dark = colorScheme;

    return (
      <>
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => setColorScheme(dark ? "light" : "dark")}
          title="Toggle color scheme">
          {dark ? (
            <SunIcon style={{ width: 18, height: 18 }} />
          ) : (
            <MoonIcon style={{ width: 18, height: 18 }} />
          )}
        </ActionIcon>
        <MantineProvider theme={{ colorScheme: colorScheme }}>
          {/* <Example /> */}
          <MakeData />
        </MantineProvider>
      </>
    );
}

export default page