import Axios from "../services/Axios";

export const MountCheckFetch = async (cancelToken, url, auth) => {
    if (auth === 'auth') {
        try {
            const { data } = await 
            Axios.authInstance.get(url, {
              cancelToken: cancelToken,
            })
            return data;
          } catch (error) {
            throw error;
          }
    } else {
        try {
            const response = await 
            Axios.instance.get(url, {
              cancelToken: cancelToken,
            })
            if (response && response.data) {
              return response.data
            } else {
              return null
            }
          } catch (error) {
            throw error;
          }
    }
    
}