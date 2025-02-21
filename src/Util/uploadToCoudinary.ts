// export const uploadToCoudinary = async(pics:any) =>{
//     const cloud_name = "dgxlsc5tuss";
//     const upload_preset = "datshopsss";

//     if(pics){
//         const data = new FormData();
//         data.append("file", pics);
//         data.append("upload_preset", upload_preset);
//         data.append("cloud_name", cloud_name);
//         // https://api.cloudinary.com/v1_1/<cloud name>/<resource_type>/upload
//         const res = await fetch("https://api.cloudinary.com/v1_1/dgxlsc5tu/upload",{
//             method: "POST",
//             body:data
//         })

//         const fileData = await res.json();
//         return fileData.url;
//     }else{
//         console.log("Error: pics not found");
//     }
// }

export const uploadToCloudinary = async (file: any) => {
    const cloud_name = "dgxlsc5tu";
    const upload_preset = "datshop";
  
    if (!file) {
      console.error("Error: file not provided");
      return;
    }
  
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);
  
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, {
        method: "POST",
        body: data,
      });
      const fileData = await res.json();
      if (fileData.error) {
        console.error("Cloudinary error:", fileData.error);
        throw new Error(fileData.error.message);
      }
      return fileData.url;
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };