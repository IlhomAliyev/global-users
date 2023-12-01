export const mockUser = {
  id: "1",
  name: "Alex",
  username: "alex",
  email: "alex@mail.com",
  address: "New York",
  phone: "1234567",
  website: "website.com",
  company: "CompanyName",
};

export const mockAddress = {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  geo: {
    lat: "-37.3159",
    lng: "81.1496",
  },
};

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IAddress;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
