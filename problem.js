document.getElementById("btn").addEventListener("click", data);


function data() {
  const $fetchAsync = document.getElementById("authors"),
      $fragment = document.createDocumentFragment();

  async function getData() {
      try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();

      console.log(res, json);

      // if(!res.ok) throw new Error("Ocurrio un error");
      if(!res.ok) throw { status: res.status, statusText: res.statusText}


      json.forEach((el) =>{
          const $li = document.createElement("li");
          $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);

      }catch(err) {
          console.log(err);
          let message = err.statusText || "Ocurrio un error";
          $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
      }finally {
          console.log("Si o si se ejecutara del try catch");
      }
  }

  getData();  
};