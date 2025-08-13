"use client";

import { useTranslation } from "react-i18next";

const {t, i18n} = useTranslation(); 

export const SpeakerFormFields = [
  {
    id: 1,
    name: "fullname",
    type: "text",
    placeholder: t("Navigation:fullname"),
    errorMessage: "Your first name must contain at least 3 letters.",
    required: true,
    minlength: 3,
    inputState: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: t("Navigation:emailaddress"),
    errorMessage: "Please enter a valid email address.",
    required: true,
    inputState: true,
  },
  {
    id: 3,
    name: "reference",
    type: "text",
    placeholder: t("Navigation:reference"),
    errorMessage: "Your title must contain at least 10 letters.",
    required: false,
    minlength: 5,
    inputState: true,
  },
  {
    id: 4,
    name: "tellmore",
    type: "text",
    placeholder:
    t("Navigation:tellmore"),
    errorMessage: "Presentation abstract must be at least 70 characters long.",
    required: true,
    minlength: 70,
    inputState: false,
  }
];