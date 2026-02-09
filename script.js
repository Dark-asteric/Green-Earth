// const createElements = (arr) => {
//     const htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);

// }

const loading = (status) => {
    if(status == true){
        document.getElementById("loading").classList.remove("hidden");
        document.getElementById("all-trees").classList.add("hidden");
    }
    else{
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("all-trees").classList.remove("hidden");
    }
}

const loadAllTrees = () => {
    loading(true);
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => {
        const clickbtn = document.getElementById(`category-btn-0`);
        console.log(clickbtn);
        removeActive();
        clickbtn.classList.add("active");
        displayAllTrees(data.plants);
    }
    )
};

const displayAllTrees = (trees) => {
    console.log(trees);
    const treesContainer = document.getElementById("all-trees");
    treesContainer.innerHTML = "";
    trees.forEach(tree => {
        const treeDiv = document.createElement("div");
        treeDiv.innerHTML = `
            <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                <img src="${tree.image}" class="h-38 w-full bg-gray-200 rounded-lg mb-3"></img>
                <h3 class="font-bold text-sm text-gray-800" onclick="loadTreeDetails(${tree.id})">${tree.name}</h3>
                <p class="text-[10px] text-gray-500 mt-1 leading-tight mb-3">
                    ${tree.description}
                </p>
                <div class="flex items-center justify-between mt-auto mb-3">
                    <span class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">${tree.category}</span>
                    <span class="font-bold text-sm">৳${tree.price}</span>
                </div>
                <button onclick="loadToCart(${tree.id})" class="w-full cursor-pointer bg-green-700 hover:bg-green-800 text-white text-xs font-bold py-2 rounded-full transition-colors">
                    Add to Cart
                </button>
            </div>
        `;
        treesContainer.appendChild(treeDiv);
    });
    loading(false);
};

const loadTreeDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const res = await fetch(url)
    const data = await res.json();
    displayTreeDetails(data.plants);
}

const displayTreeDetails = (plant) => {
    const showDetails = document.getElementById("show-details");
    showDetails.innerHTML = `
            <h1 class="font-bold text-600 text-lg mb-4">${plant.name}</h1>
            <img src="${plant.image}" alt="" class="rounded-lg w-full object-cover mb-4 max-h-[250px]">
            <div class="space-y-2">
                <p><span class="font-bold text-md">Category : </span>${plant.category}</p>
                <p><span class="font-bold text-md">Price : </span>$${plant.price}</p>
                <p><span class="font-bold text-md">Description : </span>${plant.description}</p>
            </div>
        `;
    document.getElementById("my_modal_5").showModal();
}

const allCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
};
const displayCategory = (category) => {
    console.log(category);
    const allCategory = document.getElementById("allCategory");
    allCategory.innerHTML = "";
    category.forEach(cat => {
        const catDiv = document.createElement("div");
        catDiv.innerHTML = `
            <button id="category-btn${cat.id}" onclick="loadByCategory(${cat.id})" class="category-btn cursor-pointer block p-2 text-[#1F2937] text-lg hover:bg-green-700 hover:text-white rounded-md">${cat.category_name}</button> 
        `;
        allCategory.appendChild(catDiv);
    });
}

const removeActive = () =>{
    const categoryButtons = document.querySelectorAll(".category-btn");
    console.log(categoryButtons);
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
}

const loadByCategory = (id) =>{
    loading(true);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const clickbtn = document.getElementById(`category-btn${id}`);
        console.log(clickbtn);
        removeActive();
        clickbtn.classList.add("active");
        displayByCategory(data.plants)
    }
    );
    
}

const displayByCategory = (plants) =>{
    const treesByCategory = document.getElementById("all-trees");
    treesByCategory.innerHTML = "";
    plants.forEach(plant => {
        const treesDiv = document.createElement("div");
        treesDiv.innerHTML = `
            <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                <img src="${plant.image}" class="h-38 w-full bg-gray-200 rounded-lg mb-3"></img>
                <h3 class="font-bold text-sm text-gray-800" onclick="loadTreeDetails(${plant.id})">${plant.name}</h3>
                <p class="text-[10px] text-gray-500 mt-1 leading-tight mb-3">
                    ${plant.description}
                </p>
                <div class="flex items-center justify-between mt-auto mb-3">
                    <span class="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">${plant.category}</span>
                    <span class="font-bold text-sm">৳${plant.price}</span>
                </div>
                <button onclick="loadToCart(${plant.id})" class="w-full cursor-pointer bg-green-700 hover:bg-green-800 text-white text-xs font-bold py-2 rounded-full transition-colors">
                    Add to Cart
                </button>
            </div>
        `;
        treesByCategory.appendChild(treesDiv);
    });
    loading(false);
}
const loadToCart = (id) =>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => addToCart(data.plants));
}

// let listItems = [];
// let sum = 0;
// let itemsPrice = [];
// const addToCart = (plant) => {
//     const addCart = document.getElementById("cart");
//     const cartDiv = document.createElement("div");
//     // Optional: Added a class for spacing between items
//     cartDiv.classList.add("flex", "justify-between", "items-center", "text-sm", "bg-[#DCFCE770]", "space-y-3", "p-5","mb-3"); 
//     listItems.push(plant.id);
//     itemsPrice.push(plant.price);
//     let count = listItems.filter(price => price === plant.id).length;
//     const totalPrice = itemsPrice.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
//     console.log(count);
//     // if(count > 1){
//     //     addCart.innerHTML = "";
//     // }
//     cartDiv.innerHTML = `
//         <div>
//             <p class="text-[#1F2937] font-semibold text-[15px] mb-2">${plant.name}</p>
//             <p class="text-gray-500 text-lg">৳${plant.price*count} x ${count}</p>
//         </div>
//         <button onclick="removeItem(${plant})" class="text-gray-400 hover:text-red-500 text-lg cursor-pointer">X</button>
//     `;
//     const total = document.getElementById("total");
//     total.innerHTML = "";
//     const totalDiv = document.createElement("div");
//     totalDiv.innerHTML = `
//         <div class="border-t border-gray-300 my-6"></div>
//         <div class="flex justify-between items-center font-bold text-gray-800">
//             <span>Total:</span>
//             <span id="total">৳${totalPrice}</span>
//         </div>
//     `;
//     total.appendChild(totalDiv);
//     addCart.appendChild(cartDiv);
// }

// const removeItem = (plant) => {

// }

let cart = [];

const addToCart = (plant) => {
    const existingItem = cart.find(item => item.id === plant.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...plant, quantity: 1 });
    }

    renderCart();
}

const removeItem = (id) => {
    const itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    
    renderCart();
};

const renderCart = () => {
    const addCart = document.getElementById("cart");
    const totalContainer = document.getElementById("total");
    addCart.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        const cartDiv = document.createElement("div");
        cartDiv.classList.add("flex", "justify-between", "items-center", "text-sm", "bg-[#DCFCE770]", "p-5", "mb-3");
        cartDiv.innerHTML = `
            <div>
                <p class="text-[#1F2937] font-semibold text-[15px] mb-2">${item.name}</p>
                <p class="text-gray-500 text-lg">৳${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeItem(${item.id})" class="text-gray-400 hover:text-red-500 text-lg cursor-pointer font-bold">X</button>
        `;
        addCart.appendChild(cartDiv);
    });
    totalContainer.innerHTML = `
        <div class="border-t border-gray-300 my-6"></div>
        <div class="flex justify-between items-center font-bold text-gray-800">
            <span>Total:</span>
            <span>৳${totalPrice}</span>
        </div>
    `;
}
allCategory();
loadAllTrees();