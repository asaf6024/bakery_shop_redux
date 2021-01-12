import {buyCake, removeCake} from './cake/cakeActions'
import {buyIceCream, removeIceCream} from './iceCream/iceCreamActions'
import { fetchUsers  } from "./user/userActions";

export const actionCreators = {
    cakes: {
        buyCake: buyCake,
        removeCake: removeCake
    },
    iceCream: {
        buyIceCream: buyIceCream,
        removeIceCream: removeIceCream
    },
    fetchUsers: fetchUsers
}

export * from './user/userActions'