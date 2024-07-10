import { configureStore } from "@reduxjs/toolkit";
import WishlistSlice from "./WishlistSlice";
import Ctravleniya from "./Ctravleniya";
import CardSlice from "./CardSlice";

const Store = configureStore({
  reducer: {
    like: WishlistSlice,
    strav:Ctravleniya,
    cart:CardSlice
  },
});

export default Store;
