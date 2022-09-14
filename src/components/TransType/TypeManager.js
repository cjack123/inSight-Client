const remoteURL = "http://localhost:8000"

export const getAllTypes = () => {
    return fetch(`${remoteURL}/types`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`  
        }
    })
    .then(res => res.json())
  }

export const getTypeById = (typeId) => {
  //be sure your types have good data and related to a location and customer
  return fetch(`${remoteURL}/types/${typeId}`)
  .then(res => res.json())
}