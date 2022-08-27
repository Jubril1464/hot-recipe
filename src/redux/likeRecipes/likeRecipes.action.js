import LikeRecipesTypes from "./likeRecipesType";
export const addLike = (item) => {
    return {
        type: LikeRecipesTypes.ADD_TO_LIKES,
        payload: item

    }
}