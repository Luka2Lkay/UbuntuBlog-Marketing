import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from "@/app/RootLayout"

import NotFound from "@/components/ui/NotFound"

export const router = createBrowserRouter(createRoutesFromElements(<Route element={<RootLayout />}><Route element={<NotFound />} path="*" /></Route>))