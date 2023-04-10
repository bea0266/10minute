import { useMenuStore } from "@/store/menu";
export function changeRouterView(router, viewName) {
    router.push(viewName)
}
