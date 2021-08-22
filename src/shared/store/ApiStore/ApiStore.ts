import {ApiResponse, IApiStore, RequestParams} from "./types";

export default class ApiStore implements IApiStore {
    readonly baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        return fetch(this.baseUrl + params.endpoint, {
            method: params.method,
            headers: params.headers,
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
    }
}