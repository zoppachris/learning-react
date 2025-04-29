export interface NavigationItem {
  name: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "Product Reducer", path: "/product-reducer" },
  { name: "Product Redux", path: "/product-redux" },
];

export const setting: string[] = ["Profile", "Account", "Dashboard", "Logout"];

export const BigArray = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});
