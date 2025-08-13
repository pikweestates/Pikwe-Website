"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import parsePhoneNumber, { CountryCode } from "libphonenumber-js";
import Link from "next/link";
import FormInput from "./FormInput";
import styles from "../../styles/ReUsables/contactform.module.scss";

const FormWrapper = () => {
  const [buttonText, setButtonText] = useState("Apply to speak");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  const [tickError, setTickError] = useState(false);

  const [phoneError, setPhoneError] = useState("");

  //Managing Country codes
  const [currentCountry, setCurrentCountry] = useState<CountryCode>("CM");

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      setFocused(false);
    }
  }, [isSubmitting]);

  const handleFocus = () => {
    if (!isSubmitting) {
      // Skip onBlur during form reset/submission
      setFocused(true);
    }
  };

  // Validate phone number in real-time
  const handlePhoneChange = (phoneValue: string, country: any) => {
    if (setCurrentCountry) {
      setCurrentCountry(country.countryCode.toUpperCase());
    }

    const phoneNumber = parsePhoneNumber(
      phoneValue,
      country.countryCode.toUpperCase()
    );

    if (phoneNumber && phoneNumber.isValid()) {
      setPhoneError && setPhoneError(""); // Clear the error if valid, check if setPhoneError is defined
    } else {
      setPhoneError && setPhoneError("Enter a valid phone number."); // Set error if invalid
    }
  };

  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const FormFields = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: t("Navigation:fullname"),
      errorMessage: t("Navigation:nameerror"),
      required: true,
      minlength: 3,
      inputState: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: t("Navigation:emailaddress"),
      errorMessage: t("Navigation:emailerror"),
      required: true,
      inputState: true,
    },
    {
      id: 3,
      name: "reference",
      type: "text",
      placeholder: t("Navigation:reference"),
      required: false,
      minlength: 5,
      inputState: true,
    },
    {
      id: 4,
      name: "tellmore",
      type: "text",
      placeholder: t("Navigation:tellmore"),
      errorMessage: t("Navigation:messageerror"),
      required: true,
      minlength: 70,
      inputState: false,
    },
  ];

  const formRef = useRef<HTMLFormElement | null>(null);

  const firstTwo = FormFields.slice(0, 2); // Gets the first 2 items
  const referenceField = FormFields[2]; // Gets the reference field
  const tellMore = FormFields[3];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If checkbox is not ticked, show error and stop submission
    if (!activeBox) {
      setTickError(true);
      return;
    }
    

    // Validate phone number using automatic country detection
    const phoneNumber = parsePhoneNumber(values.phone, currentCountry);

    // Check if phone number is valid
    if (!phoneNumber || !phoneNumber.isValid()) {
      setPhoneError("Enter a valid phone number.");
      return;
    } else {
      setPhoneError("");
    }
    // //Form Data
    // const formData = new FormData(event.currentTarget);
    // // Retrieve form fields
    // const firstname = formData.get("firstname") as string | null;
    // const lastname = formData.get("lastname") as string | null;
    // const email = formData.get("email") as string | null;
    // const speakertitle = formData.get("stitle") as string | null;
    // const profile = formData.get("profile") as string | null;
    // const ptitle = formData.get("ptitle") as string | null;
    // const expertise = formData.get("expertise") as string | null;
    // const additionalinfo = formData.get("additionalinfo") as string | null;
    // const abstract = formData.get("abstract") as string | null;
    // // Change button text and show "Submitting..."
    // setButtonText("Applying to speak...");
    // setIsSubmitting(true);
    // try {
    //   const response = await fetch("/api/speakers", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       firstname,
    //       lastname,
    //       email,
    //       speakertitle,
    //       profile,
    //       ptitle,
    //       expertise,
    //       additionalinfo,
    //       abstract,
    //     }),
    //   });
    //   if (response.ok) {
    //     // On success, update button text
    //     setButtonText("Thankyou! We'll get back to you shortly.");
    //     // Reset form after a successful submission
    //     if (formRef.current) {
    //       formRef.current.reset();
    //     }
    //     setActiveBox(false)
    //   } else {
    //     // If API response is not ok, show error
    //     setButtonText("Sorry, an error occurred");
    //   }
    // } catch (error) {
    //   console.error("Error during form submission", error);
    //   setButtonText("Sorry, an error occurred");
    //   setIsSubmitting(false);
    // } finally {
    //   // After 3 seconds, reset the button text to "Submit form"
    //   setIsSubmitting(false); // Enable the button again
    //   setTimeout(() => {
    //     setButtonText("Apply to speak");
    //   }, 5000);
    // }
  };

  const toggleCheckbox = () => {
    const newActiveBox = !activeBox;
    setActiveBox(newActiveBox);

    // If the user ticks the box, remove any error
    if (newActiveBox) {
      setTickError(false);
    }
  };

  return (
    <div className={styles.aform__wrapper}>
      <form onSubmit={handleSubmit} ref={formRef} className={styles.form}>
        <div className={styles.form__top}>
          <div className={styles.form__boxing}>
            {firstTwo.map((data, i) => (
              <FormInput
                data={data}
                key={`fs${i}`}
                isSubmitting={isSubmitting}
              />
            ))}

            <div className={styles.form__forms}>
              <div className={styles.form__half}>
                <PhoneInput
                  country={"cm"}
                  onChange={handlePhoneChange} // pass the phone value directly
                  inputProps={{
                    name: "phone",
                    required: true,
                    placeholder: "+237 690 000 000",
                  }}
                  onBlur={handleFocus}
                  data-focused={focused.toString()}
                />
                {phoneError === "Enter a valid phone number." && (
                  <span className={styles.phoneerrormess}>{t("Navigation:phoneerror")}</span>
                )}
              </div>
              <div className={styles.form__half}>
                <FormInput
                  data={referenceField}
                  key={`fsref`}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>
            <FormInput
              data={tellMore}
              key="text-area"
              isSubmitting={isSubmitting}
            />
          </div>
          <div className={styles.checkbox__wrapper}>
            <div className={styles.cw__top}>
              <div
                className={`${styles.checkbox} ${
                  activeBox ? styles.active__box : ""
                }`}
                onClick={toggleCheckbox}
              >
                <div className={styles.checkbox__content}>
                  <span className={styles.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="#fff"
                        d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <span className={styles.checkbox__text}>
                {t("Navigation:tickagree")}{" "}
                <Link
                  href={
                    currentLocale === "en"
                      ? "/en/privacy"
                      : "/fr/confidentialite"
                  }
                >
                  {t("About:privacy")}
                </Link>
              </span>
            </div>
            {tickError && (
              <span className={styles.checkbox__error}>
                {t("Navigation:tickagree2")}
              </span>
            )}
          </div>
        </div>
        <button
          className={styles.submit}
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
        >
          <div className={styles.submit__content}>
            <span>{buttonText}</span>
            {isSubmitting && (
              <div className={styles.sub__right}>
                <span className={styles.spinner}></span>
              </div>
            )}
          </div>
        </button>
      </form>
    </div>
  );
};

export default FormWrapper;
