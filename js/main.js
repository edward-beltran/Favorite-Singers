"use strict";

/*
    This array is the JSON-style JavaScript data.

    The entire array is an array of objects.
    Each set of curly braces represents one singer object.
*/
const singers = [
    {
        name: "Shakira",
        popularSong: "Hips Don't Lie",
        dateOfBirth: "February 2, 1977",
        hometown: "Barranquilla, Colombia",
        genre: "Latin Pop",
        image: "images/shakira.jpg",
        imagePosition: "center"
    },
    {
        name: "Karol G",
        popularSong: "Si Antes Te Hubiera Conocido",
        dateOfBirth: "February 14, 1991",
        hometown: "Medellín, Colombia",
        genre: "Reggaeton",
        image: "images/karolG.jpg",
        imagePosition: "center"
    },
    {
        name: "Selena Quintanilla",
        popularSong: "Como La Flor",
        dateOfBirth: "April 16, 1971",
        hometown: "Lake Jackson, Texas",
        genre: "Tejano",
        image: "images/selena.jpg",
        imagePosition: "center"
    },
    {
        name: "Gloria Estefan",
        popularSong: "Conga",
        dateOfBirth: "September 1, 1957",
        hometown: "Havana, Cuba",
        genre: "Latin Pop",
        image: "images/GloriaEstefan.jpg",
        imagePosition: "center"
    }
];

/*
    Locate the HTML elements where the singer information
    will be inserted.
*/
const singerGallery = document.querySelector("#singerGallery");
const singerTableBody = document.querySelector("#singerTableBody");

/*
    Create the four photo cards.

    col-6 means each card occupies six of Bootstrap's
    twelve grid units.

    Two col-6 elements fit on each row:
    6 + 6 = 12.
*/
function displaySingerGallery() {
    singerGallery.innerHTML = "";

    singers.forEach(function (singer) {
        const singerColumn = document.createElement("div");

        /*
            col-6 is the main change that creates the 2 × 2 layout.
        */
        singerColumn.className = "col-6 singer-column";

        singerColumn.innerHTML = `
            <article class="singer-card">
                <img
                    src="${singer.image}"
                    alt="${singer.name}"
                    class="singer-image"
                    style="object-position: ${singer.imagePosition};"
                >

                <p class="singer-name">
                    ${singer.name}
                </p>
            </article>
        `;

        singerGallery.appendChild(singerColumn);
    });
}

/* Create the table rows from the same singer data */
function displaySingerTable() {
    singerTableBody.innerHTML = "";

    singers.forEach(function (singer) {
        const tableRow = document.createElement("tr");

        tableRow.innerHTML = `
            <th scope="row">
                ${singer.name}
            </th>

            <td>
                ${singer.popularSong}
            </td>

            <td>
                ${singer.dateOfBirth}
            </td>

            <td>
                ${singer.hometown}
            </td>

            <td>
                <span class="badge text-bg-primary genre-badge">
                    ${singer.genre}
                </span>
            </td>
        `;

        singerTableBody.appendChild(tableRow);
    });
}

/*
    Run both functions after the HTML page has finished loading.
*/
document.addEventListener("DOMContentLoaded", function () {
    displaySingerGallery();
    displaySingerTable();
});