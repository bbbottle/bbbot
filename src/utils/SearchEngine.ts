import { getEnv } from "../runtime";

export class SearchEngine {
    private static extractFirstResult(items: Array<{ link?: string }>): string {
        return items[0]?.link ?? "";
    }

    public static async searchMovie(query: string): Promise<string> {
        return this.search(`^${query} site:m.douban.com/movie/subject`);
    }

    public static async search(query: string): Promise<string> {
        const key = getEnv("GOOGLE_SEARCH_API_KEY");
        const cx = getEnv("GOOGLE_SEARCH_ENGINE_ID");
        if (!key || !cx) {
            throw new Error("Google search config missing");
        }

        const url = new URL("https://www.googleapis.com/customsearch/v1");
        url.searchParams.set("key", key);
        url.searchParams.set("cx", cx);
        url.searchParams.set("q", query);

        const res = await fetch(url.toString());
        const data = (await res.json()) as { items?: Array<{ link?: string }> };

        if (!data.items || data.items.length === 0) {
            console.log("No result found for", query);
            return "";
        }

        return this.extractFirstResult(data.items);
    }
}
