import { ProductItem } from "../type/product";

interface State {
  products: ProductItem[];
  skip: number;
  loading: boolean;
  limit: number;
  count: number;
}

type ActionType =
  | { type: "count-increment" }
  | { type: "load-more"; payload: ProductItem[] };

export function productReducer(state: State, action: ActionType) {
  switch (action.type) {
    case "count-increment": {
      return { ...state, count: state.count + 1 };
    }
    case "load-more": {
      const { payload } = action;
      return {
        ...state,
        skip: state.skip + 10,
        products: [...state.products, ...payload],
      };
    }
    default:
      return state;
  }
}
