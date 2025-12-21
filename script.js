const institutes = [
    
    {
        name: "T4TEQ",
        category: "software",
        details: "Python, Data Science, Power BI",
        images: [
            "images/t4teq1.jpg",
            "images/t4teq2.jpg"
        ]
    },
    {
        name: "Greens Technology",
        category: "software",
        details: "Java, Python, Full Stack",
        images: [
            "images/greens1.jpeg",
            "images/greens2.jpg"
        ]
    },
    {
        name: "Livewire Trichy",
        category: "software",
        details: "IT & Software Training",
        images: [
            "images/livewire1.png"
        ]
    },

    { 
        name: "SYSTECH", category: "software", details: "CCNA, Ethical Hacking, Data Science",
    images: ["images/systech1.jpg",
        "images/systech2.jpg"
    ] 

    },
    { 
        name: "DOT Institute", category: "technical", details: "AutoCAD & Design Courses",
    images:["images/dot1.webp","images/dot2.avif"] },
    { name: "Techie Training & Inspections", category: "technical", details: "NDT & Inspection" ,images:["images/tech1.jpg","images/tech2.avif"]},
    { name: "Decibel Institute of Electronics", category: "technical", details: "Electronics Training",images:["images/deci1.jpg"] },
    { name: "Don Bosco Tech ITI", category: "iti", details: "Industrial Skill Training",images:["images/donb1.jpg"] },
    { name: "Kamaraj Private ITI", category: "iti", details: "Trade & Vocational Training" },
    { name: "Sri Rajiv Gandhi Private ITI", category: "iti", details: "Industrial Courses" ,images:"images/rajiv1.jpeg"},
    { name: "VETA Spoken English", category: "other", details: "Spoken English & Communication" },
    { name: "Image Creative Education", category: "other", details: "Photography & Media Training",image:"images/image1.avif" }
];

const instituteList = document.getElementById("instituteList");

function displayInstitutes(data) {
    instituteList.innerHTML = "";
    data.forEach(inst => {
        instituteList.innerHTML += `
            <div class="card">
                <h3 onclick="showModal('${inst.name}')">${inst.name}</h3>
                <p>${inst.details}</p>
                <small>Category: ${inst.category.toUpperCase()}</small>
            </div>
        `;
    });
}

// Modal functions
function showModal(name) {
    const inst = institutes.find(i => i.name === name);
    document.getElementById("modalName").textContent = inst.name;
    document.getElementById("modalDetails").textContent = inst.details;
    document.getElementById("modalCategory").textContent = "Category: " + inst.category.toUpperCase();

    // Images
    const modal = document.getElementById("modal");
    let imagesHtml = "";
    if (inst.images && inst.images.length > 0) {
        inst.images.forEach(img => {
            imagesHtml += `<img src="${img}" class="modal-image">`;
        });
    }
    document.getElementById("modalImages").innerHTML = imagesHtml;

    modal.style.display = "block";
}


function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}


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
