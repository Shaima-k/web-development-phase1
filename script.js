function focusevent() {
    document.getElementById("input1").style.background = "#17A2B8";
}

function clickevent() {
    document.getElementById("input-h").style.color = "#17A2B8";
}
ClassicEditor
    .create(document.querySelector('#body'), {
        toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'uploadImage'],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    })
    .catch(error => {
        console.log(error);
    });