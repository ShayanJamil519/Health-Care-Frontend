const JWT = `Bearer ${process.env.NEXT_PUBLIC_JWT}`;
import axios from "axios";

export const uploadMetadata = async ({
  name,
  description,
  external_url,
  image,
}) => {
  try {
    const data = JSON.stringify({
      pinataContent: {
        name: name, // Use the 'name' provided
        description: description,
        external_url: external_url,
        image: `ipfs://${image}`, // Use the 'imageUri' directly
      },
      pinataMetadata: {
        name: name, // Use the 'name' provided
      },
    });

    const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: JWT,
      },
      body: data,
    });
    const resData = await res.json();
    console.log("Metadata uploaded, CID:", resData.IpfsHash);

    return resData.IpfsHash;
  } catch (error) {
    console.log(error);
  }
};

export const uploadFileToIPFS = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

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
