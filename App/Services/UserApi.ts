import apisauce from 'apisauce'
import ApiConfig from '../Config/ApiConfig'

const baseURL = ApiConfig.baseURL + '/'
const create = () => {
  const api = apisauce.create({
    baseURL,
    headers: ApiConfig.headers,
    timeout: ApiConfig.timeOut
  })

  const signUp = (authData: any) => {
    return api.post('auth/signup', { firstName: 'Hoa', lastName: 'Nhu',...authData })
  }

  const getCategories = () => {
    return api.get('categories?pageSize=100&pageNumber=0')
  }

  return {
    getCategories,
    signUp
  }
}

export default { create }
