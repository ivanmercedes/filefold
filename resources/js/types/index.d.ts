export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type Groups = Group[]

export interface Group {
  id: number
  name: string
  description: any
  slug: string
  parent_id: any
  created_at: string
  updated_at: string
  custom_url: any
  target_blank: any
  is_custom_url: number
  is_custom_page: number
  image: any
  content?: Content[]
  children: Children[]
}

export interface Content {
  data: Data
  type: string
}

export interface Data {
  level?: string
  content?: string
  rich_text?: string
  alt?: string
  url?: string
}

export interface Children {
  id: number
  name: string
  description: any
  slug: string
  parent_id: number
  created_at: string
  updated_at: string
  custom_url?: boolean
  target_blank?: number
  is_custom_url: number
  is_custom_page: number
  image: any
  content: any
}


export interface Page {
    id: number;
    name: string;
    description: any;
    slug: string;
    parent_id: any;
    created_at: string;
    updated_at: string;
    custom_url: any;
    target_blank: any;
    is_custom_url: number;
    is_custom_page: number;
    image: any;
    content: Content[];
}

export interface Content {
    data: Data;
    type: string;
}

export interface Data {
    level?: string;
    content?: string;
    rich_text?: string;
    alt?: string;
    url?: string;
}
