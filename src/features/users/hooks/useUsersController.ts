import { useEffect, useState } from "react"
import { useSearchUsers, useUsers } from "./useUsers"

export function useUsersController () {
    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
        setDebouncedSearch(search)
        }, 500)

        return () => clearTimeout(timer)
    }, [search])

    const usersQuery = useUsers()
    const searchQuery = useSearchUsers(debouncedSearch)

    const isSearching = debouncedSearch.length > 2

    const query = isSearching ? searchQuery : usersQuery

    const users = query.data?.pages.flat() ?? []

    return {
        search,
        setSearch,
        users,
        isLoading: query.isLoading,
        fetchNextPage: query.fetchNextPage,
        hasNextPage: query.hasNextPage,
    }
}