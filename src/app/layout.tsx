import type { Metadata } from "next"
import { Noto_Sans_Thai, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../themeProvider/materialTailwind"
import type { ButtonStyleTypes, CheckboxStylesType, InputStylesType, RadioStylesType, SelectStylesType, TypographyStylesType } from "@material-tailwind/react"
import ProviderWrapper from "./ProviderWrapper"
import NavBarComponent from "@/components/navbarComponent"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
})

const sans = Noto_Sans_Thai({
  subsets: ["thai", "latin-ext"],
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const buttonStyle: ButtonStyleTypes = {
    defaultProps: {
      variant: "filled",
      color: 'green',
      // className: 'font-sans'
    },
    styles: {
      variants: {
        outlined: {
          black: {
            borderColor: 'border-[#0000000F]',
            color: 'black'
          }
        },

      }
    }
  }

  const inputStyle: InputStylesType = {
    defaultProps: {
      color: 'green',
      containerProps: {
        className: 'min-w-full'
      },
      // className: 'font-sans',
    },
  }


  const typographyStyle: TypographyStylesType = {
    defaultProps: {
      color: 'current',
      // className: 'font-sans',
    },
    styles: {
      variants: {
        h1: {
          fontSize: "text-[38px]",
          fontWeight: "font-semibold",
        },
        h2: {
          fontSize: "text-[30px]",
          fontWeight: "font-semibold",
        },
        h3: {
          fontSize: "text-[24px]",
          fontWeight: "font-semibold",
        },
        h4: {
          fontSize: "text-[20px]",
          fontWeight: "font-semibold",
        },
        h5: {
          fontSize: "text-[16px]",
          fontWeight: "font-semibold",
        },
        lead: {
          fontSize: "text-[20px]",
          fontWeight: "font-normal",
        },
        paragraph: {
          fontSize: "text-[16px]",
          fontWeight: "font-normal",
        },
        small: {
          fontSize: "text-[14px]",
          fontWeight: "font-normal",
        }
      },
      colors: {
        current: {
          color: 'text-gray-700'
        }
      }
    }
  }

  const radioStyle: RadioStylesType = {
    defaultProps: {
      color: 'green',
      labelProps: {
        // className: 'font-sans',
      }
    },
  }

  const selectStyle: SelectStylesType = {
    defaultProps: {
      color: 'green',
      containerProps: {
        className: 'min-w-full'
      },
    }
  }

  const checkboxStyle: CheckboxStylesType = {
    defaultProps: {
      color: 'green',
    }
  }

  const customTheme = {
    button: buttonStyle,
    input: inputStyle,
    typography: typographyStyle,
    radio: radioStyle,
    select: selectStyle,
    checkbox: checkboxStyle
  }


  return (
    <html lang="en" >
      <body className={`${roboto.className} ${sans.className}`}>
        <ThemeProvider value={customTheme}>
          <ProviderWrapper>
            <NavBarComponent >
              {children}
            </NavBarComponent>
          </ProviderWrapper>
        </ThemeProvider>
      </body>
    </html >
  )
}
