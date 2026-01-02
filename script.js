const institutes = [
    
    {
        name: "T4TEQ",
        category: "software",
        details: "Courses Avalialbe: Python, Data Science, Power BI",
        address: "Multiple locations: #5, All Saints Complex, Puthur High Road, Puthur, Tiruchirappalli, Tamil Nadu 620017. ---AND---Address 2: C35, 1st Floor, 5th Cross, North East Extn., Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018; Navaladiyan Arcade, Oil Mill Bus Stop, Pappakurichi Kattur, Tiruchirappalli, Tamil Nadu 620019., India", 
        images: [
            "images/t4teq1.jpg",
            "images/t4teq2.jpg"
        ]
    },
    {
        name: "Greens Technology",
        category: "software",
        details: "Courses Available: Java, Python, Full Stack",
        address: "No 75E/3, 2nd Floor, Salai Road, Thillai Nagar Main Road, Tiruchirappalli, Tamil Nadu 620018, India.",
        images: [
            "images/greens1.jpeg",
            "images/greens2.jpg"
        ]
    },
    {
        name: "Livewire Trichy",
        category: "software",
        details: "IT & Software Training",
        address: "2nd Floor, Rangaa Complex, No.1C, Old Karur Road, Melachinthamani, Tiruchirappalli, Tamil Nadu 620002, India.",
        images: [
            "images/livewire1.png"
        ]
    },
    { 
        name: "SYSTECH", 
        category: "software", 
        details: "Courses Available: CCNA, Ethical Hacking, Data Science",
        address: "129 Aruvi Block, St. Paul’s Complex, Bharathiar Salai, Cantonment, Tiruchirappalli, Tamil Nadu 620001, India.",
        images: [
            "images/systech1.jpg",
            "images/systech2.jpg"
        ] 
    },
    { 
        name: "DOT Institute", category: "technical", details: "AutoCAD & Design Courses",address:  "12A, 3rd Floor, Periyasamy Tower, near Chathiram Bus Stand, Trichy - 620002.",
    images:["images/dot1.webp","images/dot2.avif"] },
    { name: "Techie Training & Inspections", category: "technical", details: "NDT & Inspection" ,address: "Om Sakthi Complex, Old Karur Road, Mela Chinthamani, Chinnakadai Street, Trichy - 620002.",images:["images/tech1.jpg","images/tech2.avif"]},
    { name: "Decibel Institute of Electronics", category: "technical", details: "Electronics Training",address:"23C, Ground Floor, Chola Towers, Anna Salai, near Chathiram Bus Stand, opposite E.R. Higher Secondary School, East Chinthamani, Tiruchirappalli, Tamil Nadu 620002.",images:["images/deci1.jpg"] },
    { name: "Don Bosco Tech ITI", category: "iti", details: "Industrial Skill Training",address:"3/121, Karunya Nagar Road, Manikandam, Trichy - 620012.",images:["images/donb1.jpg"] },
    { name: "Kamaraj Private ITI", category: "iti", details: "Trade & Vocational Training",address:"Siruganur (Post), Lalgudi Taluk, Tiruchirappalli, Tamil Nadu - 621105." },
    { name: "Sri Rajiv Gandhi Private ITI", category: "iti", details: "Industrial Courses" ,address:"1/62, 64, Double Street, Agaraharam, Kezha Valadi, Lalgudi, Tiruchirappalli, Tamil Nadu 621218.",images:"images/rajiv1.jpeg"},
    { name: "VETA Spoken English", category: "other", details: "Spoken English & Communication",address:"Old No 85/A New No 10 A, Williams Road (near Sona Meena Theater, Trichy 01." },
    { name: "Image Creative Education", category: "other", details: "Photography & Media Training",address:" Chinnakadai Street, Trichy.",image:"images/image1.avif" },
{
    name: "Sri Ragavendra Typewriting Institute",
    category: "other",
    details: "English & Tamil Typewriting, Exam Preparation",
    address: "Vinayaga Nagar, 15/4, 1st Street, IOB Nagar, Karumandapam, Tiruchirappalli, Tamil Nadu 620001"
},
{
    name: "Kavin Typewriting Institute",
    category: "other",
    details: "Typewriting & Typing Skill Training",
    images:["kav1.jpeg"],
    address: "12A, New Reddy Street, New Raja Colony, Bhima Nagar, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001"
},
{
    name: "Emily Technical Institute",
    category: "other",
    details: "Typewriting & Technical Skill Training",
    images:["emi1.jpeg","emi2.jpeg"],
    address: "No. A23, Kajamian School Complex, TVS Toll Gate Road, Near JMC Gate, Kaja Nagar, Tiruchirappalli, Tamil Nadu 620020."
},
{
    name: "Vijay Typewriting Institute",
    category: "other",
    details: "English & Tamil Typewriting",
    images:[""],
    address: "Williams Road, Melapudur, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001"
},
{
    name: "Bharathi Typewriting Institute",
    category: "other",
    details: "Typewriting & Office Skill Training",
    images:["bh1.jpeg","bh2.jpeg"],
    address: "2nd Floor, AB Complex, Vayalur Road, Srinivasa Nagar North, Tiruchirappalli, Tamil Nadu 620017"
},
{
    name: "Sri Typewriting Institute",
    category: "other",
    details: "Typewriting & Skill Development",
    images:["sri1.jpeg"],
    address: "No. 39H1, Opposite Bismi Furniture, Madurai Main Road, Edamalaipattipudur, Tiruchirappalli, Tamil Nadu 620012"
},
{
    name: "Azad Typewriting Institute",
    category: "other",
    details: "Typewriting & Typing Practice",
    images:["az1.jpeg","az2.jpeg"],
    address: "Palakarai Area, Tiruchirappalli, Tamil Nadu"
},
{
    name: "Trichy Commercial College",
    category: "other",
    details: "Typewriting, Commerce & Office Skills",
    images:["ttc1.jpeg"],
    address: "Tiruchirappalli, Tamil Nadu"
},
{
    name: "Sri Meenakshi Technical Institute",
    category: "other",
    details: "Typing & Technical Skills Training",
    images:["min1.jpeg"],
    address: "50, Nachiyar Rd, near Police Station Bus Stop, Woraiyur, Tiruchirappalli, Tamil Nadu 620003"
},
{
    name: "J.G. Naidu Technical Institute",
    category: "other",
    details: "Typing Services & Skill Development",
    images:["jg1.jpeg"],
    address: "3/2, 23, Indira Street, Golden Rock, K Ambikapuram, Ponmalai, Tiruchirappalli, Tamil Nadu 620010"
},
{
    name: "Tharini Typewriting Institute",
    category: "other",
    details: "Typewriting Coaching & Typing",
    images:["thar1.jpeg"],
    address: "12, Kovalan Street, near Loco Shed, M.R. Radha Colony, Senthaneerpuram, Ariyamangalam, Tiruchirappalli, Tamil Nadu 620004"
},
{
    name: "Sujaa Typewriting Institute",
    category: "other",
    details: "Typing Classes & Typewriting",images:["suj1.jpeg"],
    address: "37, Hirudayapuram, Palakarai, Tiruchirappalli, Tamil Nadu 620001"
},
{
    name: "Sri Ganesh Typewriting Institute",
    category: "other",
    details: "Typewriting Classes",images:[""],
    address: "Princy Complex, near Ellaalikalamman Kovil, Srinivasa Nagar West, Edamalaipatti Pudur, Tiruchirappalli, Tamil Nadu 620012"
},
{
    name: "Sri Jaya Typewriting Institute",
    category: "other",
    details: "Typewriting & Learning Center",images:["jaya1.jpeg"],
    address: "No.7, Heber Rd, Bhima Nagar, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001"
},
{
    name: "Sri Vidhya Institute of Commerce",
    category: "other",
    details: "Typing Services & Commerce Skills",images:[""],
    address: "No.17/D, Gandhi Rd, Srirangam, Tiruchirappalli, Tamil Nadu 620006"
},
{
    name: "Vinayaga Technical Institute",
    category: "other",
    details: "Typewriting, Shorthand & Computer Classes",images:[""],
    address: "328/2, North Pillaiyar Kovil Street, Venugopal Nagar, North Kattur, Tiruchirappalli, Tamil Nadu 620019"
},
{
    name: "Tharanginee Typewriting Institute",
    category: "other",
    details: "Typewriting Coaching",images:[""],
    address: "4th Street, Amman Nagar, Pappakurichi Kattur, Agaram, Tiruchirappalli, Tamil Nadu 620019"
},
{
    name: "Ahila Typewriting Institute",
    category: "other",
    details: "Typewriting & Learning Center",images:[""],
    address: "108, Mariamman Kovil St, Melapudur, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001"
},
{
    name: "Sharmila's Coaching Classes – Handwriting/Phonetics",
    category: "other",
    details: "Handwriting & Phonetics Improvement",images:[""],
    address: "No. A3, 14/13 First Main Rd, Ramlinga Nagar, Woraiyur, Tiruchirappalli, Tamil Nadu 620003"
},
{
    name: "Dheepsha Handwriting",
    category: "other",
    details: "Handwriting Improvement",images:[""],
    address: "TA The Woods Apartment, Sivaprakasam Salai, Anna Nagar, Tennur, Tiruchirappalli, Tamil Nadu 620017"
}

];

