let Data = [
    { Rank : 1 , CompanyName : 'Toyota' , Text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { Rank : 2 , CompanyName : 'Volkswagen' , Text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { Rank : 3 , CompanyName : 'Daimler' , Text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { Rank : 4 , CompanyName : 'Ford' , Text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { Rank : 5 , CompanyName : 'Honda' , Text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { Rank : 6 , CompanyName : 'Jeep' , Text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    { Rank : 7 , CompanyName : 'BMW' , Text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
]
// ForUITest
            // Data.forEach(function(Item){
            //     const elm = document.querySelector('#list');
            //     return elm.innerHTML += `
            //     <div class="L-Item" id="${Item.Rank}">
            //         <div class="LI-Head">
            //             <span class="LIH-Logo">${Item.Rank}</span>
            //             <img src="./Source/${Item.CompanyName}.png" alt="${Item.CompanyName}">
            //         </div>
            //         <div class="LI-Content">
            //             <span class="LIC-CName">${Item.CompanyName}</span>
            //             <p>${Item.Text}</p>
            //         </div>
            //     </div>
            //     `;
            // });
new Draggable({
    Element : document.querySelector('#list') ,
    List : Data ,
    Template: (item) => {
        return `
        <div class="L-Item" id="${item.Rank}">
            <div class="LI-Head">
                <span class="LIH-Logo">${item.Rank}</span>
                <img src="./Source/${item.CompanyName}.png" alt="${item.CompanyName}">
            </div>
            <div class="LI-Content">
                <span class="LIC-CName">${item.CompanyName}</span>
                <p>${item.Text}</p>
            </div>
        </div>
        `
    },
    UpDate : (List) => {
    }
})