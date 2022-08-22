import { Box, Container, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle } from "react-icons/bs";
import { ModalVideo } from "./ModalVideo";
import { Footer } from "./Footer";

export function Container_5() { 

   const videoModal = useDisclosure()
   const title = <>Com quem você fará a mentoria? <br></br> <br></br>Monique Balsani, experiência há mais de 10 anos na área comercial</>
   const subTitle = <> <Text display='inline'> Trabalhando com vendas consultiva, ministrando treinamentos para equipe de vendas, campanhas, gestão de equipe, planejamento estratégico comercial, condução de reuniões estratégicas comerciais e foco no desenvolvimento do potencial de pessoas <br></br> <br></br> Atualmente, cursando sua segunda formação como professora de Yoga. Estudo comprovado cientificamente que reflete em melhorias mentais, emocionais, foco, concentração, ética , estabilidade consequentemente melhorando clareza na comunicação como um todo, o que complementa todos os estudos e experiências de todos esses anos de trajetória.</Text>
   <Text fontSize='1.5rem' textAlign='center' my={8}>Graduada em Marketing, especializações em comunicação, marketing digital, pessoal e estratégia de conteúdo.</Text>
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