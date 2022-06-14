import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AddressShowAction, deleteAction } from "../action/userAction";

export default function ViewProfile() {
  const dspatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dspatch(AddressShowAction());
  }, []);

  const { loading, adressInfo, error } = useSelector((state) => {
    return state.AddressShow;
  });

  const deleteClick = (emailorphonenumber) => {
    dspatch(deleteAction(emailorphonenumber));
  };
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        {loading && <h1>Lading...........</h1>}

        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {adressInfo && adressInfo.firstName}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {adressInfo && adressInfo.emailorphonenumber}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Adress: {adressInfo && adressInfo.address[0].address}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Link to="/ChangPassword">
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Change Password
            </Button>
          </Link>

          <Link to="/ChangeAddrss">
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Change Address
            </Button>
          </Link>
        </Stack>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"red.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          colorScheme="tomato"
          mt="10px"
          onClick={() => deleteClick(adressInfo.emailorphonenumber)}
        >
          Delete
        </Button>

        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"green.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          colorScheme="tomato"
          mt="10px"
          onClick={() => navigate("/profile")}
        >
          Send OTP
        </Button>
      </Box>
    </Center>
  );
}
