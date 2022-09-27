import { Box, Container, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle } from "react-icons/bs";
import { ModalVideo } from "./ModalVideo";
import { Footer } from "./Footer";

export function Container_5() { 

   const videoModal = useDisclosure()
   const title = <>Com quem você fará a mentoria? <br></br></>
   const subTitle = <> <Text display='inline'> <b> Monique Balsani</b>, com experiência há mais de 10 anos na área comercial, trabalhando com vendas consultiva, ministrando treinamentos para equipe de vendas, campanhas, gestão de equipe, planejamento estratégico comercial e foco no desenvolvimento do potencial de pessoas. <br></br> <br></br> Graduada em Marketing, mais de 100 hrs de especializações no digital: mentorias, consultoria, social media, lançamentos, marca pessoal, conexão de marca, gestão de projetos e técnicas de copy. <br></br> <br></br> 
   Além de estar se formando como instrutora de Yoga, explorando o conhecimento do comportamento humano, com ideia de expandir o quanto a filosofia ajuda em todos os ambitos da vida, através de sua própria experiência.
   </Text>
   </>

   return (
      <Container id='#sobre' maxW='100vw' minH='64vh' color='gray.50'
      bgGradient='linear(to-b, #dc8b35 5%, #eca355 80%)' px={12} pt={12} mx='0' centerContent>
         <VStack maxW='80vw' spacing={8} my='auto'>
         <Heading fontWeight='300' textAlign='center'> {title} </Heading>
         <Box textAlign='justify' fontSize='1.2rem'>{subTitle}</Box>
         <ModalVideo 
            modal={videoModal} 
         />
         </VStack>

         <Footer/>
      </Container> 
   )
}