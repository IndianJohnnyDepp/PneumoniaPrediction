const $file = document.querySelector(".local");
$file.addEventListener("change", (event) => {
    const selectedfile = event.target.files;
    if (selectedfile.length > 0) {
      const [imageFile] = selectedfile;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const srcData = fileReader.result;
        console.log('base64:', srcData)
      };
      fileReader.readAsDataURL(imageFile);
    }
  });