const instituteList = document.getElementById("instituteList");

function displayInstitutes(data) {
    instituteList.innerHTML = "";
    data.forEach(inst => {
        instituteList.innerHTML += `
            <div class="card">
                <h3 onclick="showModal(event, '${inst.name}')">${inst.name}</h3>
                <p>${inst.details}</p>
                <small>Category: ${inst.category.toUpperCase()}</small>
            </div>
        `;
    });
}


// Modal functions
function showModal(event, name) {
    event.stopPropagation(); // ✅ IMPORTANT

    const inst = institutes.find(i => i.name === name);

    document.getElementById("modalName").textContent = inst.name;
    document.getElementById("modalDetails").textContent = inst.details;
    document.getElementById("modalCategory").textContent =
        "Category: " + inst.category.toUpperCase();

    document.getElementById("modalAddress").textContent =
        inst.address ? "Address:📍" + inst.address : "Address: Not Available";

    let imagesHtml = "";
    if (Array.isArray(inst.images)) {
        inst.images.forEach(img => {
            imagesHtml += `<img src="${img}" class="modal-image">`;
        });
    }

    document.getElementById("modalImages").innerHTML = imagesHtml;
    document.getElementById("modal").style.display = "block";
}
function closeModal(event) {
    if (event) event.stopPropagation();
    document.getElementById("modal").style.display = "none";
}
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};




function filterInstitutes(category) {
    if (category === "all") {
        displayInstitutes(institutes);
    } else {
        const filtered = institutes.filter(i => i.category === category);
        displayInstitutes(filtered);
    }
}

// Load all institutes on page load
displayInstitutes(institutes);

function searchInstitutes() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = institutes.filter(i =>
        i.name.toLowerCase().includes(query) ||
        i.details.toLowerCase().includes(query) ||
        i.category.toLowerCase().includes(query)
    );
    displayInstitutes(filtered);
}
