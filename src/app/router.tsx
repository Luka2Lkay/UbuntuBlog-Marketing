import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from "@/app/RootLayout"

import { Home } from "@/features/home"
import NotFound from "@/components/ui/NotFound"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route element={<NotFound />} path="*" />
        </Route>))