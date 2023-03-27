export interface Project {
  project: {
    _id: string;
    title: string;
    description: string;
    slug: {
      current: string;
    };
    image: {
      asset: {
        _ref: string;
      };
    };
  };
}

export type CategoryFetch = Array<{
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
    };
  };
}>;

interface Category {
  category: {
    _id: string;
    description: string;
    shortDescription: string;
    title: string;
    slug: {
      current: string;
    };
  };
}

export interface Params {
  params: {
    slug: string;
  };
}
