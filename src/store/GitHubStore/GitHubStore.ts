import ApiStore from '../../shared/store/ApiStore';
import {IGitHubStore, GetOrganizationReposListParams, RepoItem, ApiResp} from "./types";
import {RequestParams, HTTPMethod} from "../../shared/store/ApiStore/types";

export default class GitHubStore implements IGitHubStore {
    readonly baseUrl: string = 'https://api.github.com/';
    private readonly apiStore = new ApiStore(this.baseUrl);

    async getOrganizationReposList(listParams: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
        const params: RequestParams<{}> = {
            endpoint: `orgs/${listParams.organizationName}/repos`,
            method: HTTPMethod.GET,
            headers: {},
            data: {}
        }
        return this.apiStore.request<RepoItem[], any>(params);
    }
}
