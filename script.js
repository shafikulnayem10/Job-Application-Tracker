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


}
