// // utils/formatDate.ts
// export type FormatDateOptions = Intl.DateTimeFormatOptions;

// const formatterCache = new Map<string, Intl.DateTimeFormat>();

// function getFormatter(locale: string, options?: FormatDateOptions) {
//   const key = `${locale}:${JSON.stringify(options || {})}`;
//   if (!formatterCache.has(key)) {
//     formatterCache.set(key, new Intl.DateTimeFormat(locale, options));
//   }
//   return formatterCache.get(key)!;
// }

// /**
//  * Format a date (Date | ISO string | epoch number) into a localized string.
//  * Returns an empty string for invalid or missing values.
//  */
// export function formatDate(
//   input: Date | string | number | null | undefined,
//   locale = "en-US",
//   options: FormatDateOptions = { year: "numeric", month: "long", day: "numeric" }
// ): string {
//   if (input == null || input === "") return "";

//   const date = input instanceof Date ? input : new Date(input as string | number);

//   if (Number.isNaN(date.getTime())) return ""; // invalid date

//   try {
//     const formatter = getFormatter(locale, options);
//     return formatter.format(date);
//   } catch (err) {
//     // fallback: toLocaleDateString
//     try {
//       return date.toLocaleDateString(locale, options);
//     } catch {
//       return date.toDateString();
//     }
//   }
// }

// export default formatDate;
// utils/formatDate.js
const formatterCache = new Map();

function getFormatter(locale, options) {
  const key = `${locale}:${JSON.stringify(options || {})}`;
  if (!formatterCache.has(key)) {
    formatterCache.set(key, new Intl.DateTimeFormat(locale, options));
  }
  return formatterCache.get(key);
}

function capitalizeFirstChar(str, locale) {
  if (!str) return str;
  return str[0].toLocaleUpperCase(locale) + str.slice(1);
}

export function formatDate(
  input,
  locale = "en-US",
  options = { year: "numeric", month: "long", day: "numeric" }
) {
  if (input == null || input === "") return "";

  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return "";

  try {
    const formatter = getFormatter(locale, options);

    // Prefer formatToParts to identify the month part and capitalize it only
    if (typeof formatter.formatToParts === "function") {
      const parts = formatter.formatToParts(date);
      const newParts = parts.map((p) => {
        if (p.type === "month") {
          return { ...p, value: capitalizeFirstChar(p.value, locale) };
        }
        return p;
      });
      return newParts.map((p) => p.value).join("");
    }

    // Fallback: full formatted string, then capitalize the first alphabetical word
    const formatted = formatter.format(date);
    return formatted.replace(
      /(\p{L}[\p{L}\p{M}]*)/u,
      (match) => capitalizeFirstChar(match, locale)
    );
  } catch (err) {
    try {
      // graceful fallback
      return date.toLocaleDateString(locale, options);
    } catch {
      return date.toDateString();
    }
  }
}

export default formatDate;
