let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerHTML = `<h2><b>${fact}</b></h2>`;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log(e);
        return "No fact was found!";
    }
}