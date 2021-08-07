const FetchData = async(url) => {
    try{
    const response =  await fetch(url);
    if(!response.ok){
        throw new Error("Something is wrong")
    }
    const data =  await response.json();
  return data;
    }
    catch(error){
        const errormsg = error.message;
        return errormsg
    }
    
}

export default FetchData;