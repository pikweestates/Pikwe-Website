// Reference to another document (e.g. a category)
export interface Category {
  nameen: string;
  namefr: string;
  slug: {
    current: string;
  };
  _id: string;
}

// Image field with alt text and Sanity asset
interface SanityImage {
  _type: "image"
  alt: string
  asset: ImageAsset
}


// Complete post interface
interface BlogPost {
  _id: string
  categories: Category[]
  image: {
    alt: string;
  };
  publishedAt: string            // ISO timestamp
  slug: {
    current: string;
  };
  titleen: string
  titlefr: string
}
