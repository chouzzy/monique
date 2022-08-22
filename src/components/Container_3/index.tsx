import { Container } from "@chakra-ui/react";
import { Content } from "./Content";

export function Container_3() {
   return (
      <Container id='#paraquem' maxW='100vw' m='0' p='0' bgGradient={['linear(to-br, white 15%, white 90%)']}>
         <Content/>
      </Container>
   )   
}