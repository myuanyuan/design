// 实例 redux 只有一个state

function createStore(){
    let state;
    let listeners =[];
    function subscribe(listener){
        listeners.push(listener);
    }
    function getState(){
        return state;
    }
    function dispatch(){
        state = reducer(state, action)
    }
    return {
        subscribe,
        getState,
        dispatch
    }
}

let reducer = function(){

}

let store = createStore(reducer);