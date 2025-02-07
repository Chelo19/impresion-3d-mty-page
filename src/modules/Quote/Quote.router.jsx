import { Route, Routes } from "react-router-dom";
import { Quote } from "./pages/Quote.page";

export const QuoteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Quote />} />
    </Routes>
  );
};
