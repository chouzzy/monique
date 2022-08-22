import { Box, Container, Flex, Grid, GridItem, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Item } from "./Item";

export function Content() {
   const benefits1Page = [
      "Ter um MODELO de plano de comunicação digital estratégica para seu negócio. (Facil entendimento para qualquer pessoa seguir a lógica do plano).",
   
      "Ter 6 conteúdos MODELO para seu negócio criado em cima das logicas de funil de venda e tipo de cerebro do seu cliente/persona.",
   
      "Entender como montar conteúdos seguindo uma sequencia lógica para cada momento dentro do FUNIL DE VENDAS e PERSONALIZADO para o tipo de cérebro do seu PUBLICO/PERSONA... Deixando a mensagem muito clara, humana e de fácil entendimento.",
   
      "Ter um perfil robusto em estratégias comerciais, preparado para vendas de maneira coerente, inteligente, humanizada e sustentável.",
   ]
   const benefits2Page = [
      "Ampliar a consciência de comunicação dentro do digital.",
   
      "Identificar melhor distribuição dos conteúdos de acordo com o momento do negócio. Ex... Mês X - 30% campanha de data comemorativa/ 20% prova social/ 20% bastidores/ 30% vendas de esteira de produtos basicos.",
   
      "Usar as redes sociais como ferramenta de vendas para o departamento comercial.",
      
      "Ter um plano SUGERIDO de Gestão de comunicação estratégica digital MENSAL, dentro de lógicas minuciosas sobre o seu negócio. Sem necessidade de contrato com quantidade minima de meses"
   ]
   const title = <>Com a mentoria personalizada, você vai: </>
   const subtitle = 'Quem precisa movimentar o seu negocio no mundo digital e não sabe por onde começar.'

   return (
      <>

      <Flex textAlign='center' p={2} mt={8} alignItems='center'>
         <VStack mx='auto'>
         <Heading  fontSize='2rem' color='cyan' fontFamily='Poiret One' fontWeight='600'>
               {title}
         </Heading>
         {/* <Text>
               {subtitle}
         </Text> */}
         </VStack>
      </Flex>

      <Grid py={6} color='gray.900' templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)']} >

         <Flex justifyContent='center'
         bgGradient={['linear(to-br, #74b3de 5%, #fbb98a 90%)'] }
         borderRadius={12} p={4} m={2}
         >
            <VStack spacing={4} borderRadius={16} bg='white' bgImage={'static/img/flower.png'} bgSize='fit'>

               <List spacing={4} fontFamily='Poiret One' p={6} fontWeight='600'>
                  {benefits1Page.map( item => {
                     return (
                        <Item key={item} text={item} />
                     )
                  })}
               </List>

            </VStack>
         </Flex>
         <Flex justifyContent='center'
         bgGradient={['linear(to-br, #74b3de 5%, #fbb98a 90%)'] }
         borderRadius={12} p={4} m={2} 
         >
            <VStack spacing={4} borderRadius={16} bg='white' bgImage={'static/img/flower.png'} bgSize='fit'>

               <List spacing={4} fontFamily='Poiret One' p={6} fontWeight='600'>
                  {benefits2Page.map( item => {
                     return (
                        <Item key={item} text={item} />
                     )
                  })}
               </List>

            </VStack>
         </Flex>
         



         
      </Grid>
      </>
   )   
}