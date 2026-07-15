import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <MainLayout>
      <Home />
      <Analytics />
      <SpeedInsights />
    </MainLayout>
  );
}
