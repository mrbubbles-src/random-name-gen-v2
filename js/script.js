let nameList = [
    "Anton",
    "Ali",
    "Avraz",
    "Boris",
    "Catalina",
    "Charbel",
    "Dave",
    "Jacqueline",
    "Jan",
    "Katharina",
    "Lina",
    "Lukasz",
    "Manuel",
    "Manuella",
    "Marie",
    "Metin",
    "Mohammed (Hamode)",
    "Muhammed (MoMo)",
    "Nancy",
    "Onur",
    "Osmel",
    "Rocco",
    "Youssef",
];
let name = () => {
    let name = Math.trunc(Math.random() * nameList.length);
    document.getElementById("message").innerHTML = nameList[name];
    // console.log(nameList[name]);
    nameList = nameList.filter((el) => el !== nameList[name]);
    // document.getElementById("names").innerHTML = nameList;
    console.log(nameList);
    if (nameList.length === 0) {
        document.querySelector('#do-the-generate').style.display = 'none';
    }
};
let btn = document.getElementById("do-the-generate");
btn.addEventListener("click", name);
