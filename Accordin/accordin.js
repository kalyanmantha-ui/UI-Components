const items = document.querySelectorAll(".item");
const multiExpand = document.getElementById("multiExpand");

items.forEach((item) => {
    item.querySelector(".title").addEventListener("click", function () {
        const content = item.querySelector(".content");
        const icon = item.querySelector(".icon");

        if (content.style.display === "block") {
            // If already open, collapse it
            content.style.display = "none";
            icon.textContent = "🔽";
        } else {
            // If "Multiple Expansions" is unchecked, close all other items first
            if (!multiExpand.checked) {
                items.forEach((otherItem) => {
                    otherItem.querySelector(".content").style.display = "none";
                    otherItem.querySelector(".icon").textContent = "🔽";
                });
            }

            // Expand the clicked item
            content.style.display = "block";
            icon.textContent = "🔼";
        }
    });
});
