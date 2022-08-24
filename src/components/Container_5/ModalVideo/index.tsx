import { Box, Button, Collapse, Container, Grid, GridItem, HStack, Image, ScaleFade, SlideFade, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { HiCursorClick } from "react-icons/hi";

export function ModalVideo(teamProps) { 
   const iframeHeight = useBreakpointValue({
      base: '300px', 
      sm: '400px', 
      md: '500px',
      lg: '500px',
      xl: '500px'
   })
   return (
      <>
         <Grid w='100%' justifyContent='center'>
            <GridItem mx='auto'>
               <Image src='static/img/foto-footer.png' maxW='60vw' border='5px solid white' alt='Foto de capa' />
            </GridItem>

            {/* <GridItem mx='auto'>
               <Button boxShadow='lg' fontSize='1.8rem' color='orange' border='1px solid #00000018' size='lg' p={4}  _hover={{color:'cyan'}} fontWeight='400' onClick={teamProps.modal.onToggle}>
                  Clique e saiba mais!
               </Button>

            </GridItem>

            <Collapse in={teamProps.modal.isOpen}>
               <Box
                  rounded='md'
                  boxSizing="border-box"
                  mt={8}
                  w='80vw'
               >
                  <iframe width="100%" height={iframeHeight} src="https://www.youtube.com/embed/OuCvUDVoX3M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </Box>
            </Collapse > */}
         </Grid>
      </>
   )
}