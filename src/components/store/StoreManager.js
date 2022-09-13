const remoteURL = "http://localhost:8000"

export const getAllStores = () => {
    return fetch(`${remoteURL}/stores`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`  
        }
    })
    .then(res => res.json())
  }

export const getStoreById = (storeId) => {
  //be sure your stores have good data and related to a location and customer
  return fetch(`${remoteURL}/stores/${storeId}`)
  .then(res => res.json())
}








export const deleteStore = (id) => {
    return fetch(`${remoteURL}/stores/${id}`, { 
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("insight_token")}`
        },
        body: JSON.stringify(id)
    })
}