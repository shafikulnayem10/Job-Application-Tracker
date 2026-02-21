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

//count total jobs
function calculateCount() {
    const totalJobs = allCardSection.children.length;

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

   const buttons = document.querySelectorAll('button');

   for (const btn of buttons) {
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('bg-gray-300');
    }

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300');
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

function renderList(list) {
    filterSection.classList.remove('hidden');
    filterSection.innerHTML = '<h1 >hello</h1>';
}

mainContainer.addEventListener('click', function (event) {

    
    const card = event.target.closest('.card');
    if (!card){
        return;
    }
    
    const company = card.querySelector('.company').innerText;
    const position = card.querySelector('.position').innerText;
    const salary = card.querySelector('.salary').innerText;

    if (event.target.classList.contains('interview-btn')) {

        
        card.querySelector('.status').innerText = "Interview";

       
        const alreadyExist = interviewList.find(job => job.company === company);

        if (!alreadyExist) {
            interviewList.push({
                company: company,
                position: position,
                salary: salary,
                status: "Interview"
            });
        }

        rejectedList = rejectedList.filter(job => job.company !== company);

        calculateCount();
    }


   
    else if (event.target.classList.contains('rejected-btn')) {

        card.querySelector('.status').innerText = "Rejected";

        const alreadyExist = rejectedList.find(job => job.company === company);

        if (!alreadyExist) {
            rejectedList.push({
                company: company,
                position: position,
                salary: salary,
                status: "Rejected"
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
    filterSection.classList.remove('hidden');
    filterSection.innerHTML = '<h1 >hello</h1>';
}
