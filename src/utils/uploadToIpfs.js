const JWT = `Bearer ${process.env.NEXT_PUBLIC_JWT}`;
import axios from "axios";
export const uploadFileToIPFS = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  //   const metadata = JSON.stringify({
  //     name: name,
  //   });
  //   formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", options);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT,
        },
      }
    );
    console.log("pin res issss", res.data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
