import { Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { Content } from "./Content";

const splitter = '“Se as ideias, por melhores que sejam, não estiverem articuladas com os objetivos e a lógica, de nada adianta joga-las no fluxo. Cria uma imagem de desorganização e gera ruídos.”'

export function Container_4() {
   return (
      <Container id='#vantagens' maxW='100vw' minH='70vh' m='0' p='0' 
      bgImage={'static/img/sun.png'} bgPosition='bottom' bgSize='cover'
      centerContent>
      <Flex textAlign='center'  bg='pastelLight' my='auto' px={8} py={2} alignItems='center'>
         <VStack mx='auto'>
         <Heading  fontSize={['1.4rem','1.8rem','2rem','2rem']} color='white' fontFamily='Poiret One' fontWeight='600'>
               {splitter}
         </Heading>
         </VStack>
      </Flex>
         {/* <Content/> */}
      </Container>
   )   
}
