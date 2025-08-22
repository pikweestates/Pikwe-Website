// import React from "react";
// import { PortableText } from "next-sanity";
// import LinkButton from "../ReUsables/LinkButton";
// import { urlFor } from "@/sanity/lib/image";
// import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
// import { useTranslation } from "react-i18next";
// import styles from "../../styles/ReUsables/blogcopy.module.scss";
// import { TypedObject } from "sanity";

// const BlogCopy = ({ content }: { content: TypedObject | TypedObject[] }) => {
//   const { i18n } = useTranslation();
//   const currentLocale = i18n.language;

//   const myPortableTextComponents = {
//     types: {
//       image: ({
//         value,
//       }: {
//         value: {
//           aspectRatio: string;
//           alt: string;
//         };
//       }) => (
//         <div
//           className={styles.portableImage}
//           style={{ aspectRatio: value.aspectRatio }}
//         >
//           <ImagePlaceholder src={urlFor(value).url()} alt={value.alt} />
//         </div>
//       ),
//     },
//     marks: {
//       button: ({
//         value,
//       }: {
//         value: { label: string; url: string; labelfr: string };
//       }) => {
//         const mainButtonData = {
//           text: `${currentLocale === "en" ? value.label : value.labelfr}`,
//           href: `${value.url}`,
//         };

//         return <LinkButton target="_blank" linkData={mainButtonData} />;
//       },
//     },
//   };

//   return (
//     <div className={`section ${styles.bc__section}`}>
//       <div className={`container ${styles.bc__container}`}>
//         <div className={styles.bc__main}>
//           <PortableText value={content} components={myPortableTextComponents} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCopy;
import React from "react";
import { PortableText } from "next-sanity";
import LinkButton from "../ReUsables/LinkButton";
import { urlFor } from "@/sanity/lib/image";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/blogcopy.module.scss";

// import types from @portabletext/react
import type {
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import type { TypedObject } from "sanity";

type ButtonValue = {
  label?: string;
  url?: string;
  labelfr?: string;
};

const BlogCopy = ({ content }: { content: any }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  // Properly typed components object
  const myPortableTextComponents: Partial<PortableTextReactComponents> = {
    types: {
      // image block renderer — accept full props and guard value
      image: ({ value }: { value?: any }) => {
        if (!value) return null;
        const aspect = value.aspectRatio ?? undefined;
        const alt = value.alt ?? "";
        const src = urlFor(value).url();
        return (
          <div
            className={styles.portableImage}
            style={aspect ? { aspectRatio: aspect } : undefined}
          >
            <ImagePlaceholder src={src} alt={alt} />
          </div>
        );
      },
    },
    marks: {
      // button mark renderer — typed with PortableTextMarkComponentProps
      button: (({ children, value }: PortableTextMarkComponentProps<ButtonValue>) => {
        // Guard against missing annotation data
        const url = value?.url ?? "#";
        const text =
          currentLocale === "en"
            ? value?.label ?? (typeof children === "string" ? children : "Click")
            : value?.labelfr ?? (typeof children === "string" ? children : "Cliquez");

        const mainButtonData = {
          text,
          href: url,
        };

        return <LinkButton target="_blank" linkData={mainButtonData} />;
      }) as PortableTextReactComponents["marks"] extends Record<string, infer U> ? U : any,
    },
  };

  return (
    <div className={`section ${styles.bc__section}`}>
      <div className={`container ${styles.bc__container}`}>
        <div className={styles.bc__main}>
          <PortableText value={content} components={myPortableTextComponents} />
        </div>
      </div>
    </div>
  );
};

export default BlogCopy;

