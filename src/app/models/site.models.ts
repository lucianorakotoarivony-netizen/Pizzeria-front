export interface Home{
    site_name: string;
    chief_name: string;
    tagline: string;
    availability: string;
    primary_color: string;
}

export interface Service{
    id: number;
    name : string;
    price: number;
    description: number;
    is_on_quote: boolean;
    icon: string;
}

export interface Contact{
    phone: string;
    email: string;
}

export interface Product{
    id: number;
    name:string;
    category: string;
    description: string;
    is_on_quote: boolean;
    ingredients: string;
    price: number;
    image: string;
    size: number;
    sauce: string;
    other: string;
}

export interface Category{
    id: number;
    name:string;
    product: string;
}

export interface About{
    title: string;
    content: string;
    image: string;
}