import { useMemo } from "react";
import { fetchUtils } from "ra-core";
import { useLocalStorage } from "react-use";

export const useHttpClient = () => {
    const [accessToken] = useLocalStorage("access_token", "");
    const httpClient = useMemo(
        () =>
        async (url: string, options: any = {}) => {
            if (!options.headers) {
                options.headers = new Headers({
                    Accept: "application/json"
                })
            }
                options.headers.set("Authoriation", `Bearer ${accessToken}`)
                return fetchUtils.fetchJson(url, options)
            },
        [accessToken]
    )
    return { httpClient, baseUrl: "http://localhost:8081" }
}