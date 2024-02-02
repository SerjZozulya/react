import { useMemo } from "react";

export const useSortedPosts = (posts, sorting) => {
    function getSortedPosts() {
        return [...posts].sort((a, b) =>
          sorting === "id"
            ? a.id < b.id
              ? 1
              : -1
            : a.completed > b.completed
            ? 1
            : -1
        );
      }

    return useMemo(getSortedPosts, [posts, sorting]);
}

export const usePosts = (posts, sorting, search) => {
    const sortedPosts = useSortedPosts(posts, sorting)
    return useMemo(
        () => sortedPosts.filter((post) => post.todo.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        [search, sortedPosts]
      );
}