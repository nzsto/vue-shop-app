export  default {
    mutationsDetails(state,params){
        state.detailsList = params;
        state.detailsNowLoading=false
    }
}