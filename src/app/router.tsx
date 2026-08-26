import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import RootLayout from "@/app/RootLayout"
import DocumentationLayout from "@/app/DocumentationLayout"

import { Home } from "@/features/home"
import { Documentation } from "@/features/documentation"
import NotFound from "@/components/ui/NotFound"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>

            <Route element={<DocumentationLayout />}>
                <Route element={<Documentation />} path="/documentation" />
            </Route>
            <Route element={<NotFound />} path="*" />
        </>
    ))