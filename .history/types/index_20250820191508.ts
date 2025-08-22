// Reference to another document (e.g. a category)
export interface Category {
  nameen: string;
  namefr: string;
  slug: {
    current: string;
  };
  _id: string;
}
// Asset pointer for an image
interface ImageAsset {
  _ref: string
  _type: "reference"
}

// Image field with alt text and Sanity asset
interface SanityImage {
  _type: "image"
  alt: string
  asset: ImageAsset
}

// Slug object
interface Slug {
  _type: "slug"
  current: string
}

// Complete post interface
interface BlogPost {
  _id: string
  categories: Reference[]
  image: SanityImage
  publishedAt: string            // ISO timestamp
  slug: Slug
  titleen: string
  titlefr: string
}
