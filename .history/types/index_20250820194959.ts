// Reference to another document (e.g. a category)
export interface Category {
  nameen: string;
  namefr: string;
  slug: {
    current: string;
  };
  _id: string;
}

// Complete post interface
export interface BlogPost {
  _id: string;
  categories: Category[];
  image: {
    alt: string;
  };
  publishedAt: string;
  slug: {
    current: string;
  };
  titleen: string;
  titlefr: string;
}

export interface Property {
  _id: string;
  mainimage: {
    alt: string;
  };
  slug: {
    current: string;
  };
  location: string;
  reference: string;
  titleen: string;
  titlefr: string;
}