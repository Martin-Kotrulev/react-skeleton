import Http from '../Http'

const baseUrl = '/pets'

class PetData {
  static createPet (pet) {
    return Http.post(`${baseUrl}/create`, pet, true)
  }

  static all (page) {
    page = page || 1
    return Http.get(`${baseUrl}/all?page=${page}`, true)
  }
}

export default PetData
