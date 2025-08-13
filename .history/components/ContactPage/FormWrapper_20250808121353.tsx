"use client";

import React, { useState, useRef } from "react";
import FormInput from "./FormInput";
import { FormFields } from "@/utils";
import styles from "../../styles/AttendPage/contactform.module.scss";

const FormWrapper = () => {
  const [buttonText, setButtonText] = useState("Apply to speak");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  const [tickError, setTickError] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const firstSix = FormFields.slice(0, 6); // Gets the first 6 items
  const lastTwo = FormFields.slice(-2); // Gets the last 2 items
  const textArea = FormFields[6];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If checkbox is not ticked, show error and stop submission
    if (!activeBox) {
      setTickError(true);
      return;
    }
    setTickError(false);

    //Form Data
    const formData = new FormData(event.currentTarget);

    // Retrieve form fields
    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const email = formData.get("email") as string | null;
    const speakertitle = formData.get("stitle") as string | null;
    const profile = formData.get("profile") as string | null;
    const ptitle = formData.get("ptitle") as string | null;
    const expertise = formData.get("expertise") as string | null;
    const additionalinfo = formData.get("additionalinfo") as string | null;
    const abstract = formData.get("abstract") as string | null;

    // Change button text and show "Submitting..."
    setButtonText("Applying to speak...");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/speakers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          speakertitle,
          profile,
          ptitle,
          expertise,
          additionalinfo,
          abstract,
        }),
      });

      if (response.ok) {
        // On success, update button text
        setButtonText("Thankyou! We'll get back to you shortly.");

        // Reset form after a successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
        setActiveBox(false)
      } else {
        // If API response is not ok, show error
        setButtonText("Sorry, an error occurred");
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setButtonText("Sorry, an error occurred");
      setIsSubmitting(false);
    } finally {
      // After 3 seconds, reset the button text to "Submit form"
      setIsSubmitting(false); // Enable the button again

      setTimeout(() => {
        setButtonText("Apply to speak");
      }, 5000);
    }
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
            <div className={styles.form__forms}>
              {firstSix.map((data, i) => (
                <FormInput
                  data={data}
                  key={`fs${i}`}
                  isSubmitting={isSubmitting}
                />
              ))}
            </div>
            <FormInput
              data={textArea}
              key="text-area"
              isSubmitting={isSubmitting}
            />
            <div className={styles.form__forms}>
              {lastTwo.map((data, i) => (
                <FormInput
                  data={data}
                  key={`lt${i}`}
                  isSubmitting={isSubmitting}
                />
              ))}
            </div>
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
                To keep you informed about the latest updates on ILID 2025,
                please agree to receive information about our events by ticking
                this box.
              </span>
            </div>
            {tickError && (
              <span className={styles.checkbox__error}>
                Please check this box to receive event updates.
              </span>
            )}
          </div>
        </div>
        <button
          className={styles.submit}
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
        >
          <span>{buttonText}</span>
          {isSubmitting && (
            <div className={styles.sub__right}>
              <span className={styles.spinner}></span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default FormWrapper;