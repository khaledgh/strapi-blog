interface Tag {
  id: number;
  attributes: {
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface TagResponse {
  data: Tag[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface Category {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface CategoriesResponse {
  data: Category[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

interface Image {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any; // You might want to define a specific type for this
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface Article {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Title: string;
    Text: string;
    slug: string;
    Image: Image;
    category: {
      data: Category;
    };
    tags: {
      data: Tag[];
    };
  };
}

interface ArticlesResponse {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
