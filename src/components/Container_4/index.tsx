import { Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { Content } from "./Content";

const splitter = '“Se as ideias, por melhores que sejam, não estiverem articuladas com os objetivos e a lógica, de nada adianta joga-las no fluxo. Cria uma imagem de desorganização e gera ruídos.”'

export function Container_4() {
   return (
      <Container id='#vantagens' maxW='100vw' m='0' p='0' bgGradient={['linear(to-br, white 15%, white 90%)']}>
      <Flex textAlign='center' h={['400px','400px','400px','200px']} bg='pastelLight' px={8} alignItems='center'>
         <VStack mx='auto'>
         <Heading  fontSize={['1.4rem','1.8rem','2rem','2rem']} color='white' fontFamily='Poiret One' fontWeight='600'>
               {splitter}
         </Heading>
         </VStack>
      </Flex>
         <Content/>
      </Container>
   )   
}
