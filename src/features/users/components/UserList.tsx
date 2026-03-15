import { FlatList } from "react-native";
import { User } from "../types/User"
import UserListItem from "./UserListItem";

type UserListProps = {
    users: User[]
    favorites?: number[]
    onToggleFavorite?: (user: User) => void
}

export default function UserList({ 
    users, 
    favorites = [], 
    onToggleFavorite,
}: UserListProps) {
    return (
        <FlatList 
            data={users} 
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({item}) => (
                <UserListItem
                    user={item}
                    isFavorite={favorites?.length ? favorites.includes(item.id) : false}
                    onToggleFavorite={onToggleFavorite}
                />
            )}
        />
    )
}