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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeAddrssAction,
  ChangePasswordAction,
  forgotPasswordAction,
  LoginAction,
} from "../action/userAction";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
function ChangeAddrss() {
  const { loading, userInfo, error } = useSelector((state) => {
    return state.login;
  });

  const { changeAdress } = useSelector((state) => {
    return state.ChangeAddrss;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //validatio form
  const validate = (values) => {
    const errors = {};

    if (!values.address) {
      errors.address = "Required";
    } else if (values.address.length < 4) {
      errors.address = "Must be 4 Characters or More";
    } else if (values.address === "123456") {
      errors.address = "Must Not be 123456";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      address: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(ChangeAddrssAction(values));
      //   navigate("/viewProfiles");
    },
  });
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"} mb="50px">
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Change Address</Heading>
          <form onSubmit={formik.handleSubmit}>
            {error && <Text>{error}</Text>}
            {changeAdress && <Text>{changeAdress}</Text>}

            <FormControl id="address">
              <FormLabel>Enter new Address</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.address}
                onBlur={formik.handleBlur}
                type="text"
              />
            </FormControl>

            {formik.errors.address ? (
              <Text mt="6px" color="tomato">
                {formik.errors.address}
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

export default ChangeAddrss;
