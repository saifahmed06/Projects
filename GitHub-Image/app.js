import readline from "readline-sync";
import axios from "axios";
import fs from "fs";
let main = () => {
  var image;
  let userName = readline.question("Enter Github UserName : ");
  console.log(userName);
  axios
    .get(`https://api.github.com/users/${userName}`)
    .then((res) => {
      console.log(res.data.avatar_url);
      image = res.data.avatar_url;
      axios.get(image, { responseType: "stream" }).then((res) => {
        console.log(image);

        res.data.pipe(fs.createWriteStream(`imagesssss.png`));
      });
    })
    .catch((error) => {
      console.log("I am Error", error);
    });
};
main();
