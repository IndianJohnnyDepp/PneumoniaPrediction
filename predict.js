const $file = document.querySelector(".local");
$file.addEventListener("change", (event) => {
    const selectedfile = event.target.files;
    if (selectedfile.length > 0) {
      const [imageFile] = selectedfile;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const srcData = fileReader.result;
        // console.log('base64:', srcData)
      };
      fileReader.readAsDataURL(imageFile);
    }
  });

import axios from 'axios'
const requestToAWS=axios({
   method: 'post',
   url: ' https://i4s4lnf9bb.execute-api.eu-central-1.amazonaws.com/allowed_ip/predict-pneumonia',
   headers: {'Content-type': 'application/x-image'},
   data:srcdata})
  .then((resp) => {
    return resp.data;
  }).catch(err => {
  console.log('Error', err);
  });

  const respFromAWS = await requestToAWS;
  return res.json({ message: respFromAWS});

   } catch (err) {
  console.log(err)}
};
