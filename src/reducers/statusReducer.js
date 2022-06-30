export const initialState = {
     loading: false,
     error: ""
}

export const reducer = (status, action) => {
     switch (action.type) {
          case "SUCCESS":
               return {
                    loading: action.loading,
                    error: ""
               }
          case "FAIL":
               return {
                    loading: true,
                    error: action.error
               }
          default: return status;
     }
}