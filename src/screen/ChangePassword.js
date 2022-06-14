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
  ChangePasswordAction,
  forgotPasswordAction,
  LoginAction,
} from "../action/userAction";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
function ChangPassword() {
  const { loading, userInfo, error } = useSelector((state) => {
    return state.login;
  });

  const { change } = useSelector((state) => {
    return state.ChangePassword;
  });

  console.log(change, "tomatotomatotomatotomato");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //validatio form
  const validate = (values) => {
    const errors = {};

    if (!values.oldPassword) {
      errors.oldPassword = "Required";
    } else if (values.oldPassword.length <= 3) {
      errors.oldPassword = "Must be 4 characters or More";
    }

    if (!values.newPassword) {
      errors.newPassword = "Required";
    } else if (values.newPassword.length < 4) {
      errors.newPassword = "Must be 4 Characters or More";
    } else if (values.newPassword === "123456") {
      errors.newPassword = "Must Not be 123456";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(ChangePasswordAction(values));
      // navigate("/viewProfiles");
    },
  });
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"} mb="50px">
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Change Password</Heading>
          <form onSubmit={formik.handleSubmit}>
            {error && <Text>{error}</Text>}
            {change && <Text>{change.msg}</Text>}
            <FormControl id="oldPassword">
              <FormLabel>Ente Old Password</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.oldPassword}
                onBlur={formik.handleBlur}
                type="password"
              />
            </FormControl>
            {formik.errors.oldPassword && (
              <Text mt="6px" color="tomato">
                {formik.errors.oldPassword}
              </Text>
            )}
            <FormControl id="newPassword">
              <FormLabel>Enter new Password</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.newPassword}
                onBlur={formik.handleBlur}
                type="password"
              />
            </FormControl>

            {formik.errors.newPassword ? (
              <Text mt="6px" color="tomato">
                {formik.errors.newPassword}
              </Text>
            ) : null}
            <Stack spacing={6}>
              <Button type="submit" colorScheme={"blue"} variant={"solid"}>
                Change Password
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default ChangPassword;
