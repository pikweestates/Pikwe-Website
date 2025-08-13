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
    id: 5,
    name: "profile",
    type: "text",
    placeholder: "e.g. LinkedIn profile, personal website",
    required: false,
    inputState: true,
  },
  {
    id: 6,
    name: "ptitle",
    type: "text",
    placeholder: "Your presentation title",
    errorMessage: "Your presentation title must contain at least 10 letters.",
    label: "Presentation Title*",
    required: true,
    minlength: 10,
    inputState: true,
  },
  {
    id: 7,
    name: "abstract",
    type: "text",
    placeholder:
      "A brief summary (150 words max) outlining your presentation topic",
    errorMessage: "Presentation abstract must be at least 70 characters long.",
    label: "Presentation Abstract*",
    required: true,
    minlength: 70,
    inputState: false,
  }
];