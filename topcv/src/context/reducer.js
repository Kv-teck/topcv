export const ACTION = {
    UPDATE_CART: "update_cart",
    SHOW_LOADING: "show_loading",
    HIDE_LOADING: "hide_loading",
    SET_USERNAME: "set_username",
    SET_USER: "set_user", // Thêm action mới để cập nhật user
};

const updateLocalStorage = (state) => {
    localStorage.setItem("state", JSON.stringify(state));
    return state;
};

const reducer = (state, action) => {
    switch(action.type) {
        case ACTION.UPDATE_CART: 
            return updateLocalStorage({...state, cart: action.payload});
        case ACTION.SHOW_LOADING: 
            return updateLocalStorage({...state, isLoading: true});
        case ACTION.HIDE_LOADING: 
            return updateLocalStorage({...state, isLoading: false});
        case ACTION.SET_USERNAME: 
            return updateLocalStorage({...state, username: action.payload});
        case ACTION.SET_USER: // Xử lý action để cập nhật user
            return updateLocalStorage({...state, user: action.payload});
        default: 
            return state;
    }
};

export default reducer;
