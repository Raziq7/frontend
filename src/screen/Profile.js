import React from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { SendOtpAction } from "../action/userAction";

// const { loading, userInfo, error } = useSelector((state) => {
//   return state.login;
// });

function Profile() {
  const dispatch = useDispatch();
  //validatio form
  const validate = (values) => {
    const errors = {};

    if (!values.phonenumber) {
      errors.phonenumber = "Required";
    } else if (values.phonenumber.length < 10) {
      errors.phonenumber = "Must be 10 Characters or More";
    } else if (values.phonenumber === "123456") {
      errors.phonenumber = "Must Not be 123456";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      phonenumber: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(SendOtpAction(values));
      //   navigate("/viewProfiles");
    },
  });

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"} mb="50px">
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>OTP</Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl id="phonenumber">
              <FormLabel>Enter your Phone Number</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.phonenumber}
                onBlur={formik.handleBlur}
                type="text"
                mt="10px"
              />
            </FormControl>

            {formik.errors.phonenumber ? (
              <Text mt="6px" color="tomato">
                {formik.errors.phonenumber}
              </Text>
            ) : null}
            <Stack spacing={6}>
              <Button type="submit" colorScheme={"blue"} variant={"solid"}>
                Change Addrss
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default Profile;
