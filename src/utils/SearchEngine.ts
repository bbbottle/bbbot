import { customsearch_v1, Common } from 'googleapis';
import Schema$Search = customsearch_v1.Schema$Search;

type CustomSearch = customsearch_v1.Customsearch;
type CustomSearchResult = Common.GaxiosResponse<Schema$Search>;

export class SearchEngine {
    private static Init() {
        SearchEngine.Engine = new customsearch_v1.Customsearch({
            auth: process.env.GOOGLE_SEARCH_API_KEY,
        });
    }

    public constructor() {
        SearchEngine.Init();
    }

    public static GetInstance(): CustomSearch {
        if (!SearchEngine.Engine) {
            SearchEngine.Init();
        }

        return SearchEngine.Engine;
    }

    private static Engine: CustomSearch;

    private static extractFirstResult(res: CustomSearchResult): string {
        return res.data.items![0].link!;
    }

    public static async searchMovie(query: string): Promise<string> {
        return this.search(`^${query} site:m.douban.com/movie/subject`);
    }

    public static async search(query: string): Promise<string> {
        const res = await this.GetInstance().cse.list({
            q: query,
            cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
        });

        if (!res.data.items) {
            console.log("No result found for", query);
            return "";
        }

        return this.extractFirstResult(res);
    }
}
