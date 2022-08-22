import { Box, Container, Flex, Grid, GridItem, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Item } from "./Item";

export function Content() {
   const benefits = [
      "Quem precisa movimentar o seu negocio no mundo digital e não sabe por onde começar.",
   
      "Movimenta suas redes sociais com constancia, porém, de forma aleatória e não sente evolução em resultados.",
   
      "Tem dificuldade de humanizar a comunicação no digital",

      "Não consegue criar um relacionamento com seu publico digital, apenas com pessoas conhecidas.",
   
      "Cria posts aleatórios e apenas de apresentação (serviço ou produto), sem sequencia logica e sem conteúdos que cria conexão com o publico.",
   
      "Corporações com funcionários de Marketing em multifunção, sem tempo para estratégias de conteudo digital.",
   
      "Para quem precisa de um planejamento estratégico mensal personalizado, minucioso na comunicação digital do seu negócio.",
   ]
   const title = 'Para quem é?'
   const subtitle = 'Se as ideias, por melhores que sejam, não estiverem articuladas com os objetivos e a lógica, de nada adianta joga-las no fluxo'

   return (
      <Grid py={12} color='gray.900' templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)']} >
         <Flex textAlign='center' p={8} alignItems='center'>
            <VStack mx='auto'>
            <Heading color='cyan' fontFamily='Poiret One' fontWeight='600'>
                  {title}
            </Heading>
            {/* <Text>
                  {subtitle}
            </Text> */}
            </VStack>
         </Flex>

         <Flex justifyContent='center'
         bgGradient={['linear(to-br, #74b3de 5%, #fbb98a 90%)'] }
         borderRadius={12} p={4} m={2} 
         _hover={{px:6, borderRadius:0, transition:'600ms'}}
         >
            <VStack spacing={4} borderRadius={16} bg='white' bgImage={'static/img/flower.png'} bgSize='fit'>

               <List spacing={4} fontFamily='Poiret One' p={6} fontWeight='600'>
                  {benefits.map( item => {
                     return (
                        <Item key={item} text={item} />
                     )
                  })}
               </List>

            </VStack>
         </Flex>


         
      </Grid>
   )   
}