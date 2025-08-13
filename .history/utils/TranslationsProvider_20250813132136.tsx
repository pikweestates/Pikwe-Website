"use client";

import React from "react";

import initTranslations from "@/app/i18n";
import { createInstance, type i18n, type Resource } from 'i18next';
import { I18nextProvider } from "react-i18next";

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: {
  children: React.ReactNode;
  namespaces: string[];
  locale: string,
  resources?: Resource
}) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}