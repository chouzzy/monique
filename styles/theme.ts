import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Heebo',
      body: 'Heebo',
   },
   colors: {
      grayBlue:"#284353", 
      cyan:"#74b3de", 
      cyanLight:"#3d79a8",
      ocean:"#1e31ae",
      oceanLight:"#331187",
      orange:"#ffac70", 
      orangeLight:"#ffac70", 
      pastel:"#ffac70",
      pastelLight:"#fbb98a",
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bgColor:'gray.100',
          color: 'gray.900',
          },
       // styles for the `a`
        a: {
          // color: 'teal.500',
          _hover: {
            textDecoration: 'none',
          },
        },
     },
   },
 })