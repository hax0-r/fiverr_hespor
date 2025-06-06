// loader

async function fetchData() {
  const loader = document.getElementById('loader');
  loader.style.display = 'flex'; // Show loader

  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // render your data here
  } catch (error) {
    console.error("Error loading data:", error);
  } finally {
    loader.style.display = 'none'; // Hide loader
  }
}

// Call the function on load
window.addEventListener('load', fetchData);

const lenis = new Lenis({
  autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-10 cursor-pointer z-40 bg-[#012929] h-10 fixed bottom-5 right-5 hover:opacity-80 transition-all duration-500 hidden text-zinc-100 flex border border-zinc-300 items-center justify-center rounded-lg "><i class="fa-solid fa-angle-up"></i>
</div>`

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.querySelector(".bottomToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// JavaScript to play/pause on hover
document.querySelectorAll('.group').forEach((card) => {
  const video = card.querySelector('video');
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Reset to start
  });
});

AOS.init({
  once: true,
  duration: 1000
});