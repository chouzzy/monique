import { Box, Container, Flex, Grid, GridItem, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";

export function Item(ItemProps) {

   return (
         <ListItem>
            <ListIcon display='inline'  fontSize='1.6rem' as={AiOutlineCheck} color='green.500' />
            <Text display='inline' fontSize='1.1rem'>
            {ItemProps.text}
            </Text>
         </ListItem>
         

   )   
}