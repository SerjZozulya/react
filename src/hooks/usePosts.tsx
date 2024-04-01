import { useMemo } from "react";
import { ITask } from "../models/ITask";

export const useSortedPosts = (posts: [ITask], sorting: string) => {
    function getSortedPosts() {
        return [...posts].sort((a, b) =>
          sorting === "id"
            ? a.id < b.id
              ? 1
              : -1
            : a.status > b.status
            ? 1
            : -1
        );
      }

    return useMemo(getSortedPosts, [posts, sorting]);
}

export const usePosts = (posts:[ITask], sorting:string, search:string) => {
    const sortedPosts = useSortedPosts(posts, sorting)
    return useMemo(
        () => sortedPosts.filter((post) => post.summary.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        [search, sortedPosts]
      );
}