import Friend from "./Friend"


function FriendsList({ friends, onSelection, selectedFriend }) {

    return (
        <ul>
            {friends.map(friend => <Friend onSelection={onSelection} friend={friend} key={friend.id} selectedFriend={selectedFriend} />)}
        </ul>
    )
}

export default FriendsList