
function showMap(city) {
    // Удаление класса active у всех элементов contact
    const contacts = document.querySelectorAll('.contact');
    contacts.forEach(contact => contact.classList.remove('active'));
  
    // Добавление класса active к выбранному элементу
    const selectedContact = document.getElementById('contact' + city);
    if (selectedContact) {
        selectedContact.classList.add('active');
    }
  
    // Отображение карты для выбранного города
    const map = document.getElementById('map');
    if (city === 'Omsk') {
        map.innerHTML = '<iframe src="https://maps.google.com/maps?q=55.034,73.35&z=15&output=embed" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>';
    } else if (city === 'Moscow') {
        map.innerHTML = '<iframe src="https://maps.google.com/maps?q=55.708,37.655&z=15&output=embed" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>';
    }
}
