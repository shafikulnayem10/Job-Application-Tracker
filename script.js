let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';
let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let sectionCount = document.getElementById('sectionCount');
let allCardSection = document.getElementById('allCards');
let filterSection = document.getElementById('filtered-section');
let mainContainer = document.querySelector('main');


function calculateCount() {
    let totalJobs = allCardSection.children.length;

    total.innerText = totalJobs;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (currentStatus === 'all-filter-btn') {
        sectionCount.innerText = `${totalJobs} jobs`;
    }
    else if (currentStatus === 'interview-filter-btn') {
        sectionCount.innerText = `${interviewList.length} of ${totalJobs} jobs`;
    }
    else if (currentStatus === 'rejected-filter-btn') {
        sectionCount.innerText = `${rejectedList.length} of ${totalJobs} jobs`;
    }
}

calculateCount();

function toggleStyle(id) {

   let buttons = document.querySelectorAll('#filter-buttons button');

   for (let btn of buttons) {
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('bg-zinc-50', 'text-black');
    }

    const selected = document.getElementById(id);
    selected.classList.remove('bg-zinc-50', 'text-black');
    selected.classList.add('bg-blue-600','text-white');
     currentStatus = id;

    if (id === 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        calculateCount();
    }
    else if (id === 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        renderList(interviewList);
    }
    else if (id === 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        renderList(rejectedList);
    }


}



mainContainer.addEventListener('click', function (event) {

    
    const card = event.target.closest('.card');
    if (!card){
        return;
    }
    
    const company = card.querySelector('.company').innerText;
    const position = card.querySelector('.position').innerText;
    const salary = card.querySelector('.salary').innerText;
    const location = card.querySelector('.location').innerText;
    const type = card.querySelector('.type').innerText;
    const description = card.querySelector('.description').innerText;
   

    if (event.target.classList.contains('interview-btn')) {

        
        
       card.querySelector('.status').innerText = "Interview";

        const allCards = allCardSection.querySelectorAll('.card');

      for (const c of allCards) {
        const cCompany = c.querySelector('.company').innerText;
        if (cCompany === company) {
        c.querySelector('.status').innerText = "Interview";
          }
      }

       
        const alreadyExist = interviewList.find(job => job.company === company);

        if (!alreadyExist) {
            interviewList.push({
                company: company,
                position: position,
                salary: salary,
                status: "Interview",
                location: location,
                type: type,
                description: description
            });
        }

        rejectedList = rejectedList.filter(job => job.company !== company);

        calculateCount();
    }


   
    else if (event.target.classList.contains('rejected-btn')) {

        
      card.querySelector('.status').innerText = "Rejected";


      const allCards = allCardSection.querySelectorAll('.card');

      for (let  c of allCards) {
         let Comp = c.querySelector('.company').innerText;
           if (Comp === company) {
             c.querySelector('.status').innerText = "Rejected";
            }
    }

        const alreadyExist = rejectedList.find(job => job.company === company);

        if (!alreadyExist) {
            rejectedList.push({
                company: company,
                position: position,
                salary: salary,
                status: "Rejected",
                location: location,
                type: type,
                description: description
            });
        }

        interviewList = interviewList.filter(job => job.company !== company);

        calculateCount();
    }



    else if (event.target.classList.contains('btn-delete')) {

        
        interviewList = interviewList.filter(job => job.company !== company);
        rejectedList = rejectedList.filter(job => job.company !== company);

        card.remove();

        calculateCount();
    }


  
    if (currentStatus === 'interview-filter-btn') {
        renderList(interviewList);
    }

    if (currentStatus === 'rejected-filter-btn') {
        renderList(rejectedList);
    }

});
function renderList(list) {

    filterSection.innerHTML = '';

    if (list.length === 0) {
        filterSection.innerHTML = `
            <div class="text-center mt-20">
                <img class="mx-auto" src="./jobs.png" alt="No Jobs" width="100">
                <h2 class="text-xl font-bold mt-4">No Jobs Available</h2>
            </div>
        `;
    }
    else {
        for (const job of list) {

            let div = document.createElement('div');
            div.className = 'card flex justify-between p-6 bg-white rounded';

            div.innerHTML = `
             <div class="space-y-3">
            <div>
                <p class="company text-xl font-bold">${job.company}</p>
                <p class="position">${job.position}</p>
            </div>
            <div class="flex gap-3">
                <p class="location bg-gray-200 px-3">${job.location}</p>
                <p class="type bg-gray-200 px-3">${job.type}</p>
            </div>
            <p class="salary">${job.salary}</p>
             <div class=" bg-blue-400 d-inline-block px-3 py-1 rounded-full w-fit">
                 <p class="status  text-blue-900">${job.status}</p>
            </div>
            <p class="description">${job.description}</p>
            <div class="flex gap-4">
                 <button class="interview-btn bg-green-200 px-4 py-2 rounded-full">Interview</button>
                <button class="rejected-btn bg-red-200 px-4 py-2 rounded-full">Rejected</button>
            </div>
        </div>
         <button class="btn-delete bg-red-200 px-4 py-2 h-fit rounded-full">Delete</button>
            `;

            filterSection.appendChild(div);
        }
    }

    filterSection.classList.remove('hidden');
    calculateCount();
}
