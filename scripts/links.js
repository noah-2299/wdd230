const baseURL = "https://noah-2299.github.io/wdd230/";
const linksURL = "https://noah-2299.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
  }
  
  const displayLinks = (weeks) => {
    let table = document.getElementById('week-list');
    weeks.lessons.forEach((lesson) => {
      let tr = document.createElement('tr');
      let lesson_td = document.createElement('td');
      let links_td = document.createElement('td');
  
      lesson_td.textContent = `Lesson ${lesson.lesson}:`;
      tr.appendChild(lesson_td);
  
      lesson.links.forEach((link) => {
        let a = document.createElement('a');
        a.setAttribute('href', `${link.url}`);
        a.textContent = `${link.title}`;
        let span_start = document.createElement('span');
        span_start.textContent = '| ';
        let span_end = document.createElement('span');
        span_end.textContent = ' | ';
        links_td.appendChild(span_start);
        links_td.appendChild(a);
        links_td.appendChild(span_end);
      });
      tr.appendChild(links_td);
      table.appendChild(tr);
      
    });
  };    

        
        

        // !!!!!!!!!!!!!!!!! THIS IS FROM PROPHETS FOR REFERNCE WHEN BUILDING!!!!!!!!!!!!!
        // let c = document.createElement('section');
        // let fullName = document.createElement('__'); 
        // let portrait = document.createElement('img');
    
        
        // fullName.textContent = `${prophet._____} ____________`; 
        
        // portrait.setAttribute('src', prophet.imageurl);
        // portrait.setAttribute('alt', `Portrait of ${prophet.____} ______________`);
        // portrait.setAttribute('loading', 'lazy');
        // portrait.setAttribute('width', '340');
        // portrait.setAttribute('height', '440');
    
       
        // card.appendChild(_______); 
        // card.appendChild(portrait);
    
        // cards.appendChild(card);
        // !!!!!!!!!!!!!!!!! THIS IS FROM PROPHETS FOR REFERNCE WHEN BUILDING!!!!!!!!!!!!!
      
   
  
  getLinks();