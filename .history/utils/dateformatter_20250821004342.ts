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




