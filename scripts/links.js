const baseURL = "https://noah-2299.github.io/wdd230/";
const linksURL = "https://noah-2299.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();