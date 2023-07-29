const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("notes");

const className = [
    "p-4",
    "rounded-lg",
    "box-border",
    "shadow-md",
    "border-none",
    "outline-none",
    "bg-customDarkGrey",
    "resize-none",
    "placeholder:opacity-60",
    "text-customWhite",
    "focus:shadow-md",
    "text-lg",
    "text-sm",
    "md:text-xl",
    "hover:shadow-xl",
    "duration-200",
    "h-[200px]",
    "md:h-[300px]",
];

const addNote = () => {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 10000),
        content: "",
    };

    const noteEl = createNote(noteObj.id, noteObj.content);
    containerEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);
    saveNotes(notes);
};

const createNote = (id, content) => {
    const element = document.createElement("textarea");

    className.forEach((item) => {
        element.classList.add(`${item}`);
    });

    console.log(element);
    element.rows = 10;
    element.cols = 20;
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete the note");
        if (warning) {
            delteNote(id, element);
        }
    });

    element.addEventListener("input", () => {
        updateNote(id, element.value);
    });

    return element;
};

const delteNote = (id, element) => {
    const notes = getNotes().filter((note) => note.id !== id);
    saveNotes(notes);
    containerEl.removeChild(element);
};

const updateNote = (id, content) => {
    const notes = getNotes();
    const target = notes.filter((note) => note.id === id)[0];
    target.content = content;
    saveNotes(notes);
};

btnEl.addEventListener("click", addNote);

/* Local Stroage Function */

const saveNotes = (notes) => {
    localStorage.setItem("note-app", JSON.stringify(notes));
};

const getNotes = () => {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
};

getNotes().forEach((note) => {
    const noteEl = createNote(note.id, note.content);
    containerEl.insertBefore(noteEl, btnEl);
});
