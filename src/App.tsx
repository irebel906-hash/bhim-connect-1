/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./components/layouts/AppLayout";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import News from "./pages/News";
import Matrimonial from "./pages/Matrimonial";
import Jobs from "./pages/Jobs";
import Books from "./pages/Books";
import Placeholder from "./pages/Placeholder";
import Business from "./pages/Business";
import Schemes from "./pages/Schemes";
import Help from "./pages/Help";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        
        <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/matrimonial" element={<Matrimonial />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/books" element={<Books />} />
            <Route path="/business" element={<Business />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Placeholder title="My Profile" />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
