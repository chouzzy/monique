import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Link, SimpleGrid, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import {Link as Slink} from 'react-scroll'
import { BsArrowUpCircle, BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
export function Footer() { 

   return (
         <VStack spacing={4} p={4}  mt={12}>
            <Link _hover={{textDecoration:'none'}} href="mailto:monique.balsani@gmail.com">
               <Button 
               bg='orange' letterSpacing={2} fontFamily='Poiret One' fontWeight='600'
               _hover={{bg:'cyanLight', transition:'600ms', textDecoration:'none'}}>
                  Entre em contato!
               </Button>
            </Link>
            <Divider orientation='horizontal' />

            <HStack maxW='80vw' fontSize='1.4rem' spacing={4} my='auto'>
                  <Link  _hover={{color: "blue.400"}} href='https://www.linkedin.com/in/monique-balsani-814b0316a/'> <SiLinkedin/> </Link>
                  <Link _hover={{color: "pink.600"}} href='https://instagram.com/moniquebalsani3004?igshid=YmMyMTA2M2Y='> <BsInstagram /> </Link>
                  <Link _hover={{color: "cyan"}} href='https://twitter.com/MoniqueBalsani?t=9NWg3Dauz5QKDg59qy_bag&s=09'> <FaTwitter /> </Link>
                  <Link _hover={{color: "#6cd474"}}  href='https://wa.me/5511944449014'> <RiWhatsappFill/> </Link>
            </HStack>
         </VStack>
   )
}