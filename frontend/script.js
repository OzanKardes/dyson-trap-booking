const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault() // stops the page refreshing

    const booking = {
        room: form[0].value,
        date: form[1].value,
        startTime: form[2].value,
        endTime: form[3].value,
        notes: form[4].value
    }

    console.log('Booking submitted:', booking)
    alert('Booking submitted! Thank you.')
    form.reset()
})