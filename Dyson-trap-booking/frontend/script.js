const form = document.querySelector('form')
const tableBody = document.querySelector('tbody')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const booking = {
        room: form[0].value,
        date: form[1].value,
        startTime: form[2].value,
        endTime: form[3].value,
        notes: form[4].value
    }

    // Add a new row to the table
    const row = document.createElement('tr')
    row.innerHTML = `
        <td>${booking.room}</td>
        <td>${booking.date}</td>
        <td>${booking.startTime}</td>
        <td>${booking.endTime}</td>
        <td>${booking.notes}</td>
    `
    tableBody.appendChild(row)

    alert('Booking submitted! Thank you.')
    form.reset()
})