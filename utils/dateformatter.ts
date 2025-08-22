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


// utils/formatDate.ts
const formatterCache = new Map<string, Intl.DateTimeFormat>();

function getFormatter(
  locale: string,
  options?: Intl.DateTimeFormatOptions
): Intl.DateTimeFormat {
  const key = `${locale}:${JSON.stringify(options ?? {})}`;
  if (!formatterCache.has(key)) {
    formatterCache.set(key, new Intl.DateTimeFormat(locale, options));
  }
  return formatterCache.get(key)!;
}

function capitalizeFirstChar(str: string, locale?: string): string {
  if (!str) return str;
  // use toLocaleUpperCase for accented letters
  const first = str.charAt(0).toLocaleUpperCase(locale ?? "en-US");
  return first + str.slice(1);
}

/**
 * Format a date and ensure the month token (if present) has a capital first letter.
 * Returns empty string for invalid / empty inputs.
 */
export default function formatDate(
  input?: string | number | Date | null,
  locale = "en-US",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  if (input == null || input === "") return "";

  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return "";

  try {
    const formatter = getFormatter(locale, options);

    // Best approach: use formatToParts to find the "month" part
    if (typeof formatter.formatToParts === "function") {
      const parts = formatter.formatToParts(date); // Intl.DateTimeFormatPart[]
      const newParts = parts.map((p) =>
        p.type === "month" ? { ...p, value: capitalizeFirstChar(p.value, locale) } : p
      );
      return newParts.map((p) => p.value).join("");
    }

    // Fallback: capitalize the first alphabetical token (safe but less precise)
    const formatted = formatter.format(date);
    // simple fallback: capitalize the first character (works for many locales)
    return capitalizeFirstChar(formatted, locale);
  } catch (err) {
    // final fallback
    try {
      return date.toLocaleDateString(locale, options);
    } catch {
      return date.toDateString();
    }
  }
}




