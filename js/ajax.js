// (() => {
//     const xhr = new XMLHttpRequest(),
//         $xhr = document.getElementById("xhr"),
//         $fragment = document.createDocumentFragment();

//         xhr.addEventListener("readystatechange", e => {
//             if(xhr.readyState !== 4) return;

//             console.log(xhr);
            
//             if(xhr.status >= 200 && xhr.status < 300) {
//                 console.log("éxito");
//             console.log(xhr.responseText);
//             let json = JSON.parse(xhr.responseText)
//             // console.log(json);

//             json.forEach((el) =>{
//             const $li = document.createElement("li");
//             $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;
//             $fragment.appendChild($li);
//             });

//                 $xhr.appendChild($fragment);

//             } else {
//                 console.log("érror");
//                 let message = xhr.statusText || "Ocurrió un error";
//                 $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
//             }
//             console.log("Este mensaje cargara de cualquier forma    ");
//         });

//         xhr.open("GET","https://jsonplaceholder.typicode.com/users");

//         xhr.send();
// })();


// (() => {
//     const $fetch = document.getElementById("fetch"),
//         $fragment = document.createDocumentFragment();

//     fetch("https://jsonplaceholder.typicode.com/users")
//     // .then( res => {
//     //     console.log(res);
//     //     return res.ok ? res.json(): Promise.reject(res);
//     // })

//     .then((res) => res.ok ? res.json(): Promise.reject(res))
//     .then(json => {
//         console.log(json);
//         json.forEach((el) =>{
//             const $li = document.createElement("li");
//             $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;
//             $fragment.appendChild($li);
//         });
        
//         $fetch.appendChild($fragment);
//     })
//     .catch(err => {
//         console.log("Estamos en el catch", err);
//         let message = err.statusText || "Ocurrió un error";
//         $fetch.innerHTML = `Error ${err.status}: ${message}`;
//     })
//     .finally(() =>console.log("Esto se ejecutara sea cual sea el resultado de la promesa fetch"));
// })();


(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
        let res = await fetch("https://jsonplacaeholder.typicode.com/users"),
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
})();


// (() => {
//     const $axios = document.getElementById("axios   "),
//         $fragment = document.createDocumentFragment();

//     axios
//     .get("https://jsonplaceholdaer.typicode.com/users")
//     .then((res) => {
//         console.log(res);
//         let json = res.data;

//         json.forEach((el) =>{
//         const $li = document.createElement("li");
//         $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;
//         $fragment.appendChild($li);
//         });

//         $axios.appendChild($fragment);

//     }) 
//     .cath((err) => {
//         console.log(err.response);
//         let message = err.response.statusText || "Ocurrio un error";
//         $axios.innerHTML = `Error ${err.response.status}: ${message}`;
//     })
//     .finally(() => {
//         console.log("Esto se ejecutara si o si");
//     });
// })();



(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;

            // console.log(res,json);

            json.forEach((el) =>{
                const $li = document.createElement("li");
                $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
    
            $axiosAsync.appendChild($fragment);
            
        } catch (err) {
            // console.log(err.response);
            let message = err.response.statusText || "ocurrio un error";
            $axiosAsync.innerHTML = `Error ${err.response.statusText}: ${message}`;
        } finally {
            console.log("Esto se ejecutara de todas formas");
        }
    }

    getData();
})();