import { useDisclosure, Box, Button, Collapse, useBreakpointValue, Grid, GridItem, Image, Heading, Text, VStack, Flex, Link, HStack} from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

import { RiWhatsappFill, RiMenuLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { NavItem } from "../NavItem";
import { SocialMedia } from "./Social Media";

export function ModalMenu(ModalMenuProps) {
   const socialMediaLinks = {
      'instagram':'https://instagram.com/moniquebalsani3004?igshid=YmMyMTA2M2Y=',
      'twitter':'https://twitter.com/MoniqueBalsani?t=9NWg3Dauz5QKDg59qy_bag&s=09',
      'linkedin':'https://www.linkedin.com/in/monique-balsani-814b0316a/',
      'whatsapp':'https://wa.me/5511944449014'
   }
   const { isOpen, onToggle } = useDisclosure()

   return (
      <>
         <Button  w='50px' right='0' mr={[4,4,12,0,12]} fontSize='1.4rem' top='0' my={10}  position='absolute' bg='pastel' color='white' onClick={onToggle}><RiMenuLine/></Button>
         <Collapse in={isOpen} animateOpacity>
            <Box
               w='100vw'
               color='pastel'
               rounded='md'
               shadow='md'
            >
               <VStack textTransform='uppercase' fontWeight='600' fontSize='1.05rem' pt={4}>

                  {ModalMenuProps.navItems.map( item => {
                     return (
                        <NavItem key={item.id} id={item.id} text={item.text} activeClass={item.active} color={item.color} href=''/>
                     )
                  })}
                  <HStack p={2} fontSize='1.6rem' spacing={3} textAlign='center' borderTop='1px solid #b8d432' w='36vw' justifyContent='center'>
                        <SocialMedia color='#orange' icon={<BsInstagram/>} mediaLink={socialMediaLinks.instagram}/>
                        <SocialMedia color='#orange' icon={<FaTwitter/>} mediaLink={socialMediaLinks.twitter}/>
                        <SocialMedia color='#orange' icon={<SiLinkedin/>} mediaLink={socialMediaLinks.linkedin}/>
                        <SocialMedia color='#orange' icon={<RiWhatsappFill/>} mediaLink={socialMediaLinks.whatsapp}/>
                  </HStack>
               </VStack>
            </Box>
         </Collapse>
         </>
      )}