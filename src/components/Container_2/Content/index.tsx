import { Box, Container, Flex, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Content() {
   const title = 'O que é?'
   const description =<> 
   <Text display='inline'> Uma mentoria que entregará um plano de comunicação digital com o passo a passo de como criar </Text>
   <Text display='inline'  color='#90c9ef' fontWeight='600'>CONTEUDOS ESTRATÉGICOS! <br></br> <br></br></Text> 
   <Text display='inline'> Esqueça postagens aleatórias sem uma ordem lógica de raciocínio. Refine seus resultados dentro do digital! Afinal, a necessidade básica hoje de um negócio é estar dentro das mídias digitais, então, é preciso dar a devida atenção.</Text>

   </>
   return (
      <Grid alignItems='center' py={12} color='gray.50' templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)']} >
         <Flex textAlign='left' p={4} m={8} borderRadius={12} bg='#71432aa3' alignItems='center'>
            <VStack>

            <Heading fontSize='3.4rem' fontFamily='Poiret One' >
               {title}
            </Heading>

            <Box fontSize='1.2rem'  p={4} >
               {description}
            </Box>

            </VStack>
         </Flex>
         
         <Flex justifyContent='center'>
         {/* <iframe width="90%" height="315" src="https://www.youtube.com/embed/O8VY2p8qi9E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
         <Image src='static/img/foto-capa.png' maxW='360px' border='5px solid white' borderRadius='full' alt='Foto de capa' />
         </Flex>
      </Grid>
   )   
}