export interface NavigationItem {
  name: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "About", path: "/about" },
];

export const setting: string[] = ["Profile", "Account", "Dashboard", "Logout"];
