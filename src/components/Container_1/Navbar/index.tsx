import { Button, useBreakpointValue, Grid, GridItem,Link, Image, Box, HStack, SimpleGrid} from "@chakra-ui/react"

import {Link as Slink} from 'react-scroll'
import { ModalMenu } from "./Modal";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { NavItem } from "./NavItem";

export function Navbar() {
   const isMobile = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   })

   const navItems= [
   {id:'#oque', text:'O que é?', active:'active'},
   {id:'#paraquem', text:'Para quem é'},
   {id:'#vantagens', text:'Vantagens'},
   {id:'#sobre', text:'Como funciona'}, 
   {id:'#sobre', text:'Quem sou eu'}]

   return (
         <Grid
            py={2}
            position='relative'
            bg='white'
            boxShadow='xl'
            templateColumns={['','','','repeat(12,1fr)','repeat(12,1fr)']}
            w='100%'
            fontFamily='Poiret One'
            fontWeight='400'
            textAlign='center'
            bgColor='white.50'
            alignItems='end'
            color='gray.600'
         >

         <GridItem mr={['auto','','','','auto']} ml={[4,4,'',4,8]} colStart={[0,0,1,1,1]} colEnd={[0,0,3,3,3]}>
            <Image mx='auto' src='static/img/logo.png' maxW={['200px','200px','200px','100%' ]} alt='Logo Monique Balsani'/>
         </GridItem>

         {isMobile?
            <ModalMenu navItems={navItems}/>
         : 
         <>
            <GridItem colStart={[3,3,3,3,3]} colEnd={[10,10,10,11,11]} >
            <HStack justifyContent='center' fontFamily='Poiret One' fontWeight={600} textTransform='uppercase' spacing={[0,0,0,4,16]} fontSize={['1rem','1rem','1rem','0.9rem']}>
                     {navItems.map(item => {
                        return (
                           <NavItem key={item.text} id={item.id} text={item.text} activeClass={item.active}/>
                        )
                     })}
                  
               </HStack>
            </GridItem>

            <GridItem colStart={[10,10,10,11,11]} colEnd={13}>
               <HStack justifyContent='center' alignItems='baseline' spacing={2} fontSize='1.3rem' color='pastel'>
                  <Link  _hover={{color: "orange"}} href='https://www.linkedin.com/in/monique-balsani-814b0316a/'> <SiLinkedin/> </Link>
                  <Link _hover={{color: "orange"}} href='https://instagram.com/moniquebalsani3004?igshid=YmMyMTA2M2Y='> <BsInstagram /> </Link>
                  <Link _hover={{color: "orange"}} href='https://twitter.com/MoniqueBalsani?t=9NWg3Dauz5QKDg59qy_bag&s=09'> <FaTwitter /> </Link>
                  <Link _hover={{color: "orange"}} color='#6cd474'fontSize='1.4rem' href='https://wa.me/5511944449014'> <RiWhatsappFill/> </Link>
                  {/* <Image w='70px' src='images/zap.png' alt='Dan Abramov' /> */}
               </HStack >
            </GridItem>

            {/* <GridItem colStart={11} colEnd={13} mb={2}>
                  <Button borderRadius={3} _hover={{boxShadow:'lg'}} bg='datGreen' color='white'>Loja Daterra</Button>
            </GridItem> */}
            </>
         }
         </Grid>
   )
}