import { Box, Container, Flex, Grid, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

export function Banner() { 
   const { isOpen, onOpen, onClose } = useDisclosure()

   const iframeHeight = useBreakpointValue({
      base: '300px', 
      sm: '400px', 
      md: '500px',
      lg: '500px',
      xl: '500px'
   })
   return (
      <>
      
      <Flex w='100%' minH='80vh' boxShadow='lg' justifyContent='center' color='white' bgImage={'static/img/home.png'} bgColor='cyan' bgSize='cover'>
         <VStack p={8} spacing={12} my='auto' borderRadius='lg' textShadow='1px 1px 1px #0000003a'>

            <Box textAlign='center' fontFamily='Poiret One' textShadow='1px 1px 1px #00000090'>
               <Text fontSize='3.2rem' display='inline' color='white' mx='auto'>
                  Monique 
               </Text>
                  <Text color='pastel' fontSize='3.2rem' display='inline'> Balsani </Text>
               <Text fontSize='2.4rem' fontWeight='400' mx='auto'>Estratégia de comunicação digital</Text>
            </Box>

            <Box>
               <Flex fontSize='3rem' justifyContent='center' cursor='pointer' _hover={{color:'pastel'}}>
               <IoIosArrowDown/>
               </Flex>
            </Box>
         </VStack>
      </Flex>
      
      <Modal finalFocusRef={null} closeOnOverlayClick={true} size='full' isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent my={['28vh','100px','40px','40px']} backgroundColor='#00000000'>
            <ModalCloseButton color='white' />
            <ModalBody alignItems='center' py={12}>
               <iframe width="100%" height={iframeHeight} src="https://www.youtube.com/embed/Khg27HTFJ-0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </ModalBody>
         </ModalContent>
      </Modal>
      </>
   )
}