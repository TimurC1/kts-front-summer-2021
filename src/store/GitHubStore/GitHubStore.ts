import ApiStore from '../../shared/store/ApiStore';
import {ApiResp, GetOrganizationReposListParams, IGitHubStore, RepoItem} from "./types";
import {ApiResponse, HTTPMethod} from "../../shared/store/ApiStore/types";

export default class GitHubStore implements IGitHubStore {
    readonly baseUrl: string = 'https://api.github.com';
    private readonly apiStore = new ApiStore(this.baseUrl);

    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {
        return await this.apiStore.request({
            method: HTTPMethod.GET,
            data: {},
            headers: {},
            endpoint: `/orgs/${params.organizationName}/repos`
        })
    }
}
